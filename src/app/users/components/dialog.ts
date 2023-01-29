import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users.model';
import { UsersService } from '../services/users.service';
import { Subscription } from 'rxjs';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';


@Component({
    selector: 'dialog-animations-example-dialog',
    templateUrl: 'dialog-content-example-dialog.html',
  })
  export class DialogContentExampleDialog {
    
  }