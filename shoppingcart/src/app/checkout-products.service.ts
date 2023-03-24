import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class CheckoutProductsService {
  items : Product[] = [];
  addToCart(product : Product) {
    this.items.push(product);
  }
  constructor() { }
}
