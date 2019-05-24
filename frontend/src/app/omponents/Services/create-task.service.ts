import { Injectable } from '@angular/core';
import { Task } from '../template/task.js';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})

export class CreateTaskService {
  tasksList: Task[] =[];
  subject: Subject<Object> = new Subject();
  endpoint = 'http://localhost:5000/';
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
  constructor(private _http: HttpClient, private router: Router) { }
  

  save(task: Task) {
      console.log("inside save service");
      console.log(task);
    this.tasksList.push(task);
    this._http.post<any>(this.endpoint+'createissue', JSON.stringify(task),this.httpOptions)
            .subscribe(data => {
              console.log("POST Request is successful ", data);
             });
    this.router.navigate(['/list'])
  }

// get(): Observable<any> {
//   this._http.get(this.endpoint+'list').subscribe(data=>{
//     this.subject.next(data);
//   })
// {'_id':
//  {'$oid': '5ca64f391d0acf90c66fc60e'}, 
//  'title': 'Bug1', 
//  'assignedTo': 'Tom',
//   'severity': 'Medium',
//    'status': 'Open'
//   }
// }
  get(): any{
    return this._http.get<any>(this.endpoint+'list', this.httpOptions);
    
  }
  remove(task:Task): any{
    //const url = `${this.endpoint}/${id}`;
    //return this._http.get<any>(url,  this.httpOptions).subscribe();
    this._http.post<any>(this.endpoint+'remove', JSON.stringify(task),this.httpOptions)
            .subscribe(data => {
              console.log("POST Request is successful ", data);
             });
    this.router.navigate(['/list']) 
  }

  clear() {
    this.tasksList = [];
  }
}
