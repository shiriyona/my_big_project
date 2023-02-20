import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './shared/tab/tab.component';
import { ShoppingCartComponent } from './shopping-list/shopping-cart/shopping-cart.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingPaymentListComponent } from './shopping-list/shopping-payment-list/shopping-payment-list.component';

const appRoutes: Routes = [
    { path: 'flowers', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    // { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
    { path: 'drawing', loadChildren: () => import('./drawings/drawing.module').then(m => m.DrawingModule)},
    { path: 'providers', loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule)},
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'shopping-payment-page', component: ShoppingPaymentListComponent },
    { path: 'details', component: TabComponent },
     
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