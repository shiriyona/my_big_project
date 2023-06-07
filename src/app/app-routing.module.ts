import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlyLoggedUsersGuard } from './only-logged-user-guard'; 
import { UsersRoleGuard } from './user-role-guard';

const appRoutes: Routes = [ 
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
    { path: 'bouquets', loadChildren: () => import('./bouquets/bouquets.module').then(m => m.BouquetsModule)},
    { path: 'synthetic-grass', loadChildren: () => import('./synthetic-grass/synthetic-grass-module').then(m => m.SyntheticGrassModule)},
    { path: 'drawing', loadChildren: () => import('./drawings/drawing.module').then(m => m.DrawingModule)},
    { path: 'emails', loadChildren: () => import('./emails/emails.module').then(m => m.EmailssModule), canActivate: [OnlyLoggedUsersGuard]},  
    { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule), canActivate: [OnlyLoggedUsersGuard]},
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), canActivate: [OnlyLoggedUsersGuard, UsersRoleGuard]},
    { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UserssModule), canActivate: [OnlyLoggedUsersGuard, UsersRoleGuard]},
    {
        path: '',
        redirectTo: 'shopping-list',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }