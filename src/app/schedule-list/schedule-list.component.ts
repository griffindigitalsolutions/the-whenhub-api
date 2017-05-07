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

  public schedules: any = []; //array of objects : todo: implement model
  private _confirmDeletingId: string = '';
  private _message: any = { message: '', type: '' }

  constructor(public apiService: ApiService,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService) {
    //set the page title
    titleService.setTitle('Edit or add schedule');

    //we will need the data
    this.getSchedules();
  }

  ngOnInit() {
  }

  /**
   * Get the data from the service (schedules in this case)
   */
  getSchedules() {
    this.scheduleService.getSchedules().subscribe(
      (data) => {
        if (data) {
          this.schedules = data;
        }
      },
      (error) => {
        alert('Error!')
      }
    );
  }

  /**
   * Delete schedule. Require confirmation first
   * @param scheduleId
   */
  deleteSchedule(scheduleId) {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;

    if (scheduleId !== this._confirmDeletingId) {
      this._confirmDeletingId = scheduleId;
      return;
    } else if (scheduleId === this._confirmDeletingId) {
      this.scheduleService.deleteSchedule(scheduleId).subscribe(
        (data) => {
          this._message.message = 'Schedule deleted!';
          this._message.type = 'success';
          this._confirmDeletingId = '';

          //and get the schedules again
          this.getSchedules();
        },
        (error) => {
          this._message.message = 'Error deleting schedule!';
          this._message.type = 'danger';
        }
      );
    }
  }

}
