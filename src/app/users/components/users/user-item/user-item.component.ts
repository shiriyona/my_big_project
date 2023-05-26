import { Component, Input, OnInit } from '@angular/core';
import { UserDetails } from 'src/app/users/models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: UserDetails;

  constructor() { }

  ngOnInit(): void {
  }

}
