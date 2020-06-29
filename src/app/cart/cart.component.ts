import { Component, OnInit, Input } from '@angular/core';
import { CartModel } from '../cart-model';
import {CartService} from '../cart.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
constructor(public cartService: CartService){}
  ngOnInit(): void {

    this.getItems();
  }
 totalAmount=0;
 user = new CartModel();
 sum=0;
  fr:any[];
 getItems(){
        let data = this.cartService.getItemsFromCart().subscribe(dat => {
           this.user.items = dat.Item.Products.map(data =>
             {
               return data; 
             });
              dat.Item.Products.forEach(data =>
              {
            
               this.sum = this.sum + data.price;
               this.user.total = this.sum;
               console.log(this.user.total);
              
                return this.sum; 
              });
          });
 }

}
