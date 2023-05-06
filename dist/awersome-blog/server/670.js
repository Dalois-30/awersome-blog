"use strict";
exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 23119:
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-login/auth-login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLoginComponent": () => (/* binding */ AuthLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 20005);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70938);




/**
 * Auth Login Component
 */
class AuthLoginComponent {
  constructor() {}
  ngOnInit() {}
}
AuthLoginComponent.ɵfac = function AuthLoginComponent_Factory(t) {
  return new (t || AuthLoginComponent)();
};
AuthLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthLoginComponent,
  selectors: [["app-auth-login"]],
  decls: 68,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/login.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "login-page", "bg-white", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"]],
  template: function AuthLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20)(24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i-feather", 22)(33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15)(35, "div", 24)(36, "div", 16)(37, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Remember me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 28)(42, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forgot password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30)(45, "div", 31)(46, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33)(49, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Or Login With");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14)(52, "div", 34)(53, "div", 31)(54, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34)(58, "div", 31)(59, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 38)(63, "p", 39)(64, "small", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Don't have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLWxvZ2luL2F1dGgtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 87681:
/*!*********************************************************************!*\
  !*** ./src/app/auth/auth-re-password/auth-re-password.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRePasswordComponent": () => (/* binding */ AuthRePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 20005);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70938);




/**
 * Auth RePassword Component
 */
class AuthRePasswordComponent {
  constructor() {}
  ngOnInit() {}
}
AuthRePasswordComponent.ɵfac = function AuthRePasswordComponent_Factory(t) {
  return new (t || AuthRePasswordComponent)();
};
AuthRePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthRePasswordComponent,
  selectors: [["app-auth-re-password"]],
  decls: 37,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/recovery.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "text-muted"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Enter Your Email Address", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]],
  template: function AuthRePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recover Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Please enter your email address. You will receive a link to create a new password via email.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17)(20, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 21)(26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "div", 23)(29, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25)(32, "p", 26)(33, "small", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Remember your password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLXJlLXBhc3N3b3JkL2F1dGgtcmUtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 93304:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-login/auth-login.component */ 23119);
/* harmony import */ var _auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-re-password/auth-re-password.component */ 87681);
/* harmony import */ var _auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-signup/auth-signup.component */ 72809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






const routes = [{
  path: 'login',
  component: _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__.AuthLoginComponent
}, {
  path: 're-password',
  component: _auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__.AuthRePasswordComponent
}, {
  path: 'signup',
  component: _auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__.AuthSignupComponent
}];
class AuthRoutingModule {}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) {
  return new (t || AuthRoutingModule)();
};
AuthRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AuthRoutingModule
});
AuthRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 72809:
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-signup/auth-signup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupComponent": () => (/* binding */ AuthSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 20005);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 70938);




/**
 * Auth Signup Component
 */
class AuthSignupComponent {
  constructor() {}
  ngOnInit() {}
}
AuthSignupComponent.ɵfac = function AuthSignupComponent_Factory(t) {
  return new (t || AuthSignupComponent)();
};
AuthSignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthSignupComponent,
  selectors: [["app-auth-signup"]],
  decls: 84,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-auth-home", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/signup.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "First Name", "name", "s", "required", "", 1, "form-control", "ps-5"], ["name", "user-check", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "Last Name", "name", "s", "required", "", 1, "form-control", "ps-5"], [1, "col-md-12"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["routerLink", "/auth-signup", 1, "text-primary"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]],
  template: function AuthSignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20)(24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i-feather", 22)(33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24)(35, "div", 16)(36, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i-feather", 25)(42, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24)(44, "div", 16)(45, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i-feather", 27)(51, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24)(53, "div", 16)(54, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "I Accept ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Terms And Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24)(61, "div", 33)(62, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35)(65, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Or Signup With");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14)(68, "div", 36)(69, "div", 33)(70, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36)(74, "div", 33)(75, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 40)(79, "p", 41)(80, "small", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Already have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ251cC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLXNpZ251cC9hdXRoLXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 32670:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 93304);
/* harmony import */ var _auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-login/auth-login.component */ 23119);
/* harmony import */ var _auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-re-password/auth-re-password.component */ 87681);
/* harmony import */ var _auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-signup/auth-signup.component */ 72809);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 85802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);







class AuthModule {}
AuthModule.ɵfac = function AuthModule_Factory(t) {
  return new (t || AuthModule)();
};
AuthModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: AuthModule
});
AuthModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_1__.AuthLoginComponent, _auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_2__.AuthRePasswordComponent, _auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_3__.AuthSignupComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

};
;
//# sourceMappingURL=670.js.map