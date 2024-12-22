import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  noResult: boolean = false;
  searchQuery: string = '';

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      const search = params['search'] || '';
      this.searchQuery = search;

      this.productService.getProducts(search)
        .pipe(
          tap(() => {
            this.loading = false;
          })
        )
        .subscribe({
          next: data => {
            this.products = data;
            this.noResult = this.products.length === 0;
          },
          error: error => {
            console.log(error);
            this.router.navigate(['/']);
          }
        });
    });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  goToProduct(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
