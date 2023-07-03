import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './User/sign-up/sign-up.component';
import { HomeComponent } from './User/home/home.component';
import { SignInComponent } from './User/sign-in/sign-in.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'SignUp',component: SignUpComponent},
  {path:'Signin',component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
