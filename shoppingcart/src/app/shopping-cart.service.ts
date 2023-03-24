import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Customer } from './Customer';
import { catchError, retry } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { Product } from './Product';
import { OrderItem } from './OrderItem';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  [x: string]: any;
  shopping_cart_items: any[]=[];

  private _url: string = "http://localhost:8080/springmvc3";

  constructor(private http: HttpClient) {
    
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this._url + '');
  }

  handleError(handleError: any): import("rxjs").OperatorFunction<Customer, any> {
    throw new Error('Method not implemented.');
  }

  createCustomer(customer: any): Observable<Customer> {
    return this.http.post<Customer>(this._url + '/Customer/Register', JSON.stringify(customer), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }
  allProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this._url + '/Customer/allProduct');
  }
  add2Cart(orderitem: any): Observable<Product> {
    return this.http.post<Product>(this._url + '/Customer/Register', JSON.stringify(orderitem), this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));

  }
  allOrderItem(): Observable<Product> {
    return this.http.get<Product>(this._url + '/Customer/allProduct');
  }
  getProductList(): Observable<Product> {
    return this.http.get<Product>(this._url + '/Product/AllProduct');
  }
addCart(name:any){
return this.http.get('http://localhost:8080/springmvc3'+'/OrderItem/getProduct/'+name);
}
getCartList(): Observable<OrderItem[]>{
return this.http.get<OrderItem[]>(this._url+'/OrderItem/AllCart');
}


}
