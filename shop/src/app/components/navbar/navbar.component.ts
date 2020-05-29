import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { IState } from '../../models/istate.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // public shoppingcartQuantity: number = 0

  constructor(
    private store: Store<IState>,
    ShoppingCartService: ShoppingCartService 
    ) { }

  //sökväg här och på app-routing
  links = [
    { path: '/' , pathName: 'Home'},
    { path: '/features' , pathName: 'Features'}, 
    { path: '/products' , pathName: 'Products'}
  ]

  

  ngOnInit(): void {
    // this.store.select(store => store.shoppingcartQuantity).subscribe(res => this.shoppingcartQuantity = res)
  }

}
// const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)