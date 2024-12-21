import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/pages/main/main.component';
import { ProductComponent } from './components/pages/product/product.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { OrderComponent } from './components/pages/order/order.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductService} from "./services/product.service";

let AuthInterceptor;

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductComponent,
    ProductsComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    RouterLinkWithHref,
    RouterLinkActive
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
