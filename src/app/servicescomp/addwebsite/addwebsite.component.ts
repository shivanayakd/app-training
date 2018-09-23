import { WebsiteService } from './../website.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addwebsite',
  templateUrl: './addwebsite.component.html',
  styleUrls: ['./addwebsite.component.css']
})
export class AddwebsiteComponent implements OnInit {

  constructor(private webserve: WebsiteService) { }

  ngOnInit() {
  }
  
  saveData(data) {
    console.log('sAVE DATA ', data.value);
    this.webserve.addToArr(data.value);
  }
}
