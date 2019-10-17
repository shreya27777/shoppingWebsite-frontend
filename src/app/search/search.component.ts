import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private keyword;
  private result;
  public categories = [
    {link: '/product-list', name: 'Decor'},
    {link: '/product-list', name: 'Clothing'},
    {link: '/product-list', name: 'Electronics'},
    {link: '/product-list', name: 'Footwear'},
    {link: '/product-list', name: 'Beauty'}
  ];
  private category: any;
  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.keyword = localStorage.getItem('search');
    if (this.keyword !== undefined) {
      this.httpService.searchResult(this.keyword).subscribe((data) => {
        this.result = data;
      });
    }
    this.httpService.searchEmitter.subscribe((keyword) => {
      this.keyword = keyword;
      this.httpService.searchResult(this.keyword).subscribe((data) => {
        this.result = data;
      });
    });
  }

  ngOnDestroy(): void {
    localStorage.removeItem('search');
  }

  isEmpty() {
    return this.result.length === 0;
  }

  show(category) {
    this.category = category;
    // this.getItems();
    this.router.navigate(['/product-list', category.toLowerCase()]);
  }

  getDetails(productId) {
    this.router.navigate([]).then((result) => {
      window.open('http://localhost:4200/product-details/' + productId, '_blank');
    });
  }
}


