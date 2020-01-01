import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(`${environment.base_api}/users?page=1`)
      .pipe(
        delay(1000),
        map(response => response['data'] as User[]));
  }

  getUserById(userId: string): Observable<User> {
    return this.http.get(`${environment.base_api}/users/${userId}`)
      .pipe(
        delay(1000),
        map(response => response['data'] as User));
  }
}
