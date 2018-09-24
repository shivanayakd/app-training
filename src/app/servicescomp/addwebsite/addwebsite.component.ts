import { WebsiteService } from './../website.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addwebsite',
  templateUrl: './addwebsite.component.html',
  styleUrls: ['./addwebsite.component.css']
})
export class AddwebsiteComponent implements OnInit {
  l: number;
  constructor(private webserve: WebsiteService) { }

  ngOnInit() {
      this.l = 1;
      setInterval(() => {
        this.webserve.tesSub.next(this.l++);
      }, 2000);
  }

  saveData(data) {
    console.log('sAVE DATA ', data.value);
    this.webserve.addToArr(data.value);
  }
}
