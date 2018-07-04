import { Component, OnInit, ElementRef } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-mydirectives',
  templateUrl: './mydirectives.component.html',
  styleUrls: ['./mydirectives.component.css']
})
export class MydirectivesComponent implements OnInit {
  showtable: boolean;
  itemlist: Array<Item>;
  max: number;
  ngOnInit() {
    this.max = 955;
    this.showtable = true;
    this.itemlist = [
      {name: 'milk', cost: 25 },
      {name: 'rice', cost: 125 },
      {name: 'oil', cost: 75 },
      {name: 'Flour', cost: 175 },
      {name: 'cheese', cost: 55 },
      {name: 'apples', cost: 95 }];
  }

  // checngetable() {
  //   this.showtable = !this.showtable;
  // }

  setColor(cost: number) {
    console.log('cost of item:', cost);
    if (cost < 100) {
      return {'color': 'green'};
    } else {
      return { 'color': 'red'};
    }
  }
}
