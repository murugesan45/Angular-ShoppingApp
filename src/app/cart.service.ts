import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {CartGetModel} from './cart-get-model';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  url = 'https://kdqpr8ht4m.execute-api.us-east-1.amazonaws.com/dev/cart';
  constructor(private http: HttpClient) {}

  addToCart(product){
    this.http.put<any>(this.url, product).subscribe(data => {
      console.log(data)});
    console.log('added to cart successfully');
  }
  getItemsFromCart():Observable<CartGetModel>{
    return this.http.get<CartGetModel>(this.url);
   }

   getItemFromCart(){
    let data = this.http.get('https://kdqpr8ht4m.execute-api.us-east-1.amazonaws.com/dev/cart').subscribe((data:any[])=>{
      let sol = JSON.parse(JSON.stringify(data)).Item.Products;
      console.log('the result us ' + JSON.stringify(sol));
      return sol;
    });
  return data;
   }
   }


