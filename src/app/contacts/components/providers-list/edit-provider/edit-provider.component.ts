import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Provider } from 'src/app/contacts/models/providers.model';
import { ProvidersService } from 'src/app/contacts/services/providers.service';

@Component({
  selector: 'app-edit-provider',
  templateUrl: './edit-provider.component.html',
  styleUrls: ['./edit-provider.component.css']
})
export class EditProviderComponent implements OnInit {
  @ViewChild('firstNameInput') firstNameInputRef: ElementRef;
  @ViewChild('lastNameInput') lastNameInputRef: ElementRef;
  @ViewChild('phoneInput') phoneInputRef: ElementRef;
  @ViewChild('emailInput') emailInputRef: ElementRef;
  @ViewChild('addresInput') addresInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  @ViewChild('imgInput') imgInputRef: ElementRef;

  provider: Provider;

  constructor(private proService: ProvidersService) { }

  ngOnInit(): void {
    this.getEditProvider();
  }

  getEditProvider(){
    this.provider = this.proService.onEditprovider();
  }

  saveProvider() {
    const proFirstName = this.firstNameInputRef.nativeElement.value;
    const proLastName = this.lastNameInputRef.nativeElement.value;
    const proPhone = this.phoneInputRef.nativeElement.value;
    const proEmail = this.emailInputRef.nativeElement.value;
    const proAddres = this.addresInputRef.nativeElement.value;
    const proDescription = this.descriptionInputRef.nativeElement.value;
    const editProvider = 
      {
        firstName: proFirstName,
        lastName: proLastName,
        phone: proPhone,
        id: this.provider.id,
        email: proEmail,
        addres: proAddres,
        description: proDescription,
      }
    this.proService.sendEditprovider(editProvider);
  }
}

