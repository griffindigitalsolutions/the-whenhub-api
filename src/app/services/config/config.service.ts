import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  //add configuration settings
  public whenHubApiKey: string = '';
  public publicEventAPIUrl = 'http://localhost:3000';

  constructor() { }

}