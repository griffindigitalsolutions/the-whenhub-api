import { TestBed, inject } from '@angular/core/testing';

import { ScheduleService } from './schedule.service';
import { ApiService } from "app/services/api/api.service";
import { HttpModule } from "@angular/http";
import { ConfigService } from "app/services/config/config.service";

describe('ScheduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        ConfigService,
        ScheduleService
      ],
      imports: [
        HttpModule
      ],
    });
  });

  it('should ...', inject([ScheduleService], (service: ScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
