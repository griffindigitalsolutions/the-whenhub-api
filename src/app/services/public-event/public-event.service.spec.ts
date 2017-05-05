import { TestBed, inject } from '@angular/core/testing';

import { PublicEventService } from './public-event.service';

describe('EventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicEventService]
    });
  });

  it('should ...', inject([PublicEventService], (service: PublicEventService) => {
    expect(service).toBeTruthy();
  }));
});
