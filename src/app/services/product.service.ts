import { Injectable } from "@angular/core";
import { Product } from "../shared/model/product.model";

@Injectable({
    providedIn: 'root'
})


export class ProductService {

    private productList = [
        new Product('https://tse2.mm.bing.net/th?id=OIP._QeP_7NXoePhdkPY8No49wHaDt&pid=Api&P=0', "Product 1", 10, 1),
        new Product('https://tse2.mm.bing.net/th?id=OIP._QeP_7NXoePhdkPY8No49wHaDt&pid=Api&P=0', "Product 2", 20, 1),
        new Product('https://tse2.mm.bing.net/th?id=OIP._QeP_7NXoePhdkPY8No49wHaDt&pid=Api&P=0', "Product 3", 30, 1)
    ];

    getProduct() {
        return this.productList
    }

}