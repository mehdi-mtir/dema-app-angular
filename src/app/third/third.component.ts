import { Component, OnInit } from '@angular/core';
import { IPost } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
 
  posts : IPost[] = [];

  constructor(private service : PostService){}


  ngOnInit(): void {
    /*this.service.getPosts().subscribe(
      posts => this.posts = posts
    )*/
    this.service.postsUpdated.subscribe(
      posts => this.posts = posts
    );

    this.service.getPosts();
  }
}
