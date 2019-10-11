import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HttpService} from '../http.service';
import {AppService} from '../app.service';
import {split} from 'ts-node';

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
      console.log(this.item);
    });
  }

  addToCart(id) {
    if (this.appService.checkLogin()) {
      this.httpService.add(id).subscribe((data) => {
        this.router.navigate(['/lcart']);
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  split(details) {
    return details.split('\\n');
  }
}
