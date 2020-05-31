import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Store } from '@ngrx/store';
import * as ProductCatalogActions from '../store/actions/product-catalog.actions'


@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  private _baseUrl: string = 'http://localhost:9998/api/products/' 

  constructor(private http: HttpClient, private store: Store) { }

  //subscribe är samma som then

  get() {
    this.http.get<any>(this._baseUrl).subscribe(
      res => this.store.dispatch(new ProductCatalogActions.Set(res.products)) 
    )
  }


  clear() {
    this.store.dispatch(new ProductCatalogActions.Clear())
  }

}