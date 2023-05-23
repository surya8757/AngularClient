import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  typeHandler=false;
  createForm() {
    this.myForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      confirmPassword:['']
    });
  }

  onSubmit() {
    // get the form data
    const formData = this.myForm.value;
    console.log(formData);
  }

}
