import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

export enum SpinnerAction {
  'HIDDEN' = 'hidden',
  'VISIBLE' = 'visible'
}
@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})

/**
 * Auth Signup Component
 */
export class AuthSignupComponent implements OnInit {
  private jwtHelper!: JwtHelperService;
  public registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private _authService: AuthService,
    private toast: ToastrService,
    private _router: Router,
    private location: Location
  ) {
    this.jwtHelper = new JwtHelperService()
  }

  ngOnInit(): void {
    this.init();
  }

  init() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  /*show and hide spinner*/
  ShowHideSpinner(action: SpinnerAction) {
    let spinner = document.getElementById("spinner");
    spinner!.style.visibility = action;
  }
  login() {
    const form = this.registerForm.value;
    this.ShowHideSpinner(SpinnerAction.VISIBLE)
    this._authService.register(form.email, form.username, form.password).subscribe({
      next: res => {
        console.log('result', res);
        if (res.statusCode == 400) {
          this.toast.error("Email ou mot de passe incorrect !");
          this.ShowHideSpinner(SpinnerAction.HIDDEN)
          return;
        } else {
          this.toast.success("Connexion réussie !");
          this.location.back();
          this.ShowHideSpinner(SpinnerAction.HIDDEN)
        }
      },
      error: (error: HttpErrorResponse) => {
        console.log("Error", error);
        if (error.status == 0) {
          this.toast.error("Impossible de se connecter , vérifiez votre connexion internet et rééssayez!");
          this.ShowHideSpinner(SpinnerAction.HIDDEN)
          return;
        } else {
          this.toast.error("Une erreur est survenue , vérifiez votre connexion internet et rééssayez!");
          this.ShowHideSpinner(SpinnerAction.HIDDEN);
          return;
        }
      }
    }
    )
  }

}
