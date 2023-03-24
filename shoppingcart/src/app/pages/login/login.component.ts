import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  public Customer:any=[];
  public password:string='';
  public id:any;
  public pass:any;
  constructor(public restApi: ShoppingCartService,
    public router: Router) { }
    ngOnInit(): void {
    }
   login()
   {
     this.restApi.loginCustomer(this.email).subscribe(
       data=>{this.id=data.customerId;
       this.pass=data.password;
       if(this.id==this.email&&this.pass===this.password)
       {
       alert('welcome');
       }
      else{
        alert('wrong credentials');
          }
        }
     );
    }
  } 
