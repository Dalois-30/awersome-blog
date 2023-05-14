"use strict";
exports.id = 388;
exports.ids = [388];
exports.modules = {

/***/ 76617:
/*!*****************************************************!*\
  !*** ./src/app/feature/blog/blog-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogRoutingModule": () => (/* binding */ BlogRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var src_app_feature_blog_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/feature/blog/page-blog-detail/page-blog-detail.component */ 51321);
/* harmony import */ var src_app_feature_blog_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/feature/blog/page-blog-list-sidebar/page-blog-list-sidebar.component */ 83328);
/* harmony import */ var src_app_feature_blog_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/feature/blog/page-contact-detail/page-contact-detail.component */ 39883);
/* harmony import */ var src_app_shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/switcher/switcher.component */ 80885);
/* harmony import */ var _index_personal_index_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-personal/index-personal.component */ 3680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4009);








const routes = [{
  path: '',
  component: _index_personal_index_personal_component__WEBPACK_IMPORTED_MODULE_4__.IndexPersonalComponent
}, {
  path: 'blog',
  component: src_app_feature_blog_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.PageBlogListSidebarComponent
}, {
  path: 'page-blog-detail',
  component: src_app_feature_blog_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_0__.PageBlogDetailComponent
}, {
  path: 'page-contact-detail',
  component: src_app_feature_blog_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_2__.PageContactDetailComponent
}, {
  path: '#',
  component: src_app_shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_3__.SwitcherComponent
}];
class BlogRoutingModule {}
BlogRoutingModule.ɵfac = function BlogRoutingModule_Factory(t) {
  return new (t || BlogRoutingModule)();
};
BlogRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: BlogRoutingModule
});
BlogRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](BlogRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 43388:
/*!*********************************************!*\
  !*** ./src/app/feature/blog/blog.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogModule": () => (/* binding */ BlogModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-routing.module */ 76617);
/* harmony import */ var src_app_feature_blog_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/feature/blog/page-blog-detail/page-blog-detail.component */ 51321);
/* harmony import */ var src_app_feature_blog_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/feature/blog/page-blog-list-sidebar/page-blog-list-sidebar.component */ 83328);
/* harmony import */ var src_app_feature_blog_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/feature/blog/page-contact-detail/page-contact-detail.component */ 39883);
/* harmony import */ var src_app_shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/switcher/switcher.component */ 80885);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 85802);
/* harmony import */ var _index_personal_index_personal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-personal/index-personal.component */ 3680);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4009);









class BlogModule {}
BlogModule.ɵfac = function BlogModule_Factory(t) {
  return new (t || BlogModule)();
};
BlogModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: BlogModule
});
BlogModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BlogModule, {
    declarations: [_index_personal_index_personal_component__WEBPACK_IMPORTED_MODULE_6__.IndexPersonalComponent, src_app_feature_blog_page_blog_detail_page_blog_detail_component__WEBPACK_IMPORTED_MODULE_1__.PageBlogDetailComponent, src_app_feature_blog_page_blog_list_sidebar_page_blog_list_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.PageBlogListSidebarComponent, src_app_feature_blog_page_contact_detail_page_contact_detail_component__WEBPACK_IMPORTED_MODULE_3__.PageContactDetailComponent, src_app_shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_4__.SwitcherComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _blog_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogRoutingModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule]
  });
})();

/***/ }),

/***/ 3680:
/*!*************************************************************************!*\
  !*** ./src/app/feature/blog/index-personal/index-personal.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPersonalComponent": () => (/* binding */ IndexPersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 40619);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-owl-carousel-o */ 29994);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-feather */ 20005);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 220);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 4789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 70938);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-typed-js */ 4413);










function IndexPersonalComponent_div_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 95)(4, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 97)(6, "h5", 98)(7, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h6", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 101)(12, "a", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IndexPersonalComponent_div_81_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const i_r8 = restoredCtx.index;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.open(i_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i-feather", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.category);
  }
}
function IndexPersonalComponent_ng_template_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 106)(4, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Thomas Israel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IndexPersonalComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\" The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 106)(4, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Carl Oliver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IndexPersonalComponent_ng_template_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\" There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 106)(4, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Barbara McIntosh ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IndexPersonalComponent_ng_template_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero in 45 BC. Allegedly, a Latin scholar established the origin of the text by compiling all the instances of the unusual word 'consectetur' he could find \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 106)(4, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Christa Smith ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IndexPersonalComponent_ng_template_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 106)(4, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Dean Tolle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function IndexPersonalComponent_ng_template_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104)(1, "p", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul", 106)(4, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "h6", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " Jill Webb ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
const _c0 = function () {
  return ["Nguenang Tapi Claude D.", "Blockchain Developer", "Web Developer"];
};
/***
 * Personal Component
 */
class IndexPersonalComponent {
  constructor(_lightbox) {
    this._lightbox = _lightbox;
    this._album = [];
    this.workList = [{
      image: 'assets/images/personal/1.png',
      title: 'Go-Africa Investment',
      category: 'Blockchain'
    }, {
      image: 'assets/images/personal/2.png',
      title: 'Mendo Cash',
      category: 'NestJs'
    }, {
      image: 'assets/images/personal/3.png',
      title: 'Ecommerce App',
      category: 'React'
    }, {
      image: 'assets/images/personal/4.png',
      title: 'E-learnig',
      category: 'Angular'
    }, {
      image: 'assets/images/personal/5.png',
      title: 'Youtube clone',
      category: 'React'
    }, {
      image: 'assets/images/personal/6.png',
      title: 'Configure and use a blockchain node',
      category: 'Blockchain'
    }];
    /***
     * Testimonial Slider
     */
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        900: {
          items: 1
        }
      },
      nav: false
    };
    /**
     * Blog Data
     */
    this.blogData = [{
      image: "assets/images/personal/hub-hero.png",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Claude Tapi",
      date: "13th August, 2022"
    }, {
      image: "assets/images/personal/appwebcover.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Claude Tapi",
      date: "30th November, 2022"
    }, {
      image: "assets/images/personal/Stat1.png",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Claude Tapi",
      date: "19th December, 2022"
    }];
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/personal/' + i + '.png';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._album.push(album);
    }
  }
  open(index) {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
  close() {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit() {}
}
IndexPersonalComponent.ɵfac = function IndexPersonalComponent_Factory(t) {
  return new (t || IndexPersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.Lightbox));
};
IndexPersonalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: IndexPersonalComponent,
  selectors: [["app-index-personal"]],
  decls: 236,
  vars: 12,
  consts: [["id", "home", 1, "bg-home", "rtl-personal-hero", "bg-light", "d-flex", "align-items-center", 2, "background", "url('assets/images/personal/test.jpg') center center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-12", "col-md-9"], [1, "title-heading", "mt-4"], [1, "display-3", "fw-bold", "mb-3"], [3, "strings", "shuffle", "typeSpeed", "loop"], [1, "element", "typing", "text-primary"], [1, "para-desc", "text-muted"], [1, "mt-4", "pt-2"], [1, "btn", "btn-primary", "mt-2", "me-2", 3, "ngxScrollTo"], [1, "uil", "uil-camera"], [1, "btn", "btn-outline-primary", "mt-2", 3, "ngxScrollTo"], [1, "uil", "uil-cloud-download"], [1, "section"], [1, "col-md-6"], [1, "section-title"], [1, "title"], [1, "text-muted", "mb-0"], [1, "mt-4"], [1, "btn", "btn-primary", "mouse-down", 3, "ngxScrollTo"], [1, "mdi", "mdi-phone"], [1, "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "ms-md-4"], [1, "progress-box"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "84%"], [1, "progress-value", "d-block", "text-muted", "h6"], [1, "progress-box", "mt-4"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "85%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "70%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "75%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "83%"], ["id", "portfolio", 1, "container", "mt-100", "mt-60"], [1, "row"], [1, "col-12"], [1, "section-title", "mb-4", "pb-2"], [1, "title", "mb-4"], [1, "text-muted", "para-desc", "mb-0"], ["class", "col-lg-4 col-md-6 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2"], ["routerLink", "/portfolio-modern-three", 1, "btn", "btn-outline-primary"], [1, "mdi", "mdi-chevron-right"], [1, "container", "mt-100", "mt-60"], [1, "text-primary", "fw-bold"], [1, "col-md-4", "mt-4", "pt-2"], [1, "card", "work-process", "border-0", "rounded", "shadow"], [1, "card-body"], [1, "text-muted", "para"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0", "mt-2"], [1, "step", "h1", "mb-0", "fw-bold"], [1, "step-icon"], [1, "mdi", "mdi-chevron-double-right", "mdi-36px"], [1, "mdi", "mdi-check-all", "mdi-36px"], [1, "section", 2, "background", "url('assets/images/personal/ngbg.jpg') center center"], [1, "bg-overlay"], [1, "row", "justify-content-center"], [1, "col-lg-7", "text-center"], ["id", "customer-testi", 3, "options"], ["carouselSlide", ""], [1, "py-4", "border-bottom"], [3, "blogData"], ["id", "contact", 1, "container", "mt-100", "mt-60"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "rounded", "shadow", "border-0"], [1, "card-title"], [1, "custom-form", "mt-3"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg", 1, "mb-0"], ["id", "simple-msg"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email :", 1, "form-control", "ps-5"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "Subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons", "clearfix"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Message :", 1, "form-control", "ps-5"], [1, "d-grid"], ["type", "submit", "id", "submit", "name", "send", 1, "btn", "btn-primary"], [1, "col-lg-8", "col-md-6", "ps-md-3", "pe-md-3", "mt-4", "pt-2"], [1, "card", "border-0", "shadow", "rounded"], [1, "map", "map-height-two", "map-gray"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "allowfullscreen", "", 1, "rounded", 2, "border", "0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "card-body", "p-0"], ["alt", "work-image", 1, "img-fluid", 3, "src"], [1, "overlay-work", "bg-dark"], [1, "content"], [1, "mb-0"], ["routerLink", "/page-work-detail", 1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], [1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill", "mfp-image", 3, "click"], ["name", "camera", 1, "fea", "icon-sm"], [1, "customer-testi", "text-center"], [1, "text-light", "para-dark", "h6", "fst-italic"], [1, "list-unstyled", "mb-0", "mt-3"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-light", "title-dark"]],
  template: function IndexPersonalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Here I'm ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "ngx-typed-js", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Passionate about computer and digital technologies, I am always looking for new challenges that can boost my professional abilities.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, " View Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Hire Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "section", 14)(20, "div", 1)(21, "div", 2)(22, "div", 15)(23, "div", 16)(24, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "p", 18)(27, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Welcome to my portfolio! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. Here you will find a collection of my work as a developer, showcasing my skills and expertise in various areas of the field. From web development to mobile app development. I am passionate about learning and keeping up with the latest trends and technologies, and I believe in using my skills for good. I hope you enjoy perusing my portfolio and feel free to contact me with any questions or opportunities to collaborate on future projects.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19)(32, "a", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, " Contact Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 22)(36, "div", 23)(37, "div", 24)(38, "h6", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "NestJs / NodeJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 26)(41, "div", 27)(42, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "84%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 29)(45, "h6", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Blockchain");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 26)(48, "div", 30)(49, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 29)(52, "h6", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Data-scientist");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 26)(55, "div", 31)(56, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "70%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 29)(59, "h6", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Angular / TypeScript");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 26)(62, "div", 32)(63, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "75%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 29)(66, "h6", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67, "Cloud Computing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 26)(69, "div", 33)(70, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "83%");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 34)(73, "div", 35)(74, "div", 36)(75, "div", 37)(76, "h4", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "My Work & Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " Here's a brief introduction to my developer portfolio: showcasing my top projects and skills.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](81, IndexPersonalComponent_div_81_Template, 14, 3, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 41)(83, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 44)(87, "div", 35)(88, "div", 36)(89, "div", 37)(90, "h4", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Work Process");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Dalois");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "div", 35)(98, "div", 46)(99, "div", 47)(100, "div", 48)(101, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Discuss The Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Collaborate and discuss openly about the project. Exchange ideas and propose solutions to achieve the best outcome. Let's start the conversation and work toward success!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](107, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "ul", 51)(109, "li", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "Step 01.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "li", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](112, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "div", 46)(114, "div", 47)(115, "div", 48)(116, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Develop & Elaborate");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Take the initial idea or concept and further develop it through elaboration and expansion. Refine the details, add depth and complexity, and explore various perspectives to create a more comprehensive and nuanced understanding.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "ul", 51)(124, "li", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Step 02.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "li", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](127, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 46)(129, "div", 47)(130, "div", 48)(131, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "Final Approvement");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "p", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](134, "The last stage where a decision is made on whether to approve or reject a project, product, or proposal.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "a", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](136, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](137, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "ul", 51)(139, "li", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Step 03.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "li", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "section", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "div", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 1)(146, "div", 58)(147, "div", 59)(148, "owl-carousel-o", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](149, IndexPersonalComponent_ng_template_149_Template, 16, 0, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](150, IndexPersonalComponent_ng_template_150_Template, 16, 0, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](151, IndexPersonalComponent_ng_template_151_Template, 16, 0, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](152, IndexPersonalComponent_ng_template_152_Template, 16, 0, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](153, IndexPersonalComponent_ng_template_153_Template, 16, 0, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](154, IndexPersonalComponent_ng_template_154_Template, 16, 0, "ng-template", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "section", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "section", 14)(157, "div", 1)(158, "div", 58)(159, "div", 36)(160, "div", 37)(161, "h4", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Latest News");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "p", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](166, "Dalois");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](168, "app-blog", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 64)(170, "div", 58)(171, "div", 36)(172, "div", 37)(173, "h4", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](174, "Contact Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "p", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](178, "Dalois");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](179, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "div", 35)(181, "div", 65)(182, "div", 66)(183, "div", 48)(184, "h4", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Get In Touch !");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](186, "div", 68)(187, "form", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](188, "p", 70)(189, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 35)(191, "div", 36)(192, "div", 72)(193, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Your Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](196, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](198, "i-feather", 76)(199, "input", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "div", 36)(201, "div", 72)(202, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](203, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](204, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](207, "i-feather", 78)(208, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 36)(210, "div", 72)(211, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "i-feather", 80)(215, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "div", 36)(217, "div", 72)(218, "label", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "Comments ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "span", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](223, "i-feather", 82)(224, "textarea", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 35)(226, "div", 36)(227, "div", 84)(228, "button", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](229, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 86)(231, "div", 87)(232, "div", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "iframe", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "a", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](235, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](11, _c0))("shuffle", true)("typeSpeed", 100)("loop", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.workList);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("options", ctx.customOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("blogData", ctx.blogData);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_5__.CarouselSlideDirective, angular_feather__WEBPACK_IMPORTED_MODULE_6__.FeatherComponent, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_1__.BlogComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_7__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, ngx_typed_js__WEBPACK_IMPORTED_MODULE_9__.NgxTypedJsComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1wZXJzb25hbC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9ibG9nL2luZGV4LXBlcnNvbmFsL2luZGV4LXBlcnNvbmFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 51321:
/*!*****************************************************************************!*\
  !*** ./src/app/feature/blog/page-blog-detail/page-blog-detail.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogDetailComponent": () => (/* binding */ PageBlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 20005);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 4789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 70938);





/**
 * Page Blog-Detail Component
 */
class PageBlogDetailComponent {
  constructor() {}
  ngOnInit() {}
}
PageBlogDetailComponent.ɵfac = function PageBlogDetailComponent_Factory(t) {
  return new (t || PageBlogDetailComponent)();
};
PageBlogDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageBlogDetailComponent,
  selectors: [["app-page-blog-detail"]],
  decls: 351,
  vars: 5,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "list-unstyled", "mt-4"], [1, "list-inline-item", "h6", "user", "text-muted", "me-2"], [1, "mdi", "mdi-account"], [1, "list-inline-item", "h6", "date", "text-muted"], [1, "mdi", "mdi-calendar-check"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-lg-8", "col-md-6"], [1, "card", "blog", "blog-detail", "border-0", "shadow", "rounded"], ["src", "assets/images/blog/01.jpg", "alt", "", 1, "img-fluid", "rounded-top"], [1, "card-body", "content"], [1, "mdi", "mdi-tag", "text-primary", "me-1"], ["href", "javscript:void(0)", 1, "text-primary"], [1, "text-muted", "mt-3"], [1, "blockquote", "mt-3", "p-3"], [1, "text-muted", "mb-0", "fst-italic"], [1, "text-muted"], [1, "post-meta", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], [1, "card", "shadow", "rounded", "border-0", "mt-4"], [1, "card-body"], [1, "card-title", "mb-0"], [1, "media-list", "list-unstyled", "mb-0"], [1, "mt-4"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "pe-3"], [1, "commentor-detail"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-dark", "media-heading"], [1, "text-muted", 3, "ngxScrollTo"], [1, "mdi", "mdi-reply"], [1, "mt-3"], [1, "text-muted", "fst-italic", "p-3", "bg-light", "rounded"], ["href", "javascript:void(0)", 1, "media-heading", "text-dark"], [1, "list-unstyled", "ps-4", "ps-md-5", "sub-comment"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["id", "message", "placeholder", "Your Comment", "rows", "5", "name", "message", "required", "", 1, "form-control", "ps-5"], [1, "col-lg-6"], [1, "text-danger"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["id", "name", "name", "name", "type", "text", "placeholder", "Name", "required", "", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "send", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], [1, "col-lg-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], ["src", "assets/images/blog/02.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "card", "border-0", "sidebar", "sticky-bar", "rounded", "shadow"], [1, "widget"], ["role", "search", "method", "get"], [1, "input-group", "mb-3", "border", "rounded"], ["type", "text", "id", "s", "name", "s", "placeholder", "Search Keywords...", 1, "form-control", "border-0"], ["type", "submit", "id", "searchsubmit", 1, "input-group-text", "bg-transparent", "border-0"], [1, "uil", "uil-search"], [1, "widget", "mb-4", "pb-2"], [1, "widget-title"], [1, "list-unstyled", "mt-4", "mb-0", "blog-categories"], ["href", "jvascript:void(0)"], [1, "float-end"], [1, "clearfix", "post-recent"], [1, "post-recent-thumb", "float-start"], ["alt", "img", "src", "assets/images/blog/07.jpg", 1, "img-fluid", "rounded"], [1, "post-recent-content", "float-start"], [1, "text-muted", "mt-2"], ["alt", "img", "src", "assets/images/blog/08.jpg", 1, "img-fluid", "rounded"], ["alt", "img", "src", "assets/images/blog/01.jpg", 1, "img-fluid", "rounded"], [1, "tagcloud", "mt-4"], ["href", "jvascript:void(0)", 1, "rounded"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function PageBlogDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Design your apps in your own way ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5)(8, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " 13th August, 2019 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10)(15, "nav", 11)(16, "ul", 12)(17, "li", 13)(18, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 13)(21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 13)(24, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Blog Detail");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17)(29, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "svg", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "path", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 21)(33, "div", 1)(34, "div", 22)(35, "div", 23)(36, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26)(39, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Software");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Application");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "blockquote", 30)(49, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the viewer's attention from the layout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 33)(54, "ul", 34)(55, "li", 35)(56, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 38)(60, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 41)(64, "div", 42)(65, "h5", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Comments :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 44)(68, "li", 45)(69, "div", 46)(70, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 49)(73, "h6", 50)(74, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Lorenzo Peterson");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "small", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "15th August, 2019 at 01:25 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 54)(82, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 45)(85, "div", 46)(86, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49)(89, "h6", 50)(90, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Tammy Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "small", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "15th August, 2019 at 05:44 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54)(98, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 45)(101, "div", 46)(102, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 49)(105, "h6", 50)(106, "a", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Tammy Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "small", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "16th August, 2019 at 03:44 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 54)(114, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 57)(117, "li", 45)(118, "div", 46)(119, "div", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "a", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 49)(122, "h6", 50)(123, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Lorenzo Peterson");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "small", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "17th August, 2019 at 01:25 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "i", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 54)(131, "p", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 41)(134, "div", 42)(135, "h5", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Leave A Comment :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "form", 54)(138, "div", 22)(139, "div", 58)(140, "div", 59)(141, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Your Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i-feather", 62)(145, "textarea", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 64)(147, "div", 59)(148, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "span", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i-feather", 66)(154, "input", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 64)(156, "div", 59)(157, "label", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "span", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i-feather", 68)(163, "input", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 58)(165, "div", 70)(166, "button", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 41)(169, "div", 42)(170, "h5", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Related Posts :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 22)(173, "div", 72)(174, "div", 73)(175, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "img", 74)(177, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 26)(179, "h5")(180, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 77)(183, "ul", 34)(184, "li", 35)(185, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "li", 38)(189, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "i", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 80)(196, "small", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "i", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "small", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 72)(203, "div", 73)(204, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "img", 85)(206, "div", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 26)(208, "h5")(209, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "How apps is changing the IT world");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 77)(212, "ul", 34)(213, "li", 35)(214, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "li", 38)(218, "a", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "a", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "i", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 80)(225, "small", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](226, "i", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "small", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "i", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 86)(232, "div", 87)(233, "div", 42)(234, "div", 88)(235, "form", 89)(236, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "button", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 94)(241, "h5", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "ul", 96)(244, "li")(245, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Finance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "13");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "li")(250, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "09");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "li")(255, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "li")(260, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Corporate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "li")(265, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Investment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "span", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 94)(270, "h5", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Recent Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 45)(273, "div", 99)(274, "div", 100)(275, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "img", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "div", 102)(278, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "Consultant Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "15th June, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 99)(283, "div", 100)(284, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 102)(287, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Look On The Glorious Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "15th June, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 99)(292, "div", 100)(293, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "img", 105);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 102)(296, "a", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Research Financial.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "span", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "15th June, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 94)(301, "h5", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Tags Cloud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "div", 106)(304, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Finance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, "Bride");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, "Lifestyle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "Beauty");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, "Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Audio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 88)(325, "h5", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "Follow us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "ul", 108)(328, "li", 38)(329, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](330, "i-feather", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "li", 111)(332, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "i-feather", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "li", 111)(335, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "i-feather", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "li", 111)(338, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "i-feather", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "li", 111)(341, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](342, "i-feather", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "li", 111)(344, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i-feather", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "li", 111)(347, "a", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "i-feather", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "a", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "i-feather", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](222);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9ibG9nL3BhZ2UtYmxvZy1kZXRhaWwvcGFnZS1ibG9nLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 83328:
/*!*****************************************************************************************!*\
  !*** ./src/app/feature/blog/page-blog-list-sidebar/page-blog-list-sidebar.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogListSidebarComponent": () => (/* binding */ PageBlogListSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 97191);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 41444);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 20005);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 4789);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 70938);






function PageBlogListSidebarComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "div", 67)(3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 69)(5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 71)(7, "small", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 68)(14, "div", 76)(15, "h5")(16, "a", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 79)(21, "ul", 80)(22, "li", 81)(23, "a", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 53)(27, "a", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
  }
}
;
/**
 * Page Blog-ListSidebar Component
 */
class PageBlogListSidebarComponent {
  constructor() {
    /**
     * Blog Data
     */
    this.blogListData = [{
      image: "assets/images/blog/03.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/02.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/16.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/03.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/18.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/19.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/13.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
  }
  ngOnInit() {}
}
PageBlogListSidebarComponent.ɵfac = function PageBlogListSidebarComponent_Factory(t) {
  return new (t || PageBlogListSidebarComponent)();
};
PageBlogListSidebarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageBlogListSidebarComponent,
  selectors: [["app-page-blog-list-sidebar"]],
  decls: 168,
  vars: 2,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-lg-8", "col-12"], ["class", "col-12 mb-4 pb-2", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], [1, "col-lg-4", "col-12", "mt-4", "mt-lg-0", "pt-2", "pt-lg-0"], [1, "card", "border-0", "sidebar", "sticky-bar", "rounded", "shadow"], [1, "card-body"], [1, "widget"], ["role", "search", "method", "get"], [1, "input-group", "mb-3", "border", "rounded"], ["type", "text", "id", "s", "name", "s", "placeholder", "Search Keywords...", 1, "form-control", "border-0"], ["type", "submit", "id", "searchsubmit", 1, "input-group-text", "bg-transparent", "border-0"], [1, "uil", "uil-search"], [1, "widget", "mb-4", "pb-2"], [1, "widget-title"], [1, "list-unstyled", "mt-4", "mb-0", "blog-categories"], ["href", "jvascript:void(0)"], [1, "float-end"], [1, "mt-4"], [1, "clearfix", "post-recent"], [1, "post-recent-thumb", "float-start"], ["alt", "img", "src", "assets/images/blog/07.jpg", 1, "img-fluid", "rounded"], [1, "post-recent-content", "float-start"], [1, "text-muted", "mt-2"], ["alt", "img", "src", "assets/images/blog/08.jpg", 1, "img-fluid", "rounded"], ["alt", "img", "src", "assets/images/blog/01.jpg", 1, "img-fluid", "rounded"], [1, "tagcloud", "mt-4"], ["href", "jvascript:void(0)", 1, "rounded"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-12", "mb-4", "pb-2"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], [1, "row", "align-items-center", "g-0"], [1, "col-md-6"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "overlay", "bg-dark"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "text-muted", "mb-0"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"]],
  template: function PageBlogListSidebarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Blog Listing & Sidebar ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Dalois");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9)(17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog List with Sidebar");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 17)(26, "div", 1)(27, "div", 18)(28, "div", 19)(29, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, PageBlogListSidebarComponent_div_30_Template, 33, 7, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21)(32, "ul", 22)(33, "li", 23)(34, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 25)(37, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 23)(40, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 23)(43, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 23)(46, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28)(49, "div", 29)(50, "div", 30)(51, "div", 31)(52, "form", 32)(53, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 37)(58, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Categories");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ul", 39)(61, "li")(62, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Finance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "13");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li")(67, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "09");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li")(72, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "18");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li")(77, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Corporate");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "20");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li")(82, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Investment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "22");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37)(87, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Recent Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 42)(90, "div", 43)(91, "div", 44)(92, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 46)(95, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Consultant Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "15th June, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 43)(100, "div", 44)(101, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 46)(104, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Look On The Glorious Balance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "15th June, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 43)(109, "div", 44)(110, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 46)(113, "a", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Research Financial.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "15th June, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 37)(118, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Tags Cloud");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 50)(121, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Business");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Finance");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Marketing");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Fashion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Bride");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Lifestyle");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Travel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Beauty");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Audio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 31)(142, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Follow us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "ul", 52)(145, "li", 53)(146, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "i-feather", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "li", 56)(149, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i-feather", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 56)(152, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "i-feather", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "li", 56)(155, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i-feather", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 56)(158, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i-feather", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 56)(161, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i-feather", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li", 56)(164, "a", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i-feather", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "i-feather", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogListData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](136);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctbGlzdC1zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9ibG9nL3BhZ2UtYmxvZy1saXN0LXNpZGViYXIvcGFnZS1ibG9nLWxpc3Qtc2lkZWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3TEFBd0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 39883:
/*!***********************************************************************************!*\
  !*** ./src/app/feature/blog/page-contact-detail/page-contact-detail.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactDetailComponent": () => (/* binding */ PageContactDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 3197);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 20005);



function PageContactDetailComponent_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31)(1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactDetailComponent_ng_template_37_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
/**
 * Page Contact-Detail Component
 */
class PageContactDetailComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.hideFooter = true;
  }
  ngOnInit() {}
  mapView(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageContactDetailComponent.ɵfac = function PageContactDetailComponent_Factory(t) {
  return new (t || PageContactDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
};
PageContactDetailComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageContactDetailComponent,
  selectors: [["app-page-contact-detail"]],
  decls: 61,
  vars: 0,
  consts: [[1, "vh-100", "d-flex", "align-items-center", 2, "background", "url('assets/images/contact-detail.jpg') center center"], [1, "bg-overlay", "bg-overlay-white"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-6", "offset-lg-6", "col-md-7", "offset-md-5"], [1, "title-heading", "mt-5", "pt-4"], [1, "heading"], [1, "text-dark"], [1, "text-primary", "fw-bold"], [1, "d-flex", "contact-detail", "align-items-center", "mt-3"], [1, "icon"], ["name", "mail", 1, "fea", "icon-m-md", "text-dark", "me-3"], [1, "flex-1", "content"], [1, "title", "fw-bold", "mb-0"], ["href", "mailto:contact@example.com", 1, "text-primary"], ["name", "phone", 1, "fea", "icon-m-md", "text-dark", "me-3"], ["href", "tel:+152534-468-854", 1, "text-primary"], ["name", "map-pin", 1, "fea", "icon-m-md", "text-dark", "me-3"], ["data-type", "iframe", 1, "video-play-icon", "text-primary", 3, "click"], ["content", ""], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]],
  template: function PageContactDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Let's talk about your portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dalois");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9)(14, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i-feather", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12)(17, "h5", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "daloisnguenang@yahoo.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9)(22, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "h5", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "+237 655 328 018");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9)(30, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12)(33, "h5", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactDetailComponent_Template_a_click_35_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.mapView(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "View on Google map");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PageContactDetailComponent_ng_template_37_Template, 6, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "ul", 20)(40, "li", 21)(41, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i-feather", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 24)(44, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i-feather", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 24)(47, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i-feather", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 24)(50, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i-feather", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 24)(53, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i-feather", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 24)(56, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i-feather", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 24)(59, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i-feather", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent],
  styles: [".dark-modal .modal-content {\n    background-color: #000000;\n    color: white;\n    background: none;\n    border: none;\n}\n\n  .dark-modal .modal-header {\n    border: none\n}\n\n  .dark-modal .close {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29udGFjdC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJwYWdlLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZS9ibG9nL3BhZ2UtY29udGFjdC1kZXRhaWwvcGFnZS1jb250YWN0LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsNHNCQUE0c0IiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 80885:
/*!*******************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitcherComponent": () => (/* binding */ SwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4009);

/**
 * Switcher component
 */
class SwitcherComponent {
  constructor() {}
  ngOnInit() {
    // assign value
    this.isVisible = false;
  }
  /**
   * Change theme color
   */
  onChangeColor(color) {
    document.getElementById('color-opt').setAttribute('href', './assets/css/colors/' + color + '.css');
  }
  /**
   * Set dark theme
   */
  setDark() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set light theme
   */
  setLight() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }
  /**
   * Set dark-rtl theme
   */
  darkRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
  }
  /**
   * Set dark-light theme
   */
  darkLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set rtl theme
   */
  setRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-rtl.min.css');
  }
  /**
   * Set light theme
   */
  setLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }
  /**
   * Toggle switcher
   */
  onChangeSwitch() {
    this.isVisible = !this.isVisible;
  }
}
SwitcherComponent.ɵfac = function SwitcherComponent_Factory(t) {
  return new (t || SwitcherComponent)();
};
SwitcherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SwitcherComponent,
  selectors: [["app-switcher"]],
  decls: 13,
  vars: 2,
  consts: [["id", "style-switcher", 1, "bg-light", "border", "p-3", "pt-2", "pb-2", 2, "left", "0px"], [1, "title", "text-center", "pt-3", "mb-0"], [1, "text-center", "list-unstyled", "mb-0"], [1, "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "dark-version", "t-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "light-version", "t-light", "mt-2", 3, "click"], [1, "bottom"], ["href", "javascript: void(0);", 1, "settings", "bg-white", "title-bg-dark", "shadow", "d-block", 3, "click"], [1, "mdi", "mdi-cog", "ms-1", "mdi-24px", "position-absolute", "mdi-spin", "text-primary"]],
  template: function SwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Theme Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2)(4, "li", 3)(5, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_5_listener() {
        return ctx.setDark();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 3)(8, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_8_listener() {
        return ctx.setLight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6)(11, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_11_listener() {
        return ctx.onChangeSwitch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.isVisible ? "left: 0px" : "left: -189px");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2l0Y2hlci5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3N3aXRjaGVyL3N3aXRjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

};
;
//# sourceMappingURL=388.js.map