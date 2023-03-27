import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { TabComponent } from './components/tab/tab.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
    { path: 'providers', component: ProvidersListComponent },
    { path: 'users', component: UsersComponent },
    { path: 'contacts', component: TabComponent },
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

export class ContactsRoutingModule {}