import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tforms',
  templateUrl: './tforms.component.html',
  styleUrls: ['./tforms.component.css']
})
export class TformsComponent implements OnInit {

  myreactivefrm: FormGroup;



  menuItems: any;
  category: string[];
  @ViewChild('f') myform: NgForm;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createmyreactiveform();
    this.category = ['food', 'drinks', 'deserts'];
    this.menuItems = [
      {
        name: 'Burger',
        category: 'food',
        cost: 15
      },
      {
        name: 'Pizza',
        category: 'food',
        cost: 20
      }
    ];
  }

  // submitValues(f: NgForm) {
  submitValues() {
    // console.log('From submitted values', f.value);
    console.log('From submitted values', this.myform.value);
    // this.menuItems.push(f.value);
    this.menuItems.push(this.myform.value);
  }

  createmyreactiveform() {
    this.myreactivefrm = this.fb.group({
      'rname' : ['', [Validators.required, Validators.minLength(5)]],
      'rcategory': ['', Validators.required],
      'rcost' : ['', Validators.required]
    });
  }

  myreactiveformsubmit() {
    console.log('values from reactive form', this.myreactivefrm.value);
  }

}
