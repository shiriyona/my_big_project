import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-list/shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component'; 
import { CheckoutComponent } from './components/shopping-list/shopping-payment-list/checkout/checkout.component';
import { ShoppingPaymentListComponent } from './components/shopping-list/shopping-payment-list/shopping-payment-list.component';


const routes: Routes = [
    { path: 'all', component: ShoppingListComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'shopping-payment', component: ShoppingPaymentListComponent },
    { path: 'checkout', component: CheckoutComponent },
    {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}