import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  shoppingCart:Product[] = [];
  constructor(
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.shoppingCart = this.shoppingCartService.shoppingCart;
  }

}
