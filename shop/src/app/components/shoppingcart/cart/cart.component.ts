import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IShoppingCart } from 'src/app/models/ishoppingcart.model';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { Store } from '@ngrx/store';
import { IState } from 'src/app/models/istate.model';
//import { IProduct} from '../../../models/iproduct.model'
//import { ProductService } from 'src/app/services/product.service';



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  // public shoppingcart: Array<any>
  //public product: IProduct
  public shoppingcart: Array<IShoppingCart>
  public shoppingcartAmount: number = 0
  public shoppingcartQuantity: number = 0





  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: ActivatedRoute,
    private store: Store<IState>,
   // private productService: ProductService,
 
  ) { }

  ngOnInit(): void {
    //this.productService.getById(this.router.snapshot.params.id) 



    this.store.select(state => state.shoppingcart).subscribe(res => this.shoppingcart = res)
    this.store.select(state => state.totalCartQuantity).subscribe(res => this.shoppingcartQuantity = res)
    this.store.select(state => state.totalCartAmount).subscribe(res => this.shoppingcartAmount = res)
 
  }
  // const shoppingcart = useSelector(state => state.cart.shoppingcart)
  // const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
  // const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

  clear() {
    this.shoppingCartService.clear()
  }


  remove(id) {
    this.shoppingCartService.remove(id)
  }


  totalCartQuantity() {
    this.shoppingCartService.totalQuantity()
  }


  totalCartAmount() {
    this.shoppingCartService.totalAmount()
  }

  increment(item) {
    this.shoppingCartService.increment(item)
  }

  decrement(item) {
    this.shoppingCartService.decrement(item)
  }


}


// totalCartAmount
// totalCartQuantity

  // increment(item) {
  //   this.shoppingCartService.increment(item)
  // }

  // decrement(item) {
  //   this.shoppingCartService.decrement(item)
  // }


//this.store.select(state => state.totalCartAmount).subscribe(res => this.totalCartAmount = res)

// const shoppingcart = useSelector(state => state.cart.shoppingcart)
// const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
// const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

// constructor(
//   private store: Store<IState>,
//   private router: ActivatedRoute,  //hämtar id:t
//   private productService: ProductService, 
//   private shoppingCartService: ShoppingCartService
// ) {  }


// this.productService.getById(this.router.snapshot.params.id) //hämtar produkt med id
// this.store.select(store => store.product).subscribe(res => this.product = res) //hämtar från store 