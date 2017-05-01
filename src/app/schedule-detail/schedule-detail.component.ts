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
  private routerState: any;

  constructor(public apiService: ApiService,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService,
    public router: Router, public activatedRoute: ActivatedRoute) {
    //set the page title
    titleService.setTitle('Edit schedule');
  }

  ngOnInit() {
    console.info(this.activatedRoute.params['_value'].id)
    this.activatedRoute.params
      // .switchMap((params: Params) => { console.info('xxx'); console.info(params.id); return Observable.of(); })
      .subscribe((data) => {
        //get schedule details
        this.scheduleService.getScheduleDetails(data.id)
            .subscribe(
              (data) => {
                this._schedule = data;
                this.titleService.setTitle('Editing ' + data['name']);
              },
              (error) => {},
            );
      });
  }
}
