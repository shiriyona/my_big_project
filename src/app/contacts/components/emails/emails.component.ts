import {Component, OnInit} from '@angular/core';

export interface PeriodicElement {
  subject: string;
  position: number;
  time: number;
  from: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, subject: 'Hydrogen', time: 1.0079, from: 'from: H'},
  {position: 2, subject: 'Helium', time: 4.0026, from: 'from: He'},
  {position: 3, subject: 'Lithium', time: 6.941, from: 'from: Li'},
  {position: 4, subject: 'Beryllium', time: 9.0122, from: 'from: Be'},
  {position: 5, subject: 'Boron', time: 10.811, from: 'from: B'},
  {position: 6, subject: 'Carbon', time: 12.0107, from: 'from: C'},
  {position: 7, subject: 'Nitrogen', time: 14.0067, from: 'from: N'},
  {position: 8, subject: 'Oxygen', time: 15.9994, from: 'from: O'},
  {position: 9, subject: 'Fluorine', time: 18.9984, from: 'from: F'},
  {position: 10, subject: 'Neon', time: 20.1797, from: 'from: Ne'},
];

/**
 * @title Binding event handlers and properties to the table rows.
 */
@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  clickedRows = new Set<PeriodicElement>();

  constructor() { }

  ngOnInit(): void {
  }

}
