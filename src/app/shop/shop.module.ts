import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent },
      { path: 'checkout', component: CheckoutComponent },
    ])
  ],
  declarations: [CartComponent, CheckoutComponent]
})
export class ShopModule { }
