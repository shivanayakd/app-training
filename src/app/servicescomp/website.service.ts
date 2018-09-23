import { Injectable } from "@angular/core";

@Injectable()
export class WebsiteService {
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