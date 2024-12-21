import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = [];
  private subscription: Subscription | null = null;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.productService.getProducts().subscribe( {
      next: data => {
        this.products = data;
      },
      error: error => {
        console.log(error);
        this.router.navigate(['/']);
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  goToProduct(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
