import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PublicEventService } from "app/services/public-event/public-event.service";

@Component({
  selector: 'app-public-booking-demo',
  templateUrl: './public-booking-demo.component.html',
  styleUrls: ['./public-booking-demo.component.css']
})
export class PublicBookingDemoComponent implements OnInit {

  public events: any[];
  public header: any;
  public event: WHEvent;

  dialogVisible: boolean = false;

  constructor(private eventService: PublicEventService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe((events: any) => {
      console.log('xxxxxxxxx')
      console.log(events)
      this.events = events;
    });

    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  handleDayClick(event) {
    this.event = new WHEvent();
    this.event.name = 'x';
    this.event['when'] = {
        startDate: '',
        endDate: ''
      }
    console.log('yyy')
    console.log(this.event)
    this.event.when['startDate'] = event.date.format();
    this.dialogVisible = true;

    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  handleEventClick(e) {
    this.event = new WHEvent();
    this.event.name = e.calEvent.title;

    let start = e.calEvent.when.startDate;
    let end = e.calEventwhen.endDate;
    if (e.view.name === 'month') {
      start.stripTime();
    }

    if (end) {
      end.stripTime();
      this.event.when['endDate'] = end.format();
    }

    // this.event.id = e.calEvent.id;
    this.event.when['startDate'] = start.format();
    // this.event.allDay = e.calEvent.allDay;
    this.dialogVisible = true;
  }

  saveEvent() {
    // this.event.id = this.idGen++;
    this.events.push(this.event);
    this.event = null;


    this.dialogVisible = false;
  }
}

export class WHEvent {
  name: string;
  description: string;
  when: object
}