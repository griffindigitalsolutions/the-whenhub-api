import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TheWhenHubApiRoutingModule } from './modules/routing/routing.module';
import { routes } from './modules/routing/routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

import { ConfigService } from './services/config/config.service';
import { ApiService } from './services/api/api.service';

import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './ui-elements/footer/footer.component';
import { HeaderComponent } from './ui-elements/header/header.component';
import 'hammerjs';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventDetailComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ScheduleListComponent,
    ScheduleDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    MdInputModule,
    // MaterialDesignModule
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ // creators of services that this module contributes to the global collection of services; they become accessible in all parts of the app.
    ApiService,
    Title,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }