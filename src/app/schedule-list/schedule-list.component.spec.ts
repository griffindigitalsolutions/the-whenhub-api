import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleListComponent } from './schedule-list.component';
import { TruncateModule } from "ng2-truncate";
import { RouterTestingModule } from "@angular/router/testing";
import { ApiService } from "app/services/api/api.service";
import { FakeApiService } from "app/testing/fake-api.service";
import { ConfigService } from "app/services/config/config.service";
import { ScheduleService } from "app/services/schedule/schedule.service";

describe('ScheduleListComponent', () => {
  let component: ScheduleListComponent;
  let fixture: ComponentFixture<ScheduleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ScheduleListComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: '', component: ScheduleListComponent }]),
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
    fixture = TestBed.createComponent(ScheduleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
