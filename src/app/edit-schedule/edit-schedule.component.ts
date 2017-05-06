import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.css']
})
export class EditScheduleComponent implements OnInit {

  private _schedule: Object = {};
  // @Output() editing: EventEmitter<any> = new EventEmitter();
  // @Output() eventChanged: EventEmitter<any> = new EventEmitter();
  @Input()
  set schedule(schedule: Object) {
    if (schedule) { //this is undefined to start with
      this._schedule = schedule;
    }
  }

  private _scheduleForm: FormGroup;
  private _message: any = { message: '', type: '' }

  constructor(public formBuilder: FormBuilder,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    //set the page title
    titleService.setTitle('Schedule details');
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((data) => {
        if (data && data.id) {
          this.getScheduleDetails(data.id);
        }
      });

    this.prepareForm();
  }

  prepareForm() {
    this._scheduleForm = this.formBuilder.group(
      {
        'name': ['', Validators.required],
        'description': [''],
      },
    );
  }

  save() {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;

    //events can be new or updated
    if (!this._schedule['id']) {
      this.scheduleService.saveNewSchedule(this._schedule).subscribe(
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
      this.scheduleService.saveSchedule(this._schedule).subscribe(
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
  }

  delete() {
    alert('deleting')
  }

  getScheduleDetails(scheduleId) {
    //get schedule details
    this.scheduleService.getScheduleDetails(scheduleId)
      .subscribe(
      (data) => {
        this._schedule = data;
        this.titleService.setTitle('Schedule details ' + data['name']);
      },
      (error) => {
        //TODO: handle error
      },
    );
  }

}