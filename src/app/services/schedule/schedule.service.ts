import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { ConfigService } from '../config/config.service';

@Injectable()
export class ScheduleService {

  constructor(public apiService : ApiService, 
              public configService : ConfigService) { }

  getSchedules(){
      return this.apiService.get({
        url: 'https://api.whenhub.com/api/users/me/schedules?access_token=' + this.configService.whenHubApiKey
      });
  }
  getScheduleDetails(scheduleId){
      return this.apiService.get({
        url: 'https://api.whenhub.com/api/schedules/'+ scheduleId +'?filter[include]=media&filter[include][events]=media&access_token=' + this.configService.whenHubApiKey
      });
  }

}
