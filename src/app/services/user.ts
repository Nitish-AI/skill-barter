import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class User {
  [x: string]: any;
  private userKey = 'skillBarterUser';
  private user: any = null;
  private baseUrl = 'http://localhost:8080/skill-barter'; //  backend base URL

  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined' && localStorage.getItem(this.userKey)) {
      this.user = JSON.parse(localStorage.getItem(this.userKey)!);
    }
  }

  // Local user storage
  setUser(userData: any) {
    this.user = userData;
    localStorage.setItem(this.userKey, JSON.stringify(userData));
  }

  getUser() {
    return this.user;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  clearUser() {
    this.user = null;
    localStorage.removeItem(this.userKey);
  }

  //Call /connect API
  checkConnection(): Observable<string> {
    return this.http.get(`${this.baseUrl}/connect`, { responseType: 'text' });
  }
}
