import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  private profile;
  private editable = false;
  password: any;
  email: any;
  name: any;

  constructor(private httpService: HttpService , private Appservice: AppService, private router: Router) {
  }

  ngOnInit() {
    if (!this.Appservice.checkLogin()) {
      this.router.navigate(['/login']);
    }
    this.httpService.getProfile().subscribe((data) => {
      this.profile = data;
      this.password = this.profile.password;
      this.email = this.profile.email;
      this.name = this.profile.name;
    });
  }

  edit() {
    this.editable = true;
  }

  update() {
    this.httpService.updateProfile({
      name: this.name,
      password: this.password,
      email: this.email
    }).subscribe((data) => {
      this.profile = data;
      this.editable = false;
      alert('Profile added Successfully');
    });
  }
}
