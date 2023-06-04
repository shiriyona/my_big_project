import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../../models/bouquets.model';
import { Subscription } from 'rxjs';
import { BouquetsService } from '../../services/bouquets.services';

@Component({
  selector: 'app-bouquets',
  templateUrl: './bouquets.component.html',
  styleUrls: ['./bouquets.component.scss']
})
export class BouquetsComponent implements OnInit {
  bouquets: Bouquets[] = [];
  getBouquetsSubscription: Subscription;

  constructor(private bouquetsService: BouquetsService) { }

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

}
