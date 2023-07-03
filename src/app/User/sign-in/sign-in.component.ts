import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private _formBuilder: FormBuilder) {
  }
  isEditable:boolean=false;
  Invalid:boolean=false;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    SecondCtrl: ['', Validators.required],
  });
  SignIn()
  {
    console.log('Signed in');
  }
}
