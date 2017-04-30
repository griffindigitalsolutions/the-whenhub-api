
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from '../../home/home.component'
import { ScheduleListComponent } from '../../schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from '../../schedule-detail/schedule-detail.component';
import { EventListComponent } from '../../event-list/event-list.component'
import { EventDetailComponent } from '../../event-detail/event-detail.component'

export const AllRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'schedules',
    component: ScheduleListComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'schedules/:id',
    component: ScheduleDetailComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'events',
    component: EventListComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    // canActivate: [AuthGuardService]
  }
];

export const routes: Routes = [
  ...AllRoutes,
  {
    path: '*other',
    redirectTo: '/'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TheWhenHubApiRoutingModule { }
