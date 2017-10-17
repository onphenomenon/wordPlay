import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'invisible-input',
  templateUrl: './invisible-input.component.html',
  styleUrls: ['./invisible-input.component.css']
})
export class InvisibleInputComponent implements OnInit {
  entry: {
    text: ''
  };
  entryIndex: 0;
  //@Input() form: FormGroup;
  @Input() entries: FormArray;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
    //console.log("entries.: ", this.entries.controls);
    this.addEntry();
    this.addEntry();
    console.log('this.entries: ', this.entries.controls[0]);
    this.entries.valueChanges.subscribe(data => {
      this.onValueChanged(data);
    });
  }
  //submit on keystroke? 
  //put every letter as a li that can be targeted.
  //
  onValueChanged(data?: any) {
    if (!this.entries) { return; }
    const form = this.entries.controls[this.entryIndex];
    console.log("CURRENT STATE: ",  this.entries.controls[0].get('text').value);
    // for (const field in this.formErrors) {
    //   this.formErrors[field] = '';
    //   const control = form.get(field);

    //   if (control && control.dirty && !control.valid) {
    //     const messages = this.validationMessages[field];
    //     for (const key in control.errors) {
    //       this.formErrors[field] += messages[key] + ' ';
    //     }
    //   }
    // }
  }

  onKey($event) {
    console.log("EVENT, ", $event.target.value);
    //add to angular array that is displayed in li>
    //animate that li. 
    $event.target.value = '';
    console.log("EVENT, ", $event);
     $event.target.value = '';
    console.log("EVENT target select, ", $event.target.select());
    //apply a class that animates the element. 
    
  }

  createEntry(entryObject: any = this.entry) {
    const newGroup = this.formBuilder.group({
      text: new FormControl('entryObject.text' || 'HELLO', [
        Validators.required
      ]),
      styles: new FormControl('entryObject.text' || 'HELLO', [
        Validators.required
      ])
    });
    // if (cardObject._id) {
    //   newGroup.addControl('_id', new FormControl(cardObject._id))
    // }
    return newGroup;
  }

  addEntry() {
    const control = this.entries;
    // const control = this.form.get('entries') as FormArray;
    const newEntry = this.createEntry();
    control.push(newEntry);
  }

}
