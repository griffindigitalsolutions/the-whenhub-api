import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../services/config/config.service';
import { ScheduleService } from '../services/schedule/schedule.service';
import { ApiService } from '../services/api/api.service';
import { Title } from '@angular/platform-browser';
import { PublicEventService } from "app/services/public-event/public-event.service";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.css']
})
export class MyRequestsComponent implements OnInit {

  public requests: any = [];
  public schedules: any = []; //need this because we will allow user to save to which ever schedule they want
  private _confirmDeletingId: string = '';
  private _message: any = { message: '', type: '' }
  private _requestForm: FormGroup;
  public minDateValue = new Date();

  constructor(public apiService: ApiService,
    public configService: ConfigService,
    public titleService: Title,
    public scheduleService: ScheduleService,
    public publicEventService: PublicEventService,
    public formBuilder: FormBuilder
  ) {
    //set the page title
    titleService.setTitle('Manage requests');

    //we will need the data
    this.getRequests();
    this.getSchedules();
  }

  ngOnInit() {
  }
  /**
   * Get the data from the service (schedules in this case)
   */
  getSchedules() {
    this.scheduleService.getSchedules().subscribe(
      (data) => {
        if (data) {
          this.schedules = data;
        }
      },
      (error) => {
        alert('Error!')
      }
    );
  }
  /**
   * Get the data from the service (schedules in this case)
   */
  getRequests() {
    this.publicEventService.getRequests().subscribe(
      (data: any) => {
        if (data) {
          data.forEach(element => {
            if (element.when.startDate) {
              element.when.startDate = new Date(element.when.startDate);
            }
            if (element.when.endDate) {
              element.when.endDate = new Date(element.when.endDate);
            }
          });
          this.requests = data;
        }
      },
      (error) => {
        alert('Error retrieving requests! Please try again.')
      }
    );
  }
  /**
   * Approve the request to calendar and also delete from api
   */
  approveRequest(requestIndex) {
    //the ID from API is not the same as the ID we want to save to
    let request = this.requests[requestIndex];
    let oldApiID = request.id;
    //dates ... require period...
    request.when.period = 'minute';
    delete request.id;
    console.log(request)

    this.scheduleService.saveNewEvent(request).subscribe(
      (data) => {
        //delete from APi
        this.publicEventService.deleteRequest(oldApiID).subscribe(
          (data) => {
            this._message.message = 'Request saved as event to your schedule!';
            this._message.type = 'success';
            this.getRequests();
          },
          (error) => {
            this._message.message = 'Error saving data!';
            this._message.type = 'error';
          }
        );
      }),
      (error) => {
        console.error(error)
      }
  }

  /**
 * Delete request. Require confirmation first
 * @param requestId
 */
  deleteRequest(requestId) {
    //reset error / success messages
    this._message.message = false;
    this._message.type = false;

    if (requestId !== this._confirmDeletingId) {
      this._confirmDeletingId = requestId;
      return;
    } else if (requestId === this._confirmDeletingId) {
      this.publicEventService.deleteRequest(requestId).subscribe(
        (data) => {
          this._message.message = 'Request deleted. No changes were made to your schedule!';
          this._message.type = 'success';
          this.getRequests();
          this._confirmDeletingId = '';
        },
        (error) => {
          this._message.message = 'Unable to delete request. No changes were made to your schedule!';
          this._message.type = 'error';
        }
      );
    }
  }

}
