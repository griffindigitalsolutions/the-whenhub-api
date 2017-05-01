import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  private _event: Object = {};
  @Output() editing: EventEmitter<any> = new EventEmitter();
  @Input()
  set event(event: Object) { //this monitors the graphData and triggers this function on change
    if (event) { //this is undefined to start with
      this._event = event;
    }
  }

  private _eventForm: FormGroup;
  private _message: any = { message: '', type: '' }

  constructor(public formBuilder: FormBuilder, public configService: ConfigService, public titleService: Title, public scheduleService: ScheduleService) {

    //prepare the password reset form
    this._eventForm = formBuilder.group(
      {
        'name': ['', Validators.required],
        // 'location': formBuilder.group({
        //   'name': ['', Validators.required]
        // }),

        'when': formBuilder.group({
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
  }

  save() {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;
    
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

  /**
   * Emit event, let parent component know we are done editing
   */
  stopEditing() {
    this.editing.emit(false);
  }
}
