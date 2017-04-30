import { Component } from '@angular/core';
import { ConfigService } from './services/config/config.service';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private _configService: ConfigService) {

  }
}
