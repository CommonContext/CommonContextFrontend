import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-mentor',
  templateUrl: './create-mentor.component.html',
  styleUrls: ['./create-mentor.component.css']
})
export class CreateMentorComponent implements OnInit {
  form: FormGroup;
  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.form = fb.group({
      name: ["", Validators.required],
      years_of_experience: ["", Validators.required],
      current_company: ["", Validators.required],
      current_industry: ["", Validators.required]
    });
  }

  createMentor(event) {
    console.log(event);
    console.log("event");
  }

  ngOnInit() {
  }

}
