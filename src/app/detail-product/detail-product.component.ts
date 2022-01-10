import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { PRODUCTS } from '../mock/mock-products';
import { Product } from '../model/Product';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.scss']
})
export class DetailProductComponent implements OnInit {
  id:number;
  products:Product[] = PRODUCTS;
  product: Product;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

    for(let product of this.products){
      if(this.id == product.id)
        this.product = product;
    }
  }

  addProduct(): void{
    this.shoppingCartService.addProduct(this.product);
    this.openSnackBar();
  }

  openSnackBar(): void{
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });
  }

}
