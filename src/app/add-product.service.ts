import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private http: HttpClient) { }

  addNewProduct(product){
    this.http.post<any>('https://kdqpr8ht4m.execute-api.us-east-1.amazonaws.com/dev/admin/products', product).subscribe(data => {
      console.log(data)});
    console.log('Product added Successfully');
  }
}
