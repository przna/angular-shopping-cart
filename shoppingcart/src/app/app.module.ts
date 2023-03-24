import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { LoginComponent } from './PAGES/login/login.component';
import {HeaderComponent} from './COMPONENTS/header/header.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DressComponent } from './dress/dress.component';
import { SkirtComponent } from './skirt/skirt.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CheckoutComponent,
    LoginComponent,
    HeaderComponent,
    CheckoutProductsComponent,
    CheckoutSubtotalComponent,
    SignUpComponent,
    DressComponent,
    SkirtComponent,
    PaymentpageComponent,
    OrderpageComponent,
    OrderConfirmationComponent,
    SignUpComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
