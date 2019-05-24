import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Eventt} from './model/event-modal'

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventsList: Eventt[] =[];
  endpoint = 'http://localhost:5000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private _http: HttpClient, private router: Router) { }
 
  save(event: Eventt) {
    console.log("inside save service");
    console.log(event);
  this.eventsList.push(event);
  this._http.post<any>(this.endpoint+'createevent', JSON.stringify(event),this.httpOptions)
          .subscribe(data => {
            console.log("POST Request is successful ", data);
           });
  this.router.navigate(['/events'])
}

get(): any{
  return this._http.get<any>(this.endpoint+'eventslist', this.httpOptions);
  
}

}
