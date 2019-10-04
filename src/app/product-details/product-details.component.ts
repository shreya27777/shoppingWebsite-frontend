import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  public name;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let name = this.activatedRoute.snapshot.paramMap.get('name');
    name = this.name;
  }

}
