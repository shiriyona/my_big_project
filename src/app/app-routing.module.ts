import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'flowers', loadChildren: () => import('./users/users.module').then(m => m.UsersModule)},
    { path: 'shopping-list', loadChildren: () => import('./shopping-list/shoppingList.module').then(m => m.ShoppingListModule)},
    { path: 'drawing', loadChildren: () => import('./drawings/drawing.module').then(m => m.DrawingModule)},
    { path: 'providers', loadChildren: () => import('./providers/providers.module').then(m => m.ProvidersModule)},
    // { path: 'trees', loadChildren: () => import('./trees/trees.module').then(m => m.TreesModule)},
    // { path: 'bushes', loadChildren: () => import('./bushes/bushes.module').then(m => m.BushesModule)},
    // { path: 'synthetic-grass', loadChildren: () => import('./synthetic-grass/synthetic-grass.module').then(m => m.SyntheticGrassModule)},
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