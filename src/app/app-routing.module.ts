import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'flowers', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)},
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
    { path: 'drawing', loadChildren: () => import('./drawings/drawing.module').then(m => m.DrawingModule)},
    {
        path: '',
        redirectTo: 'flowers',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }