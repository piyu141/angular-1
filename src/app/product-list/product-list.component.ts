import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { ProductService } from "../services/product.service";


@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})

export class ProductList {


  productList: any[] = [];

  @Output() productAdded = new EventEmitter();

  constructor(private productServ: ProductService) {
    this.productList = this.productServ.getProduct()
  }

  addtocart(product: any) {
    this.productAdded.emit(product)
  }

  decrement(product: any) {
    product.quantity = product.quantity - 1
  }

  increment(product: any) {
    product.quantity = product.quantity + 1
  }
}

