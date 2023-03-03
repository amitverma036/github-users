import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUserProfile(username: string) {
    let url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }
}
