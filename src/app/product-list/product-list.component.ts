import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {productList} from '../navbar/navbar.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products = [
    {link: '#', image: './assets/assets.jpg', name: 'adidas shoe', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/top.jpg', name: 'jewel', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/bag.webp', name: 'givenchy bag', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/shirt.webp', name: 'trendy tee', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/earingsjpg.jpg', name: ' diamond earings', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/top1.jpg', name: 'zara top', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/kylie.webp', name: 'kylie eyeshadows', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/watch.jpg', name: ' chopard_watches', price: '$1200.00', discountedprice: '$1000.00'},
    {link: '#', image: './assets/sheintop.webp', name: 'mango t-shirt', price: '$1200.00', discountedprice: '$1000.00'}
  ];
  public category;

  constructor() {
  }

  ngOnInit() {
  }
}
