import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: Product[];
  total:number = 0;
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.initialize();
    
  }

  initialize(): void{
    this.shoppingCart = this.shoppingCartService.shoppingCart;
    for(let product of this.shoppingCart)
      this.total += product.price;
  }

  remove(index: number): void{
    this.shoppingCartService.removeProduct(index);
    this.total = 0;
    this.initialize();
  }

}
