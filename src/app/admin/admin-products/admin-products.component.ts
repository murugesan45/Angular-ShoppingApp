import { Component, OnInit } from '@angular/core';
import { AddProduct} from '../../add.products';
import { AddProductService } from 'src/app/add-product.service';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  constructor(private addProductService: AddProductService) { }

  ngOnInit(): void {
  }

  admin = new AddProduct();

  url;

  onSave(){
    let product = {category:this.admin.category, imageUrl: this.admin.imageUrl, price:this.admin.price, description:this.admin.description};
    this.url=this.admin.imageUrl;
    console.log(this.admin.category);
    this.addProductService.addNewProduct(product);
  }

}
