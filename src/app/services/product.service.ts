import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts() : Observable<Array<Product>>{
    return this.http.get<Array<Product>>("https://p2gamesstore.azurewebsites.net/products");
  }

  addProduct(product_id:number, product_name:String, release_date:number, price:number, quantity:number, product_img:String) {
    console.log(product_id)
    console.log(product_name)
    console.log(release_date)
    console.log(price)
    console.log(quantity)
    console.log(product_img)

    this.http.post("https://p2gamesstore.azurewebsites.net/products",
      {
        product_id: product_id,
        product_name: product_name,
        release_date: release_date,
        price: price,
        quantity: quantity,
        product_img: product_img
      }

    ).subscribe(() => console.log("product added"));
  }

  getProduct(product_name:String) {
   return this.http.get<Product>("https://p2gamesstore.azurewebsites.net/products/"+ product_name);
  }

  deleteProduct(product_id:number) {
    console.log(product_id);

   return this.http.delete("https://p2gamesstore.azurewebsites.net/products/delete/"+ product_id);  
  }

  updateProduct(product_id:number, product_name:String, release_date:number, price:number, quantity:number, product_img:String) {
    this.http.put("https://p2gamesstore.azurewebsites.net/products/update/"+ product_id,
      {
        product_id: product_id,
        product_name: product_name,
        release_date: release_date,
        price: price,
        quantity: quantity,
        product_img: product_img
      }

    ).subscribe(() => console.log("product updated"));
  }
}
