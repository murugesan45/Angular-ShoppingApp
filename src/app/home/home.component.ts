import { Component, OnInit } from '@angular/core';
import { AddToCart } from '../add-to-cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  cart = new AddToCart();

 clickFunction(){
   console.log(this.cart.name);
   console.log('The button is pressed');
 }
}
