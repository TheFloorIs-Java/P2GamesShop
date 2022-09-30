import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
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
  placeholderProducts : Array<Product> = [
    {
      name: "Pokémon Legends: Arceus",
      url: "url.com",
      productID: 1,
      release_date: 2021
    },
    {
      name: "Call of Duty: Modern Warfare II",
      url: "url.com",
      productID: 2,
      release_date: 2022
    },
    {
      name: "Roblox",
      url: "url.com",
      productID: 3,
      release_date: 2006
    },
    {
      name: "Minecraft",
      url: "url.com",
      productID: 4,
      release_date: 2011
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
