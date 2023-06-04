import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BouquetsComponent } from './components/bouquets/bouquets.component';



const routes: Routes = [
    { path: 'bouquets', component: BouquetsComponent },
    {
        path: '',
        redirectTo: 'bouquets',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BouquetsRoutingModule {}