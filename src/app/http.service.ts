import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public category: string;
  eventEmitter: EventEmitter<string>;
  searchEmitter: EventEmitter<string>;
  private search: string;

  constructor(private http: HttpClient) {
    this.eventEmitter = new EventEmitter<string>();
    this.searchEmitter = new EventEmitter<string>();
  }

  raiseCategory(category: string) {
    this.category = category;
    this.eventEmitter.emit(category);
  }

  raiseSearch(search: string) {
    this.search = search;
    this.searchEmitter.emit(search);
  }

  getAllItems(category, price1, price2) {
    if (price1 === undefined && price2 === undefined) {
      return this.http.get('http://localhost:8081/items/get/' + category);
    } else {
      return this.http.get('http://localhost:8081/items/get/' + category + '/?price1=' + price1 +
        '&&price2=' + price2);
    }
  }

  getItemsCart() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/cart/getItems', {headers});
  }

  decreaseQuantity(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/decreaseQuantity/' + id, null, {headers});
  }

  increaseQuantity(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/addProduct/' + id, null, {headers});
  }

  total() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/cart/get-total', {headers});
  }

  remove(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/removeProduct/' + id, null, {headers});
  }

  getItemById(id) {
    return this.http.get('http://localhost:8081/items/getByid/' + id);
  }

  add(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/cart/addProduct/' + id, null, {headers});
  }

  getOrder() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/cart/order-history', {headers});
  }

  checkOut() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/cart/checkout', {headers});
  }

  getProfile() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/users/get-profile', {headers});
  }

  updateProfile(user) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    localStorage.setItem('token', btoa(user.email + ':' + user.password));
    return this.http.post('http://localhost:8081/users/update', user, {headers});
  }

  AddProduct(item) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/admin/addItem', item, {headers});
  }

  deleteProduct(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/admin/removeItem/' + id, null, {headers});
  }

  updateProduct(id, item) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/admin/updateItems/' + id, item, {headers});
  }

  getPopular(category) {
    return this.http.get('http://localhost:8081/items/get-popular/' + category);
  }

  getAllUsers() {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.get('http://localhost:8081/admin/getAllUsers', {headers});
  }

  toggleActivate(id) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + localStorage.getItem('token')});
    return this.http.post('http://localhost:8081/admin/deActivate/' + id, null, {headers});
  }

  searchResult(keyword) {
    return this.http.get('http://localhost:8081/items/search/' + keyword);
  }
}
