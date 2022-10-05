import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  
  // this is the name of the product, this file connects to product-card.component.hmtl
  //data biding
  //figure how to use this option with adding to cart

  @Input()
  product_id: number = 0;
  @Input()
  product_name : string = "placeholder";
  @Input()
  release_date: number = 0;
  @Input()
  price: number = 0.00;
  @Input()
  quantity: number = 0;
  @Input()
  product_img: string = "url.com";

  added :boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  add() : void {
    this.added = !this.added
  }

}

