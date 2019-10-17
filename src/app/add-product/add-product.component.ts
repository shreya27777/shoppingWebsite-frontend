import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  details: any;
  image: any;
  category: any;
  description: any;
  price: any;
  name: any;
  private add = true;

  constructor(private router: Router, private httpService: HttpService) {
  }

  ngOnInit() {
  }

  addProduct() {
    if (this.name === undefined || this.category === undefined || this.description === undefined || this.image === undefined ||
      this.price === undefined || this.details === undefined) {
      this.add = false;
    } else {
      this.httpService.AddProduct({
        name: this.name,
        category: this.category,
        description: this.description,
        price: this.price,
        image: this.image,
        details: this.details
      }).subscribe(data => {
        alert('successfully added');
      });
    }
  }
}
