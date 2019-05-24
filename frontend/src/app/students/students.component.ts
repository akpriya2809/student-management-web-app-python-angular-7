import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  studentlist: Object[];
  constructor() { 
    this.studentlist = [
      {stud_id:"123", fname:"Akanksha", lname:"Priya", email:"apriya@usc.edu"},
      {stud_id:"111", fname:"Tom", lname:"Smith", email:"tsmith@usc.edu"},
      {stud_id:"212", fname:"Ran", lname:"He", email:"ranh@usc.edu"},
      {stud_id:"234", fname:"Tara", lname:"verma", email:"tverma@usc.edu"},
      {stud_id:"987", fname:"Akshat", lname:"Deep", email:"adeep@usc.edu"},
    ];
  }

  ngOnInit() {
  }

}
