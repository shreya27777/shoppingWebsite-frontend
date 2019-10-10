import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  http: HttpClient ) { }
   getProduct(category) {
    const url = 'http://localhost:8081/items/get/' + category;
    return this.http.get(url);
   }
}
