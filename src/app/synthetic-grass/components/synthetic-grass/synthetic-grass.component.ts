import { Component, OnInit } from '@angular/core';
import { SyntheticGrasService } from '../../services/synthetic-grass.services';
import { MessengerService } from 'src/app/shopping-list/services/messeger.service';
import { SyntheticGrass } from '../../models/synthetic-grass.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-synthetic-grass',
  templateUrl: './synthetic-grass.component.html',
  styleUrls: ['./synthetic-grass.component.css']
})
export class SyntheticGrassComponent implements OnInit {
  syntheticGrass: SyntheticGrass[] = [];
  getSyntheticGrassSubscription: Subscription;
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [5, 10, 15, 20]

  constructor(private synGrassService: SyntheticGrasService, private msg: MessengerService) { }

  ngOnInit(): void {
    this.getSyntheticGrass();
  }

  getSyntheticGrass() {
    this.getSyntheticGrassSubscription = this.synGrassService.getsynGrass().subscribe(res => {
      this.syntheticGrass = res;
    });
  }

  ngOnDestroy(): void {
    this.getSyntheticGrassSubscription.unsubscribe();
  }


  postList() {
    this.synGrassService.getsynGrass().subscribe((response) => {
      this.syntheticGrass = response;
      console.log(this.syntheticGrass);
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getSyntheticGrass();
    this.postList();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getSyntheticGrass();
    this.postList();
  }  
}
