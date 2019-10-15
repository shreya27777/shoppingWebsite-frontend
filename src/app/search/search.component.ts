import {Component, OnInit} from '@angular/core';
import {HttpService} from '../http.service';
import {setAnalyticsConfig} from '@angular/cli/models/analytics';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private keyword;
  private result;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.keyword = localStorage.getItem('search');
    console.log(this.keyword);
    this.httpService.searchResult(this.keyword).subscribe((data) => {
      this.result = data;
      console.log(this.result);
    });
  }

}
