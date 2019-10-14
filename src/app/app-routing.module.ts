import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {UserCartComponent} from './user-cart/user-cart.component';
import {ProductListComponent} from './product-list/product-list.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {OrdersComponent} from './orders/orders.component';
import {AddProductComponent} from './add-product/add-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {UsersComponent} from './users/users.component';
import {SearchComponent} from './search/search.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'product-details/:product-id', component: ProductDetailsComponent},
  {path: 'product-list/:category', component: ProductListComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'user-cart', component: UserCartComponent},
  {path: 'profile', component: MyProfileComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:product-id', component: EditProductComponent},
  {path: 'list-of-user', component: UsersComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const RoutingComponents = [HomePageComponent, LoginComponent, SignupComponent, ProductDetailsComponent, AboutUsComponent,
  PageNotFoundComponent, UserCartComponent, ProductListComponent, MyProfileComponent, OrdersComponent, AddProductComponent,
  EditProductComponent, UsersComponent, SearchComponent];
