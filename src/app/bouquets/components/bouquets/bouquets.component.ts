import { Component, OnInit } from '@angular/core';
import { Bouquets } from '../../models/bouquets.model';
import { Subscription } from 'rxjs';
import { BouquetsService } from '../../services/bouquets.services';
import { MessengerService } from 'src/app/shopping-list/services/messeger.service';

@Component({
  selector: 'app-bouquets',
  templateUrl: './bouquets.component.html',
  styleUrls: ['./bouquets.component.scss']
})
export class BouquetsComponent implements OnInit {
  bouquets: Bouquets[] = [];
  getBouquetsSubscription: Subscription;

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

  addToCart(bouquet) {
    this.msg.sendMsg(bouquet);
  }

}
