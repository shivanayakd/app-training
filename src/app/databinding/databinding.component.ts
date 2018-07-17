import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  inval: number;
  istextboxactive: boolean;
  constructor(private router: Router) { }

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

  onclick() {
    console.log('some complex operation dome...!');
    this.router.navigate(['cinter']);

  }

}
