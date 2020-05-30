import { Injectable } from '@angular/core';
import { IState } from '../models/istate.model';
import { Store } from '@ngrx/store';
import * as ShoppingCartActions from '../store/actions/shoppingcart.actions'

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cart

  constructor(private store: Store<IState>) { }

  //Totala kostnaden
  totalAmount() {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let totAmount = 0
    this.cart.forEach(item => {
      totAmount += item.quantity * item.product.price
    })
    this.store.dispatch(new ShoppingCartActions.Amount(totAmount))
  }


  //Totala Antal grejer
  totalQuantity() {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let totQuantity = 0
    this.cart.forEach(item => {
      totQuantity += item.quantity
    })
    this.store.dispatch(new ShoppingCartActions.Quantity(totQuantity))
  }



  //   let totQuantity = 0;
  //   for (var i = 0; i < this.cart.length; i++) {
  //     if (this.cart[i].amount) {
  //       totQuantity += this.cart[i].amount




  add(product, quantity) {
    this.store.select(store => store.shoppingcart).subscribe(res => this.cart = res)
    let exists = this.cart.find(item => { return item.product._id === product._id })
    if (!exists) {
      this.store.dispatch(new ShoppingCartActions.Add({ product, quantity }))
    } else {
      this.increment({ product, quantity })
    }
    this.totalQuantity(), this.totalAmount()
  }

  remove(_id) {
    this.store.dispatch(new ShoppingCartActions.Remove(_id))
    this.totalQuantity(), this.totalAmount()
  }

  clear() {
    this.store.dispatch(new ShoppingCartActions.Clear())
    this.totalQuantity(), this.totalAmount()
  }

  increment(item) {
    this.store.dispatch(new ShoppingCartActions.Increment(item))
    this.totalQuantity(), this.totalAmount()
  }


  

  //Minska - om varan större? än = 1 ta bort - skriv ut det nya != null <= 1)
  //Fixar reducern
  decrement(item) {
    this.store.dispatch(new ShoppingCartActions.Decrement(item))
    this.totalQuantity(), this.totalAmount()
  }


  //Decfrement
  // itemIndex = state.shoppingcart.findIndex(product => product._id === action.id) 

  // state.shoppingcart[itemIndex].quantity === 1    
  //     ? state.shoppingcart = state.shoppingcart.filter(item => item._id !== action.id) 
  //     : state.shoppingcart[itemIndex].quantity -= 1




  //   const getTotalQuantity = (items) => { //products
  //     let totalQuantity = 0

  //     items.forEach(product => {
  //         totalQuantity += product.quantity
  //     });

  //     return totalQuantity
  // }



  // getTotal(){
  //   let total = 0;
  //   for (var i = 0; i < this.cartItems.length; i++) {
  //       if (this.cartItems[i].amount) {
  //           total += this.cartItems[i].amount * this.cartItems[i].quantity;
  //           this.totalamount = total;
  //       }
  //   }
  //   return total;
  // }

}


