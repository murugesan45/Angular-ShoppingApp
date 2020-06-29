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
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { CartService } from './cart.service';

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
    SignupComponent,
    LogoutComponent,
    VegetablesComponent,
    ElectronicsComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
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
      {path: 'logout', component:LogoutComponent},
      {path: 'vegetables',component:VegetablesComponent},
      {path:'electronics',component:ElectronicsComponent}

    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
