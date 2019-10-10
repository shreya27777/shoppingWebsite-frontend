import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  username;
  password;
  email;

  constructor(private  http: HttpClient, private router: Router) {
  }

  ngOnInit() {
  }

  Signupdata() {
    const url = 'http://localhost:8081/users/signup';
    return this.http.post(url, {
      email: this.username,
      password: this.password,
      name: this.username
    }).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
