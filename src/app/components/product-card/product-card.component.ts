import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

@Input()
product : Product = {product_id:0, product_name:"", release_date:0, price:0, quantity:0, product_img:""};

  /*@Input()
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

  added :boolean = false; */

  constructor() { }

  ngOnInit(): void {
  }

  /*add() : void {
    this.added = !this.added
  } */

}

