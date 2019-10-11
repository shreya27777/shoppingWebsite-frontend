import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../app.service';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {
  totalPrice;
  // tslint:disable-next-line:ban-types
  private cartItem: Object = [];


  constructor(private service: AppService, private router: Router, private httpService: HttpService) {
  }

  ngOnInit() {
    if (!this.service.checkLogin()) {
      this.router.navigate(['/login']);
    } else {
      this.httpService.getItemsCart().subscribe((data) => {
        this.cartItem = data;
        this.httpService.total().subscribe((total) => {
          this.totalPrice = total;
        });
      });
    }

  }

  goToHome() {
    location.href = 'home';
  }

  decrement(id) {
    this.httpService.decreaseQuantity(id).subscribe((data) => {
      this.cartItem = data;
      this.httpService.total().subscribe((total) => {
        this.totalPrice = total;
      });
    });
  }

  increment(id) {
    this.httpService.increaseQuantity(id).subscribe((data) => {
      this.cartItem = data;
      this.httpService.total().subscribe((total) => {
        this.totalPrice = total;
      });
    });
  }

  removeFromCart(id) {
    this.httpService.remove(id).subscribe((data) => {
      this.cartItem = data;
      this.httpService.total().subscribe((total) => {
        this.totalPrice = total;
      });
    });
  }
}
