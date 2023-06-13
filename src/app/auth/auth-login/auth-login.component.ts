import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';


export enum SpinnerAction {
  'HIDDEN' = 'hidden',
  'VISIBLE' = 'visible'
}
@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})


/**
 * Auth Login Component
 */
export class AuthLoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  private jwtHelper!: JwtHelperService;

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
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  /*show and hide spinner*/
  ShowHideSpinner(action: SpinnerAction) {
    let spinner = document.getElementById("spinner");
    spinner!.style.visibility = action;
  }
  login() {
    const form = this.loginForm.value;
    this.ShowHideSpinner(SpinnerAction.VISIBLE)
    this._authService.login(form.email, form.password).subscribe({
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
