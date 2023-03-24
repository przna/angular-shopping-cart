import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../Product';
import {CheckoutProductsService} from '../checkout-products.service';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  product:any={};
  constructor(private shoppingcartservice:ShoppingCartService) { 
  
  }
  ngOnInit(): void {
    console.log(this.product);
    this.shoppingcartservice.getProductList().subscribe((data: any) => {
      console.log(data);
      this.product=data});
    
  }
  addCart(name:any){
this.shoppingcartservice.addCart(name).subscribe(data=>alert("Added to cart"));
  }
}
  /*@Input()
  public cart={productName:'',unitPrice:'',imageUrl:'' };
  constructor(public restApi:ShoppingCartService,
    public router:Router) { }

  ngOnInit() {}

  addtoCart(){
    console.log(this.cart);
      this.restApi.add2Cart(this.cart).subscribe((data:{})=>{this.router.navigate(['/app-cart'])})
  }
  */


