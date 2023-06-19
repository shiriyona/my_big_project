import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../../models/bouquets.model';
import { Subscription } from 'rxjs';
import { BouquetsService } from '../../services/bouquets.services';
import { MessengerService } from 'src/app/shared/services/messeger.service';

@Component({
  selector: 'app-bouquets',
  templateUrl: './bouquets.component.html',
  styleUrls: ['./bouquets.component.scss']
})
export class BouquetsComponent implements OnInit {
  bouquets: Bouquets[] = [];
  getBouquetsSubscription: Subscription;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private bouquetsService: BouquetsService, private msg: MessengerService) { }

  ngOnInit(): void {
    this.getBouquets();
  }

  getBouquets() {
    this.getBouquetsSubscription = this.bouquetsService.getBouquets().subscribe(res => {
      this.bouquets = res;
    });
  }

  ngOnDestroy(): void {
    this.getBouquetsSubscription.unsubscribe();
  }

  postList() {
    this.bouquetsService.getBouquets().subscribe((response) => {
      this.bouquets = response;
      console.log(this.bouquets);
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getBouquets();
    this.postList();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getBouquets();
    this.postList();
  }  


}
