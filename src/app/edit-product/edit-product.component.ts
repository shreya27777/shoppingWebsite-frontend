import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  details: any;
  image: any;
  category: any;
  description: any;
  price: any;
  name: any;

  private item;
  private id;

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      this.id = params.get('product-id');
    });
    this.httpService.getItemById(this.id).subscribe((data) => {
      this.item = data;
      this.details = this.item.details;
      this.image = this.item.image;
      this.category = this.item.category;
      this.description = this.item.description;
      this.price = this.item.price;
      this.name = this.item.name;
    });
  }

  editProduct() {
    this.httpService.updateProduct(this.id, {
      name: this.name,
      category: this.category,
      description: this.description,
      price: this.price,
      image: this.image,
      details: this.details
    }).subscribe(data => {
      this.router.navigate(['product-details', this.id]);
    });
  }

}
