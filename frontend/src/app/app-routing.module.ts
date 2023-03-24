import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DressComponent } from './dress/dress.component';
import { SkirtComponent } from './skirt/skirt.component';
import { OrderpageComponent } from './orderpage/orderpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path:'sign-up', component: SignUpComponent },
  {path:'checkout', component: CheckoutComponent},
  {path: 'dress',component: DressComponent},
  {path: 'skirt',component: SkirtComponent},
  {path: 'orderPage',component: OrderpageComponent},
  {path: 'paymentpage',component: PaymentpageComponent},
  {path: 'orderconfirmation',component: OrderConfirmationComponent},
  {path: 'app-home',component: HomeComponent},
  {path: 'app-cart',component: CartComponent},
  {path: 'app-checkout-products',component: CheckoutProductsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
