import { Component, OnInit } from '@angular/core';
import { CreateTaskService } from '../Services/create-task.service';
import { Task } from '../template/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  taskslist: Object[];
  constructor(private createservice: CreateTaskService ) { 
    this.taskslist = [
      {title:"Issue1", assignedTo:"Akanksha", severity:"Medium", status:"Open", action1:"Edit", action2:"Delete"},
      {title:"Issue2", assignedTo:"Priya", severity:"Low", status:"Assigned", action1:"Edit", action2:"Delete"}
    ]
   
   
  }

  ngOnInit() {
  this.createservice.get().subscribe(data =>{
      for(let key in data) {
        this.taskslist.push(data[key]);
      }
   });
  }
  handleDelete( task:Task){
    this.createservice.remove(task);
  }

}
