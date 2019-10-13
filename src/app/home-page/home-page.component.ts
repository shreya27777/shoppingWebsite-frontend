import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  public category = [
    {link: '/product-list', name: 'Decor'},
    {link: '/product-list', name: 'Clothing'},
    {link: '/product-list', name: 'Electronics'},
    {link: '/product-list', name: 'Footwear'},
    {link: '/product-list', name: 'Beauty'}
  ];

  private footwearPopular: object = [];
  private clothingPopular: object = [];
  private decorPopular: object = [];
  private beautyPopular: object = [];

  constructor(private httpService: HttpService , private router: Router) {
  }

  ngOnInit() {
    this.httpService.getPopular('footwear').subscribe((data) => {
      this.footwearPopular = data;
    });
    this.httpService.getPopular('clothing').subscribe((data1) => {
      this.clothingPopular = data1;
    });
    this.httpService.getPopular('decor').subscribe((data2) => {
      this.decorPopular = data2;
    });
    this.httpService.getPopular('beauty').subscribe((data2) => {
      this.beautyPopular = data2;
    });
  }

  show(category) {
    this.category = category.toLowerCase();
    this.httpService.raiseCategory(category.toLowerCase());
    this.router.navigate(['/product-list', category.toLowerCase()]);
  }

  getDetails(id) {
    this.router.navigate(['product-details', id]);
  }
}
