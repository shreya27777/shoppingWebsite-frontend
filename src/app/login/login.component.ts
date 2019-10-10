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
    this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        this.service.isLoggedIn(true);
        this.router.navigate(['home']);
      });
  }
  showPass() {

    if (this.showPassword === 'password'){
      this.showPassword = 'text';
    }
    else{
      this.showPassword = 'password';
    }
  }
}
