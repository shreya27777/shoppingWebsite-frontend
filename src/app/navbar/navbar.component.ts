import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {AppService} from '../app.service';
import {AuthenticationService} from '../authentication.service';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public category = [
    {link: '/product-list', name: 'Decor'},
    {link: '/product-list', name: 'Clothing'},
    {link: '/product-list', name: 'Electronics'},
    {link: '/product-list', name: 'Footwear'},
    {link: '/product-list', name: 'Beauty'}
  ];
  private isAdmin;
  constructor(private router: Router, private service: ProductService, private appService: AppService,
              private authService: AuthenticationService, private http: HttpClient, private httpService: HttpService) {
  }

  ngOnInit() {

  }


  show(category) {
    this.category = category.toLowerCase();
    this.httpService.raiseCategory(category.toLowerCase());
    this.router.navigate(['/product-list', category.toLowerCase()]);
  }

  logout() {
    this.authService.signOut().subscribe(res => {
      localStorage.removeItem('token');
      localStorage.removeItem('admin');
      this.appService.isLoggedIn(false);
      localStorage.removeItem('auth');
      alert('Logout Successful');
      this.router.navigate(['/home']);
    });
  }
}
