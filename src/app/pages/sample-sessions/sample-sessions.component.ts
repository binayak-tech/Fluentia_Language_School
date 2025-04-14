// sample-videos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LanguageVideo, LanguageFilter, LevelFilter } from '../../models/SampleSession.model';
import { SAMPLE_VIDEOS } from '../../data/sample-session-videos'; // Adjust the import path as necessary

@Component({
  selector: 'app-sample-sessions',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sample-sessions.component.html',
  styleUrls: ['./sample-sessions.component.scss']
})
export class SampleSessionsComponent implements OnInit {
  videos: LanguageVideo[] = [];
  filteredVideos: LanguageVideo[] = [];
  selectedVideo: LanguageVideo | null = null;
  
  languageFilter: LanguageFilter = 'All';
  levelFilter: LevelFilter = 'All';
  searchTerm: string = '';
  
  languages: LanguageFilter[] = ['All', 'English', 'French', 'German', 'Mandarin', 'Korean', 'Japanese'];
  levels: LevelFilter[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  
  constructor() {}
  
  ngOnInit(): void {
    this.videos = SAMPLE_VIDEOS;
    this.filteredVideos = [...this.videos];
    
    // Set the first video as selected by default
    if (this.filteredVideos.length > 0) {
      this.selectedVideo = this.filteredVideos[0];
    }
  }
  
  applyFilters(): void {
    this.filteredVideos = this.videos.filter(video => {
      // Apply language filter
      if (this.languageFilter !== 'All' && video.language !== this.languageFilter) {
        return false;
      }
      
      // Apply level filter
      if (this.levelFilter !== 'All' && video.level !== this.levelFilter) {
        return false;
      }
      
      // Apply search term filter
      if (this.searchTerm && !this.matchesSearchTerm(video)) {
        return false;
      }
      
      return true;
    });
    
    // Reset selected video if it's no longer in filtered results
    if (this.selectedVideo && !this.filteredVideos.find(v => v.id === this.selectedVideo?.id)) {
      this.selectedVideo = this.filteredVideos.length > 0 ? this.filteredVideos[0] : null;
    }
  }
  
  selectVideo(video: LanguageVideo): void {
    this.selectedVideo = video;
  }
  
  private matchesSearchTerm(video: LanguageVideo): boolean {
    const term = this.searchTerm.toLowerCase();
    return video.title.toLowerCase().includes(term) || 
           video.description.toLowerCase().includes(term) ||
           video.instructor.toLowerCase().includes(term);
  }
  
  resetFilters(): void {
    this.languageFilter = 'All';
    this.levelFilter = 'All';
    this.searchTerm = '';
    this.applyFilters();
  }
}