import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartListComponent } from './shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingPaymentListComponent } from './shopping-payment-list/shopping-payment-list.component';
import { ShoppingPaymentComponent } from './shopping-payment/shopping-payment.component';


const routes: Routes = [
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'shopping-payment', component: ShoppingPaymentComponent },
    // { path: 'shopping-cart', component: ShoppingCartListComponent },

    {
        path: '',
        redirectTo: 'shopping-list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ShoppingListRoutingModule {
  
  }