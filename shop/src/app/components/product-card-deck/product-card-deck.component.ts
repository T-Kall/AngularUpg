import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/iproduct.model';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
//import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-card-deck',
  templateUrl: './product-card-deck.component.html',
  styleUrls: ['./product-card-deck.component.css']
})
export class ProductCardDeckComponent implements OnInit {

  public productcatalog: Observable<Array<IProduct>> //hämta en array där en product innehåller typesafe från model iproduct

  //constructor() { }
  constructor(private store: Store<IState>) { }
  //constructor(private store: Store<IState>, private shoppingCartService: ShoppingCartService) { }



  
  ngOnInit(): void {
    this.productcatalog = this.store.select(store => store.productcatalog) //hämtar från store //ProductCatalogService
    
  }

  // addToCart(product, quantity = 1) {
  //  //this.shoppingCartService.add(product, quantity)
  // }

  // removeFromCart(id) {
  //   this.shoppingCartService.remove(id)
  // }

}




// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product-card-deck',
//   templateUrl: './product-card-deck.component.html',
//   styleUrls: ['./product-card-deck.component.css']
// })
// export class ProductCardDeckComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

