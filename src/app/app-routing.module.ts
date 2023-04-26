import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [ 
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
    { path: 'drawing', loadChildren: () => import('./drawings/drawing.module').then(m => m.DrawingModule)},
    { path: 'emails', loadChildren: () => import('./emails/emails.module').then(m => m.EmailssModule)},  
    { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
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