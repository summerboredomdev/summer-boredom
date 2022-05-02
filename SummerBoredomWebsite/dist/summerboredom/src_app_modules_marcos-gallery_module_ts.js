"use strict";
(self["webpackChunksummerboredom"] = self["webpackChunksummerboredom"] || []).push([["src_app_modules_marcos-gallery_module_ts"],{

/***/ 227:
/*!**************************************************!*\
  !*** ./src/app/modules/marcos-gallery.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarcosGalleryModule": () => (/* binding */ MarcosGalleryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _projects_marcos_gallery_marcos_gallery_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../projects/marcos-gallery/marcos-gallery.component */ 5448);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    {
        path: '',
        component: _projects_marcos_gallery_marcos_gallery_component__WEBPACK_IMPORTED_MODULE_0__.MarcosGalleryComponent,
    },
];
class MarcosGalleryModule {
}
MarcosGalleryModule.ɵfac = function MarcosGalleryModule_Factory(t) { return new (t || MarcosGalleryModule)(); };
MarcosGalleryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MarcosGalleryModule });
MarcosGalleryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MarcosGalleryModule, { declarations: [_projects_marcos_gallery_marcos_gallery_component__WEBPACK_IMPORTED_MODULE_0__.MarcosGalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5448:
/*!*********************************************************************!*\
  !*** ./src/app/projects/marcos-gallery/marcos-gallery.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MarcosGalleryComponent": () => (/* binding */ MarcosGalleryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MarcosGalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
MarcosGalleryComponent.ɵfac = function MarcosGalleryComponent_Factory(t) { return new (t || MarcosGalleryComponent)(); };
MarcosGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MarcosGalleryComponent, selectors: [["app-marcos-gallery"]], decls: 2, vars: 0, template: function MarcosGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "marcos-gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJjb3MtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_marcos-gallery_module_ts.js.map