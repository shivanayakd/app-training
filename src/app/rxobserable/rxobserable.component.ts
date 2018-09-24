import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-rxobserable',
  templateUrl: './rxobserable.component.html',
  styleUrls: ['./rxobserable.component.css']
})
export class RxobserableComponent implements OnInit, OnDestroy {
  firstsub;
  secondsub;
  constructor() { }

  ngOnInit() {
    const source = interval(1000).pipe(
      map((data) => { return data * 2})
    );

   this.firstsub = source.subscribe((data) => {
      console.log('from sub-->', data);
    })


    const custom = Observable.create(
      (ob: Observer<any>) => {
        setTimeout(() => {
          ob.next('First data');
        }, 2000);
        setTimeout(() => {
          ob.next('Second data');
        }, 4000);
        // setTimeout(() => {
        //   ob.error('Error data');
        // }, 5000);
        setTimeout(() => {
          ob.complete();
        }, 5000);
        setTimeout(() => {
          ob.next('third data data');
        }, 6000);
      }
    );

    this.secondsub = custom.subscribe(
      (data) => {
        console.log('data fro', data);
      },
      (err) => {
        console.log('error data', err);
      },
      () => { console.log('completed********');}
    );

  }

    ngOnDestroy() {
      this.firstsub.unsubscribe();
      this.secondsub.unsubscribe();
    }
}
