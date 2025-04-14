import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { BlogPost } from '../../models/Blog.model';
import { BlogPosts } from '../../data/blog-content';
import { BlogLayoutComponent } from "../../layouts/blog-layout/blog-layout.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-listing',
  templateUrl: './blog-listing.component.html',
  styleUrls: ['./blog-listing.component.scss'],
  imports: [BlogLayoutComponent, CommonModule, RouterModule, FormsModule]
})
export class BlogListingComponent implements OnInit {
  blogPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  searchTerm = '';
  selectedCategory = '';
  uniqueCategories: string[] = [];
  
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}
  
  ngOnInit(): void {
    // Set page title and meta tags for SEO
    this.titleService.setTitle('Developer Blog - Latest Articles and Tutorials');
    this.metaService.updateTag({ 
      name: 'description', 
      content: 'Explore our collection of articles and tutorials on Angular, web development, and software engineering best practices.'
    });
    
    // Load blog posts
    this.blogPosts = BlogPosts;
    this.filteredPosts = [...this.blogPosts];
    
    // Extract unique categories
    const allCategories = this.blogPosts.flatMap(post => post.categories);
    this.uniqueCategories = Array.from(new Set(allCategories));
    
    // Initial sorting - newest first
    this.sortPostsByDate();
  }
  
  filterPosts(): void {
    this.filteredPosts = this.blogPosts.filter(post => {
      // Apply text search filter
      const searchMatch = this.searchTerm === '' || 
        post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase()));
      
      // Apply category filter if selected
      const categoryMatch = this.selectedCategory === '' || 
        post.categories.includes(this.selectedCategory);
      
      return searchMatch && categoryMatch;
    });
    
    this.sortPostsByDate();
  }
  
  filterByCategory(category: string): void {
    this.selectedCategory = category;
    this.filterPosts();
  }
  
  resetFilters(): void {
    this.searchTerm = '';
    this.selectedCategory = '';
    this.filteredPosts = [...this.blogPosts];
    this.sortPostsByDate();
  }
  
  private sortPostsByDate(): void {
    this.filteredPosts.sort((a, b) => {
      return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
    });
  }
}