import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(name,cata,url,price){
    console.log('added to cart successfully' + name + cata + url + price);
  }
}
