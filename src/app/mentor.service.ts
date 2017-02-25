import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Mentor } from './mentor';
import { Observable } from 'rxjs/Rx'

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MentorService {

  constructor(private http: Http) { }

  private mentorUrl = 'http://localhots:3000';

  // Fetch all existing comments
  getShowMentor() : Observable<Mentor> {
    // ... using get request
    return this.http.get(this.mentorUrl)
                   // ...and calling .json() on the response to return data
                    .map((res:Response) => res.json())
                    //...errors if any
                    // .catch((error:any) => Observable.throw(error.json().error || 'Server error'
  }


}
