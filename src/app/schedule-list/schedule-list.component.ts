import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  public schedules : [object] = [{}]; //array of objects : todo: implement model
  
  constructor(public apiService : ApiService, 
      public configService : ConfigService, 
      public titleService : Title,
      public scheduleService: ScheduleService) {
    //set the page title
    titleService.setTitle('Edit or add schedule');

    //we will need the data
    this.getData();
  }

  ngOnInit() {
  }

  /**
   * Get the data from the service (schedules in this case)
   */
  getData(){
    this.scheduleService.getSchedules().subscribe(
      (data) => {
        console.log('GETTING DATA')
        console.log(data)
        // this.schedules = data;
      },
      (error) => {
        alert('error')
      }
    );
  }

}
