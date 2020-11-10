import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public getUsers(user: string, pass: string): Observable<object> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', {
      username: user,
      password: pass
    });
  }
}
