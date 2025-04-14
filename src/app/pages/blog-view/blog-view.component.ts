import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { BlogPost } from '../../models/Blog.model';
import { BlogPosts } from '../../data/blog-content';
import { BlogLayoutComponent } from "../../layouts/blog-layout/blog-layout.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
  imports: [BlogLayoutComponent, CommonModule, FormsModule, RouterModule]
})
export class BlogViewComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  notFound = false;
  linkCopied = false;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title,
    private metaService: Meta
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      this.fetchPost(slug);
    });
  }
  
  fetchPost(slug: string): void {
    // Find the post with the matching slug
    const foundPost = BlogPosts.find(post => post.slug === slug);
    
    if (foundPost) {
      this.post = foundPost;
      this.findRelatedPosts();
      this.updateMetaTags();
    } else {
      this.notFound = true;
      this.titleService.setTitle('Article Not Found - Developer Blog');
    }
  }
  
  findRelatedPosts(): void {
    if (!this.post) return;
    
    // Find posts with matching categories or tags
    this.relatedPosts = BlogPosts.filter(post => 
      post.id !== this.post!.id && (
        post.categories.some(category => this.post!.categories.includes(category)) ||
        post.tags.some(tag => this.post!.tags.includes(tag))
      )
    ).slice(0, 3); // Limit to 3 related posts
  }
  
  updateMetaTags(): void {
    if (!this.post) return;
    
    // Update page title and meta tags for SEO
    this.titleService.setTitle(`${this.post.title} - Developer Blog`);
    
    this.metaService.updateTag({
      name: 'description',
      content: this.post.summary
    });
    
    // Open Graph tags for social sharing
    this.metaService.updateTag({
      property: 'og:title',
      content: this.post.title
    });
    
    this.metaService.updateTag({
      property: 'og:description',
      content: this.post.summary
    });
    
    this.metaService.updateTag({
      property: 'og:image',
      content: this.post.imageSrc
    });
    
    // Twitter Card tags
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
  }
  
  copyLink(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopied = true;
      setTimeout(() => {
        this.linkCopied = false;
      }, 3000);
    });
  }
}