import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestsComponent } from './my-requests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CalendarModule } from 'primeng/primeng';
import { ApiService } from "app/services/api/api.service";
import { FakeApiService } from "app/testing/fake-api.service";
import { ConfigService } from "app/services/config/config.service";
import { ScheduleService } from "app/services/schedule/schedule.service";
import { PublicEventService } from "app/services/public-event/public-event.service";

describe('MyRequestsComponent', () => {
  let component: MyRequestsComponent;
  let fixture: ComponentFixture<MyRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        MyRequestsComponent 
      ],
      imports: [
        FormsModule,
        CalendarModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ApiService, useClass: FakeApiService }, 
        ConfigService,
        PublicEventService,
        ScheduleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
