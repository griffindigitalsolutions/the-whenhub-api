import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  //add configuration settings
  public whenHubApiKey: string = '';
  public publicEventAPIUrl = 'http://localhost:3000';

  constructor() {
        //we need to update the baseUrl depending on where this application is running - test or dev
        if (window.location.host.indexOf('griffin.digital') >= 0) {
            this.publicEventAPIUrl = "http://griffin.digital:3000";
        }
  }

}