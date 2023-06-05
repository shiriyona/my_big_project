import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
    { path: '', component: UsersComponent },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserssRoutingModule {}