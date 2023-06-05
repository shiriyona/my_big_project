import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailsComponent } from './components/emails/emails.component';


const routes: Routes = [
    { path: '', component: EmailsComponent },
    {
        path: '',
        redirectTo: 'emails',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmailsRoutingModule {}