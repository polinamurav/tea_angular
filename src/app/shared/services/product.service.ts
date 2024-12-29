import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../../../types/product.type";
import {OrderType} from "../../../types/order.type";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProducts(search: string): Observable<ProductType[]> {
    let params = new HttpParams();
    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<ProductType[]>('https://testologia.ru/tea', {params});
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderType) {
    return this.http.post<{success: boolean, message?: string }>('https://testologia.ru/order-tea', data);
  }
}
