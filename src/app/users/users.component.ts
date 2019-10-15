import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAllUsers().subscribe((data) => {
      this.users = data ;
    });
  }

  toggleActivate(userId) {
    this.httpService.toggleActivate(userId).subscribe((data) => {
      this.users = data;
    });
  }
}
