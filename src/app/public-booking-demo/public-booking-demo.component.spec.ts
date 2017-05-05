import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBookingDemoComponent } from './public-booking-demo.component';

describe('PublicBookingDemoComponent', () => {
  let component: PublicBookingDemoComponent;
  let fixture: ComponentFixture<PublicBookingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicBookingDemoComponent ]
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
