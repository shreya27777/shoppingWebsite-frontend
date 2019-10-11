import {Component, OnInit} from '@angular/core';
import {HttpClientJsonpModule} from '@angular/common/http';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public price1;
  public price2;
  private category;
  // tslint:disable-next-line:ban-types
  private products: Object = [];
  public id;

  constructor(private service: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.service.eventEmitter.subscribe((category: string) => {
      this.category = category;
      this.service.getAllItems(category, this.price1, this.price2).subscribe(
        (data) => {
          this.products = data;
        });
    });
  }

  priceFilter(p, p2) {
    this.price1 = p;
    this.price2 = p2;
    this.service.getAllItems(this.category, this.price1, this.price2).subscribe(
      (data) => {
        this.products = data;
      });
  }

  getDetails(productId) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/product-details/' + productId, '_blank');
    });
  }

}
