import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';


const routes: Routes = [
    { path: 'providers', component: ProvidersListComponent },
    {
        path: '',
        redirectTo: 'providers',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ProvidersRoutingModule {
  
  }