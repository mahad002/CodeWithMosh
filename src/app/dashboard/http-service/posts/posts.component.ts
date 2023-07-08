import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{

  posts?: any[];

  constructor(private service: PostsService) {}

  ngOnInit(): void {
   this.service.getAll() 
    .subscribe(posts => {
      this.posts =posts as any[];
    }); 
  }
  createPost(input: HTMLInputElement) {
    
    let post:any = { title: input.value };
    input.value = '';

    this.service.create(post)
    .subscribe({
      next: (response: any) => {
        post['id'] = response.id;
        this.posts?.splice(0, 0, post);
      }
    });
  }

  updatePost(post: any) {
    this.service.update(post)
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post: any) {
    this.service.delete(post.id)
    .subscribe({
      next: (response: any) => {
        console.log(response);
        let index = this.posts?.indexOf(post);
        this.posts?.splice(index!, 1);
      },
      error: (error: any) => {
        if (error.status === 404) {
          alert('This post has already been deleted.');
        } else throw  error;
      }
    });
  }
  

}
