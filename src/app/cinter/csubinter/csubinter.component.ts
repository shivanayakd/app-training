import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-csubinter',
  templateUrl: './csubinter.component.html',
  styleUrls: ['./csubinter.component.css']
})
export class CsubinterComponent implements OnInit {
  pitem: string;
  @Input('pitem') passeditem;
  @Output('rti') removethisitem = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  removeMe() {
    this.removethisitem.emit();
  }

}
