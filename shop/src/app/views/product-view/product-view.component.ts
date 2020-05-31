import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  public product: IProduct


  constructor(
    private store: Store<IState>,
    private router: ActivatedRoute, 
    private productService: ProductService, 
    private shoppingCartService: ShoppingCartService
  ) {  }



  ngOnInit(): void {
    this.productService.clear() //rensar varje gång man laddar sidan
    this.productService.getById(this.router.snapshot.params.id) //hämtar produkt med id
    this.store.select(store => store.product).subscribe(res => this.product = res) //hämtar från store 
  }



  // addToCart(id: string) {
  //   this.store.dispatch(new CartAdd(id))
  // }

  addToCart(product, quantity = 1) {
    this.shoppingCartService.add(product, quantity)
  }

 
  // ngOnDestroy(): void {
  //   this.productService.clear()
  // }

}
