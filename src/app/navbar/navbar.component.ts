import {Component, OnInit} from '@angular/core';
import {ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showModal = false;
  public category = [
    {link: '/product-list', name: 'Electronics'},
    {link: '/product-list', name: 'Sports'},
    {link: '/product-list', name: 'Clothing'},
    {link: '/product-list', name: 'Footwear'},
    {link: '/product-list', name: 'Beauty'}
  ];

  constructor(private router: Router, private service: ProductService) {
  }

  ngOnInit() {
  }

  show(category) {
    this.router.navigate(['/product-list', category.name.toLowerCase()]);
    console.log(category);
    this.service.getProduct(this.category).subscribe((data) => {
      productList = data;
    }, (err) => {
      alert(err.message);
    });
  }
}

export let productList: object = [];
