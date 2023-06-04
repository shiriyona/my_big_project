import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/contacts/models/customers.model';
import { CustomersService } from 'src/app/contacts/services/customers.service';
import { DownloadFileService } from 'src/app/contacts/services/download-file.service';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

constructor(public src: string, public file: File) { }
}


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  selectedFile: ImageSnippet;
  editCustomer: Customer;
  getEditCustomersSubscription: Subscription;
  changeImg: boolean = false;
  img;

  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;
  @ViewChild('countryInput') countryInputRef: ElementRef;
  @ViewChild('cityInput') cityInputRef: ElementRef;
  @ViewChild('ageInput') ageInputRef: ElementRef;  
  @ViewChild('statusInput') statusInputRef: ElementRef;  
  @ViewChild('imgInput') imgInputRef: ElementRef;

  constructor(private imageService: DownloadFileService, private customersService: CustomersService) {
  }

  ngOnInit(): void {
    this.getEditCustomer();
  }

  getEditCustomer() {
    this.getEditCustomersSubscription = this.customersService.onEditCustomer().subscribe(res => {
      this.editCustomer = res;
    });
    this.img = this.editCustomer.img;
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
      this.img = this.selectedFile.src
      this.changeImg = true;
    });

    reader.readAsDataURL(file);
    if (this.changeImg === false) {
      this.img = this.editCustomer.img;
    }
    this.changeImg = false;
  }


  saveChanges() {
    const customerFirstName = this.firstNameInputRef.nativeElement.value;
    const customerLasttName = this.lastNameInputRef.nativeElement.value;
    const customerPhone = this.lastNameInputRef.nativeElement.value;
    const customerCountry = this.countryInputRef.nativeElement.value;;
    const customerCity = this.cityInputRef.nativeElement.value;
    const customerAge = this.ageInputRef.nativeElement.value;  
    const customerStatus = this.statusInputRef.nativeElement.value;
    const customerImg = this.img;
    const editCustomer = new Customer(customerFirstName, customerLasttName, customerPhone, this.editCustomer.id, customerCountry, customerCity, customerAge, customerStatus, customerImg);
    this.customersService.onCustomerEdit(editCustomer);
  }
}