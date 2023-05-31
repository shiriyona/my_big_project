import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Provider } from '../../models/providers.model';
import { ProvidersService } from '../../services/providers.service';
import { MatDialog } from '@angular/material/dialog';
import { ProviderDialogComponent } from './provider-dialog/provider-dialog.component';
import { AddProviderDialogComponent } from './add-provider-dialog/add-provider-dialog.component';
import { Subscription } from 'rxjs';

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

  openEditProviderDialog() {
    const dialogRef = this.dialog.open(ProviderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
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

