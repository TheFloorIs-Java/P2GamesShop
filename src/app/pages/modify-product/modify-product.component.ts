import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/Product';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {

  @Input()
  product_id: any = "";
  @Input()
  product_name: string = "";
  @Input()
  release_date: any = "";
  @Input()
  price: any = "";
  @Input()
  quantity: any = "";
  @Input()
  product_img: string = ""

  constructor(private proService : ProductService, private secService : SecurityService) { }
  productList : Array<Product>=[];

  ngOnInit(): void {
    this.proService.getAllProducts().subscribe(data=>this.productList=data);
  }

  showProducts(): void {
    console.log(this.productList);
  }

  newProduct(): void {
    let productExists : boolean = false;
    for(let i=0; i<this.productList.length; i++) {
      if(this.product_name==this.productList[i].product_name) {
        productExists = true;
        alert("This product is already in the system, if you would like to edit it use the update button.");
      }
      }
      if(!productExists) {
        this.proService.addProduct(this.product_id, this.product_name, this.release_date, this.price, this.quantity, this.product_img);
        alert("New product added!");
        this.proService.getAllProducts().subscribe(data=>this.productList=data);
        window.location.reload();
        

  }

}

deleteProduct(): void {
  let productExists : boolean = false;
    for(let i=0; i<this.productList.length; i++) {
      if(this.product_id==this.productList[i].product_id) {
        productExists = true;
      }
      }
      if(productExists){
        this.proService.deleteProduct(this.product_id).subscribe(() => console.log("product deleted"));
        this.proService.getAllProducts().subscribe(data=>this.productList=data);
        alert("Product deleted!");
        window.location.reload();
      }
      else{ 
        alert("No product with that ID was found.")
      }
  
}

updateProduct(): void {
  let productExists : boolean = false;
    for(let i=0; i<this.productList.length; i++) {
      if(this.product_id==this.productList[i].product_id) {
        productExists = true;
      }
      }
      if(productExists) {
        this.proService.updateProduct(this.product_id, this.product_name, this.release_date, this.price, this.quantity, this.product_img);
        this.proService.getAllProducts().subscribe(data=>this.productList=data);
        alert("Product updated!");
        window.location.reload();
  } else{
    alert("No product with that ID was found.")
  }
}

/*ngOnChanges(changes: SimpleChanges) {
  this.proService.getAllProducts().subscribe(data=>this.productList=data);
}*/
  }

 


