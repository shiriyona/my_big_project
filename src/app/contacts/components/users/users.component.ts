import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../../models/customers.model';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DownloadFileService } from '../../services/download-file.service';
import { CustomersService } from '../../services/customers.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @Input() img
  user: Customer
  customers: Customer[] = [];
  panelOpenState = false;
  loadCustomersSubscription: Subscription;
  userColor: boolean = false;


  constructor(private customersService: CustomersService, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getCustomers();
    this.customersService.getEditCustomer().subscribe((customer: Customer) => {
      this.getEditCustomer(customer)
    });
  }

  getCustomers() {
    this.loadCustomersSubscription = this.customersService.getUsers().subscribe(res => {
      this.customers = res;
    });
  }

  openRow(customer) {
    customer.isOpen = !customer.isOpen;
  }

  editCustomer(customer: Customer) {
    const dialogRef = this.dialog.open(AddCustomerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    this.customersService.sendEditCustomer(customer);
  }

  getEditCustomer(editCustomer: Customer) {
    for (let i = this.customers.length - 1; i >= 0; i--) {
      if (editCustomer.id === this.customers[i].id) {
        this.customers[i] = editCustomer;
        break;
      }
    }
  }

}


