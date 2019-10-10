import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  demo = [1];
  name = 'Shein off-shoulder black top';
  quantity = 1;
  price = 900;
  finalprice = this.price;


  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    if ( !this.service.checkLogin()) {
      this.router.navigate(['/home']);
    }
  }

  goToHome() {
    location.href = 'home';
  }
  increment() {
    this.quantity = this.quantity + 1;
    this.finalprice = this.price * this.quantity;
  }
  decrement() { if (this.quantity > 1) {
      this.quantity = this .quantity - 1;
    }
                this .finalprice = this .price * this.quantity;
  }

}
