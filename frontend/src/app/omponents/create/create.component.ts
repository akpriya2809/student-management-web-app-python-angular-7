import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { discardPeriodicTasks } from '@angular/core/testing';
import {Task} from '../template/task';
import { CreateTaskService } from '../Services/create-task.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  task:Task;
  constructor(private createservice: CreateTaskService) {
    this.task = new Task();
    //private createservice: CreateTaskService;
   }

   ngOnInit() {
     console.log('createComponent loaded');
  }

  handleSave(task){
    this.createservice.save(this.task);
  }
}
