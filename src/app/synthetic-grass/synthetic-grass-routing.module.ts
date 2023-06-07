import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SyntheticGrassComponent } from './components/synthetic-grass/synthetic-grass.component';


const routes: Routes = [
    { path: '', component:  SyntheticGrassComponent},
    {
        path: '',
        redirectTo: 'synthetic-grass',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SyntheticGrassRoutingModule {}