import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store';
import * as ProductCatalogActions from '../store/actions/product-catalog.actions'

//import * as demo from '../data/demo' // endast vid test


@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

   //private _baseUrl:string = 'http://localhost:9999/api/products/'
  private _baseUrl: string = 'http://localhost:9998/api/products/' //riktiga

  constructor(private http: HttpClient, private store: Store) { }

  //subscribe är samma som then

  get() {
    this.http.get<any>(this._baseUrl).subscribe(
      res => this.store.dispatch(new ProductCatalogActions.Set(res.products)) //Set resultat av actions payloden in
     // err => this.getDemoData()
    )
  }


  clear() {
    this.store.dispatch(new ProductCatalogActions.Clear())
  }

  // //endast vid test
  // getDemoData() {
  //  this.store.dispatch(new ProductCatalogActions.Set(demo.productCatalog))
  // }
}