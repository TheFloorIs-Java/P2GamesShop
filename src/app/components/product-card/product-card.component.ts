import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  
  // this is the name of the product, this file connects to product-card.component.hmtl
  //data biding
  @Input()    //figure how to use this option with adding to cart
  name : String = "placeholder";
  @Input()
  url : String = "url.com";
  @Input()
  productID : number = 0;
  @Input()
  release_date : number = 0;
  added :boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  add() : void {
    this.added = !this.added
  }

}
