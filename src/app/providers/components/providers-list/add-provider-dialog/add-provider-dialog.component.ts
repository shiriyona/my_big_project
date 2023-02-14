import { outputAst } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Provider } from 'src/app/providers/models/providers.model';
import { ProvidersService } from 'src/app/providers/services/providers.service';

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
  @ViewChild('positionInput') positionInputRef: ElementRef;

 
  @Output() providerAdded = new EventEmitter<Provider>()

  constructor(private proService: ProvidersService) { }

  ngOnInit(): void {
  }

  addProvider() {
    const proFirstName =this.firstNameInputRef.nativeElement.value
    const proLastName =this.lastNameInputRef.nativeElement.value
    const proPhone =this.phoneInputRef.nativeElement.value
    const proId =this.idInputRef.nativeElement.value
    const proEmail =this.emailInputRef.nativeElement.value
    const proAddres =this.addresInputRef.nativeElement.value
    const proImg =this.imgInputRef.nativeElement.value
    const proPosition =this.positionInputRef.nativeElement.value
    const newProvider = new Provider(proFirstName, proLastName, proPhone, proId, proEmail, proAddres, proImg, proPosition)
    this.providerAdded.emit(newProvider)
    this.proService.addProviderToTheList(newProvider);
  }

}
