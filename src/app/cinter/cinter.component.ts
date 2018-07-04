import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cinter',
  templateUrl: './cinter.component.html',
  styleUrls: ['./cinter.component.css']
})
export class CinterComponent implements OnInit {
  items: Array<any>;
  // name: string;
  @ViewChild('name') name: ElementRef; 
  @ViewChild('myhead') heading: ElementRef;
  constructor() { }

  ngOnInit() {
    this.items = ['safsa__123', 'sdfvsef_35'];
  }

  appenditems() {
    this.items.push( this.name.nativeElement.value + '___' +  Math.round(Math.random() * 1000));
    // console.log('name using view child', this.name);
    // console.log('items array', this.items);
    // console.log('My heading', this.heading.nativeElement.textContent);
  }

  removeMe(i: number) {
    this.items.splice(i,1);
  }

}
