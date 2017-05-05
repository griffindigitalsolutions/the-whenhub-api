import { Component, OnInit } from '@angular/core';
import { PublicEventService } from "app/services/public-event/public-event.service";
import { ConfigService } from "app/services/config/config.service";
import { Title } from '@angular/platform-browser';
import { ScheduleService } from "app/services/schedule/schedule.service";
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-public-booking-demo',
  templateUrl: './public-booking-demo.component.html',
  styleUrls: ['./public-booking-demo.component.css']
})
export class PublicBookingDemoComponent implements OnInit {

  private _event: Object = { name: '', description: '', when: {}};
  // @Output() editing: EventEmitter<any> = new EventEmitter();
  // @Output() eventChanged: EventEmitter<any> = new EventEmitter();
  // @Input()


  private _eventForm: FormGroup;
  private _message: any = { message: '', type: '' }

  private _startDate: any = new Date();
  private _endDate: any = new Date();
  private _minDate: any = new Date();

  constructor(public formBuilder: FormBuilder,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService,
    public publicEventService: PublicEventService
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
  }

  save() {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;

    //events can be new only and saved to json server
    this.publicEventService.saveEvent(this._event).subscribe(
      (data) => {
        this._message.message = 'Your request has been sent!';
        this._message.type = 'success';
        this._event = { name: '', description: '', when: {}};
      },
      (error) => {
        this._message.message = 'Error saving data!';
        this._message.type = 'error';
      }
    );
  }
}
