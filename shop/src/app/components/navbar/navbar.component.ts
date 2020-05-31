import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';

import { IState } from '../../models/istate.model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public shoppingcartQuantity: number = 0

  constructor(
    private shoppingCartService: ShoppingCartService,
    private router: ActivatedRoute,
    private store: Store<IState>,
   ) { }

  //sökväg här och på app-routing
  links = [
    { path: '/' , pathName: 'Startsida'},
    { path: '/features' , pathName: 'Nyheter'}, 
    { path: '/products' , pathName: 'Produkter'}
  ]


  ngOnInit(): void {
    this.store.select(state => state.shoppingcartQuantity).subscribe(res => this.shoppingcartQuantity = res)
  }


}


// const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)