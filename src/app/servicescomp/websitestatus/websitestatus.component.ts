import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-websitestatus',
  templateUrl: './websitestatus.component.html',
  styleUrls: ['./websitestatus.component.css']
})
export class WebsitestatusComponent implements OnInit {
  webdata: any;
  constructor(private webserve: WebsiteService) { }

  ngOnInit() {
    this.webdata = this.webserve.getWebsites();
  }

  changeState(i) {
    this.webserve.updateStatus(i);
  }

}
