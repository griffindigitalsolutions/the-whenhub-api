/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardService } from './auth-guard.service';
import { ConfigService } from "app/services/config/config.service";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";

describe('AuthGuardService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            providers: [
                AuthGuardService,
                ConfigService
            ],
            imports: [
                RouterTestingModule
            ]
        });
    });

    it('should ...', inject([AuthGuardService], (service: AuthGuardService) => {
        expect(service).toBeTruthy();
    }));
});