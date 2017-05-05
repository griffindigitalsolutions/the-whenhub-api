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
import { CalendarModule } from 'primeng/primeng';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ScheduleListComponent,
    ScheduleDetailComponent,
    EditScheduleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    TruncateModule
  ],
  providers: [ // creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
    ApiService,
    ConfigService,
    ScheduleService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
