import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ShoppingCartService } from '../shopping-cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:any=[];
  totalPrice: number=0;
  constructor(private shoppingcartservices:ShoppingCartService) { }

  ngOnInit(): void {
    this.shoppingcartservices.getCartList().subscribe(data=>{this.cart=data
      for(var i in this.cart)
    {
      console.log(this.cart[i].unitPrice)
      this.totalPrice=this.totalPrice+this.cart[i].unitPrice;
    }});
  
  }
  
  
}
