import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRePasswordComponent } from './auth-re-password/auth-re-password.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';

const routes: Routes = [
  { path: 'login', component: AuthLoginComponent },
  { path: 're-password', component: AuthRePasswordComponent },
  { path: 'signup', component: AuthSignupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
