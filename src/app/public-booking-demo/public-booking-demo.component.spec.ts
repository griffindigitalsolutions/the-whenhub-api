import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBookingDemoComponent } from './public-booking-demo.component';
import { ReactiveFormsModule } from "@angular/forms";
import { CalendarModule } from "primeng/primeng";
import { ConfigService } from "app/services/config/config.service";
import { ScheduleService } from "app/services/schedule/schedule.service";
import { FakeApiService } from "app/testing/fake-api.service";
import { ApiService } from "app/services/api/api.service";
import { PublicEventService } from "app/services/public-event/public-event.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

fdescribe('PublicBookingDemoComponent', () => {
  let component: PublicBookingDemoComponent;
  let fixture: ComponentFixture<PublicBookingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PublicBookingDemoComponent 
      ],
      imports: [
        CalendarModule,
        ReactiveFormsModule
      ],
      providers: [
        { provide: ApiService, useClass: FakeApiService }, 
        BrowserAnimationsModule,
        ConfigService,
        PublicEventService,
        ScheduleService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBookingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
