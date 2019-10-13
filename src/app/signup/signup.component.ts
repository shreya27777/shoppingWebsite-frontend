import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  name;
  password;
  email;

  private passwordEmpty: boolean;
  private usernameEmpty: boolean;
  private emailEmpty: boolean;

  constructor(private  authService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  Signupdata() {
    if (this.password == null) {
      this.passwordEmpty = true;
    }
    if (this.name == null) {
      this.usernameEmpty = true;
    }
    if (this.email == null) {
      this.emailEmpty = true;
    }
    this.authService.signUp({
      name: this.name,
      password: this.password,
      email: this.email
    }).subscribe(data => {
      this.router.navigate(['/login']);
    });
  }
}
