import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public id;
  private item;
  constructor(private activatedRoute: ActivatedRoute, private httpService: HttpService, private appService: AppService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      this.id = data.get('product-id');
    });
    this.httpService.getItemById(this.id).subscribe((data) => {
      this.item = data;
    });
  }

  addToCart(id) {
    if (this.appService.checkLogin()) {
      alert('product added to cart');
      this.httpService.add(id).subscribe((data) => {
        this.router.navigate(['/user-cart']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  split(details) {
    return details.split('\\n');
  }

  deleteProduct(productId) {
    this.httpService.deleteProduct(productId).subscribe((data) => {
      this.router.navigate(['/home']);
    });
  }

  editProduct(id) {
    this.router.navigate(['/edit-product', id]);
  }
}
