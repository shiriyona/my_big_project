import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-list/shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { CheckoutComponent } from './shopping-list/shopping-payment-list/checkout/checkout.component';
import { ShoppingPaymentListComponent } from './shopping-list/shopping-payment-list/shopping-payment-list.component';

const appRoutes: Routes = [
    { path: 'flowers', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
    // { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
    { path: 'drawing', loadChildren: () => import('./drawings/drawing.module').then(m => m.DrawingModule)},
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.loginModule)},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'shopping-payment-page', component: ShoppingPaymentListComponent },
    { path: 'checkout', component: CheckoutComponent },
     
    {
        path: 'shopping-list',
        redirectTo: 'shopping-list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }