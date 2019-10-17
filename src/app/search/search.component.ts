import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {

  private keyword;
  private result;

  constructor(private httpService: HttpService) {
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
}


