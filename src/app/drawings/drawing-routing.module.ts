import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawingsComponent } from './components/drawing/drawings.component';
import { SigningPadComponent } from './components/signing-pad/signing-pad.component';



const routes: Routes = [
    { path: 'drawings', component: DrawingsComponent },
    { path: 'signing-pad', component: SigningPadComponent },

    {
        path: '',
        redirectTo: 'drawings',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DrawingRoutingModule {
  
  }