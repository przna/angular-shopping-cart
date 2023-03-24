import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ShoppingCartService } from 'src/app/shopping-cart.service';
import{Customer} from 'src/app/Customer';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  exform: FormGroup;



  public Customer:any=[];
  @Input()
  public customerDetails={ customerFirstname: '', customerLastname: '', email: '' ,password:'', gender:'',dateOfBirth:''};
  constructor(public restApi:ShoppingCartService,
    public router: Router ) { }

  ngOnInit() {
    this.exform = new FormGroup({
      'customerFirstname' : new FormControl(null, Validators.required),
      'customerLastname' : new FormControl(null, Validators.required),
      //'dateOfBirth' : new FormControl(null, Validators.required),
     // 'gender' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get customerFirstname() {
      return this.exform.get('customerFirstname');
    }
    get customerLastname() {
      return this.exform.get('customerLastname');
    }
    get password() {
      return this.exform.get('password');
    }
    get email() {
      return this.exform.get('email');
    }
   /* get gender() {
      return this.exform.get('gender');
    }
    get dateOfBirth() {
      return this.exform.get('dateOfBirth');
    }*/
  
  


  createCustomer(){
    console.log(this.customerDetails);
    this.restApi.createCustomer(this.customerDetails).subscribe((data: {}) => { this.router.navigate(['/login'])})  
  }

}


