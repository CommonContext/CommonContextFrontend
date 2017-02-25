import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Mentor } from './mentor';

@Component({
  selector: 'show-mentor',
  styleUrls: ['./app.component.css'],
  template: `
  <ul>
	  <div *ngIf="mentor">
		  <li>{{mentor.name}}</li>
		  <li>{{mentor.years_of_experience}}</li>
		  <li>{{mentor.current_company}}</li>
		  <li>{{mentor.current_industry}}</li>
		</div>
	</ul>
	` 
})

export class MentorComponent {
	mentor: Mentor;
	constructor(private http: Http) {
  	http.get('http://localhost:3000')
  		.subscribe(res => this.mentor = res.json());
  }
}