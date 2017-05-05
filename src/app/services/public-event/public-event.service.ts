import { Injectable } from '@angular/core';
import { ApiService } from "app/services/api/api.service";
import { ConfigService } from "app/services/config/config.service";

@Injectable()
export class PublicEventService {

  constructor(public apiService: ApiService,
    public configService: ConfigService) { }

  getEvents() {
    return this.apiService.get({
      url: this.configService.publicEventAPIUrl + '/events'
    });
  }

  saveEvent(event) {
    return this.apiService.post({
      url: this.configService.publicEventAPIUrl + '/events',
      body: event
    });
  }
}
