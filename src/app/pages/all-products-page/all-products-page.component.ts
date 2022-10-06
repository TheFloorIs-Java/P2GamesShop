import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
  //*interface* is a specification that identifies a related set of properties and 
  //methos to be implemented by a class. Simply the definition of the properties
  //and methods, and the class that implements that interface has the actual code
  //for each of those defined properties and mothods.

@Component({
  selector: 'app-all-products-page',
  templateUrl: './all-products-page.component.html',
  styleUrls: ['./all-products-page.component.css']
})
export class AllProductsPageComponent implements OnInit {

  // will use interface to export a structure of a certrain piece of data... from array (product)
  //in future will get data from API here, so this serves as a place holder for now
 /* placeholderProducts : Array<Product> = [

    {
      product_id: 6,
      product_name : "Call of Duty: Modern Warfare II",
      release_date: 2022,
      price: 59.99,
      quantity: 1,
      product_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnVFZw_zyaA9bhQJtZ40tnh-pEWd4gBtqkGA&usqp=CAU"
    },
    {
      product_id: 7,
      product_name : "Roblox",
      release_date: 2006,
      price: 9.00,
      quantity: 1,
      product_img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7pYrWnVdVsecqO2KNicZoFY_IEFbqKbm-g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp7pYrWnVdVsecqO2KNicZoFY_IEFbqKbm-g&usqp=CAU"
    },
    {
      product_id: 8,
      product_name : "Minecraft",
      release_date: 2011,
      price: 12.00,
      quantity: 1,
      product_img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6390/6390837_sd.jpg;maxHeight=640;maxWidth=550"
    }

  ]; */

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

}
