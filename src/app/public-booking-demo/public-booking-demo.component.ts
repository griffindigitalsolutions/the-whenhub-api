import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-booking-demo',
  templateUrl: './public-booking-demo.component.html',
  styleUrls: ['./public-booking-demo.component.css']
})
export class PublicBookingDemoComponent implements OnInit {

  public event: object = {
    id: 1,
    title: 'asd',
    start: '2017-05-08',
    end: false,
    allDay: true
  };
  public events: object;
  public header: object = {
    left: 'prev,next today',
    center: 'title',
    right: 'month,agendaWeek,agendaDay'
  };

  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "title": "All Day Event",
        "start": "2017-05-05"
      },
      {
        "title": "Long Event",
        "start": "2017-05-05",
        "end": "2017-05-10"
      },
      {
        "title": "Repeating Event",
        "start": "2017-05-09T16:00:00"
      },
      {
        "title": "Repeating Event",
        "start": "2017-05-16T16:00:00"
      },
      {
        "title": "Conference",
        "start": "2017-05-11",
        "end": "2017-05-13"
      }
    ];
  }

}
