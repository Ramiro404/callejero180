import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
import { ShoppingCart } from '../model/shoppingCart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  shoppingCart: Product[] = [];
  product: Product;
  constructor(
  ) { }

  addProduct(product: Product): void{
    this.shoppingCart.push(product);
  }



  removeProduct(position: number): void{
    this.shoppingCart.splice(position,1);
  }
}
