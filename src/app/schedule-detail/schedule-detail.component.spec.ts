import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDetailComponent } from './schedule-detail.component';
import { TruncateModule } from 'ng2-truncate';
import { EventDetailComponent } from "app/event-detail/event-detail.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/primeng";
import { ApiService } from "app/services/api/api.service";
import { FakeApiService } from "app/testing/fake-api.service";
import { ConfigService } from "app/services/config/config.service";
import { ScheduleService } from "app/services/schedule/schedule.service";
import { RouterTestingModule } from "@angular/router/testing";

describe('ScheduleDetailComponent', () => {
  let component: ScheduleDetailComponent;
  let fixture: ComponentFixture<ScheduleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventDetailComponent,
        ScheduleDetailComponent
      ],
      imports: [
        CalendarModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [{ path: '', component: EventDetailComponent }]),
        TruncateModule
      ],
      providers: [
        { provide: ApiService, useClass: FakeApiService },
        ConfigService,
        ScheduleService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
