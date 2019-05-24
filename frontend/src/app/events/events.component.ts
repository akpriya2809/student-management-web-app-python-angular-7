import { Component, OnInit } from '@angular/core';
import { EventService} from '../event.service';
import { Eventt} from '../model/event-modal';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  eventslist: Object[];
  display:Boolean = true;
  constructor(private eventService: EventService) { 
    this.eventslist = []
  }

  ngOnInit() {
    this.eventService.get().subscribe(data =>{
      for(let key in data) {
        var evt = new Eventt();
        evt.date = data[key].date;
        evt.description = data[key].description;
        evt.title = data[key].title;
        evt.id = data[key].id
        this.eventslist.push(evt);
      }
   });
    if(this.eventslist.length == 0){
      this.display = false;
    }else{
      this.display = true;
    }
  }

}
