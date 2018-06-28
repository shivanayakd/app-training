import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  inval: number = 25;
  istextboxactive:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  activatetextbox() {
    this.istextboxactive = true;
  }

  getInval() {
    return this.inval;
  }

  counter(i) {
    if(i == 0) {
      this.inval--;
    }
    else if(i == 1 ){
      this.inval++;
    }
  }

}
