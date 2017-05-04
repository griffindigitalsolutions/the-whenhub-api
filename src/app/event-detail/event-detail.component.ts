import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  private _event: Object = {};
  @Output() editing: EventEmitter<any> = new EventEmitter();
  @Output() eventChanged: EventEmitter<any> = new EventEmitter();
  @Input()
  set event(event: Object) {
    if (event) { //this is undefined to start with
      //convert the start and end dates to actual date objects. 
      if (event && event['when']) { //check they are set first
        if (event['when'].startDate) {
          event['when'].startDate = new Date(event['when'].startDate);
        }
        if (event['when'].endDate) {
          event['when'].endDate = new Date(event['when'].endDate);
        }
      }
      this._event = event;
    }
  }

  private _eventForm: FormGroup;
  private _message: any = { message: '', type: '' }

  private _startDate: any = new Date();
  private _endDate: any = new Date();
  private _minDate: any = new Date();

  constructor(public formBuilder: FormBuilder,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService,
    private change: ChangeDetectorRef
  ) {

    //prepare the password reset form
    this._eventForm = this.formBuilder.group(
      {
        'name': ['', Validators.required],
        'description': ['', Validators.required],

        // 'location': formBuilder.group({
        //   'name': ['', Validators.required]
        // }),

        'when': this.formBuilder.group({
          'period': ['', Validators.required],
          'startDate': ['', Validators.required],
          'startTimezone': ['', Validators.required],
          'endDate': ['', Validators.required],
          'endTimezone': ['', Validators.required]
        })
      },
    );
  }

  ngOnInit() {
    // code that inits everything, prevents error 
    this.change.markForCheck();

  }

  save() {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;

    //events can be new or updated
    if (!this._event['id']) {
      this.scheduleService.saveNewEvent(this._event).subscribe(
        (data) => {
          this._message.message = 'Data saved!';
          this._message.type = 'success';
        },
        (error) => {
          this._message.message = 'Error saving data!';
          this._message.type = 'error';
        }
      );
    } else {
      this.scheduleService.saveEvent(this._event).subscribe(
        (data) => {
          this._message.message = 'Data saved!';
          this._message.type = 'success';
        },
        (error) => {
          this._message.message = 'Error saving data!';
          this._message.type = 'error';
        }
      );
    }

    this.eventChanged.emit();
  }

  /**
   * Emit event, let parent component know we are done editing
   */
  stopEditing() {
    this.editing.emit(false);
    this.eventChanged.emit();
  }
}
