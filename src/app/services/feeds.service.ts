import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedsService {
  public feeds = [];
  
  constructor(private http: HttpClient) { }

  public getFeeds(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1&_page=1&_limit=3');
  }

  public postFeed(feedTitle: string, feedText: string): Observable<object> {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: feedTitle,
      body: feedText
    });
  }

  public putFeed(feedTitle: string, feedText: string, id: number): Observable<object> {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: feedTitle,
      body: feedText,
      userId: 1
    });
  }

  public deleteFeed(id: number): Observable<object> {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
