import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ScheduleService {

  constructor(public apiService: ApiService,
    public configService: ConfigService) { }

  getSchedules() {
    return this.apiService.get({
      url: 'https://api.whenhub.com/api/users/me/schedules?access_token=' + this.configService.whenHubApiKey
    });
  }
  getScheduleDetails(scheduleId) {
    return this.apiService.get({
      url: 'https://api.whenhub.com/api/schedules/' + scheduleId + '?filter[include]=media&filter[include][events]=media&access_token=' + this.configService.whenHubApiKey
    });
  }
  saveEvent(event) {
    return this.apiService.patch({
      ///   /https://api.whenhub.com/api/schedules/scheduleId/events/eventId
      url: 'https://api.whenhub.com/api/schedules/' + event.scheduleId + '/events/' + event.id + '?access_token=' + this.configService.whenHubApiKey,
      content: event
    });
  }
  deleteEvent(eventId) {
    return this.apiService.delete({
      url: 'https://api.whenhub.com/api/events/' + eventId + '?access_token=' + this.configService.whenHubApiKey
    });
  }

}
