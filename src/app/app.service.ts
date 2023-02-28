import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}
  getData() {
    let url = 'https://api.github.com/users';
    return this.http.get(url);
  }
}
