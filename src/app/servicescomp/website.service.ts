import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class WebsiteService {

 
    tesSub = new Subject();
    
    websites = [
        {
          name: 'google',
          status: 'active'
        },
        {
          name: 'yahoo',
          status: 'inactive'
        }
      ];

      addToArr(e) {
          console.log('in add-----', e);
        // this.websites.unshift(e);
        this.websites.push(e);
      }
    
      updateStatus(u) {
        this.websites[u].status = this.websites[u].status == 'active' ? 'inactive' : 'active';
      }

      getWebsites() {
          return this.websites;
      }
}