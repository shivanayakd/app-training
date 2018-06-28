import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  inval: number;
  istextboxactive: boolean;
  constructor() { }

  ngOnInit() {
    this.inval = 25;
    this.istextboxactive  = false;
  }

  activatetextbox() {
    this.istextboxactive = true;
  }

  getInval() {
    return this.inval;
  }

  counter(i: any) {
    if (i === 0) {
      this.inval--;
    } else if (i === 1 ) {
      this.inval++;
    }
  }

}
