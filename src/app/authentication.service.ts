import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AppService} from './app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private service: AppService) {
  }

  authenticate(username, password) {
    const headers = new HttpHeaders({
      Authorization: ' Basic ' + btoa(username + ':' + password)
    });
    return this.http.get('http://localhost:8081/users/login', {headers}).pipe(
      map((data) => {
        this.service.isAdmin(data);
        localStorage.setItem('token', btoa(username + ':' + password));
      }));
  }

  signOut() {
    if (this.service.checkLogin()) {
      const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
      return this.http.get('http://localhost:8081/users/logout', {headers});
    }
  }

  signUp(user) {
    const url = 'http://localhost:8081/users/signup';
    return this.http.post(url, user);
  }
}
