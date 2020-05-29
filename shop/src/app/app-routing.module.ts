import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importera sidor
import { LandingpageViewComponent } from './views/landingpage-view/landingpage-view.component';
import { ProductCatalogViewComponent } from './views/product-catalog-view/product-catalog-view.component';
import { ProductViewComponent } from './views/product-view/product-view.component';

//Sidor och sökvägar   // Länkar här och på navbar
const routes: Routes = [
  { path: '', component: LandingpageViewComponent },
  { path: 'features', component: LandingpageViewComponent },
  { path: 'products', component: ProductCatalogViewComponent },
  { path: 'products/:id', component: ProductViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
