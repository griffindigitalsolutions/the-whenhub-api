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
      url: 'https://api.whenhub.com/api/schedules/' + event.scheduleId + '/events/' + event.id + '?access_token=' + this.configService.whenHubApiKey,
      content: event
    });
  }
  saveNewEvent(event) {
    return this.apiService.post({
      url: 'https://api.whenhub.com/api/schedules/' + event.scheduleId + '/events' + '?access_token=' + this.configService.whenHubApiKey,
      body: event
    });
  }
  deleteEvent(eventId) {
    return this.apiService.delete({
      url: 'https://api.whenhub.com/api/events/' + eventId + '?access_token=' + this.configService.whenHubApiKey
    });
  }
  deleteSchedule(scheduleId) {
    return this.apiService.delete({
      url: 'https://api.whenhub.com/api/schedules/' + scheduleId + '?access_token=' + this.configService.whenHubApiKey
    });
  }

  saveSchedule(schedule) {
    return this.apiService.patch({
      url: 'https://api.whenhub.com/api/schedules?id=' + schedule.id + '&access_token=' + this.configService.whenHubApiKey,
      content: schedule
    });
  }

  saveNewSchedule(schedule) {
    return this.apiService.post({
      url: 'https://api.whenhub.com/api/users/me/schedules' + '?access_token=' + this.configService.whenHubApiKey,
      body: schedule
    });
  }

}
