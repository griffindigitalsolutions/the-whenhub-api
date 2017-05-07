
import { NgModule } from '@angular/core';
import { Route, Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from '../../home/home.component'
import { ScheduleListComponent } from '../../schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from '../../schedule-detail/schedule-detail.component';
import { EventDetailComponent } from '../../event-detail/event-detail.component'
import { EditScheduleComponent } from '../../edit-schedule/edit-schedule.component'
import { PublicBookingDemoComponent } from "app/public-booking-demo/public-booking-demo.component";
import { MyRequestsComponent } from "app/my-requests/my-requests.component";
import { AuthGuardService } from "app/services/auth-guard/auth-guard.service";

export const AllRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'schedules',
    component: ScheduleListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'schedules/new',
    component: EditScheduleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'schedules/:id',
    component: ScheduleDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'schedules/:id/edit',
    component: EditScheduleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'events/:id',
    component: EventDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'public-booking-demo',
    component: PublicBookingDemoComponent,
    // canActivate: [AuthGuardService]
  },
  {
    path: 'my-requests',
    component: MyRequestsComponent,
    canActivate: [AuthGuardService]
  }
];

export const routes: Routes = [
  ...AllRoutes,
  {
    path: '*other',
    redirectTo: ''
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class TheWhenHubApiRoutingModule { }
