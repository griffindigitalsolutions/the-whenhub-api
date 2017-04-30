import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  public schedules : [object] = [{}]; //array of objects : todo: implement model
  
  constructor(apiService : ApiService, configService : ConfigService, titleService : Title) {
    //set the page title
    titleService.setTitle('Edit or add schedule');
  }

  ngOnInit() {
  }

}
