import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './shared/components/menu-bar/menu-bar.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RelatedProductsComponent } from './shared/components/related-products/related-products.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { StoreComponent } from './components/store/store.component';
import { FiltersComponent } from './components/store/filters/filters.component';
import { PaginationComponent } from './shared/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    ProductViewComponent,
    HeaderComponent,
    RelatedProductsComponent,
    FooterComponent,
    StoreComponent,
    FiltersComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
