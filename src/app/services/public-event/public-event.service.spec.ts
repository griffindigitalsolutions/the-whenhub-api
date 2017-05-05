import { TestBed, inject } from '@angular/core/testing';

import { PublicEventService } from './public-event.service';
import { FakeApiService } from "app/testing/fake-api.service";
import { ApiService } from "app/services/api/api.service";
import { ConfigService } from "app/services/config/config.service";

describe('PublicEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ApiService, useClass: FakeApiService },
        ConfigService,
        PublicEventService
      ]
    });
  });

  it('should ...', inject([PublicEventService], (service: PublicEventService) => {
    expect(service).toBeTruthy();
  }));
});
