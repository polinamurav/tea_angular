import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterLinkActive, RouterLinkWithHref, RouterOutlet} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductService} from "./shared/services/product.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "./shared/shared.module";
import {MainModule} from "./views/main/main.module";
import {OrderModule} from "./views/order/order.module";
import {ProductsModule} from "./views/products/products.module";

let AuthInterceptor;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    SharedModule,
    MainModule,
    OrderModule,
    ProductsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterLinkWithHref,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
