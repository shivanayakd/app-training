import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { WebsiteService } from '../website.service';

@Component({
  selector: 'app-websitestatus',
  templateUrl: './websitestatus.component.html',
  styleUrls: ['./websitestatus.component.css']
})
export class WebsitestatusComponent implements OnInit, OnDestroy {
  webdata: any;
  post: any;
  subjectsub;
  constructor(private webserve: WebsiteService) { }

  ngOnInit() {
    this.webdata = this.webserve.getWebsites();
    this.subjectsub = this.webserve.tesSub.subscribe(
      (res) => {
        this.post = res;
        console.log('data from subject', res);
      }
    );
  }

  changeState(i) {
    this.webserve.updateStatus(i);
  }

    ngOnDestroy() {
      this.subjectsub.unsubscribe();
    }
}
