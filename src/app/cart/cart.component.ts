import { Component, OnInit } from '@angular/core';
import { CartModel } from '../cart-model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  ngOnInit(): void {

    this.getItems();
  }
 totalAmount:any;
 user = new CartModel();
 sum =0;
 getItems(){
   
   this.user.items = [{Name:'Bread', Price : 45,Catagory:'Food' },{Name:'Chocolates', Price: 23, Catagory:'Food'},{Name: 'Cookies', Price:78, Catagory :'Food'}];
    this.totalAmount = this.user.items.forEach(element => {
       this.sum = this.sum + element.Price;
    })
   this.user.total = this.sum;
   this.sum =0;
   this.user.item = this.user.items.length;
 }

}
