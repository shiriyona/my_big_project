import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Provider } from 'src/app/contacts/models/providers.model';
import { ProvidersService } from 'src/app/contacts/services/providers.service';

@Component({
  selector: 'app-add-provider-dialog',
  templateUrl: './add-provider-dialog.component.html',
  styleUrls: ['./add-provider-dialog.component.css']
})
export class AddProviderDialogComponent implements OnInit {
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;
  @ViewChild('idInput') idInputRef: ElementRef;
  @ViewChild('emailInput') emailInputRef: ElementRef;
  @ViewChild('addresInput') addresInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  @ViewChild('imgInput') imgInputRef: ElementRef;

  constructor(private proService: ProvidersService) { }

  ngOnInit(): void {
  }

  addProvider() {
    const proFirstName = this.firstNameInputRef.nativeElement.value;
    const proLastName = this.lastNameInputRef.nativeElement.value;
    const proPhone = this.phoneInputRef.nativeElement.value;
    const proId = this.idInputRef.nativeElement.value;
    const proEmail = this.emailInputRef.nativeElement.value;
    const proAddres = this.addresInputRef.nativeElement.value;
    const proDescription = this.descriptionInputRef.nativeElement.value;
    const newProvider = 
    {
      firstName: proFirstName,
      lastName: proLastName,
      phone: proPhone,
      id: proId,
      email: proEmail,
      addres: proAddres,
      description: proDescription,
    }
    this.proService.sendNewProvider(newProvider);
  }

}
