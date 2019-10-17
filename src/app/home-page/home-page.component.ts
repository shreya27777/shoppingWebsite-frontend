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
    'Decor', 'Clothing', 'Electronics', 'Footwear', 'Beauty'
  ];

  private footwearPopular: object = [];
  private clothingPopular: object = [];
  private decorPopular: object = [];
  private beautyPopular: object = [];
  private electronicsPopular: object = [];

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
    this.httpService.getPopular('electronics').subscribe((data2) => {
      this.electronicsPopular = data2;
    });
  }

  show(category) {
    this.category = category.toLowerCase();
    this.router.navigate(['/product-list', this.category]);
  }

  getDetails(id) {
    this.router.navigate(['product-details', id]);
  }
}
