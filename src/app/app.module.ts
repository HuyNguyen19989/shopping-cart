import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartSummeryComponent } from './cart-summery/cart-summery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PromoCodeComponent } from './promo-code/promo-code.component';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartSummeryComponent,
    ProductListComponent,
    PromoCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
