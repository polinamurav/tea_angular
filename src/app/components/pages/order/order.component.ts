import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;
  isSuccess: boolean = false;
  isFail: boolean = false;

  formValues = this.fb.group({
    product: ['', [Validators.required]],
    comment: [''],
    name: ['', [Validators.pattern('^[a-zA-Zа-яА-Я]+$'), Validators.required]],
    last_name: ['', [Validators.pattern('^[a-zA-Zа-яА-Я]+$'), Validators.required]],
    phone: [, [Validators.pattern('^\\+?\\d{11}$'), Validators.required]],
    country: ['', [Validators.required]],
    zip: ['', [Validators.required]],
    address: ['', [Validators.pattern('^[a-zA-ZА-Яа-я0-9\\s/-]+$'), Validators.required]],
  });

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.patchValue({
          product: params['product']
        });
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }

  createOrder() {
    const formValues = this.formValues.value;

    this.subscriptionOrder = this.productService.createOrder({
      product: formValues.product ? formValues.product : '',
      comment: formValues.comment ? formValues.comment : '',
      name: formValues.name ? formValues.name : '',
      last_name: formValues.last_name ? formValues.last_name : '',
      phone: formValues.phone ? formValues.phone : 0,
      country: formValues.country ? formValues.country : '',
      zip: formValues.zip ? formValues.zip : '',
      address: formValues.address ? formValues.address : ''
    })
      .subscribe(response => {
        if (response.success && !response.message) {
          this.isSuccess = true;
        } else {
          this.isFail = true;
        }
      })
  }

}
