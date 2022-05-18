import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';

const routes: Routes = [
  {path: "home", component: HomeComponent },
  {path: "product", component: ProductViewComponent },
  {path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
