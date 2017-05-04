import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScheduleComponent } from './edit-schedule.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ConfigService } from "app/services/config/config.service";
import { ScheduleService } from "app/services/schedule/schedule.service";
import { ApiService } from "app/services/api/api.service";
import { FakeApiService } from "app/testing/fake-api.service";
import { RouterTestingModule } from '@angular/router/testing';

describe('EditScheduleComponent', () => {
  let component: EditScheduleComponent;
  let fixture: ComponentFixture<EditScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EditScheduleComponent 
      ],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(
          [{ path: '', component: EditScheduleComponent }]),
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
    fixture = TestBed.createComponent(EditScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
