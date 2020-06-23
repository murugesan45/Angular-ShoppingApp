import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {RouterModule} from '@angular/router';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminProductsViewComponent } from './admin/admin-products-view/admin-products-view.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    AdminProductsComponent,
    PaymentReceiptComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'cart', component:CartComponent},
      {path:'checkout', component:CheckoutComponent},
      {path: 'login' , component:LoginComponent},
      {path: 'admin/products', component:AdminProductsComponent},
      {path: 'admin/products/view', component:AdminProductsViewComponent},
      {path: 'home' , component:HomeComponent},
      {path: 'payment/receipt', component:PaymentReceiptComponent},
      {path: 'signup', component:SignupComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
