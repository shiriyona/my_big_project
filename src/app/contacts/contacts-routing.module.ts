import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProvidersListComponent } from './components/providers-list/providers-list.component';
import { UsersComponent } from './components/users/users.component';
import { EmailsComponent } from './components/emails/emails.component';
import { TabComponent } from './components/tab/tab.component';


const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: 'providers', component: ProvidersListComponent }, 
    { path: 'emails', component: EmailsComponent },
    { path: 'contacts', component: TabComponent },
    {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactsRoutingModule {}