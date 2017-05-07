
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from "app/services/config/config.service";

@Injectable()
export class AuthGuardService implements CanActivate {

  private _user: any = false;

  constructor(private _configService: ConfigService,
    private _router: Router) {
  }


  canActivate() {
    if (this._configService.whenHubApiKey) {
      return true;
    }
    return false;

  }

}