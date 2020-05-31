import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http'

import { LandingpageViewComponent } from './views/landingpage-view/landingpage-view.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductViewComponent } from './views/product-view/product-view.component';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductCardDeckComponent } from './components/product-card-deck/product-card-deck.component';
import { ProductCatalogReducer } from './store/reducers/product-catalog.reducer';
import { ProductReducer } from './store/reducers/product.reducer';
import { ShoppingCartReducer } from './store/reducers/shoppingcart.reducer';
import { CartComponent } from './components/shoppingcart/cart/cart.component';
import { CartItemComponent } from './components/shoppingcart/cart-item/cart-item.component';
import { ShoppingCartQuantityReducer } from './store/reducers/shoppingcart-quantity.reducer';
import { ShoppingCartAmountReducer } from './store/reducers/shoppingcart-amount.reducer';
import { NotfoundViewComponent } from './views/notfound-view/notfound-view.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingpageViewComponent,
    NavbarComponent,
    ProductCatalogViewComponent,
    ProductViewComponent,
    ProductCatalogViewComponent,
    ProductCardDeckComponent,
    CartComponent,
    CartItemComponent,
    NotfoundViewComponent,
 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      productcatalog: ProductCatalogReducer,
      product: ProductReducer,
      shoppingcart: ShoppingCartReducer,
      shoppingcartQuantity: ShoppingCartQuantityReducer,
      shoppingcartAmount: ShoppingCartAmountReducer,
     
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
