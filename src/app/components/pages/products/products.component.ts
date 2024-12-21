import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {Router} from "@angular/router";
import {Subscription, tap} from "rxjs";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: ProductType[] = [];
  private subscription: Subscription | null = null;
  loading: boolean = false;

  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe( {
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
