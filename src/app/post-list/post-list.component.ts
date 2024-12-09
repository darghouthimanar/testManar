import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'; // Import du service
import { CommonModule } from '@angular/common'; // Import de CommonModule

interface Post {
  id: string;
  titre: string;
  contenu: string;
}

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  standalone: true, 
  imports: [CommonModule],  
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];  

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.posts = this.postService.getPosts();  
  }
}