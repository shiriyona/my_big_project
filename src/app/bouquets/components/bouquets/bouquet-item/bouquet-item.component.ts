import { Component, Input, OnInit } from '@angular/core';
import { Bouquets } from 'src/app/bouquets/models/bouquets.model';
import { MessengerService } from 'src/app/shopping-list/services/messeger.service';

@Component({
  selector: 'app-bouquet-item',
  templateUrl: './bouquet-item.component.html',
  styleUrls: ['./bouquet-item.component.css']
})
export class BouquetItemComponent implements OnInit {
  @Input() productItem: Bouquets

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(productItem) {
    this.msg.sendMsg(productItem);
  }

}
