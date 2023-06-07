import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Provider } from '../../models/providers.model';
import { ProvidersService } from '../../services/providers.service';
import { MatDialog } from '@angular/material/dialog';
import { AddProviderDialogComponent } from './add-provider-dialog/add-provider-dialog.component';
import { Subscription } from 'rxjs';
import { EditProviderComponent } from 'src/app/contacts/components/providers-list/edit-provider/edit-provider.component';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrls: ['./providers-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProvidersListComponent implements OnInit {
  providers: Provider[] = [];
  getProvidersSubscription: Subscription;
  getAddProviderSubscription: Subscription;

  constructor(private providersService: ProvidersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProviders();
    this.providersService.getEditprovider().subscribe((provider: Provider) => {
      this.onEditProvider(provider)
    });
  }

  getProviders() {
    this.getProvidersSubscription = this.providersService.addProviders().subscribe(res => {
      this.providers = res;
    });
    this.providersService.addNewProvider().subscribe((provider: Provider) => {
      this.addProvider(provider)
    });
  }

  openRow(provider) {
    provider.isOpen = !provider.isOpen;
  }

  openEditProviderDialog(provider) {
    this.providersService.providerEdit(provider);
    const dialogRef = this.dialog.open(EditProviderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onEditProvider(editProvider: Provider) {
    for (let i = this.providers.length - 1; i >= 0; i--) {
      if (editProvider.id === this.providers[i].id) {
        this.providers[i] = editProvider;
        break;
      }
    }
  }

  addProvider(provider: Provider) {
    this.providers.push(provider)
  }

  openAddProviderDialog() {
    const dialogRef = this.dialog.open(AddProviderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnDestroy(): void {
    this.getProvidersSubscription.unsubscribe();
  }

}

