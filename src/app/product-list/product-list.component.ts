import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClientJsonpModule} from '@angular/common/http';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  public price1;
  public price2;
  private category;
  // tslint:disable-next-line:ban-types
  private products: Object = [];
  public id;
  private higher;
  private lower;
  public categories = [
    {link: '/product-list', name: 'Decor'},
    {link: '/product-list', name: 'Clothing'},
    {link: '/product-list', name: 'Electronics'},
    {link: '/product-list', name: 'Footwear'},
    {link: '/product-list', name: 'Beauty'}
  ];

  private checkboxes = [
    {id: '1', isSelected: false, value: '₹500 - ₹1,000', lower: 500, higher: 1000},
    {id: '2', isSelected: false, value: '₹1000 - ₹2,500', lower: 1000, higher: 2500},
    {id: '3', isSelected: false, value: '₹2500 - ₹5,000', lower: 2500, higher: 5000},
    {id: '4', isSelected: false, value: 'Over ₹5,000', lower: 5000, higher: 500000}
  ];

  constructor(private service: HttpService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category');
      this.getItems();
    });
  }

  show(category) {
    this.category = category;
    this.getItems();
    this.router.navigate(['/product-list', category.toLowerCase()]);
  }

  getDetails(productId) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/product-details/' + productId, '_blank');
    });
  }

  applyFilter() {
    for (let i = 0; i < this.checkboxes.length; i++) {
      if (this.checkboxes[i].isSelected) {
        if (this.lower === undefined && this.higher === undefined) {
          this.lower = this.checkboxes[i].lower;
          this.higher = this.checkboxes[i].higher;
        } else if (this.lower > this.checkboxes[i].lower) {
          this.lower = this.checkboxes[i].lower;
        } else if (this.higher < this.checkboxes[i].higher) {
          this.higher = this.checkboxes[i].higher;
        }
      }
    }
    return this.service.getAllItems(this.category.toLowerCase(), this.lower, this.higher).subscribe((data) => {
      this.products = data;
      this.lower = undefined;
      this.higher = undefined;
    });
  }

  clearFilter() {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.checkboxes.length; i++) {
      this.checkboxes[i].isSelected = false;
    }
    return this.service.getAllItems(this.category.toLowerCase(), this.lower, this.higher).subscribe((data) => {
      this.products = data;
    });
  }

  getItems() {
    this.service.getAllItems(this.category, this.price1, this.price2).subscribe(
      (data) => {
        this.products = data;
      });
  }

}
