import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HOME';
  private form: FormGroup;
 

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    // this.getCards();
    this.form = this.formBuilder.group({
      mainEntry: new FormControl('', [Validators.required]),
      entries: this.formBuilder.array([]),
    });
    console.log("FORM: ", this.form);
  }

  }
