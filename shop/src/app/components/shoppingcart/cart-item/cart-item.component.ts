import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IShoppingCart } from 'src/app/models/ishoppingcart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
//import { Observable, from } from 'rxjs';
//import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  public shoppingcart: Array<IShoppingCart>

  // public product: IProduct
  // public shoppingcart: Array<any>

  // public cart$: Observable<Array<IProduct>>
  // public products$: Observable<any>

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: ActivatedRoute,
    private store: Store<IState>,
    //private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)
  }

  clear() {
    this.shoppingCartService.clear()
  }

  remove(_id) {
    this.shoppingCartService.remove(_id)
  }


  // RemoveCartItem(id:string) {
  //   this.store.dispatch(new RemoveCartItemAction(id))  
  //  }


  // RemoveProduct(id: string) {
  //   this.store.dispatch(remove({id: id}))
  // }

  increment(product) {
    this.shoppingCartService.increment(product)
  }


  decrement(product) {
    this.shoppingCartService.decrement(product)
  }


}



// const shoppingcart = useSelector(state => state.cart.shoppingcart)
// const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
// const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

