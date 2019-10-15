import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  private orders: Object = [];
  constructor(private service: HttpService, private Appservice: AppService, private router: Router) { }

  ngOnInit() {
    if (!this.Appservice.checkLogin()) {
      this.router.navigate(['/login']);
    }
    this.service.getOrder().subscribe((data) => {
      this.orders = data;
      console.log(this.orders[0].userName);
    });
  }
}
