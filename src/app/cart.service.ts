import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CartGetModel} from './cart-get-model';
import { Observable } from 'rxjs';
import {Products} from '../cart.delete';
 
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
  deleteFromCart(id:number){
     return this.http.delete<Products>(`https://kdqpr8ht4m.execute-api.us-east-1.amazonaws.com/dev/cart/${id}`)//.subscribe(data=>{
    //   console.log(data);
    // });
    
  }
  
   }


