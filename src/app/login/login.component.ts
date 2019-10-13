import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  showPassword = 'password';
  private passwordEmpty: boolean;
  private usernameEmpty: boolean;


  constructor(private  service: AppService, private router: Router, private authService:
    // tslint:disable-next-line:align
    AuthenticationService) {
  }

  ngOnInit() {
    if (this.service.checkLogin()) {
      this.router.navigate(['home']);
    }
  }

  login() {
    if (this.password == null) {
      this.passwordEmpty = true;
    }
    if (this.username == null) {
      this.usernameEmpty = true;
    }
    this.authService.authenticate(this.username, this.password).subscribe(
      (data) => {
        if (this.username === 'admin' && this.password === 'admin'){
          localStorage.setItem('admin', 'true');
        } else {
          localStorage.setItem('admin', 'false');
        }
        this.service.isLoggedIn(true);
        this.router.navigate(['home']);
      });
  }

  showPass() {

    if (this.showPassword === 'password') {
      this.showPassword = 'text';
    } else {
      this.showPassword = 'password';
    }
  }
}
