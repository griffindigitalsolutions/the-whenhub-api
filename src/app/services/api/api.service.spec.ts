import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';
import { Http, HttpModule } from "@angular/http";
import { ConfigService } from "app/services/config/config.service";

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiService,
        ConfigService
      ],
      imports: [
        HttpModule
      ],
    });
  });

  it('should ...', inject([ApiService], (service: ApiService) => {
    expect(service).toBeTruthy();
  }));
});
