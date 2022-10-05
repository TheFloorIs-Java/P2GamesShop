import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  product_id: number = 0;
  product_name: string = "";
  release_date: number = 0;
  price: number = 0;
  quantity: number = 0;
  product_img: string = ""

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  postProduct() {
    console.log(this.product_id)

    this.http.post("https://p2gamesstore.azurewebsites.net/products",
      {
        product_id: this.product_id,
        product_name: this.product_name,
        release_date: this.release_date,
        price: this.price,
        quantity: this.quantity,
        product_img: this.product_img
      }

    )
    // this.product_id = ""; //trying to create a blank box after entering data


  }

  getProduct() {
    this.http.get<any>("https://p2gamesstore.azurewebsites.net/products")
      .subscribe(data => {
        console.log(data)
        this.product_id = data.product_id, //for all the product data
          this.product_name = data.product_name,
          this.release_date = data.release_date,
          this.price = data.price,
          this.quantity = data.quantity

      })
    //making method inline without giving any data
    //this area will need to be the model so like Product

  }

  deleteProduct() {
    console.log(this.product_id)

    this.http.request("delete", "https://p2gamesstore.azurewebsites.net/products",
      //could use +id in the url and no need for the body +this.product_id
      {
        body: {
          product_id: this.product_name,
          product_name: this.product_name,
          release_date: this.release_date,
          price: this.price,
          quantity: this.quantity,
          product_img: this.product_img
        }
      })

  }

}
