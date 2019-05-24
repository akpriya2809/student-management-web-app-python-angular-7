import { Component, OnInit } from '@angular/core';
import {Eventt} from '../model/event-modal';
import { EventService}  from '../event.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  eventt:Eventt;
  constructor(private eventService: EventService) {
    this.eventt = new Eventt();
   }

  ngOnInit() {
  }
  save(eventt:Eventt){
    console.log(eventt);
    this.eventService.save(this.eventt);

  }
}
