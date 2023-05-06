"use strict";
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 26777:
/*!*******************************************************!*\
  !*** ./src/app/feature/other/other-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherRoutingModule": () => (/* binding */ OtherRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var src_app_feature_other_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/feature/other/page-error/page-error.component */ 78529);
/* harmony import */ var src_app_feature_other_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/feature/other/page-thankyou/page-thankyou.component */ 40645);
/* harmony import */ var _page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-comingsoon/page-comingsoon.component */ 75504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4009);






const routes = [{
  path: 'page-error',
  component: src_app_feature_other_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_0__.PageErrorComponent
}, {
  path: 'page-comming',
  component: _page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_2__.PageComingsoonComponent
}, {
  path: 'page-thankyou',
  component: src_app_feature_other_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_1__.PageThankyouComponent
}];
class OtherRoutingModule {}
OtherRoutingModule.ɵfac = function OtherRoutingModule_Factory(t) {
  return new (t || OtherRoutingModule)();
};
OtherRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: OtherRoutingModule
});
OtherRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OtherRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 95742:
/*!***********************************************!*\
  !*** ./src/app/feature/other/other.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtherModule": () => (/* binding */ OtherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _other_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other-routing.module */ 26777);
/* harmony import */ var src_app_feature_other_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/feature/other/page-error/page-error.component */ 78529);
/* harmony import */ var src_app_feature_other_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/feature/other/page-thankyou/page-thankyou.component */ 40645);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 85802);
/* harmony import */ var _page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-comingsoon/page-comingsoon.component */ 75504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);







class OtherModule {}
OtherModule.ɵfac = function OtherModule_Factory(t) {
  return new (t || OtherModule)();
};
OtherModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: OtherModule
});
OtherModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _other_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](OtherModule, {
    declarations: [src_app_feature_other_page_error_page_error_component__WEBPACK_IMPORTED_MODULE_1__.PageErrorComponent, src_app_feature_other_page_thankyou_page_thankyou_component__WEBPACK_IMPORTED_MODULE_2__.PageThankyouComponent, _page_comingsoon_page_comingsoon_component__WEBPACK_IMPORTED_MODULE_4__.PageComingsoonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _other_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtherRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ }),

/***/ 75504:
/*!****************************************************************************!*\
  !*** ./src/app/feature/other/page-comingsoon/page-comingsoon.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageComingsoonComponent": () => (/* binding */ PageComingsoonComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 47401);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 20005);





/**
 * Page ComingSoon Component
 */
class PageComingsoonComponent {
  constructor() {}
  ngOnInit() {
    this._trialEndsAt = "2022-12-24";
    (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(3000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_0__.map)(x => {
      this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
    })).subscribe(x => {
      this._days = this.getDays(this._diff);
      this._hours = this.getHours(this._diff);
      this._minutes = this.getMinutes(this._diff);
      this._seconds = this.getSeconds(this._diff);
    });
  }
  /**
   * Get Date & Time
   */
  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }
  getHours(t) {
    return Math.floor(t / (1000 * 60 * 60) % 24);
  }
  getMinutes(t) {
    return Math.floor(t / 1000 / 60 % 60);
  }
  getSeconds(t) {
    return Math.floor(t / 1000 % 60);
  }
}
PageComingsoonComponent.ɵfac = function PageComingsoonComponent_Factory(t) {
  return new (t || PageComingsoonComponent)();
};
PageComingsoonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageComingsoonComponent,
  selectors: [["app-page-comingsoon"]],
  decls: 41,
  vars: 4,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/", 1, "btn", "btn-icon", "btn-primary"], ["name", "home", 1, "icons"], ["data-jarallax", "{\"speed\": 0.5}", 1, "bg-home", "d-flex", "align-items-center", 2, "background-image", "url('assets/images/comingsoon.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], [1, "text-uppercase", "title-dark", "text-white", "mt-2", "mb-4", "coming-soon"], [1, "text-light", "para-desc", "para-dark", "mx-auto"], [1, "text-primary", "font-weight-bold"], [1, "row"], [1, "col-md-12", "text-center"], ["id", "countdown"], [1, "count-down", "list-unstyled"], ["id", "days", 1, "count-number", "list-inline-item", "m-2"], [1, "count-head"], ["id", "hours", 1, "count-number", "list-inline-item", "m-2"], ["id", "mins", 1, "count-number", "list-inline-item", "m-2"], ["id", "secs", 1, "count-number", "list-inline-item", "m-2"], ["id", "end", 1, "h1"], ["routerLink", "/", 1, "btn", "btn-primary", "mt-4"], [1, "mdi", "mdi-backup-restore"]],
  template: function PageComingsoonComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "div", 7)(8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "We're Coming soon...");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Daltek");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "ul", 14)(19, "li", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Minutes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Seconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "li", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 11)(37, "div", 12)(38, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Go Back Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._days);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._hours);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._minutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._seconds);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWNvbWluZ3Nvb24uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9vdGhlci9wYWdlLWNvbWluZ3Nvb24vcGFnZS1jb21pbmdzb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 78529:
/*!******************************************************************!*\
  !*** ./src/app/feature/other/page-error/page-error.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageErrorComponent": () => (/* binding */ PageErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 20005);



/**
 * PAge Error Component
 */
class PageErrorComponent {
  constructor() {}
  ngOnInit() {}
}
PageErrorComponent.ɵfac = function PageErrorComponent_Factory(t) {
  return new (t || PageErrorComponent)();
};
PageErrorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageErrorComponent,
  selectors: [["app-page-error"]],
  decls: 23,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-8", "col-md-12", "text-center"], ["src", "assets/images/404.svg", "alt", "", 1, "img-fluid"], [1, "text-uppercase", "mt-4", "display-3"], [1, "text-capitalize", "text-dark", "mb-4", "error-page"], [1, "text-muted", "para-desc", "mx-auto"], [1, "text-primary", "fw-bold"], [1, "row"], [1, "col-md-12", "text-center"], ["routerLink", "/index", 1, "btn", "btn-outline-primary", "mt-4"], ["routerLink", "/index", 1, "btn", "btn-primary", "mt-4", "ms-2"]],
  template: function PageErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Oh ! no");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Page Not Found");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Dalois");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12)(18, "div", 13)(19, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Go Back");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Go To Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWVycm9yLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9vdGhlci9wYWdlLWVycm9yL3BhZ2UtZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 40645:
/*!************************************************************************!*\
  !*** ./src/app/feature/other/page-thankyou/page-thankyou.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageThankyouComponent": () => (/* binding */ PageThankyouComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);


/**
 * Page Thankyou Component
 */
class PageThankyouComponent {
  constructor() {}
  ngOnInit() {}
}
PageThankyouComponent.ɵfac = function PageThankyouComponent_Factory(t) {
  return new (t || PageThankyouComponent)();
};
PageThankyouComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageThankyouComponent,
  selectors: [["app-page-thankyou"]],
  decls: 13,
  vars: 0,
  consts: [[1, "bg-home", "bg-light", "d-flex", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12"], [1, "text-center"], [1, "icon", "d-flex", "align-items-center", "justify-content-center", "bg-soft-primary", "rounded-circle", "mx-auto", 2, "height", "90px", "width", "90px"], [1, "uil", "uil-thumbs-up", "align-middle", "h1", "mb-0"], [1, "my-4", "fw-bold"], [1, "text-muted", "para-desc", "mx-auto"], ["routerLink", "/index", 1, "btn", "btn-soft-primary", "mt-3"]],
  template: function PageThankyouComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Thank You");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Go To Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLXRoYW5reW91LmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9vdGhlci9wYWdlLXRoYW5reW91L3BhZ2UtdGhhbmt5b3UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ })

};
;
//# sourceMappingURL=742.js.map