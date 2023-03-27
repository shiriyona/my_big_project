import { Component, OnInit, SimpleChanges } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Provider } from '../../models/providers.model';
import { ProvidersService } from '../../services/providers.service';
import { MatDialog } from '@angular/material/dialog';
import { ProviderDialogComponent } from './provider-dialog/provider-dialog.component';
import { AddProviderDialogComponent } from './add-provider-dialog/add-provider-dialog.component';

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
  dataSource;
  columnsToDisplay = ['firstName', 'lastName', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Provider | null;

  constructor(private providersService: ProvidersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProviders();
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  getProviders() {
    this.dataSource = this.providersService.sendProviders()
  }

  openEditProviderDialog() {
    const dialogRef = this.dialog.open(ProviderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onProviderAdded(provider: Provider) {
    this.dataSource.push({ provider })
    console.log(this.dataSource);
  }

  refresh(): void {
    this.getProviders();
  }

  openAddProviderDialog() {
    const dialogRef = this.dialog.open(AddProviderDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

