import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Mentor } from './mentor';
import { MentorService } from './mentor.service';
import { CreateMentor } from '../create-mentor/create-mentor.component';

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
  <app-create-mentor> </app-create-mentor>
	`
})

export class MentorComponent {
	mentor: Mentor;
  // errorMessage: <any>;
  constructor(
    private mentorService: MentorService
  ){}

  getShowMentor() {
    this.mentorService.getShowMentor()
                      .subscribe(
                        mentor => this.mentor = mentor);
                        // , error => this.errorMessage = <any>error);

  }
	// constructor(private http: Http) {
  // 	http.get('http://localhost:3000')
  // 		.subscribe(res => this.mentor = res.json());
  // }
}
