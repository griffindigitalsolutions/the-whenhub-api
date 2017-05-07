import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TheWhenHubApiRoutingModule } from './modules/routing/routing.module';
import { routes } from './modules/routing/routing.module';
import { RouterModule } from '@angular/router';

import { ConfigService } from './services/config/config.service';
import { ApiService } from './services/api/api.service';
import { ScheduleService } from './services/schedule/schedule.service';


import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './ui-elements/footer/footer.component';
import { HeaderComponent } from './ui-elements/header/header.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { CalendarModule, DialogModule, CheckboxModule, ScheduleModule } from 'primeng/primeng';
import { TruncateModule } from 'ng2-truncate';
import { PublicBookingDemoComponent } from './public-booking-demo/public-booking-demo.component';
import { MomentModule } from 'angular2-moment';
import { PublicEventService } from "app/services/public-event/public-event.service";
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { AuthGuardService } from "app/services/auth-guard/auth-guard.service";

@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ScheduleListComponent,
    ScheduleDetailComponent,
    EditScheduleComponent,
    PublicBookingDemoComponent,
    MyRequestsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    CheckboxModule,
    DialogModule,
    FormsModule,
    HttpModule,
    MomentModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ScheduleModule,
    TruncateModule
  ],
  providers: [
    ApiService,
    AuthGuardService,
    ConfigService,
    PublicEventService,
    ScheduleService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
