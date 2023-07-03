import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { timeInterval, timeout } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  isEditable:boolean=false;
  UserSignedIn:boolean = false;
  loader:boolean = false;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    SecondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    ThirdCtrl: ['', [Validators.email,Validators.required]],
  });
  fourthFormGroup = this._formBuilder.group({
    FourthCtrl: ['', [Validators.required,Validators.pattern('((?=.\\D*\\d)(?=(\.\*[\#\$\@\$\!\%\*\?\&]))(?=.*[a-z])(?=.*[A-Z]).{6,30})')]],
  });
  constructor(private _formBuilder: FormBuilder, private Route:Router) {
  }
  LodeUp()
  {
    this.loader=true;
    this.UserSignedIn=true;
    localStorage.setItem("IsSignedIn","true");
    setTimeout(()=>{
      this.SignUp();
    },2000)
  }
  SignUp()
  {
    this.loader=false;
    console.log('Yay!, Signed Up',this.firstFormGroup.value);
    this.Route.navigate(['Home']);
  }
}
