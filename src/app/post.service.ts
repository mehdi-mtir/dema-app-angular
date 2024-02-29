import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPost } from './post';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts : IPost[] = [];
  postsUpdated = new Subject<IPost[]>();

  constructor(private http : HttpClient) { }

  /*getPosts() : Observable<IPost[]>{
    return this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts");
  }*/

  getPosts(){
    this.http.get<IPost[]>("https://jsonplaceholder.typicode.com/posts").subscribe(
      posts => {
        this.posts = posts;
        this.postsUpdated.next([...this.posts]);
      }
    )
  }


}
