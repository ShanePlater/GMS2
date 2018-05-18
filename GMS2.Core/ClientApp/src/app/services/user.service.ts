import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });
    public id = '';
    public token = '';

  constructor(private http: HttpClient) { }

  public register(user: User) {
    return this.http.post('api/account/register', user, { headers: this.headers, responseType: 'text', observe: 'response' });

  }

  public login(login: any) {
    return this.http.post('api/account/login', login, { headers: this.headers, responseType: 'text', observe: 'response' } );
  }

  public getDetails() {
    return this.http.get<User>('api/account/details', { headers: {Authorization: 'bearer ' + this.token} });
  }

  }

