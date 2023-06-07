import { Component, Input, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/shopping-list/services/messeger.service';
import { SyntheticGrass } from 'src/app/synthetic-grass/models/synthetic-grass.model';

@Component({
  selector: 'app-synthetic-grass-item',
  templateUrl: './synthetic-grass-item.component.html',
  styleUrls: ['./synthetic-grass-item.component.css']
})
export class SyntheticGrassItemComponent implements OnInit {
  @Input() productItem: SyntheticGrass;

  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

  addToCart(product) {
    this.msg.sendMsg(product);
  }

}
