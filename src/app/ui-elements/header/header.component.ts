
import { Component, OnInit }    from '@angular/core';
import { Router, 
  ActivatedRoute }              from '@angular/router';
import { Location }             from '@angular/common';
import { Observable }           from 'rxjs/Observable';
import { ConfigService }        from '../../services/config/config.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _activeRoutePath;
  private _activeMenu: string = '';
  private _over: any = false;
  private _user: any = false;

  constructor(location: Location, 
              router: Router, activatedRoute: ActivatedRoute,
              private _configService: ConfigService){
          

  }

  ngOnInit() {
  }
}
