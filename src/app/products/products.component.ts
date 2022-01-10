import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PRODUCTS } from '../mock/mock-products';
import { Product } from '../model/Product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products:Product[] = PRODUCTS;
  showChat: boolean = false;

  constructor(
    private shoppingCart: ShoppingCartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  addProduct(product: Product): void{
    this.shoppingCart.addProduct(product);
    this.openSnackBar();
  }

  openSnackBar(): void{
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 3000,
    });
  }

  openChat(): void{
    this.showChat = true;
  }

}