import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthRePasswordComponent } from './auth-re-password/auth-re-password.component';
import { AuthSignupComponent } from './auth-signup/auth-signup.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AuthLoginComponent,
    AuthRePasswordComponent,
    AuthSignupComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
