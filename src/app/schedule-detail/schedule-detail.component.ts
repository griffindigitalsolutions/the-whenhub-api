import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {

  private _schedule: Object = {};
  private _isEditingEvent: Boolean = false;
  private _eventData: Object = {};
  private _confirmDeletingId: string = '';
  private _message: any = { message: '', type: '' }

  constructor(public apiService: ApiService,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService,
    public router: Router,
    public activatedRoute: ActivatedRoute) {
    //set the page title
    titleService.setTitle('Edit schedule');
  }

  ngOnInit() {
    this.activatedRoute.params
      // .switchMap((params: Params) => { console.info('xxx'); console.info(params.id); return Observable.of(); })
      .subscribe((data) => {
        this.getScheduleDetails(data.id);
      });
  }

  getScheduleDetails(scheduleId) {
    //get schedule details
    this.scheduleService.getScheduleDetails(scheduleId)
      .subscribe(
      (data) => {
        this._schedule = data;
        this.titleService.setTitle('Editing ' + data['name']);
      },
      (error) => { },
    );
  }
  editEvent(event) {
    if (event) {
      this._isEditingEvent = true;
      this._eventData = event;
    }
  }

  stopEditingEvent(event) {
    this._isEditingEvent = false;
  }
  handleEventChange() {
    //details may have changed
    this.getScheduleDetails(this._schedule['id']);
  }

  deleteEvent(eventId) {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;

    if (eventId !== this._confirmDeletingId) {
      this._confirmDeletingId = eventId;
      return;
    } else if (eventId === this._confirmDeletingId) {
      this.scheduleService.deleteEvent(eventId).subscribe(
        (data) => {
          this._message.message = 'Event deleted!';
          this._message.type = 'success';
          this._eventData = {};
          this._confirmDeletingId = '';

          //update event list
          this.getScheduleDetails(this._schedule['id']);
        },
        (error) => {
          this._message.message = 'Error deleting event!';
          this._message.type = 'error';
        }
      );
    }
  }

  /**
   * Set the page flag to start editing (new) event
   */
  addNewEventForm() {
    this._eventData =
      {
        "when": {
          "period": "minute",
          "startDate": "2017-05-02T21:00:00+01:00",
          "endDate": "2017-05-02T22:00:00+01:00",
          "startTimezone": "Europe/London",
          "endTimezone": "Europe/London"
        },
        "customFieldData": {
          "030ae017-4c19-46e8-bdbe-7ba03117be4d": {},
          "1c538d7f-1244-4eda-a746-d2097b2ebfc5": {}
        },
        "name": "someName",
        "media": [],
        "scheduleId": ""
      }
      this._eventData['scheduleId'] = this._schedule['id'];

    this._isEditingEvent = true;
  }

}
