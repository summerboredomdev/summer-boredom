"use strict";
(self["webpackChunksummerboredom"] = self["webpackChunksummerboredom"] || []).push([["src_app_modules_book_module_ts"],{

/***/ 5078:
/*!*****************************************************************!*\
  !*** ./src/app/components/description/description.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DescriptionComponent": () => (/* binding */ DescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class DescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
DescriptionComponent.ɵfac = function DescriptionComponent_Factory(t) { return new (t || DescriptionComponent)(); };
DescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DescriptionComponent, selectors: [["app-description"]], decls: 15, vars: 0, consts: [[2, "padding", "30px"], [1, "title"], [1, "instructions"]], template: function DescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Descri\u00E7\u00E3o do jogo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Voc\u00EA est\u00E1 em isolamento durante a pandemia de 2020 e sua casa \u00E9 seu \u00FAnico espa\u00E7o de viv\u00EAncia. N\u00E3o tendo muito com o que se distrair, voc\u00EA come\u00E7a a observar tudo a seu redor com novos olhos como forma de passar o tempo, de repensar suas hist\u00F3rias e se agarrar em qualquer pensamento que passe por sua cabe\u00E7a. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Objetivo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Montar uma hist\u00F3ria, uma narrativa, com apenas as fotografias dadas no jogo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Como jogar: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Para jogar, escolha as fotos, clicando e arrastando-as para a faixa azul e reorganize \u00E0 vontade para formar sua hist\u00F3ria em imagens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Ao montar sua narrativa, aperte \u201Cplay\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  font-size: 1.3vw;\n}\n\n.instructions[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUoiLCJmaWxlIjoiZGVzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGV7XG4gICAgZm9udC1zaXplOiAxLjN2dztcbn1cbi5pbnN0cnVjdGlvbnN7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });


/***/ }),

/***/ 1093:
/*!*********************************************************!*\
  !*** ./src/app/components/picture/picture.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PictureComponent": () => (/* binding */ PictureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PictureComponent {
    constructor() { }
    ngOnInit() {
        this.getURLs();
    }
    getURLs() {
    }
}
PictureComponent.ɵfac = function PictureComponent_Factory(t) { return new (t || PictureComponent)(); };
PictureComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PictureComponent, selectors: [["app-picture"]], inputs: { picture: "picture" }, decls: 1, vars: 1, consts: [[1, "pic", 3, "src"]], template: function PictureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: [".pic[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpY3R1cmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJwaWN0dXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpYyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4iXX0= */"] });


/***/ }),

/***/ 8229:
/*!****************************************!*\
  !*** ./src/app/modules/book.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookModule": () => (/* binding */ BookModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 117);
/* harmony import */ var _projects_book_book_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../projects/book/book.component */ 1041);
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/description/description.component */ 5078);
/* harmony import */ var _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/picture/picture.component */ 1093);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: '',
        component: _projects_book_book_component__WEBPACK_IMPORTED_MODULE_1__.BookComponent,
    },
];
class BookModule {
}
BookModule.ɵfac = function BookModule_Factory(t) { return new (t || BookModule)(); };
BookModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: BookModule });
BookModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BookModule, { declarations: [_projects_book_book_component__WEBPACK_IMPORTED_MODULE_1__.BookComponent, _components_description_description_component__WEBPACK_IMPORTED_MODULE_2__.DescriptionComponent, _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_3__.PictureComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__.DragDropModule] }); })();


/***/ }),

/***/ 117:
/*!********************************************!*\
  !*** ./src/app/modules/material.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);




class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule], exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIconModule] }); })();


/***/ }),

/***/ 1041:
/*!*************************************************!*\
  !*** ./src/app/projects/book/book.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookComponent": () => (/* binding */ BookComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _components_description_description_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/description/description.component */ 5078);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/picture/picture.component */ 1093);












const _c0 = ["lightbox"];
const _c1 = ["thumbnails"];
const _c2 = ["slides"];
function BookComponent_app_picture_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-picture", 40);
} if (rf & 2) {
    const picture_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r18);
} }
function BookComponent_app_picture_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-picture", 40);
} if (rf & 2) {
    const picture_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r19);
} }
function BookComponent_app_picture_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-picture", 40);
} if (rf & 2) {
    const picture_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r20);
} }
function BookComponent_app_picture_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-picture", 40);
} if (rf & 2) {
    const picture_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r21);
} }
function BookComponent_app_picture_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-picture", 40);
} if (rf & 2) {
    const picture_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r22);
} }
function BookComponent_app_picture_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-picture", 40);
} if (rf & 2) {
    const picture_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r23);
} }
function BookComponent_button_100_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookComponent_button_100_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r24.playPauseAudio(); return ctx_r24.openLightBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "play_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r12.active);
} }
function BookComponent_button_101_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookComponent_button_101_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r26.playPauseAudio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "pause_circle_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function BookComponent_div_112_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-picture", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@browsing", ctx_r15.isSelected[i_r29] ? "selected" : "unselected");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("picture", picture_r28);
} }
function BookComponent_div_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-picture", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const picture_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@browsing", ctx_r17.isSelected[i_r32] ? "selected" : "unselected")("picture", picture_r31);
} }
const _c3 = function (a0) { return [a0]; };
const _c4 = function (a0, a1, a2, a3, a4) { return [a0, a1, a2, a3, a4]; };
class BookComponent {
    constructor(
    // private store: AngularFirestore,
    // private storage: AngularFireStorage,
    platform, renderer) {
        this.platform = platform;
        this.renderer = renderer;
        this.data = [];
        this.page1 = [];
        this.page2 = [];
        this.page3 = [];
        this.page4 = [];
        this.page5 = [];
        this.selected = [];
        this.audio = new Audio();
        // storageRef: AngularFireStorageReference;
        this.loaded = false;
        this.isSelected = [];
        this.slideIndex = 1;
        this.sizes = [];
        this.active = true;
    }
    ngOnInit() {
        this.getPictures();
        this.audio.addEventListener('ended', () => {
            this.playNextAudio();
        });
    }
    ngAfterViewInit() {
        $('#flipbook').turn({});
    }
    drop(event) {
        this.active = false;
        this.currentAudioIndex = 0;
        if (event.previousContainer === event.container) {
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.moveItemInArray)(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            (0,_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.transferArrayItem)(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        if (this.selected.length === 0) {
            this.active = true;
        }
    }
    getPictures() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // await this.store
            //   .collection<Picture>('pictures')
            //   .get()
            //   .toPromise()
            //   .then((storePicGroup) => {
            //     storePicGroup.forEach((storePic) => {
            //       var tempPic: Picture = {
            //         audioUrl: 'audios/' + storePic.data().audioUrl + '.mp3',
            //         imageUrl: 'images/' + storePic.data().imageUrl + '.jpg',
            //       };
            //       this.data.push(tempPic);
            //     });
            //   });
            this.populateLists();
        });
    }
    playPauseAudio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (this.audio.paused && !this.loaded) {
                yield this.playNextAudio();
                this.audio.play();
            }
            else if (this.audio.paused && this.loaded) {
                this.audio.play();
            }
            else {
                this.audio.pause();
            }
        });
    }
    playNextAudio() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // if (this.selected[this.currentAudioIndex]) {
            //   this.storageRef = this.storage.ref(
            //     this.selected[this.currentAudioIndex].audioUrl
            //   );
            //   await this.storageRef
            //     .getDownloadURL()
            //     .toPromise()
            //     .then((url) => (this.audio.src = url));
            //   this.audio.load();
            //   this.showSlides(this.currentAudioIndex);
            //   this.currentAudioIndex += 1;
            //   this.loaded = true;
            //   this.playPauseAudio();
            // } else {
            //   this.loaded = false;
            //   this.currentAudioIndex = 0;
            //   this.closeLightBox();
            // }
        });
    }
    populateLists() {
        this.data.forEach((picture, index) => {
            if (index <= 5)
                this.page1.push(picture);
            else if (5 < index && index <= 11)
                this.page2.push(picture);
            else if (11 < index && index <= 17)
                this.page3.push(picture);
            else if (17 < index && index <= 23)
                this.page4.push(picture);
            else if (23 < index && index <= 29)
                this.page5.push(picture);
        });
    }
    clearSelected() {
        this.page1 = [];
        this.page2 = [];
        this.page3 = [];
        this.page4 = [];
        this.page5 = [];
        this.selected = [];
        this.audio.pause();
        this.loaded = false;
        this.populateLists();
        this.active = true;
    }
    initSelected() {
        for (let i = 0; i < this.dots.length; i++) {
            this.isSelected.push(false);
        }
    }
    openLightBox() {
        this.dots = document.getElementsByName('dots');
        this.renderer.setStyle(this.lightbox.nativeElement, 'display', 'block');
        this.initSelected();
        this.showSlides(0);
    }
    closeLightBox() {
        this.loaded = false;
        this.currentAudioIndex = 0;
        this.renderer.setStyle(this.lightbox.nativeElement, 'display', 'none');
    }
    currentSlide(n) {
        this.showSlides((this.slideIndex = n));
    }
    scrollTo(i) {
        var currentPic = this.dots[i];
        var left = currentPic.offsetLeft;
        var width = this.thumbnails.nativeElement.offsetWidth;
        var diff = left - width / 2;
        this.thumbnails.nativeElement.scrollLeft = diff;
    }
    showSlides(n) {
        var i;
        this.scrollTo(n);
        this.slideIndex = n;
        for (i = 0; i < this.slides.length; i++) {
            this.renderer.setStyle(this.slides.toArray()[i].nativeElement, 'display', 'none');
        }
        for (i = 0; i < this.dots.length; i++) {
            this.isSelected[i] = false;
        }
        this.renderer.setStyle(this.slides.toArray()[this.slideIndex].nativeElement, 'display', 'flex');
        this.isSelected[this.slideIndex] = true;
    }
}
BookComponent.ɵfac = function BookComponent_Factory(t) { return new (t || BookComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Renderer2)); };
BookComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BookComponent, selectors: [["app-book"]], viewQuery: function BookComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.lightbox = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.thumbnails = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.slides = _t);
    } }, decls: 116, vars: 38, consts: [[1, "container"], ["id", "flipbook", 1, "flipbook"], [1, "cover"], [1, "title-container", "cover-color"], ["src", "../assets/11-Book-Cover.jpg"], [1, "titles"], [1, "cover-title"], [1, "cover-subtitle"], [1, "info"], [1, "arrow-forward"], [1, "open-book"], [1, "page"], ["src", "../assets/texture.jpg"], [1, "info-back"], [1, "arrow-backwards"], [1, "page-container"], ["cdkDropList", "", 1, "book-section", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["page1List", "cdkDropList"], ["class", "book-pictures", "cdkDrag", "", 3, "picture", 4, "ngFor", "ngForOf"], ["page2List", "cdkDropList"], ["page3List", "cdkDropList"], ["page4List", "cdkDropList"], ["page5List", "cdkDropList"], [1, "separator"], ["id", "selectedList", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 1, "selection", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["selectedList", "cdkDropList"], [1, "button-container"], [1, "within-container"], [3, "disabled", "click", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "click"], ["id", "lightbox", 1, "lightbox"], ["lightbox", ""], [1, "close-container"], [1, "close", 3, "click"], [1, "modal-content"], ["class", "mySlides", 4, "ngFor", "ngForOf"], [1, "thumbnail-container"], ["thumbnails", ""], ["class", "column", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "book-pictures", 3, "picture"], [3, "disabled", "click"], [1, "mySlides"], ["slides", ""], [3, "picture"], [1, "column"], ["name", "dots", 1, "demo", "book-pictures", 3, "picture"]], template: function BookComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "span", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "ISOLAD-X");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Monte sua pr\u00F3pia");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " quarentena");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span", 8)(14, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "south_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Abra o livro aqui");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 12)(21, "app-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span", 13)(23, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "south_west");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15)(28, "mat-card", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BookComponent_Template_mat_card_cdkDropListDropped_28_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, BookComponent_app_picture_30_Template, 1, 1, "app-picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 8)(32, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "south_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "img", 12)(36, "app-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "span", 13)(38, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "south_west");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 15)(43, "mat-card", 16, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BookComponent_Template_mat_card_cdkDropListDropped_43_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, BookComponent_app_picture_45_Template, 1, 1, "app-picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "span", 8)(47, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "south_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "img", 12)(51, "app-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "span", 13)(53, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "south_west");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 15)(58, "mat-card", 16, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BookComponent_Template_mat_card_cdkDropListDropped_58_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](60, BookComponent_app_picture_60_Template, 1, 1, "app-picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "span", 8)(62, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "south_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "img", 12)(66, "app-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "span", 13)(68, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "south_west");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 15)(73, "mat-card", 16, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BookComponent_Template_mat_card_cdkDropListDropped_73_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](75, BookComponent_app_picture_75_Template, 1, 1, "app-picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span", 8)(77, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, "south_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "img", 12)(81, "app-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "span", 13)(83, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "south_west");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](86, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 15)(88, "mat-card", 16, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BookComponent_Template_mat_card_cdkDropListDropped_88_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](90, BookComponent_app_picture_90_Template, 1, 1, "app-picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "span", 8)(92, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "south_east");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](94, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "mat-card", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function BookComponent_Template_mat_card_cdkDropListDropped_95_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, BookComponent_app_picture_97_Template, 1, 1, "app-picture", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 26)(99, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, BookComponent_button_100_Template, 3, 1, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](101, BookComponent_button_101_Template, 3, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookComponent_Template_button_click_102_listener() { return ctx.clearSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 31, 32)(107, "div", 33)(108, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BookComponent_Template_button_click_108_listener() { ctx.closeLightBox(); return ctx.playPauseAudio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "highlight_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](112, BookComponent_div_112_Template, 3, 2, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "span", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](115, BookComponent_div_115_Template, 2, 2, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](44);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](59);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](74);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](89);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.page1)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](22, _c3, _r10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.page1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.page2)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](24, _c3, _r10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.page2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.page3)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](26, _c3, _r10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.page3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.page4)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](28, _c3, _r10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.page4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.page5)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](30, _c3, _r10));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.page5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.selected)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction5"](32, _c4, _r0, _r2, _r4, _r6, _r8));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.audio.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.audio.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selected);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _components_description_description_component__WEBPACK_IMPORTED_MODULE_0__.DescriptionComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDropList, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _components_picture_picture_component__WEBPACK_IMPORTED_MODULE_1__.PictureComponent, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  background-color: #d4c87c8c;\n}\ndiv[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.selection[_ngcontent-%COMP%] {\n  display: flex;\n  flex: auto;\n  flex-direction: row;\n  background-color: #75817796;\n  height: 18vh;\n  align-items: center;\n}\n.selection[_ngcontent-%COMP%]   .book-pictures[_ngcontent-%COMP%] {\n  height: 14vh;\n  width: 24.5vh;\n  padding: 5px;\n}\n.cover-color[_ngcontent-%COMP%] {\n  background-color: #c27f29;\n}\n.title-container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.title-container[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 30%;\n  justify-content: space-around;\n}\n.title-container[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   .cover-title[_ngcontent-%COMP%] {\n  font-size: 7vh;\n}\n.title-container[_ngcontent-%COMP%]   .titles[_ngcontent-%COMP%]   .cover-subtitle[_ngcontent-%COMP%] {\n  font-size: 3vh;\n}\n.title-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  bottom: 0;\n}\n.title-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .arrow-forward[_ngcontent-%COMP%] {\n  width: 3vw;\n}\n.title-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: center;\n  height: 7vh;\n  align-items: center;\n}\n.button-container[_ngcontent-%COMP%]   .within-container[_ngcontent-%COMP%] {\n  width: 20%;\n  justify-content: space-around;\n  display: flex;\n}\n.button-container[_ngcontent-%COMP%]   .within-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 6vh;\n  width: 8vh;\n  border: none;\n  background-color: #e4c25d;\n  border-radius: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.button-container[_ngcontent-%COMP%]   .within-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.separator[_ngcontent-%COMP%] {\n  height: 25%;\n}\n.container[_ngcontent-%COMP%] {\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.flipbook[_ngcontent-%COMP%] {\n  display: block;\n  width: 93%;\n  height: 90%;\n}\n.flipbook[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  background-color: #e4c25d;\n  border: solid 1px gray;\n  text-align: justify;\n  font-size: 1vw;\n  line-height: 1vw;\n  height: 90vh;\n  width: 90vw;\n}\n.flipbook[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  opacity: 0.3;\n  z-index: 0;\n}\n.flipbook[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%] {\n  z-index: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.flipbook[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]   .book-section[_ngcontent-%COMP%] {\n  height: 90%;\n  width: 90%;\n  background-color: transparent;\n  border: none;\n  box-shadow: none;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  justify-items: center;\n}\n.flipbook[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]   .book-section[_ngcontent-%COMP%]   .book-pictures[_ngcontent-%COMP%] {\n  height: 14vh;\n  width: 24.5vh;\n  padding: 5px;\n}\n.lightbox[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  z-index: 99;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.99);\n}\n.lightbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.lightbox[_ngcontent-%COMP%]   .short[_ngcontent-%COMP%] {\n  grid-row: span 2;\n}\n.lightbox[_ngcontent-%COMP%]   .tall[_ngcontent-%COMP%] {\n  grid-row: span 3;\n}\n.lightbox[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  align-self: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  margin: auto;\n  padding: 0;\n  width: 90%;\n}\n.lightbox[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   app-element[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: inherit;\n}\n.lightbox[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row-reverse;\n  width: 100%;\n  position: absolute;\n  right: 5%;\n  z-index: 1;\n}\n.lightbox[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  height: 4vh;\n  width: 5vh;\n  border: none;\n  background-color: #c24829;\n  border-radius: 20%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox[_ngcontent-%COMP%]   .close-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox[_ngcontent-%COMP%]   .mySlides[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  height: 60vh;\n  padding: 1%;\n}\n.lightbox[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%], .lightbox[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -50px;\n  color: white;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n  user-select: none;\n  -webkit-user-select: none;\n}\n.lightbox[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n.lightbox[_ngcontent-%COMP%]   .prev[_ngcontent-%COMP%]:hover, .lightbox[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.lightbox[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%] {\n  opacity: 0.7;\n}\n.lightbox[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .lightbox[_ngcontent-%COMP%]   .demo[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.lightbox[_ngcontent-%COMP%]   img.hover-shadow[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.lightbox[_ngcontent-%COMP%]   .hover-shadow[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n.lightbox[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: max-content;\n  flex-direction: row;\n  overflow: auto;\n  scroll-behavior: smooth;\n}\n.lightbox[_ngcontent-%COMP%]   .thumbnail-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.lightbox[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 14vh;\n  width: 24.5vh;\n  margin: 5px;\n}\n.lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  justify-content: center;\n  align-content: center;\n  flex: auto;\n  contain: content;\n  height: 100%;\n  width: 100%;\n}\n.info[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: row-reverse;\n}\n.info[_ngcontent-%COMP%]   .arrow-forward[_ngcontent-%COMP%] {\n  width: 2vw;\n  height: 4vh;\n}\n.info-back[_ngcontent-%COMP%] {\n  z-index: 1;\n  width: 100%;\n  display: flex;\n  align-items: flex-end;\n  flex-direction: row;\n  position: absolute;\n  bottom: 0;\n}\n.info-back[_ngcontent-%COMP%]   .arrow-backwards[_ngcontent-%COMP%] {\n  display: flex;\n  width: 3vw;\n  height: 5vh;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0eWxlcy5zY3NzIiwiYm9vay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7QUNWSjtBRFlBO0VBQ0ksU0FBQTtFQUNBLGlEQUFBO0VBQ0EsMkJBbEJPO0FDU1g7QUFSQTtFQUNFLGdCQUFBO0FBV0Y7QUFSQTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkRQZTtFQ1FmLFlBQUE7RUFDQSxtQkFBQTtBQVdGO0FBVEU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFXSjtBQVBBO0VBQ0UseUJEakJZO0FDMkJkO0FBUEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVVGO0FBUkU7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUFVSjtBQVJJO0VBQ0UsY0FBQTtBQVVOO0FBUEk7RUFDRSxjQUFBO0FBU047QUFMRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFPSjtBQUxJO0VBQ0UsVUFBQTtBQU9OO0FBSEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQUtKO0FBREE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSUY7QUFGRTtFQUNFLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7QUFJSjtBQUZJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRGxGTztFQ21GUCxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSU47QUFGTTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFJUjtBQUVBO0VBQ0UsV0FBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQTtFQUNFLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFDRSx5QkRwSFM7RUNxSFQsc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ047QUFFSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQU47QUFFTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBQVI7QUFFUTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFWO0FBT0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUFKRjtBQU1FO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQU1JO0VBQ0UsNEVBQUE7QUFKTjtBQVFFO0VBQ0UsZ0JBQUE7QUFOSjtBQVNFO0VBQ0UsZ0JBQUE7QUFQSjtBQVVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBUko7QUFVSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVJOO0FBWUU7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQVZKO0FBWUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJEdk5RO0VDd05SLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFWTjtBQVlNO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVZSO0FBZUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBYko7QUFnQkU7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFkSjtBQWlCRTtFQUNFLFFBQUE7RUFDQSwwQkFBQTtBQWZKO0FBa0JFOztFQUVFLG9DQUFBO0FBaEJKO0FBbUJFO0VBQ0UsWUFBQTtBQWpCSjtBQW9CRTs7RUFFRSxVQUFBO0FBbEJKO0FBcUJFO0VBQ0UsZ0JBQUE7QUFuQko7QUFzQkU7RUFDRSw0RUFBQTtBQXBCSjtBQXVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBckJKO0FBd0JFO0VBQ0UsYUFBQTtBQXRCSjtBQXlCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBdkJKO0FBMEJFO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF4Qko7QUE0QkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtBQXpCRjtBQTJCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0FBekJKO0FBNkJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQTFCRjtBQTRCRTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUExQkoiLCJmaWxlIjoiYm9vay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFZBUklBQkxFU1xuJGJnX2NvbG9yOiAjZDRjODdjOGM7XG4kcGFnZV9jb2xvcjogI2U0YzI1ZDtcbiRzZWxlY3RlZF9jb2xvcjogIzc1ODE3Nzk2O1xuJGNsb3NlX2NvbG9yOiAjYzI0ODI5O1xuJGNvdmVyX2NvbG9yOiAjYzI3ZjI5O1xuXG5cblxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5ib2R5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiZ19jb2xvcjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG5kaXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uc2VsZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogYXV0bztcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlbGVjdGVkX2NvbG9yO1xuICBoZWlnaHQ6IDE4dmg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgLmJvb2stcGljdHVyZXMge1xuICAgIGhlaWdodDogMTR2aDtcbiAgICB3aWR0aDogMjQuNXZoO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxufVxuXG4uY292ZXItY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY292ZXJfY29sb3I7XG59XG5cbi50aXRsZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC50aXRsZXMge1xuICAgIHotaW5kZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAuY292ZXItdGl0bGUge1xuICAgICAgZm9udC1zaXplOiA3dmg7XG4gICAgfVxuXG4gICAgLmNvdmVyLXN1YnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogM3ZoO1xuICAgIH1cbiAgfVxuXG4gIC5pbmZvIHtcbiAgICB6LWluZGV4OiAxO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG5cbiAgICAuYXJyb3ctZm9yd2FyZCB7XG4gICAgICB3aWR0aDogM3Z3O1xuICAgIH1cbiAgfVxuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICB6LWluZGV4OiAwO1xuICB9XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDd2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAud2l0aGluLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDIwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGhlaWdodDogNnZoO1xuICAgICAgd2lkdGg6IDh2aDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlX2NvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgbWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnNlcGFyYXRvciB7XG4gIGhlaWdodDogMjUlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiA2MHZoO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGlwYm9vayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogOTMlO1xuICBoZWlnaHQ6IDkwJTtcblxuICAucGFnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2VfY29sb3I7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JheTtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgIGZvbnQtc2l6ZTogMXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxdnc7XG4gICAgaGVpZ2h0OiA5MHZoO1xuICAgIHdpZHRoOiA5MHZ3O1xuXG4gICAgaW1nIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgei1pbmRleDogMDtcbiAgICB9XG5cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAuYm9vay1zZWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5ib29rLXBpY3R1cmVzIHtcbiAgICAgICAgICBoZWlnaHQ6IDE0dmg7XG4gICAgICAgICAgd2lkdGg6IDI0LjV2aDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxpZ2h0Ym94IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOTkpO1xuXG4gIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICA6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICB9XG4gIH1cblxuICAuc2hvcnQge1xuICAgIGdyaWQtcm93OiBzcGFuIDI7XG4gIH1cblxuICAudGFsbCB7XG4gICAgZ3JpZC1yb3c6IHNwYW4gMztcbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDkwJTtcblxuICAgIGFwcC1lbGVtZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtaW4taGVpZ2h0OiBpbmhlcml0O1xuICAgIH1cbiAgfVxuXG4gIC5jbG9zZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNSU7XG4gICAgei1pbmRleDogMTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBoZWlnaHQ6IDR2aDtcbiAgICAgIHdpZHRoOiA1dmg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xvc2VfY29sb3I7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICBtYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5teVNsaWRlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogNjB2aDtcbiAgICBwYWRkaW5nOiAxJTtcbiAgfVxuXG4gIC5wcmV2LFxuICAubmV4dCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IC01MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogMC42cyBlYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cblxuICAubmV4dCB7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XG4gIH1cblxuICAucHJldjpob3ZlcixcbiAgLm5leHQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgfVxuXG4gIC5kZW1vIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAuYWN0aXZlLFxuICAuZGVtbzpob3ZlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIGltZy5ob3Zlci1zaGFkb3cge1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAuaG92ZXItc2hhZG93OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG5cbiAgLnRodW1ibmFpbC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICB9XG5cbiAgLnRodW1ibmFpbC1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbHVtbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDE0dmg7XG4gICAgd2lkdGg6IDI0LjV2aDtcbiAgICBtYXJnaW46IDVweDtcbiAgfVxuXG4gIGltZyB7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZsZXg6IGF1dG87XG4gICAgY29udGFpbjogY29udGVudDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmluZm8ge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gIC5hcnJvdy1mb3J3YXJkIHtcbiAgICB3aWR0aDogMnZ3O1xuICAgIGhlaWdodDogNHZoO1xuICB9XG59XG5cbi5pbmZvLWJhY2sge1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcblxuICAuYXJyb3ctYmFja3dhcmRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAzdnc7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('browsing', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('selected', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
                    opacity: 1,
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('unselected', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
                    opacity: 0.5,
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('selected <=> unselected', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('0.5s')]),
            ]),
        ] } });


/***/ }),

/***/ 7928:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Notification.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Notification": () => (/* binding */ Notification),
/* harmony export */   "NotificationKind": () => (/* binding */ NotificationKind)
/* harmony export */ });
/* harmony import */ var _observable_empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observable/empty */ 6439);
/* harmony import */ var _observable_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observable/of */ 4139);
/* harmony import */ var _observable_throwError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observable/throwError */ 6587);



var NotificationKind;
(function (NotificationKind) {
    NotificationKind["NEXT"] = "N";
    NotificationKind["ERROR"] = "E";
    NotificationKind["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
class Notification {
    constructor(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    observe(observer) {
        switch (this.kind) {
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    }
    do(next, error, complete) {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    }
    accept(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') {
            return this.observe(nextOrObserver);
        }
        else {
            return this.do(nextOrObserver, error, complete);
        }
    }
    toObservable() {
        const kind = this.kind;
        switch (kind) {
            case 'N':
                return (0,_observable_of__WEBPACK_IMPORTED_MODULE_0__.of)(this.value);
            case 'E':
                return (0,_observable_throwError__WEBPACK_IMPORTED_MODULE_1__.throwError)(this.error);
            case 'C':
                return (0,_observable_empty__WEBPACK_IMPORTED_MODULE_2__.empty)();
        }
        throw new Error('unexpected notification kind value');
    }
    static createNext(value) {
        if (typeof value !== 'undefined') {
            return new Notification('N', value);
        }
        return Notification.undefinedValueNotification;
    }
    static createError(err) {
        return new Notification('E', undefined, err);
    }
    static createComplete() {
        return Notification.completeNotification;
    }
}
Notification.completeNotification = new Notification('C');
Notification.undefinedValueNotification = new Notification('N', undefined);


/***/ }),

/***/ 1555:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReplaySubject": () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 2218);
/* harmony import */ var _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scheduler/queue */ 8198);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Subscription */ 2425);
/* harmony import */ var _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operators/observeOn */ 3888);
/* harmony import */ var _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/ObjectUnsubscribedError */ 9086);
/* harmony import */ var _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubjectSubscription */ 1722);






class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor(bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, scheduler) {
        super();
        this.scheduler = scheduler;
        this._events = [];
        this._infiniteTimeWindow = false;
        this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            this._infiniteTimeWindow = true;
            this.next = this.nextInfiniteTimeWindow;
        }
        else {
            this.next = this.nextTimeWindow;
        }
    }
    nextInfiniteTimeWindow(value) {
        if (!this.isStopped) {
            const _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) {
                _events.shift();
            }
        }
        super.next(value);
    }
    nextTimeWindow(value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        super.next(value);
    }
    _subscribe(subscriber) {
        const _infiniteTimeWindow = this._infiniteTimeWindow;
        const _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        const scheduler = this.scheduler;
        const len = _events.length;
        let subscription;
        if (this.closed) {
            throw new _util_ObjectUnsubscribedError__WEBPACK_IMPORTED_MODULE_1__.ObjectUnsubscribedError();
        }
        else if (this.isStopped || this.hasError) {
            subscription = _Subscription__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            subscription = new _SubjectSubscription__WEBPACK_IMPORTED_MODULE_3__.SubjectSubscription(this, subscriber);
        }
        if (scheduler) {
            subscriber.add(subscriber = new _operators_observeOn__WEBPACK_IMPORTED_MODULE_4__.ObserveOnSubscriber(subscriber, scheduler));
        }
        if (_infiniteTimeWindow) {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i]);
            }
        }
        else {
            for (let i = 0; i < len && !subscriber.closed; i++) {
                subscriber.next(_events[i].value);
            }
        }
        if (this.hasError) {
            subscriber.error(this.thrownError);
        }
        else if (this.isStopped) {
            subscriber.complete();
        }
        return subscription;
    }
    _getNow() {
        return (this.scheduler || _scheduler_queue__WEBPACK_IMPORTED_MODULE_5__.queue).now();
    }
    _trimBufferThenGetEvents() {
        const now = this._getNow();
        const _bufferSize = this._bufferSize;
        const _windowTime = this._windowTime;
        const _events = this._events;
        const eventsCount = _events.length;
        let spliceCount = 0;
        while (spliceCount < eventsCount) {
            if ((now - _events[spliceCount].time) < _windowTime) {
                break;
            }
            spliceCount++;
        }
        if (eventsCount > _bufferSize) {
            spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        }
        if (spliceCount > 0) {
            _events.splice(0, spliceCount);
        }
        return _events;
    }
}
class ReplayEvent {
    constructor(time, value) {
        this.time = time;
        this.value = value;
    }
}


/***/ }),

/***/ 1925:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": () => (/* binding */ Scheduler)
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 4350:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forkJoin": () => (/* binding */ forkJoin)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isArray */ 4327);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../operators/map */ 6942);
/* harmony import */ var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isObject */ 6549);
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./from */ 4383);





function forkJoin(...sources) {
    if (sources.length === 1) {
        const first = sources[0];
        if ((0,_util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(first)) {
            return forkJoinInternal(first, null);
        }
        if ((0,_util_isObject__WEBPACK_IMPORTED_MODULE_1__.isObject)(first) && Object.getPrototypeOf(first) === Object.prototype) {
            const keys = Object.keys(first);
            return forkJoinInternal(keys.map(key => first[key]), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        const resultSelector = sources.pop();
        sources = (sources.length === 1 && (0,_util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(sources[0])) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_2__.map)((args) => resultSelector(...args)));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        const values = new Array(len);
        let completed = 0;
        let emitted = 0;
        for (let i = 0; i < len; i++) {
            const source = (0,_from__WEBPACK_IMPORTED_MODULE_4__.from)(sources[i]);
            let hasValue = false;
            subscriber.add(source.subscribe({
                next: value => {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i] = value;
                },
                error: err => subscriber.error(err),
                complete: () => {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) {
                            subscriber.next(keys ?
                                keys.reduce((result, key, i) => (result[key] = values[i], result), {}) :
                                values);
                        }
                        subscriber.complete();
                    }
                }
            }));
        }
    });
}


/***/ }),

/***/ 6312:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/fromEvent.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 4327);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 1900);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/map */ 6942);




const toString = (() => Object.prototype.toString)();
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(args => (0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector(...args) : resultSelector(args)));
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        function handler(e) {
            if (arguments.length > 1) {
                subscriber.next(Array.prototype.slice.call(arguments));
            }
            else {
                subscriber.next(e);
            }
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    let unsubscribe;
    if (isEventTarget(sourceObj)) {
        const source = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = () => source.removeEventListener(eventName, handler, options);
    }
    else if (isJQueryStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = () => source.off(eventName, handler);
    }
    else if (isNodeStyleEventEmitter(sourceObj)) {
        const source = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = () => source.removeListener(eventName, handler);
    }
    else if (sourceObj && sourceObj.length) {
        for (let i = 0, len = sourceObj.length; i < len; i++) {
            setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
        }
    }
    else {
        throw new TypeError('Invalid event target');
    }
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}


/***/ }),

/***/ 3491:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/interval.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "interval": () => (/* binding */ interval)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isNumeric */ 7269);



function interval(period = 0, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    if (!(0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_1__.isNumeric)(period) || period < 0) {
        period = 0;
    }
    if (!scheduler || typeof scheduler.schedule !== 'function') {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
        subscriber.add(scheduler.schedule(dispatch, period, { subscriber, counter: 0, period }));
        return subscriber;
    });
}
function dispatch(state) {
    const { subscriber, counter, period } = state;
    subscriber.next(counter);
    this.schedule({ subscriber, counter: counter + 1, period }, period);
}


/***/ }),

/***/ 5398:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 2378);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 7269);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 7507);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}


/***/ }),

/***/ 6763:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/audit.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "audit": () => (/* binding */ audit)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
class AuditOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    }
}
class AuditSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
    }
    _next(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            let duration;
            try {
                const { durationSelector } = this;
                duration = durationSelector(value);
            }
            catch (err) {
                return this.destination.error(err);
            }
            const innerSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(duration, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(this));
            if (!innerSubscription || innerSubscription.closed) {
                this.clearThrottle();
            }
            else {
                this.add(this.throttled = innerSubscription);
            }
        }
    }
    clearThrottle() {
        const { value, hasValue, throttled } = this;
        if (throttled) {
            this.remove(throttled);
            this.throttled = undefined;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = undefined;
            this.hasValue = false;
            this.destination.next(value);
        }
    }
    notifyNext() {
        this.clearThrottle();
    }
    notifyComplete() {
        this.clearThrottle();
    }
}


/***/ }),

/***/ 1695:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/auditTime.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "auditTime": () => (/* binding */ auditTime)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);
/* harmony import */ var _audit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit */ 6763);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/timer */ 5398);



function auditTime(duration, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (0,_audit__WEBPACK_IMPORTED_MODULE_1__.audit)(() => (0,_observable_timer__WEBPACK_IMPORTED_MODULE_2__.timer)(duration, scheduler));
}


/***/ }),

/***/ 823:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 328);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 3298:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/distinctUntilChanged.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "distinctUntilChanged": () => (/* binding */ distinctUntilChanged)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function distinctUntilChanged(compare, keySelector) {
    return (source) => source.lift(new DistinctUntilChangedOperator(compare, keySelector));
}
class DistinctUntilChangedOperator {
    constructor(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    }
}
class DistinctUntilChangedSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, compare, keySelector) {
        super(destination);
        this.keySelector = keySelector;
        this.hasKey = false;
        if (typeof compare === 'function') {
            this.compare = compare;
        }
    }
    compare(x, y) {
        return x === y;
    }
    _next(value) {
        let key;
        try {
            const { keySelector } = this;
            key = keySelector ? keySelector(value) : value;
        }
        catch (err) {
            return this.destination.error(err);
        }
        let result = false;
        if (this.hasKey) {
            try {
                const { compare } = this;
                result = compare(this.key, key);
            }
            catch (err) {
                return this.destination.error(err);
            }
        }
        else {
            this.hasKey = true;
        }
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    }
}


/***/ }),

/***/ 3888:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/observeOn.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObserveOnMessage": () => (/* binding */ ObserveOnMessage),
/* harmony export */   "ObserveOnOperator": () => (/* binding */ ObserveOnOperator),
/* harmony export */   "ObserveOnSubscriber": () => (/* binding */ ObserveOnSubscriber),
/* harmony export */   "observeOn": () => (/* binding */ observeOn)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Notification */ 7928);


function observeOn(scheduler, delay = 0) {
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
class ObserveOnOperator {
    constructor(scheduler, delay = 0) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    call(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    }
}
class ObserveOnSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, scheduler, delay = 0) {
        super(destination);
        this.scheduler = scheduler;
        this.delay = delay;
    }
    static dispatch(arg) {
        const { notification, destination } = arg;
        notification.observe(destination);
        this.unsubscribe();
    }
    scheduleMessage(notification) {
        const destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    }
    _next(value) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createNext(value));
    }
    _error(err) {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createError(err));
        this.unsubscribe();
    }
    _complete() {
        this.scheduleMessage(_Notification__WEBPACK_IMPORTED_MODULE_1__.Notification.createComplete());
        this.unsubscribe();
    }
}
class ObserveOnMessage {
    constructor(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
}


/***/ }),

/***/ 9221:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/pairwise.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pairwise": () => (/* binding */ pairwise)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function pairwise() {
    return (source) => source.lift(new PairwiseOperator());
}
class PairwiseOperator {
    call(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    }
}
class PairwiseSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination) {
        super(destination);
        this.hasPrev = false;
    }
    _next(value) {
        let pair;
        if (this.hasPrev) {
            pair = [this.prev, value];
        }
        else {
            this.hasPrev = true;
        }
        this.prev = value;
        if (pair) {
            this.destination.next(pair);
        }
    }
}


/***/ }),

/***/ 9128:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shareReplay": () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ReplaySubject */ 1555);

function shareReplay(configOrBufferSize, windowTime, scheduler) {
    let config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        config = configOrBufferSize;
    }
    else {
        config = {
            bufferSize: configOrBufferSize,
            windowTime,
            refCount: false,
            scheduler,
        };
    }
    return (source) => source.lift(shareReplayOperator(config));
}
function shareReplayOperator({ bufferSize = Number.POSITIVE_INFINITY, windowTime = Number.POSITIVE_INFINITY, refCount: useRefCount, scheduler, }) {
    let subject;
    let refCount = 0;
    let subscription;
    let hasError = false;
    let isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        let innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new _ReplaySubject__WEBPACK_IMPORTED_MODULE_0__.ReplaySubject(bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next(value) {
                    subject.next(value);
                },
                error(err) {
                    hasError = true;
                    subject.error(err);
                },
                complete() {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                },
            });
            if (isComplete) {
                subscription = undefined;
            }
        }
        else {
            innerSub = subject.subscribe(this);
        }
        this.add(() => {
            refCount--;
            innerSub.unsubscribe();
            innerSub = undefined;
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}


/***/ }),

/***/ 6276:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skip": () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscriber */ 14);

function skip(count) {
    return (source) => source.lift(new SkipOperator(count));
}
class SkipOperator {
    constructor(total) {
        this.total = total;
    }
    call(subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    }
}
class SkipSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber {
    constructor(destination, total) {
        super(destination);
        this.total = total;
        this.count = 0;
    }
    _next(x) {
        if (++this.count > this.total) {
            this.destination.next(x);
        }
    }
}


/***/ }),

/***/ 5921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 2831);

function takeUntil(notifier) {
    return (source) => source.lift(new TakeUntilOperator(notifier));
}
class TakeUntilOperator {
    constructor(notifier) {
        this.notifier = notifier;
    }
    call(subscriber, source) {
        const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    }
}
class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
    constructor(destination) {
        super(destination);
        this.seenValue = false;
    }
    notifyNext() {
        this.seenValue = true;
        this.complete();
    }
    notifyComplete() {
    }
}


/***/ }),

/***/ 5353:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": () => (/* binding */ Action)
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 2425);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 2866:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameAction": () => (/* binding */ AnimationFrameAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3670);

class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(() => scheduler.flush(null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}


/***/ }),

/***/ 2022:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameScheduler": () => (/* binding */ AnimationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 6777:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapAction": () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ 2282);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3670);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}


/***/ }),

/***/ 523:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapScheduler": () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 3670:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": () => (/* binding */ AsyncAction)
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 5353);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 2901:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": () => (/* binding */ AsyncScheduler)
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 1925);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 7921:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueAction.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueAction": () => (/* binding */ QueueAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3670);

class QueueAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    schedule(state, delay = 0) {
        if (delay > 0) {
            return super.schedule(state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    }
    execute(state, delay) {
        return (delay > 0 || this.closed) ?
            super.execute(state, delay) :
            this._execute(state, delay);
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        return scheduler.flush(this);
    }
}


/***/ }),

/***/ 4021:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/QueueScheduler.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueueScheduler": () => (/* binding */ QueueScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);

class QueueScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
}


/***/ }),

/***/ 3911:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFrame": () => (/* binding */ animationFrame),
/* harmony export */   "animationFrameScheduler": () => (/* binding */ animationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 2866);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 2022);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;


/***/ }),

/***/ 3066:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asap": () => (/* binding */ asap),
/* harmony export */   "asapScheduler": () => (/* binding */ asapScheduler)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 6777);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 523);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;


/***/ }),

/***/ 328:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 3670);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 2901);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;


/***/ }),

/***/ 8198:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/queue.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "queue": () => (/* binding */ queue),
/* harmony export */   "queueScheduler": () => (/* binding */ queueScheduler)
/* harmony export */ });
/* harmony import */ var _QueueAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QueueAction */ 7921);
/* harmony import */ var _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QueueScheduler */ 4021);


const queueScheduler = new _QueueScheduler__WEBPACK_IMPORTED_MODULE_0__.QueueScheduler(_QueueAction__WEBPACK_IMPORTED_MODULE_1__.QueueAction);
const queue = queueScheduler;


/***/ }),

/***/ 2282:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immediate": () => (/* binding */ Immediate),
/* harmony export */   "TestTools": () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};


/***/ }),

/***/ 7269:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": () => (/* binding */ isNumeric)
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 4327);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 20:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isObservable.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isObservable": () => (/* binding */ isObservable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 2378);

function isObservable(obj) {
    return !!obj && (obj instanceof _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}


/***/ }),

/***/ 4929:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ 4128:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/a11y.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A11yModule": () => (/* binding */ A11yModule),
/* harmony export */   "ActiveDescendantKeyManager": () => (/* binding */ ActiveDescendantKeyManager),
/* harmony export */   "AriaDescriber": () => (/* binding */ AriaDescriber),
/* harmony export */   "CDK_DESCRIBEDBY_HOST_ATTRIBUTE": () => (/* binding */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE),
/* harmony export */   "CDK_DESCRIBEDBY_ID_PREFIX": () => (/* binding */ CDK_DESCRIBEDBY_ID_PREFIX),
/* harmony export */   "CdkAriaLive": () => (/* binding */ CdkAriaLive),
/* harmony export */   "CdkMonitorFocus": () => (/* binding */ CdkMonitorFocus),
/* harmony export */   "CdkTrapFocus": () => (/* binding */ CdkTrapFocus),
/* harmony export */   "ConfigurableFocusTrap": () => (/* binding */ ConfigurableFocusTrap),
/* harmony export */   "ConfigurableFocusTrapFactory": () => (/* binding */ ConfigurableFocusTrapFactory),
/* harmony export */   "EventListenerFocusTrapInertStrategy": () => (/* binding */ EventListenerFocusTrapInertStrategy),
/* harmony export */   "FOCUS_MONITOR_DEFAULT_OPTIONS": () => (/* binding */ FOCUS_MONITOR_DEFAULT_OPTIONS),
/* harmony export */   "FOCUS_TRAP_INERT_STRATEGY": () => (/* binding */ FOCUS_TRAP_INERT_STRATEGY),
/* harmony export */   "FocusKeyManager": () => (/* binding */ FocusKeyManager),
/* harmony export */   "FocusMonitor": () => (/* binding */ FocusMonitor),
/* harmony export */   "FocusTrap": () => (/* binding */ FocusTrap),
/* harmony export */   "FocusTrapFactory": () => (/* binding */ FocusTrapFactory),
/* harmony export */   "HighContrastModeDetector": () => (/* binding */ HighContrastModeDetector),
/* harmony export */   "INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS),
/* harmony export */   "INPUT_MODALITY_DETECTOR_OPTIONS": () => (/* binding */ INPUT_MODALITY_DETECTOR_OPTIONS),
/* harmony export */   "InputModalityDetector": () => (/* binding */ InputModalityDetector),
/* harmony export */   "InteractivityChecker": () => (/* binding */ InteractivityChecker),
/* harmony export */   "IsFocusableConfig": () => (/* binding */ IsFocusableConfig),
/* harmony export */   "LIVE_ANNOUNCER_DEFAULT_OPTIONS": () => (/* binding */ LIVE_ANNOUNCER_DEFAULT_OPTIONS),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN),
/* harmony export */   "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY": () => (/* binding */ LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY),
/* harmony export */   "ListKeyManager": () => (/* binding */ ListKeyManager),
/* harmony export */   "LiveAnnouncer": () => (/* binding */ LiveAnnouncer),
/* harmony export */   "MESSAGES_CONTAINER_ID": () => (/* binding */ MESSAGES_CONTAINER_ID),
/* harmony export */   "isFakeMousedownFromScreenReader": () => (/* binding */ isFakeMousedownFromScreenReader),
/* harmony export */   "isFakeTouchstartFromScreenReader": () => (/* binding */ isFakeTouchstartFromScreenReader)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 823);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 6276);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/observers */ 5837);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** IDs are delimited by an empty space, as per the spec. */

const ID_DELIMITER = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */

function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);

  if (ids.some(existingId => existingId.trim() == id.trim())) {
    return;
  }

  ids.push(id.trim());
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  const filteredIds = ids.filter(val => val != id.trim());

  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 */


function getAriaReferenceIds(el, attr) {
  // Get string array of all individual ids (whitespace delimited) in the attribute value
  return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * ID used for the body container where all messages are appended.
 * @deprecated No longer being used. To be removed.
 * @breaking-change 14.0.0
 */


const MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 * @deprecated To be turned into a private variable.
 * @breaking-change 14.0.0
 */

const CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/** Global incremental identifier for each registered message element. */

let nextId = 0;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 */

class AriaDescriber {
  constructor(_document,
  /**
   * @deprecated To be turned into a required parameter.
   * @breaking-change 14.0.0
   */
  _platform) {
    this._platform = _platform;
    /** Map of all registered message elements that have been placed into the document. */

    this._messageRegistry = new Map();
    /** Container for all registered messages. */

    this._messagesContainer = null;
    /** Unique ID for the service. */

    this._id = `${nextId++}`;
    this._document = _document;
  }

  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }

    const key = getKey(message, role);

    if (typeof message !== 'string') {
      // We need to ensure that the element has an ID.
      setMessageId(message);

      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }

    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }

  removeDescription(hostElement, message, role) {
    var _a;

    if (!message || !this._isElementNode(hostElement)) {
      return;
    }

    const key = getKey(message, role);

    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    } // If the message is a string, it means that it's one that we created for the
    // consumer so we can remove it safely, otherwise we should leave it in place.


    if (typeof message === 'string') {
      const registeredMessage = this._messageRegistry.get(key);

      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }

    if (((_a = this._messagesContainer) === null || _a === void 0 ? void 0 : _a.childNodes.length) === 0) {
      this._messagesContainer.remove();

      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */


  ngOnDestroy() {
    var _a;

    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);

    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);

      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }

    (_a = this._messagesContainer) === null || _a === void 0 ? void 0 : _a.remove();
    this._messagesContainer = null;

    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */


  _createMessageElement(message, role) {
    const messageElement = this._document.createElement('div');

    setMessageId(messageElement);
    messageElement.textContent = message;

    if (role) {
      messageElement.setAttribute('role', role);
    }

    this._createMessagesContainer();

    this._messagesContainer.appendChild(messageElement);

    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */


  _deleteMessageElement(key) {
    var _a, _b;

    (_b = (_a = this._messageRegistry.get(key)) === null || _a === void 0 ? void 0 : _a.messageElement) === null || _b === void 0 ? void 0 : _b.remove();

    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */


  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }

    const containerClassName = 'cdk-describedby-message-container';

    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);

    for (let i = 0; i < serverContainers.length; i++) {
      // When going from the server to the client, we may end up in a situation where there's
      // already a container on the page, but we don't have a reference to it. Clear the
      // old container so we don't get duplicates. Doing this, instead of emptying the previous
      // container, should be slightly faster.
      serverContainers[i].remove();
    }

    const messagesContainer = this._document.createElement('div'); // We add `visibility: hidden` in order to prevent text in this container from
    // being searchable by the browser's Ctrl + F functionality.
    // Screen-readers will still read the description for elements with aria-describedby even
    // when the description element is not visible.


    messagesContainer.style.visibility = 'hidden'; // Even though we use `visibility: hidden`, we still apply `cdk-visually-hidden` so that
    // the description element doesn't impact page layout.

    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add('cdk-visually-hidden'); // @breaking-change 14.0.0 Remove null check for `_platform`.

    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute('platform', 'server');
    }

    this._document.body.appendChild(messagesContainer);

    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */


  _removeCdkDescribedByReferenceIds(element) {
    // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
    const originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby').filter(id => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */


  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key); // Add the aria-describedby reference and set the
    // describedby_host attribute to mark the element.


    addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */


  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);

    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */


  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, 'aria-describedby');

    const registeredMessage = this._messageRegistry.get(key);

    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */


  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }

    if (message && typeof message === 'object') {
      // We'd have to make some assumptions about the description element's text, if the consumer
      // passed in an element. Assume that if an element is passed in, the consumer has verified
      // that it can be used as a description.
      return true;
    }

    const trimmedMessage = message == null ? '' : `${message}`.trim();
    const ariaLabel = element.getAttribute('aria-label'); // We shouldn't set descriptions if they're exactly the same as the `aria-label` of the
    // element, because screen readers will end up reading out the same text twice in a row.

    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */


  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }

}

AriaDescriber.ɵfac = function AriaDescriber_Factory(t) {
  return new (t || AriaDescriber)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

AriaDescriber.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: AriaDescriber,
  factory: AriaDescriber.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AriaDescriber, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, null);
})();
/** Gets a key that can be used to look messages up in the registry. */


function getKey(message, role) {
  return typeof message === 'string' ? `${role || ''}/${message}` : message;
}
/** Assigns a unique ID to an element, if it doesn't have one already. */


function setMessageId(element) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${nextId++}`;
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 */


class ListKeyManager {
  constructor(_items) {
    this._items = _items;
    this._activeItemIndex = -1;
    this._activeItem = null;
    this._wrap = false;
    this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
    this._vertical = true;
    this._allowedModifierKeys = [];
    this._homeAndEnd = false;
    /**
     * Predicate function that can be used to check whether an item should be skipped
     * by the key manager. By default, disabled items are skipped.
     */

    this._skipPredicateFn = item => item.disabled; // Buffer for the letters that the user has pressed when the typeahead option is turned on.


    this._pressedLetters = [];
    /**
     * Stream that emits any time the TAB key is pressed, so components can react
     * when focus is shifted off of the list.
     */

    this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /** Stream that emits whenever the active item of the list manager changes. */

    this.change = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(); // We allow for the items to be an array because, in some cases, the consumer may
    // not have access to a QueryList of the items they want to manage (e.g. when the
    // items aren't being collected via `ViewChildren` or `ContentChildren`).

    if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList) {
      _items.changes.subscribe(newItems => {
        if (this._activeItem) {
          const itemArray = newItems.toArray();
          const newIndex = itemArray.indexOf(this._activeItem);

          if (newIndex > -1 && newIndex !== this._activeItemIndex) {
            this._activeItemIndex = newIndex;
          }
        }
      });
    }
  }
  /**
   * Sets the predicate function that determines which items should be skipped by the
   * list key manager.
   * @param predicate Function that determines whether the given item should be skipped.
   */


  skipPredicate(predicate) {
    this._skipPredicateFn = predicate;
    return this;
  }
  /**
   * Configures wrapping mode, which determines whether the active item will wrap to
   * the other end of list when there are no more items in the given direction.
   * @param shouldWrap Whether the list should wrap when reaching the end.
   */


  withWrap(shouldWrap = true) {
    this._wrap = shouldWrap;
    return this;
  }
  /**
   * Configures whether the key manager should be able to move the selection vertically.
   * @param enabled Whether vertical selection should be enabled.
   */


  withVerticalOrientation(enabled = true) {
    this._vertical = enabled;
    return this;
  }
  /**
   * Configures the key manager to move the selection horizontally.
   * Passing in `null` will disable horizontal movement.
   * @param direction Direction in which the selection can be moved.
   */


  withHorizontalOrientation(direction) {
    this._horizontal = direction;
    return this;
  }
  /**
   * Modifier keys which are allowed to be held down and whose default actions will be prevented
   * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
   */


  withAllowedModifierKeys(keys) {
    this._allowedModifierKeys = keys;
    return this;
  }
  /**
   * Turns on typeahead mode which allows users to set the active item by typing.
   * @param debounceInterval Time to wait after the last keystroke before setting the active item.
   */


  withTypeAhead(debounceInterval = 200) {
    if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._items.length && this._items.some(item => typeof item.getLabel !== 'function')) {
      throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
    }

    this._typeaheadSubscription.unsubscribe(); // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
    // and convert those letters back into a string. Afterwards find the first item that starts
    // with that string and select it.


    this._typeaheadSubscription = this._letterKeyStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(letter => this._pressedLetters.push(letter)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(debounceInterval), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(() => this._pressedLetters.length > 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this._pressedLetters.join(''))).subscribe(inputString => {
      const items = this._getItemsArray(); // Start at 1 because we want to start searching at the item immediately
      // following the current active item.


      for (let i = 1; i < items.length + 1; i++) {
        const index = (this._activeItemIndex + i) % items.length;
        const item = items[index];

        if (!this._skipPredicateFn(item) && item.getLabel().toUpperCase().trim().indexOf(inputString) === 0) {
          this.setActiveItem(index);
          break;
        }
      }

      this._pressedLetters = [];
    });
    return this;
  }
  /**
   * Configures the key manager to activate the first and last items
   * respectively when the Home or End key is pressed.
   * @param enabled Whether pressing the Home or End key activates the first/last item.
   */


  withHomeAndEnd(enabled = true) {
    this._homeAndEnd = enabled;
    return this;
  }

  setActiveItem(item) {
    const previousActiveItem = this._activeItem;
    this.updateActiveItem(item);

    if (this._activeItem !== previousActiveItem) {
      this.change.next(this._activeItemIndex);
    }
  }
  /**
   * Sets the active item depending on the key event passed in.
   * @param event Keyboard event to be used for determining which element should be active.
   */


  onKeydown(event) {
    const keyCode = event.keyCode;
    const modifiers = ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'];
    const isModifierAllowed = modifiers.every(modifier => {
      return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
    });

    switch (keyCode) {
      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.TAB:
        this.tabOut.next();
        return;

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.DOWN_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.UP_ARROW:
        if (this._vertical && isModifierAllowed) {
          this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.RIGHT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setPreviousItemActive() : this.setNextItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.LEFT_ARROW:
        if (this._horizontal && isModifierAllowed) {
          this._horizontal === 'rtl' ? this.setNextItemActive() : this.setPreviousItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.HOME:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setFirstItemActive();
          break;
        } else {
          return;
        }

      case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.END:
        if (this._homeAndEnd && isModifierAllowed) {
          this.setLastItemActive();
          break;
        } else {
          return;
        }

      default:
        if (isModifierAllowed || (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.hasModifierKey)(event, 'shiftKey')) {
          // Attempt to use the `event.key` which also maps it to the user's keyboard language,
          // otherwise fall back to resolving alphanumeric characters via the keyCode.
          if (event.key && event.key.length === 1) {
            this._letterKeyStream.next(event.key.toLocaleUpperCase());
          } else if (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.A && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.Z || keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ZERO && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.NINE) {
            this._letterKeyStream.next(String.fromCharCode(keyCode));
          }
        } // Note that we return here, in order to avoid preventing
        // the default action of non-navigational keys.


        return;
    }

    this._pressedLetters = [];
    event.preventDefault();
  }
  /** Index of the currently active item. */


  get activeItemIndex() {
    return this._activeItemIndex;
  }
  /** The active item. */


  get activeItem() {
    return this._activeItem;
  }
  /** Gets whether the user is currently typing into the manager using the typeahead feature. */


  isTyping() {
    return this._pressedLetters.length > 0;
  }
  /** Sets the active item to the first enabled item in the list. */


  setFirstItemActive() {
    this._setActiveItemByIndex(0, 1);
  }
  /** Sets the active item to the last enabled item in the list. */


  setLastItemActive() {
    this._setActiveItemByIndex(this._items.length - 1, -1);
  }
  /** Sets the active item to the next enabled item in the list. */


  setNextItemActive() {
    this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
  }
  /** Sets the active item to a previous enabled item in the list. */


  setPreviousItemActive() {
    this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
  }

  updateActiveItem(item) {
    const itemArray = this._getItemsArray();

    const index = typeof item === 'number' ? item : itemArray.indexOf(item);
    const activeItem = itemArray[index]; // Explicitly check for `null` and `undefined` because other falsy values are valid.

    this._activeItem = activeItem == null ? null : activeItem;
    this._activeItemIndex = index;
  }
  /**
   * This method sets the active item, given a list of items and the delta between the
   * currently active item and the new active item. It will calculate differently
   * depending on whether wrap mode is turned on.
   */


  _setActiveItemByDelta(delta) {
    this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
  }
  /**
   * Sets the active item properly given "wrap" mode. In other words, it will continue to move
   * down the list until it finds an item that is not disabled, and it will wrap if it
   * encounters either end of the list.
   */


  _setActiveInWrapMode(delta) {
    const items = this._getItemsArray();

    for (let i = 1; i <= items.length; i++) {
      const index = (this._activeItemIndex + delta * i + items.length) % items.length;
      const item = items[index];

      if (!this._skipPredicateFn(item)) {
        this.setActiveItem(index);
        return;
      }
    }
  }
  /**
   * Sets the active item properly given the default mode. In other words, it will
   * continue to move down the list until it finds an item that is not disabled. If
   * it encounters either end of the list, it will stop and not wrap.
   */


  _setActiveInDefaultMode(delta) {
    this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
  }
  /**
   * Sets the active item to the first enabled item starting at the index specified. If the
   * item is disabled, it will move in the fallbackDelta direction until it either
   * finds an enabled item or encounters the end of the list.
   */


  _setActiveItemByIndex(index, fallbackDelta) {
    const items = this._getItemsArray();

    if (!items[index]) {
      return;
    }

    while (this._skipPredicateFn(items[index])) {
      index += fallbackDelta;

      if (!items[index]) {
        return;
      }
    }

    this.setActiveItem(index);
  }
  /** Returns the items as an array. */


  _getItemsArray() {
    return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList ? this._items.toArray() : this._items;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class ActiveDescendantKeyManager extends ListKeyManager {
  setActiveItem(index) {
    if (this.activeItem) {
      this.activeItem.setInactiveStyles();
    }

    super.setActiveItem(index);

    if (this.activeItem) {
      this.activeItem.setActiveStyles();
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class FocusKeyManager extends ListKeyManager {
  constructor() {
    super(...arguments);
    this._origin = 'program';
  }
  /**
   * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
   * @param origin Focus origin to be used when focusing items.
   */


  setFocusOrigin(origin) {
    this._origin = origin;
    return this;
  }

  setActiveItem(item) {
    super.setActiveItem(item);

    if (this.activeItem) {
      this.activeItem.focus(this._origin);
    }
  }

}
/**
 * Configuration for the isFocusable method.
 */


class IsFocusableConfig {
  constructor() {
    /**
     * Whether to count an element as focusable even if it is not currently visible.
     */
    this.ignoreVisibility = false;
  }

} // The InteractivityChecker leans heavily on the ally.js accessibility utilities.
// Methods like `isTabbable` are only covering specific edge-cases for the browsers which are
// supported.

/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */


class InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */


  isDisabled(element) {
    // This does not capture some cases, such as a non-form control with a disabled attribute or
    // a form control inside of a disabled form, but should capture the most common cases.
    return element.hasAttribute('disabled');
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */


  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */


  isTabbable(element) {
    // Nothing is tabbable on the server 😎
    if (!this._platform.isBrowser) {
      return false;
    }

    const frameElement = getFrameElement(getWindow(element));

    if (frameElement) {
      // Frame elements inherit their tabindex onto all child elements.
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      } // Browsers disable tabbing to an element inside of an invisible frame.


      if (!this.isVisible(frameElement)) {
        return false;
      }
    }

    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);

    if (element.hasAttribute('contenteditable')) {
      return tabIndexValue !== -1;
    }

    if (nodeName === 'iframe' || nodeName === 'object') {
      // The frame or object's content may be tabbable depending on the content, but it's
      // not possibly to reliably detect the content of the frames. We always consider such
      // elements as non-tabbable.
      return false;
    } // In iOS, the browser only considers some specific elements as tabbable.


    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }

    if (nodeName === 'audio') {
      // Audio elements without controls enabled are never tabbable, regardless
      // of the tabindex attribute explicitly being set.
      if (!element.hasAttribute('controls')) {
        return false;
      } // Audio elements with controls are by default tabbable unless the
      // tabindex attribute is set to `-1` explicitly.


      return tabIndexValue !== -1;
    }

    if (nodeName === 'video') {
      // For all video elements, if the tabindex attribute is set to `-1`, the video
      // is not tabbable. Note: We cannot rely on the default `HTMLElement.tabIndex`
      // property as that one is set to `-1` in Chrome, Edge and Safari v13.1. The
      // tabindex attribute is the source of truth here.
      if (tabIndexValue === -1) {
        return false;
      } // If the tabindex is explicitly set, and not `-1` (as per check before), the
      // video element is always tabbable (regardless of whether it has controls or not).


      if (tabIndexValue !== null) {
        return true;
      } // Otherwise (when no explicit tabindex is set), a video is only tabbable if it
      // has controls enabled. Firefox is special as videos are always tabbable regardless
      // of whether there are controls or not.


      return this._platform.FIREFOX || element.hasAttribute('controls');
    }

    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */


  isFocusable(element, config) {
    // Perform checks in order of left to most expensive.
    // Again, naive approach that does not capture many edge cases and browser quirks.
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && ((config === null || config === void 0 ? void 0 : config.ignoreVisibility) || this.isVisible(element));
  }

}

InteractivityChecker.ɵfac = function InteractivityChecker_Factory(t) {
  return new (t || InteractivityChecker)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
};

InteractivityChecker.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InteractivityChecker,
  factory: InteractivityChecker.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteractivityChecker, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }];
  }, null);
})();
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 */


function getFrameElement(window) {
  try {
    return window.frameElement;
  } catch (_a) {
    return null;
  }
}
/** Checks whether the specified element has any geometry / rectangles. */


function hasGeometry(element) {
  // Use logic from jQuery to check for an invisible element.
  // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === 'function' && element.getClientRects().length);
}
/** Gets whether an element's  */


function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea';
}
/** Gets whether an element is an `<input type="hidden">`. */


function isHiddenInput(element) {
  return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */


function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */


function isInputElement(element) {
  return element.nodeName.toLowerCase() == 'input';
}
/** Gets whether an element is an anchor element. */


function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */


function hasValidTabIndex(element) {
  if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
    return false;
  }

  let tabIndex = element.getAttribute('tabindex');
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */


function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  } // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054


  const tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */


function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === 'input' && element.type;
  return inputType === 'text' || inputType === 'password' || nodeName === 'select' || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */


function isPotentiallyFocusable(element) {
  // Inputs are potentially focusable *unless* they're type="hidden".
  if (isHiddenInput(element)) {
    return false;
  }

  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute('contenteditable') || hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */


function getWindow(node) {
  // ownerDocument is null if `node` itself *is* a document.
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause the two to be misaligned.
 *
 * @deprecated Use `ConfigurableFocusTrap` instead.
 * @breaking-change 11.0.0
 */


class FocusTrap {
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false; // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.

    this.startAnchorListener = () => this.focusLastTabbableElement();

    this.endAnchorListener = () => this.focusFirstTabbableElement();

    this._enabled = true;

    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);

      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */


  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;

    if (startAnchor) {
      startAnchor.removeEventListener('focus', this.startAnchorListener);
      startAnchor.remove();
    }

    if (endAnchor) {
      endAnchor.removeEventListener('focus', this.endAnchorListener);
      endAnchor.remove();
    }

    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */


  attachAnchors() {
    // If we're not on the browser, there can be no focus to trap.
    if (this._hasAttached) {
      return true;
    }

    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();

        this._startAnchor.addEventListener('focus', this.startAnchorListener);
      }

      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();

        this._endAnchor.addEventListener('focus', this.endAnchorListener);
      }
    });

    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);

      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);

      this._hasAttached = true;
    }

    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusInitialElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusFirstTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */


  focusLastTabbableElementWhenReady(options) {
    return new Promise(resolve => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */


  _getRegionBoundary(bound) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], ` + `[cdkFocusRegion${bound}], ` + `[cdk-focus-${bound}]`);

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        // @breaking-change 8.0.0
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated ` + `attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', ` + `use 'cdkFocusRegion${bound}' instead. The deprecated attribute ` + `will be removed in 8.0.0.`, markers[i]);
        }
      }
    }

    if (bound == 'start') {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }

    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */


  focusInitialElement(options) {
    // Contains the deprecated version of selector, for temporary backwards comparability.
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], ` + `[cdkFocusInitial]`);

    if (redirectToElement) {
      // @breaking-change 8.0.0
      if ((typeof ngDevMode === 'undefined' || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', ` + `use 'cdkFocusInitial' instead. The deprecated attribute ` + `will be removed in 8.0.0`, redirectToElement);
      } // Warn the consumer if the element they've pointed to
      // isn't focusable, when not in production mode.


      if ((typeof ngDevMode === 'undefined' || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }

      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);

        focusableChild === null || focusableChild === void 0 ? void 0 : focusableChild.focus(options);
        return !!focusableChild;
      }

      redirectToElement.focus(options);
      return true;
    }

    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('start');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */


  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary('end');

    if (redirectToElement) {
      redirectToElement.focus(options);
    }

    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */


  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */


  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }

    const children = root.children;

    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */


  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    } // Iterate in reverse DOM order.


    const children = root.children;

    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;

      if (tabbableChild) {
        return tabbableChild;
      }
    }

    return null;
  }
  /** Creates an anchor element. */


  _createAnchor() {
    const anchor = this._document.createElement('div');

    this._toggleAnchorTabIndex(this._enabled, anchor);

    anchor.classList.add('cdk-visually-hidden');
    anchor.classList.add('cdk-focus-trap-anchor');
    anchor.setAttribute('aria-hidden', 'true');
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */


  _toggleAnchorTabIndex(isEnabled, anchor) {
    // Remove the tabindex completely, rather than setting it to -1, because if the
    // element has a tabindex, the user might still hit it when navigating with the arrow keys.
    isEnabled ? anchor.setAttribute('tabindex', '0') : anchor.removeAttribute('tabindex');
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */


  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);

      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */


  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.take)(1)).subscribe(fn);
    }
  }

}
/**
 * Factory that allows easy instantiation of focus traps.
 * @deprecated Use `ConfigurableFocusTrapFactory` instead.
 * @breaking-change 11.0.0
 */


class FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */


  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }

}

FocusTrapFactory.ɵfac = function FocusTrapFactory_Factory(t) {
  return new (t || FocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

FocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusTrapFactory,
  factory: FocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** Directive for trapping focus within a region. */


class CdkTrapFocus {
  constructor(_elementRef, _focusTrapFactory,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 13.0.0
   */
  _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    /** Previously focused element to restore focus to upon destroy when using autoCapture. */

    this._previouslyFocusedElement = null;
    this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
  }
  /** Whether the focus trap is active. */


  get enabled() {
    return this.focusTrap.enabled;
  }

  set enabled(value) {
    this.focusTrap.enabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }
  /**
   * Whether the directive should automatically move focus into the trapped region upon
   * initialization and return focus to the previous activeElement upon destruction.
   */


  get autoCapture() {
    return this._autoCapture;
  }

  set autoCapture(value) {
    this._autoCapture = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceBooleanProperty)(value);
  }

  ngOnDestroy() {
    this.focusTrap.destroy(); // If we stored a previously focused element when using autoCapture, return focus to that
    // element now that the trapped region is being destroyed.

    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();

      this._previouslyFocusedElement = null;
    }
  }

  ngAfterContentInit() {
    this.focusTrap.attachAnchors();

    if (this.autoCapture) {
      this._captureFocus();
    }
  }

  ngDoCheck() {
    if (!this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }

  ngOnChanges(changes) {
    const autoCaptureChange = changes['autoCapture'];

    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap.hasAttached()) {
      this._captureFocus();
    }
  }

  _captureFocus() {
    this._previouslyFocusedElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
    this.focusTrap.focusInitialElementWhenReady();
  }

}

CdkTrapFocus.ɵfac = function CdkTrapFocus_Factory(t) {
  return new (t || CdkTrapFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

CdkTrapFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: ["cdkTrapFocus", "enabled"],
    autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture"]
  },
  exportAs: ["cdkTrapFocus"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkTrapFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkTrapFocus]',
      exportAs: 'cdkTrapFocus'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: FocusTrapFactory
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, {
    enabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocus']
    }],
    autoCapture: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkTrapFocusAutoCapture']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class uses a strategy pattern that determines how it traps focus.
 * See FocusTrapInertStrategy.
 */


class ConfigurableFocusTrap extends FocusTrap {
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;

    this._focusTrapManager.register(this);
  }
  /** Whether the FocusTrap is enabled. */


  get enabled() {
    return this._enabled;
  }

  set enabled(value) {
    this._enabled = value;

    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */


  destroy() {
    this._focusTrapManager.deregister(this);

    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _enable() {
    this._inertStrategy.preventFocus(this);

    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */


  _disable() {
    this._inertStrategy.allowFocus(this);

    this.toggleAnchors(false);
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the inert strategy. */


const FOCUS_TRAP_INERT_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('FOCUS_TRAP_INERT_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Lightweight FocusTrapInertStrategy that adds a document focus event
 * listener to redirect focus back inside the FocusTrap.
 */

class EventListenerFocusTrapInertStrategy {
  constructor() {
    /** Focus event handler. */
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */


  preventFocus(focusTrap) {
    // Ensure there's only one listener per document
    if (this._listener) {
      focusTrap._document.removeEventListener('focus', this._listener, true);
    }

    this._listener = e => this._trapFocus(focusTrap, e);

    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener('focus', this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */


  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }

    focusTrap._document.removeEventListener('focus', this._listener, true);

    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */


  _trapFocus(focusTrap, event) {
    var _a;

    const target = event.target;
    const focusTrapRoot = focusTrap._element; // Don't refocus if target was in an overlay, because the overlay might be associated
    // with an element inside the FocusTrap, ex. mat-select.

    if (target && !focusTrapRoot.contains(target) && !((_a = target.closest) === null || _a === void 0 ? void 0 : _a.call(target, 'div.cdk-overlay-pane'))) {
      // Some legacy FocusTrap usages have logic that focuses some element on the page
      // just before FocusTrap is destroyed. For backwards compatibility, wait
      // to be sure FocusTrap is still enabled before refocusing.
      setTimeout(() => {
        // Check whether focus wasn't put back into the focus trap while the timeout was pending.
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injectable that ensures only the most recently enabled FocusTrap is active. */


class FocusTrapManager {
  constructor() {
    // A stack of the FocusTraps on the page. Only the FocusTrap at the
    // top of the stack is active.
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */


  register(focusTrap) {
    // Dedupe focusTraps that register multiple times.
    this._focusTrapStack = this._focusTrapStack.filter(ft => ft !== focusTrap);
    let stack = this._focusTrapStack;

    if (stack.length) {
      stack[stack.length - 1]._disable();
    }

    stack.push(focusTrap);

    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */


  deregister(focusTrap) {
    focusTrap._disable();

    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);

    if (i !== -1) {
      stack.splice(i, 1);

      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }

}

FocusTrapManager.ɵfac = function FocusTrapManager_Factory(t) {
  return new (t || FocusTrapManager)();
};

FocusTrapManager.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusTrapManager,
  factory: FocusTrapManager.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusTrapManager, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Factory that allows easy instantiation of configurable focus traps. */


class ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document; // TODO split up the strategies into different modules, similar to DateAdapter.

    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }

  create(element, config = {
    defer: false
  }) {
    let configObject;

    if (typeof config === 'boolean') {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }

    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }

}

ConfigurableFocusTrapFactory.ɵfac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || ConfigurableFocusTrapFactory)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FocusTrapManager), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_TRAP_INERT_STRATEGY, 8));
};

ConfigurableFocusTrapFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ConfigurableFocusTrapFactory,
  factory: ConfigurableFocusTrapFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigurableFocusTrapFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: InteractivityChecker
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: FocusTrapManager
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FOCUS_TRAP_INERT_STRATEGY]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether an event could be a faked `mousedown` event dispatched by a screen reader. */


function isFakeMousedownFromScreenReader(event) {
  // Some screen readers will dispatch a fake `mousedown` event when pressing enter or space on
  // a clickable element. We can distinguish these events when both `offsetX` and `offsetY` are
  // zero or `event.buttons` is zero, depending on the browser:
  // - `event.buttons` works on Firefox, but fails on Chrome.
  // - `offsetX` and `offsetY` work on Chrome, but fail on Firefox.
  // Note that there's an edge case where the user could click the 0x0 spot of the
  // screen themselves, but that is unlikely to contain interactive elements.
  return event.buttons === 0 || event.offsetX === 0 && event.offsetY === 0;
}
/** Gets whether an event could be a faked `touchstart` event dispatched by a screen reader. */


function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0]; // A fake `touchstart` can be distinguished from a real one by looking at the `identifier`
  // which is typically >= 0 on a real device versus -1 from a screen reader. Just to be safe,
  // we can also look at `radiusX` and `radiusY`. This behavior was observed against a Windows 10
  // device with a touch screen running NVDA v2020.4 and Firefox 85 or Chrome 88.

  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injectable options for the InputModalityDetector. These are shallowly merged with the default
 * options.
 */


const INPUT_MODALITY_DETECTOR_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-input-modality-detector-options');
/**
 * Default options for the InputModalityDetector.
 *
 * Modifier keys are ignored by default (i.e. when pressed won't cause the service to detect
 * keyboard input modality) for two reasons:
 *
 * 1. Modifier keys are commonly used with mouse to perform actions such as 'right click' or 'open
 *    in new tab', and are thus less representative of actual keyboard interaction.
 * 2. VoiceOver triggers some keyboard events when linearly navigating with Control + Option (but
 *    confusingly not with Caps Lock). Thus, to have parity with other screen readers, we ignore
 *    these keys so as to not update the input modality.
 *
 * Note that we do not by default ignore the right Meta key on Safari because it has the same key
 * code as the ContextMenu key on other browsers. When we switch to using event.key, we can
 * distinguish between the two.
 */

const INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.ALT, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.CONTROL, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.MAC_META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.META, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_9__.SHIFT]
};
/**
 * The amount of time needed to pass after a touchstart event in order for a subsequent mousedown
 * event to be attributed as mouse and not touch.
 *
 * This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
 * that a value of around 650ms seems appropriate.
 */

const TOUCH_BUFFER_MS = 650;
/**
 * Event listener options that enable capturing and also mark the listener as passive if the browser
 * supports it.
 */

const modalityEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/**
 * Service that detects the user's input modality.
 *
 * This service does not update the input modality when a user navigates with a screen reader
 * (e.g. linear navigation with VoiceOver, object navigation / browse mode with NVDA, virtual PC
 * cursor mode with JAWS). This is in part due to technical limitations (i.e. keyboard events do not
 * fire as expected in these modes) but is also arguably the correct behavior. Navigating with a
 * screen reader is akin to visually scanning a page, and should not be interpreted as actual user
 * input interaction.
 *
 * When a user is not navigating but *interacting* with a screen reader, this service attempts to
 * update the input modality to keyboard, but in general this service's behavior is largely
 * undefined.
 */

class InputModalityDetector {
  constructor(_platform, ngZone, document, options) {
    this._platform = _platform;
    /**
     * The most recently detected input modality event target. Is null if no input modality has been
     * detected or if the associated event target is null for some unknown reason.
     */

    this._mostRecentTarget = null;
    /** The underlying BehaviorSubject that emits whenever an input modality is detected. */

    this._modality = new rxjs__WEBPACK_IMPORTED_MODULE_12__.BehaviorSubject(null);
    /**
     * The timestamp of the last touch input modality. Used to determine whether mousedown events
     * should be attributed to mouse or touch.
     */

    this._lastTouchMs = 0;
    /**
     * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
     * bound.
     */

    this._onKeydown = event => {
      var _a, _b; // If this is one of the keys we should ignore, then ignore it and don't update the input
      // modality to keyboard.


      if ((_b = (_a = this._options) === null || _a === void 0 ? void 0 : _a.ignoreKeys) === null || _b === void 0 ? void 0 : _b.some(keyCode => keyCode === event.keyCode)) {
        return;
      }

      this._modality.next('keyboard');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles mousedown events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onMousedown = event => {
      // Touches trigger both touch and mouse events, so we need to distinguish between mouse events
      // that were triggered via mouse vs touch. To do so, check if the mouse event occurs closely
      // after the previous touch event.
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      } // Fake mousedown events are fired by some screen readers when controls are activated by the
      // screen reader. Attribute them to keyboard input modality.


      this._modality.next(isFakeMousedownFromScreenReader(event) ? 'keyboard' : 'mouse');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };
    /**
     * Handles touchstart events. Must be an arrow function in order to preserve the context when it
     * gets bound.
     */


    this._onTouchstart = event => {
      // Same scenario as mentioned in _onMousedown, but on touch screen devices, fake touchstart
      // events are fired. Again, attribute to keyboard input modality.
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next('keyboard');

        return;
      } // Store the timestamp of this touch event, as it's used to distinguish between mouse events
      // triggered via mouse vs touch.


      this._lastTouchMs = Date.now();

      this._modality.next('touch');

      this._mostRecentTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);
    };

    this._options = Object.assign(Object.assign({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options); // Skip the first emission as it's null.

    this.modalityDetected = this._modality.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1));
    this.modalityChanged = this.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.distinctUntilChanged)()); // If we're not in a browser, this service should do nothing, as there's no relevant input
    // modality to detect.

    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document.addEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
        document.addEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
        document.addEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  /** The most recently detected input modality. */


  get mostRecentModality() {
    return this._modality.value;
  }

  ngOnDestroy() {
    this._modality.complete();

    if (this._platform.isBrowser) {
      document.removeEventListener('keydown', this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener('mousedown', this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener('touchstart', this._onTouchstart, modalityEventListenerOptions);
    }
  }

}

InputModalityDetector.ɵfac = function InputModalityDetector_Factory(t) {
  return new (t || InputModalityDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};

InputModalityDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: InputModalityDetector,
  factory: InputModalityDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModalityDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [INPUT_MODALITY_DETECTOR_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('liveAnnouncerElement', {
  providedIn: 'root',
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
/** @docs-private */

function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
/** Injection token that can be used to configure the default options for the LiveAnnouncer. */


const LIVE_ANNOUNCER_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('LIVE_ANNOUNCER_DEFAULT_OPTIONS');

class LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions; // We inject the live element and document as `any` because the constructor signature cannot
    // reference browser globals (HTMLElement, Document) on non-browser environments, since having
    // a class decorator causes TypeScript to preserve the constructor signature types.

    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }

  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;

    if (args.length === 1 && typeof args[0] === 'number') {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }

    this.clear();
    clearTimeout(this._previousTimeout);

    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : 'polite';
    }

    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    } // TODO: ensure changing the politeness works on all environments we support.


    this._liveElement.setAttribute('aria-live', politeness); // This 100ms timeout is necessary for some browser + screen-reader combinations:
    // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
    // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
    //   second time without clearing and then using a non-zero delay.
    // (using JAWS 17 at time of this writing).


    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise(resolve => this._currentResolve = resolve);
      }

      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;

        if (typeof duration === 'number') {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }

        this._currentResolve();

        this._currentPromise = this._currentResolve = undefined;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */


  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = '';
    }
  }

  ngOnDestroy() {
    var _a, _b;

    clearTimeout(this._previousTimeout);
    (_a = this._liveElement) === null || _a === void 0 ? void 0 : _a.remove();
    this._liveElement = null;
    (_b = this._currentResolve) === null || _b === void 0 ? void 0 : _b.call(this);
    this._currentPromise = this._currentResolve = undefined;
  }

  _createLiveElement() {
    const elementClass = 'cdk-live-announcer-element';

    const previousElements = this._document.getElementsByClassName(elementClass);

    const liveEl = this._document.createElement('div'); // Remove any old containers. This can happen when coming in from a server-side-rendered page.


    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }

    liveEl.classList.add(elementClass);
    liveEl.classList.add('cdk-visually-hidden');
    liveEl.setAttribute('aria-atomic', 'true');
    liveEl.setAttribute('aria-live', 'polite');

    this._document.body.appendChild(liveEl);

    return liveEl;
  }

}

LiveAnnouncer.ɵfac = function LiveAnnouncer_Factory(t) {
  return new (t || LiveAnnouncer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};

LiveAnnouncer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: LiveAnnouncer,
  factory: LiveAnnouncer.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LiveAnnouncer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * A directive that works similarly to aria-live, but uses the LiveAnnouncer to ensure compatibility
 * with a wider range of browsers and screen readers.
 */


class CdkAriaLive {
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = 'polite';
  }
  /** The aria-live politeness level to use when announcing messages. */


  get politeness() {
    return this._politeness;
  }

  set politeness(value) {
    this._politeness = value === 'off' || value === 'assertive' ? value : 'polite';

    if (this._politeness === 'off') {
      if (this._subscription) {
        this._subscription.unsubscribe();

        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          // Note that we use textContent here, rather than innerText, in order to avoid a reflow.
          const elementText = this._elementRef.nativeElement.textContent; // The `MutationObserver` fires also for attribute
          // changes which we don't want to announce.

          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness);

            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }

}

CdkAriaLive.ɵfac = function CdkAriaLive_Factory(t) {
  return new (t || CdkAriaLive)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkAriaLive.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: ["cdkAriaLive", "politeness"]
  },
  exportAs: ["cdkAriaLive"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkAriaLive, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkAriaLive]',
      exportAs: 'cdkAriaLive'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: LiveAnnouncer
    }, {
      type: _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    politeness: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkAriaLive']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for FocusMonitorOptions. */


const FOCUS_MONITOR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-focus-monitor-default-options');
/**
 * Event listener options that enable capturing and also
 * mark the listener as passive if the browser supports it.
 */

const captureEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Monitors mouse and keyboard events to determine the cause of focus events. */

class FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector,
  /** @breaking-change 11.0.0 make document required */
  document, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    /** The focus origin that the next focus event is a result of. */

    this._origin = null;
    /** Whether the window has just been focused. */

    this._windowFocused = false;
    /**
     * Whether the origin was determined via a touch interaction. Necessary as properly attributing
     * focus events to touch interactions requires special logic.
     */

    this._originFromTouchInteraction = false;
    /** Map of elements being monitored to their info. */

    this._elementInfo = new Map();
    /** The number of elements currently being monitored. */

    this._monitoredElementCount = 0;
    /**
     * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
     * as well as the number of monitored elements that they contain. We have to treat focus/blur
     * handlers differently from the rest of the events, because the browser won't emit events
     * to the document when focus moves inside of a shadow root.
     */

    this._rootNodeFocusListenerCount = new Map();
    /**
     * Event listener for `focus` events on the window.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._windowFocusListener = () => {
      // Make a note of when the window regains focus, so we can
      // restore the origin info for the focused element.
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    /** Subject for stopping our InputModalityDetector subscription. */


    this._stopInputModalityDetector = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    /**
     * Event listener for `focus` and 'blur' events on the document.
     * Needs to be an arrow function in order to preserve the context when it gets bound.
     */

    this._rootNodeFocusAndBlurListener = event => {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);

      const handler = event.type === 'focus' ? this._onFocus : this._onBlur; // We need to walk up the ancestor chain in order to support `checkChildren`.

      for (let element = target; element; element = element.parentElement) {
        handler.call(this, event, element);
      }
    };

    this._document = document;
    this._detectionMode = (options === null || options === void 0 ? void 0 : options.detectionMode) || 0
    /* IMMEDIATE */
    ;
  }

  monitor(element, checkChildren = false) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element); // Do nothing if we're not on the browser platform or the passed in node isn't an element.

    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.of)(null);
    } // If the element is inside the shadow DOM, we need to bind our focus/blur listeners to
    // the shadow root, rather than the `document`, because the browser won't emit focus events
    // to the `document`, if focus is moving within the same shadow root.


    const rootNode = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getShadowRoot)(nativeElement) || this._getDocument();

    const cachedInfo = this._elementInfo.get(nativeElement); // Check if we're already monitoring this element.


    if (cachedInfo) {
      if (checkChildren) {
        // TODO(COMP-318): this can be problematic, because it'll turn all non-checkChildren
        // observers into ones that behave as if `checkChildren` was turned on. We need a more
        // robust solution.
        cachedInfo.checkChildren = true;
      }

      return cachedInfo.subject;
    } // Create monitored element info.


    const info = {
      checkChildren: checkChildren,
      subject: new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject(),
      rootNode
    };

    this._elementInfo.set(nativeElement, info);

    this._registerGlobalListeners(info);

    return info.subject;
  }

  stopMonitoring(element) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

    const elementInfo = this._elementInfo.get(nativeElement);

    if (elementInfo) {
      elementInfo.subject.complete();

      this._setClasses(nativeElement);

      this._elementInfo.delete(nativeElement);

      this._removeGlobalListeners(elementInfo);
    }
  }

  focusVia(element, origin, options) {
    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_11__.coerceElement)(element);

    const focusedElement = this._getDocument().activeElement; // If the element is focused already, calling `focus` again won't trigger the event listener
    // which means that the focus classes won't be updated. If that's the case, update the classes
    // directly without waiting for an event.


    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin); // `focus` isn't available on the server


      if (typeof nativeElement.focus === 'function') {
        nativeElement.focus(options);
      }
    }
  }

  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */


  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    const doc = this._getDocument();

    return doc.defaultView || window;
  }

  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      // If the origin was realized via a touch interaction, we need to perform additional checks
      // to determine whether the focus origin should be attributed to touch or program.
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? 'touch' : 'program';
      } else {
        return this._origin;
      }
    } // If the window has just regained focus, we can restore the most recent origin from before the
    // window blurred. Otherwise, we've reached the point where we can't identify the source of the
    // focus. This typically means one of two things happened:
    //
    // 1) The element was programmatically focused, or
    // 2) The element was focused via screen reader navigation (which generally doesn't fire
    //    events).
    //
    // Because we can't distinguish between these two cases, we default to setting `program`.


    return this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : 'program';
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */


  _shouldBeAttributedToTouch(focusEventTarget) {
    // Please note that this check is not perfect. Consider the following edge case:
    //
    // <div #parent tabindex="0">
    //   <div #child tabindex="0" (click)="#parent.focus()"></div>
    // </div>
    //
    // Suppose there is a FocusMonitor in IMMEDIATE mode attached to #parent. When the user touches
    // #child, #parent is programmatically focused. This code will attribute the focus to touch
    // instead of program. This is a relatively minor edge-case that can be worked around by using
    // focusVia(parent, 'program') to focus #parent.
    return this._detectionMode === 1
    /* EVENTUAL */
    || !!(focusEventTarget === null || focusEventTarget === void 0 ? void 0 : focusEventTarget.contains(this._inputModalityDetector._mostRecentTarget));
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */


  _setClasses(element, origin) {
    element.classList.toggle('cdk-focused', !!origin);
    element.classList.toggle('cdk-touch-focused', origin === 'touch');
    element.classList.toggle('cdk-keyboard-focused', origin === 'keyboard');
    element.classList.toggle('cdk-mouse-focused', origin === 'mouse');
    element.classList.toggle('cdk-program-focused', origin === 'program');
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */


  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === 'touch' && isFromInteraction; // If we're in IMMEDIATE mode, reset the origin at the next tick (or in `TOUCH_BUFFER_MS` ms
      // for a touch event). We reset the origin at the next tick because Firefox focuses one tick
      // after the interaction event. We wait `TOUCH_BUFFER_MS` ms before resetting the origin for
      // a touch event because when a touch event is fired, the associated focus event isn't yet in
      // the event queue. Before doing so, clear any pending timeouts.

      if (this._detectionMode === 0
      /* IMMEDIATE */
      ) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */


  _onFocus(event, element) {
    // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
    // focus event affecting the monitored element. If we want to use the origin of the first event
    // instead we should check for the cdk-focused class here and return if the element already has
    // it. (This only matters for elements that have includesChildren = true).
    // If we are not counting child-element-focus as focused, make sure that the event target is the
    // monitored element itself.
    const elementInfo = this._elementInfo.get(element);

    const focusEventTarget = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getEventTarget)(event);

    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }

    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */


  _onBlur(event, element) {
    // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
    // order to focus another child of the monitored element.
    const elementInfo = this._elementInfo.get(element);

    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }

    this._setClasses(element);

    this._emitOrigin(elementInfo.subject, null);
  }

  _emitOrigin(subject, origin) {
    this._ngZone.run(() => subject.next(origin));
  }

  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }

    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;

    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }

    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1); // Register global listeners when first element is monitored.


    if (++this._monitoredElementCount === 1) {
      // Note: we listen to events in the capture phase so we
      // can detect them even if the user stops propagation.
      this._ngZone.runOutsideAngular(() => {
        const window = this._getWindow();

        window.addEventListener('focus', this._windowFocusListener);
      }); // The InputModalityDetector is also just a collection of global listeners.


      this._inputModalityDetector.modalityDetected.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this._stopInputModalityDetector)).subscribe(modality => {
        this._setOrigin(modality, true
        /* isFromInteraction */
        );
      });
    }
  }

  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;

    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);

      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener('focus', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener('blur', this._rootNodeFocusAndBlurListener, captureEventListenerOptions);

        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    } // Unregister global listeners when last element is unmonitored.


    if (! --this._monitoredElementCount) {
      const window = this._getWindow();

      window.removeEventListener('focus', this._windowFocusListener); // Equivalently, stop our InputModalityDetector subscription.

      this._stopInputModalityDetector.next(); // Clear timeouts for all potentially pending timeouts to prevent the leaks.


      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */


  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);

    this._emitOrigin(elementInfo.subject, origin);

    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */


  _getClosestElementsInfo(element) {
    const results = [];

    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });

    return results;
  }

}

FocusMonitor.ɵfac = function FocusMonitor_Factory(t) {
  return new (t || FocusMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](InputModalityDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};

FocusMonitor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: FocusMonitor,
  factory: FocusMonitor.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FocusMonitor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: InputModalityDetector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
      }]
    }];
  }, null);
})();
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */


class CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute('cdkMonitorSubtreeFocus')).subscribe(origin => this.cdkFocusChange.emit(origin));
  }

  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);

    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }

}

CdkMonitorFocus.ɵfac = function CdkMonitorFocus_Factory(t) {
  return new (t || CdkMonitorFocus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FocusMonitor));
};

CdkMonitorFocus.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkMonitorFocus, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: FocusMonitor
    }];
  }, {
    cdkFocusChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/** CSS class applied to the document body when in black-on-white high-contrast mode. */


const BLACK_ON_WHITE_CSS_CLASS = 'cdk-high-contrast-black-on-white';
/** CSS class applied to the document body when in white-on-black high-contrast mode. */

const WHITE_ON_BLACK_CSS_CLASS = 'cdk-high-contrast-white-on-black';
/** CSS class applied to the document body when in high-contrast mode. */

const HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = 'cdk-high-contrast-active';
/**
 * Service to determine whether the browser is currently in a high-contrast-mode environment.
 *
 * Microsoft Windows supports an accessibility feature called "High Contrast Mode". This mode
 * changes the appearance of all applications, including web applications, to dramatically increase
 * contrast.
 *
 * IE, Edge, and Firefox currently support this mode. Chrome does not support Windows High Contrast
 * Mode. This service does not detect high-contrast mode as added by the Chrome "High Contrast"
 * browser extension.
 */

class HighContrastModeDetector {
  constructor(_platform, document) {
    this._platform = _platform;
    this._document = document;
  }
  /** Gets the current high-contrast-mode for the page. */


  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return 0
      /* NONE */
      ;
    } // Create a test element with an arbitrary background-color that is neither black nor
    // white; high-contrast mode will coerce the color to either black or white. Also ensure that
    // appending the test element to the DOM does not affect layout by absolutely positioning it


    const testElement = this._document.createElement('div');

    testElement.style.backgroundColor = 'rgb(1,2,3)';
    testElement.style.position = 'absolute';

    this._document.body.appendChild(testElement); // Get the computed style for the background color, collapsing spaces to normalize between
    // browsers. Once we get this color, we no longer need the test element. Access the `window`
    // via the document so we can fake it in tests. Note that we have extra null checks, because
    // this logic will likely run during app bootstrap and throwing can break the entire app.


    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || '').replace(/ /g, '');
    testElement.remove();

    switch (computedColor) {
      case 'rgb(0,0,0)':
        return 2
        /* WHITE_ON_BLACK */
        ;

      case 'rgb(255,255,255)':
        return 1
        /* BLACK_ON_WHITE */
        ;
    }

    return 0
    /* NONE */
    ;
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */


  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList; // IE11 doesn't support `classList` operations with multiple arguments

      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
      bodyClasses.remove(BLACK_ON_WHITE_CSS_CLASS);
      bodyClasses.remove(WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();

      if (mode === 1
      /* BLACK_ON_WHITE */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.add(BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === 2
      /* WHITE_ON_BLACK */
      ) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS);
        bodyClasses.add(WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }

}

HighContrastModeDetector.ɵfac = function HighContrastModeDetector_Factory(t) {
  return new (t || HighContrastModeDetector)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};

HighContrastModeDetector.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: HighContrastModeDetector,
  factory: HighContrastModeDetector.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HighContrastModeDetector, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }

}

A11yModule.ɵfac = function A11yModule_Factory(t) {
  return new (t || A11yModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](HighContrastModeDetector));
};

A11yModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: A11yModule
});
A11yModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A11yModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_15__.ObserversModule],
      declarations: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], function () {
    return [{
      type: HighContrastModeDetector
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 1588:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/bidi.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BidiModule": () => (/* binding */ BidiModule),
/* harmony export */   "DIR_DOCUMENT": () => (/* binding */ DIR_DOCUMENT),
/* harmony export */   "Dir": () => (/* binding */ Dir),
/* harmony export */   "Directionality": () => (/* binding */ Directionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6362);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * @docs-private
 */

const DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('cdk-dir-doc', {
  providedIn: 'root',
  factory: DIR_DOCUMENT_FACTORY
});
/** @docs-private */

function DIR_DOCUMENT_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Regex that matches locales with an RTL script. Taken from `goog.i18n.bidi.isRtlLanguage`. */


const RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
/** Resolves a string value to a specific direction. */

function _resolveDirectionality(rawValue) {
  const value = (rawValue === null || rawValue === void 0 ? void 0 : rawValue.toLowerCase()) || '';

  if (value === 'auto' && typeof navigator !== 'undefined' && (navigator === null || navigator === void 0 ? void 0 : navigator.language)) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? 'rtl' : 'ltr';
  }

  return value === 'rtl' ? 'rtl' : 'ltr';
}
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */


class Directionality {
  constructor(_document) {
    /** The current 'ltr' or 'rtl' value. */
    this.value = 'ltr';
    /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || 'ltr');
    }
  }

  ngOnDestroy() {
    this.change.complete();
  }

}

Directionality.ɵfac = function Directionality_Factory(t) {
  return new (t || Directionality)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DIR_DOCUMENT, 8));
};

Directionality.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Directionality,
  factory: Directionality.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Directionality, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [DIR_DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */


class Dir {
  constructor() {
    /** Normalized direction that accounts for invalid/unsupported values. */
    this._dir = 'ltr';
    /** Whether the `value` has been set to its initial value. */

    this._isInitialized = false;
    /** Event emitted when the direction changes. */

    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /** @docs-private */


  get dir() {
    return this._dir;
  }

  set dir(value) {
    const previousValue = this._dir; // Note: `_resolveDirectionality` resolves the language based on the browser's language,
    // whereas the browser does it based on the content of the element. Since doing so based
    // on the content can be expensive, for now we're doing the simpler matching.

    this._dir = _resolveDirectionality(value);
    this._rawDir = value;

    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */


  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */


  ngAfterContentInit() {
    this._isInitialized = true;
  }

  ngOnDestroy() {
    this.change.complete();
  }

}

Dir.ɵfac = function Dir_Factory(t) {
  return new (t || Dir)();
};

Dir.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: Directionality,
    useExisting: Dir
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dir, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[dir]',
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        '[attr.dir]': '_rawDir'
      },
      exportAs: 'dir'
    }]
  }], null, {
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['dirChange']
    }],
    dir: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class BidiModule {}

BidiModule.ɵfac = function BidiModule_Factory(t) {
  return new (t || BidiModule)();
};

BidiModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: BidiModule
});
BidiModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BidiModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [Dir],
      declarations: [Dir]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2597:
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/cdk.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERSION": () => (/* binding */ VERSION)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Current version of the Angular Component Development Kit. */
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('13.3.5');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/***/ }),

/***/ 6484:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/coercion.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_isNumberValue": () => (/* binding */ _isNumberValue),
/* harmony export */   "coerceArray": () => (/* binding */ coerceArray),
/* harmony export */   "coerceBooleanProperty": () => (/* binding */ coerceBooleanProperty),
/* harmony export */   "coerceCssPixelValue": () => (/* binding */ coerceCssPixelValue),
/* harmony export */   "coerceElement": () => (/* binding */ coerceElement),
/* harmony export */   "coerceNumberProperty": () => (/* binding */ coerceNumberProperty),
/* harmony export */   "coerceStringArray": () => (/* binding */ coerceStringArray)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a data-bound value (typically a string) to a boolean. */
function coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceNumberProperty(value, fallbackValue = 0) {
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * @docs-private
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** Coerces a value to a CSS pixel value. */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces an ElementRef or an Element into an element.
 * Useful for APIs that can accept either a ref or the native element itself.
 */
function coerceElement(elementOrRef) {
    return elementOrRef instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Coerces a value to an array of trimmed non-empty strings.
 * Any input that is not an array, `null` or `undefined` will be turned into a string
 * via `toString()` and subsequently split with the given separator.
 * `null` and `undefined` will result in an empty array.
 * This results in the following outcomes:
 * - `null` -&gt; `[]`
 * - `[null]` -&gt; `["null"]`
 * - `["a", "b ", " "]` -&gt; `["a", "b"]`
 * - `[1, [2, 3]]` -&gt; `["1", "2,3"]`
 * - `[{ a: 0 }]` -&gt; `["[object Object]"]`
 * - `{ a: 0 }` -&gt; `["[object", "Object]"]`
 *
 * Useful for defining CSS classes or table columns.
 * @param value the value to coerce into an array of strings
 * @param separator split-separator if value isn't an array
 */
function coerceStringArray(value, separator = /\s+/) {
    const result = [];
    if (value != null) {
        const sourceValues = Array.isArray(value) ? value : `${value}`.split(separator);
        for (const sourceValue of sourceValues) {
            const trimmedString = `${sourceValue}`.trim();
            if (trimmedString) {
                result.push(trimmedString);
            }
        }
    }
    return result;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */




/***/ }),

/***/ 9502:
/*!************************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/collections.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayDataSource": () => (/* binding */ ArrayDataSource),
/* harmony export */   "DataSource": () => (/* binding */ DataSource),
/* harmony export */   "SelectionModel": () => (/* binding */ SelectionModel),
/* harmony export */   "UniqueSelectionDispatcher": () => (/* binding */ UniqueSelectionDispatcher),
/* harmony export */   "_DisposeViewRepeaterStrategy": () => (/* binding */ _DisposeViewRepeaterStrategy),
/* harmony export */   "_RecycleViewRepeaterStrategy": () => (/* binding */ _RecycleViewRepeaterStrategy),
/* harmony export */   "_VIEW_REPEATER_STRATEGY": () => (/* binding */ _VIEW_REPEATER_STRATEGY),
/* harmony export */   "getMultipleValuesInSingleSelectionError": () => (/* binding */ getMultipleValuesInSingleSelectionError),
/* harmony export */   "isDataSource": () => (/* binding */ isDataSource)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 20);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class DataSource {}
/** Checks whether an object is a data source. */


function isDataSource(value) {
  // Check if the value is a DataSource by observing if it has a connect function. Cannot
  // be checked as an `instanceof DataSource` since people could create their own sources
  // that match the interface, but don't extend DataSource.
  return value && typeof value.connect === 'function';
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** DataSource wrapper for a native array. */


class ArrayDataSource extends DataSource {
  constructor(_data) {
    super();
    this._data = _data;
  }

  connect() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(this._data) ? this._data : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this._data);
  }

  disconnect() {}

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A repeater that destroys views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will always construct a new embedded view for each item.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */


class _DisposeViewRepeaterStrategy {
  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;

      if (record.previousIndex == null) {
        const insertContext = itemContextFactory(record, adjustedPreviousIndex, currentIndex);
        view = viewContainerRef.createEmbeddedView(insertContext.templateRef, insertContext.context, insertContext.index);
        operation = 1
        /* INSERTED */
        ;
      } else if (currentIndex == null) {
        viewContainerRef.remove(adjustedPreviousIndex);
        operation = 3
        /* REMOVED */
        ;
      } else {
        view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        operation = 2
        /* MOVED */
        ;
      }

      if (itemViewChanged) {
        itemViewChanged({
          context: view === null || view === void 0 ? void 0 : view.context,
          operation,
          record
        });
      }
    });
  }

  detach() {}

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A repeater that caches views when they are removed from a
 * {@link ViewContainerRef}. When new items are inserted into the container,
 * the repeater will reuse one of the cached views instead of creating a new
 * embedded view. Recycling cached views reduces the quantity of expensive DOM
 * inserts.
 *
 * @template T The type for the embedded view's $implicit property.
 * @template R The type for the item in each IterableDiffer change record.
 * @template C The type for the context passed to each embedded view.
 */


class _RecycleViewRepeaterStrategy {
  constructor() {
    /**
     * The size of the cache used to store unused views.
     * Setting the cache size to `0` will disable caching. Defaults to 20 views.
     */
    this.viewCacheSize = 20;
    /**
     * View cache that stores embedded view instances that have been previously stamped out,
     * but don't are not currently rendered. The view repeater will reuse these views rather than
     * creating brand new ones.
     *
     * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
     */

    this._viewCache = [];
  }
  /** Apply changes to the DOM. */


  applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
    // Rearrange the views to put them in the right location.
    changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
      let view;
      let operation;

      if (record.previousIndex == null) {
        // Item added.
        const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);

        view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = view ? 1
        /* INSERTED */
        : 0
        /* REPLACED */
        ;
      } else if (currentIndex == null) {
        // Item removed.
        this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);

        operation = 3
        /* REMOVED */
        ;
      } else {
        // Item moved.
        view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
        operation = 2
        /* MOVED */
        ;
      }

      if (itemViewChanged) {
        itemViewChanged({
          context: view === null || view === void 0 ? void 0 : view.context,
          operation,
          record
        });
      }
    });
  }

  detach() {
    for (const view of this._viewCache) {
      view.destroy();
    }

    this._viewCache = [];
  }
  /**
   * Inserts a view for a new item, either from the cache or by creating a new
   * one. Returns `undefined` if the item was inserted into a cached view.
   */


  _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
    const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);

    if (cachedView) {
      cachedView.context.$implicit = value;
      return undefined;
    }

    const viewArgs = viewArgsFactory();
    return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
  }
  /** Detaches the view at the given index and inserts into the view cache. */


  _detachAndCacheView(index, viewContainerRef) {
    const detachedView = viewContainerRef.detach(index);

    this._maybeCacheView(detachedView, viewContainerRef);
  }
  /** Moves view at the previous index to the current index. */


  _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
    const view = viewContainerRef.get(adjustedPreviousIndex);
    viewContainerRef.move(view, currentIndex);
    view.context.$implicit = value;
    return view;
  }
  /**
   * Cache the given detached view. If the cache is full, the view will be
   * destroyed.
   */


  _maybeCacheView(view, viewContainerRef) {
    if (this._viewCache.length < this.viewCacheSize) {
      this._viewCache.push(view);
    } else {
      const index = viewContainerRef.indexOf(view); // The host component could remove views from the container outside of
      // the view repeater. It's unlikely this will occur, but just in case,
      // destroy the view on its own, otherwise destroy it through the
      // container to ensure that all the references are removed.

      if (index === -1) {
        view.destroy();
      } else {
        viewContainerRef.remove(index);
      }
    }
  }
  /** Inserts a recycled view from the cache at the given index. */


  _insertViewFromCache(index, viewContainerRef) {
    const cachedView = this._viewCache.pop();

    if (cachedView) {
      viewContainerRef.insert(cachedView, index);
    }

    return cachedView || null;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class to be used to power selecting one or more options from a list.
 */


class SelectionModel {
  constructor(_multiple = false, initiallySelectedValues, _emitChanges = true) {
    this._multiple = _multiple;
    this._emitChanges = _emitChanges;
    /** Currently-selected values. */

    this._selection = new Set();
    /** Keeps track of the deselected options that haven't been emitted by the change event. */

    this._deselectedToEmit = [];
    /** Keeps track of the selected options that haven't been emitted by the change event. */

    this._selectedToEmit = [];
    /** Event emitted when the value has changed. */

    this.changed = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();

    if (initiallySelectedValues && initiallySelectedValues.length) {
      if (_multiple) {
        initiallySelectedValues.forEach(value => this._markSelected(value));
      } else {
        this._markSelected(initiallySelectedValues[0]);
      } // Clear the array in order to avoid firing the change event for preselected values.


      this._selectedToEmit.length = 0;
    }
  }
  /** Selected values. */


  get selected() {
    if (!this._selected) {
      this._selected = Array.from(this._selection.values());
    }

    return this._selected;
  }
  /**
   * Selects a value or an array of values.
   */


  select(...values) {
    this._verifyValueAssignment(values);

    values.forEach(value => this._markSelected(value));

    this._emitChangeEvent();
  }
  /**
   * Deselects a value or an array of values.
   */


  deselect(...values) {
    this._verifyValueAssignment(values);

    values.forEach(value => this._unmarkSelected(value));

    this._emitChangeEvent();
  }
  /**
   * Toggles a value between selected and deselected.
   */


  toggle(value) {
    this.isSelected(value) ? this.deselect(value) : this.select(value);
  }
  /**
   * Clears all of the selected values.
   */


  clear() {
    this._unmarkAll();

    this._emitChangeEvent();
  }
  /**
   * Determines whether a value is selected.
   */


  isSelected(value) {
    return this._selection.has(value);
  }
  /**
   * Determines whether the model does not have a value.
   */


  isEmpty() {
    return this._selection.size === 0;
  }
  /**
   * Determines whether the model has a value.
   */


  hasValue() {
    return !this.isEmpty();
  }
  /**
   * Sorts the selected values based on a predicate function.
   */


  sort(predicate) {
    if (this._multiple && this.selected) {
      this._selected.sort(predicate);
    }
  }
  /**
   * Gets whether multiple values can be selected.
   */


  isMultipleSelection() {
    return this._multiple;
  }
  /** Emits a change event and clears the records of selected and deselected values. */


  _emitChangeEvent() {
    // Clear the selected values so they can be re-cached.
    this._selected = null;

    if (this._selectedToEmit.length || this._deselectedToEmit.length) {
      this.changed.next({
        source: this,
        added: this._selectedToEmit,
        removed: this._deselectedToEmit
      });
      this._deselectedToEmit = [];
      this._selectedToEmit = [];
    }
  }
  /** Selects a value. */


  _markSelected(value) {
    if (!this.isSelected(value)) {
      if (!this._multiple) {
        this._unmarkAll();
      }

      this._selection.add(value);

      if (this._emitChanges) {
        this._selectedToEmit.push(value);
      }
    }
  }
  /** Deselects a value. */


  _unmarkSelected(value) {
    if (this.isSelected(value)) {
      this._selection.delete(value);

      if (this._emitChanges) {
        this._deselectedToEmit.push(value);
      }
    }
  }
  /** Clears out the selected values. */


  _unmarkAll() {
    if (!this.isEmpty()) {
      this._selection.forEach(value => this._unmarkSelected(value));
    }
  }
  /**
   * Verifies the value assignment and throws an error if the specified value array is
   * including multiple values while the selection model is not supporting multiple values.
   */


  _verifyValueAssignment(values) {
    if (values.length > 1 && !this._multiple && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw getMultipleValuesInSingleSelectionError();
    }
  }

}
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @docs-private
 */


function getMultipleValuesInSingleSelectionError() {
  return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */


class UniqueSelectionDispatcher {
  constructor() {
    this._listeners = [];
  }
  /**
   * Notify other items that selection for the given name has been set.
   * @param id ID of the item.
   * @param name Name of the item.
   */


  notify(id, name) {
    for (let listener of this._listeners) {
      listener(id, name);
    }
  }
  /**
   * Listen for future changes to item selection.
   * @return Function used to deregister listener
   */


  listen(listener) {
    this._listeners.push(listener);

    return () => {
      this._listeners = this._listeners.filter(registered => {
        return listener !== registered;
      });
    };
  }

  ngOnDestroy() {
    this._listeners = [];
  }

}

UniqueSelectionDispatcher.ɵfac = function UniqueSelectionDispatcher_Factory(t) {
  return new (t || UniqueSelectionDispatcher)();
};

UniqueSelectionDispatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: UniqueSelectionDispatcher,
  factory: UniqueSelectionDispatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](UniqueSelectionDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token for {@link _ViewRepeater}. This token is for use by Angular Material only.
 * @docs-private
 */


const _VIEW_REPEATER_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('_ViewRepeater');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4941:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/drag-drop.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CDK_DRAG_CONFIG": () => (/* binding */ CDK_DRAG_CONFIG),
/* harmony export */   "CDK_DRAG_HANDLE": () => (/* binding */ CDK_DRAG_HANDLE),
/* harmony export */   "CDK_DRAG_PARENT": () => (/* binding */ CDK_DRAG_PARENT),
/* harmony export */   "CDK_DRAG_PLACEHOLDER": () => (/* binding */ CDK_DRAG_PLACEHOLDER),
/* harmony export */   "CDK_DRAG_PREVIEW": () => (/* binding */ CDK_DRAG_PREVIEW),
/* harmony export */   "CDK_DROP_LIST": () => (/* binding */ CDK_DROP_LIST),
/* harmony export */   "CDK_DROP_LIST_GROUP": () => (/* binding */ CDK_DROP_LIST_GROUP),
/* harmony export */   "CdkDrag": () => (/* binding */ CdkDrag),
/* harmony export */   "CdkDragHandle": () => (/* binding */ CdkDragHandle),
/* harmony export */   "CdkDragPlaceholder": () => (/* binding */ CdkDragPlaceholder),
/* harmony export */   "CdkDragPreview": () => (/* binding */ CdkDragPreview),
/* harmony export */   "CdkDropList": () => (/* binding */ CdkDropList),
/* harmony export */   "CdkDropListGroup": () => (/* binding */ CdkDropListGroup),
/* harmony export */   "DragDrop": () => (/* binding */ DragDrop),
/* harmony export */   "DragDropModule": () => (/* binding */ DragDropModule),
/* harmony export */   "DragDropRegistry": () => (/* binding */ DragDropRegistry),
/* harmony export */   "DragRef": () => (/* binding */ DragRef),
/* harmony export */   "DropListRef": () => (/* binding */ DropListRef),
/* harmony export */   "copyArrayItem": () => (/* binding */ copyArrayItem),
/* harmony export */   "moveItemInArray": () => (/* binding */ moveItemInArray),
/* harmony export */   "transferArrayItem": () => (/* binding */ transferArrayItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 3491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 3911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ 5752);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shallow-extends a stylesheet object with another stylesheet-like object.
 * Note that the keys in `source` have to be dash-cased.
 * @docs-private
 */

function extendStyles(dest, source, importantProperties) {
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      const value = source[key];

      if (value) {
        dest.setProperty(key, value, (importantProperties === null || importantProperties === void 0 ? void 0 : importantProperties.has(key)) ? 'important' : '');
      } else {
        dest.removeProperty(key);
      }
    }
  }

  return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * @param element Element on which to toggle the drag interactions.
 * @param enable Whether the drag interactions should be enabled.
 * @docs-private
 */


function toggleNativeDragInteractions(element, enable) {
  const userSelect = enable ? '' : 'none';
  extendStyles(element.style, {
    'touch-action': enable ? '' : 'none',
    '-webkit-user-drag': enable ? '' : 'none',
    '-webkit-tap-highlight-color': enable ? '' : 'transparent',
    'user-select': userSelect,
    '-ms-user-select': userSelect,
    '-webkit-user-select': userSelect,
    '-moz-user-select': userSelect
  });
}
/**
 * Toggles whether an element is visible while preserving its dimensions.
 * @param element Element whose visibility to toggle
 * @param enable Whether the element should be visible.
 * @param importantProperties Properties to be set as `!important`.
 * @docs-private
 */


function toggleVisibility(element, enable, importantProperties) {
  extendStyles(element.style, {
    position: enable ? '' : 'fixed',
    top: enable ? '' : '0',
    opacity: enable ? '' : '0',
    left: enable ? '' : '-999em'
  }, importantProperties);
}
/**
 * Combines a transform string with an optional other transform
 * that exited before the base transform was applied.
 */


function combineTransforms(transform, initialTransform) {
  return initialTransform && initialTransform != 'none' ? transform + ' ' + initialTransform : transform;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Parses a CSS time value to milliseconds. */


function parseCssTimeUnitsToMs(value) {
  // Some browsers will return it in seconds, whereas others will return milliseconds.
  const multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
  return parseFloat(value) * multiplier;
}
/** Gets the transform transition duration, including the delay, of an element in milliseconds. */


function getTransformTransitionDurationInMs(element) {
  const computedStyle = getComputedStyle(element);
  const transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
  const property = transitionedProperties.find(prop => prop === 'transform' || prop === 'all'); // If there's no transition for `all` or `transform`, we shouldn't do anything.

  if (!property) {
    return 0;
  } // Get the index of the property that we're interested in and match
  // it up to the same index in `transition-delay` and `transition-duration`.


  const propertyIndex = transitionedProperties.indexOf(property);
  const rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
  const rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
  return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) + parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/** Parses out multiple values from a computed style into an array. */


function parseCssPropertyValue(computedStyle, name) {
  const value = computedStyle.getPropertyValue(name);
  return value.split(',').map(part => part.trim());
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets a mutable version of an element's bounding `ClientRect`. */


function getMutableClientRect(element) {
  const clientRect = element.getBoundingClientRect(); // We need to clone the `clientRect` here, because all the values on it are readonly
  // and we need to be able to update them. Also we can't use a spread here, because
  // the values on a `ClientRect` aren't own properties. See:
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes

  return {
    top: clientRect.top,
    right: clientRect.right,
    bottom: clientRect.bottom,
    left: clientRect.left,
    width: clientRect.width,
    height: clientRect.height,
    x: clientRect.x,
    y: clientRect.y
  };
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param clientRect ClientRect that is being checked.
 * @param x Coordinates along the X axis.
 * @param y Coordinates along the Y axis.
 */


function isInsideClientRect(clientRect, x, y) {
  const {
    top,
    bottom,
    left,
    right
  } = clientRect;
  return y >= top && y <= bottom && x >= left && x <= right;
}
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param clientRect `ClientRect` that should be updated.
 * @param top Amount to add to the `top` position.
 * @param left Amount to add to the `left` position.
 */


function adjustClientRect(clientRect, top, left) {
  clientRect.top += top;
  clientRect.bottom = clientRect.top + clientRect.height;
  clientRect.left += left;
  clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Checks whether the pointer coordinates are close to a ClientRect.
 * @param rect ClientRect to check against.
 * @param threshold Threshold around the ClientRect.
 * @param pointerX Coordinates along the X axis.
 * @param pointerY Coordinates along the Y axis.
 */


function isPointerNearClientRect(rect, threshold, pointerX, pointerY) {
  const {
    top,
    right,
    bottom,
    left,
    width,
    height
  } = rect;
  const xThreshold = width * threshold;
  const yThreshold = height * threshold;
  return pointerY > top - yThreshold && pointerY < bottom + yThreshold && pointerX > left - xThreshold && pointerX < right + xThreshold;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Keeps track of the scroll position and dimensions of the parents of an element. */


class ParentPositionTracker {
  constructor(_document) {
    this._document = _document;
    /** Cached positions of the scrollable parent elements. */

    this.positions = new Map();
  }
  /** Clears the cached positions. */


  clear() {
    this.positions.clear();
  }
  /** Caches the positions. Should be called at the beginning of a drag sequence. */


  cache(elements) {
    this.clear();
    this.positions.set(this._document, {
      scrollPosition: this.getViewportScrollPosition()
    });
    elements.forEach(element => {
      this.positions.set(element, {
        scrollPosition: {
          top: element.scrollTop,
          left: element.scrollLeft
        },
        clientRect: getMutableClientRect(element)
      });
    });
  }
  /** Handles scrolling while a drag is taking place. */


  handleScroll(event) {
    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);

    const cachedPosition = this.positions.get(target);

    if (!cachedPosition) {
      return null;
    }

    const scrollPosition = cachedPosition.scrollPosition;
    let newTop;
    let newLeft;

    if (target === this._document) {
      const viewportScrollPosition = this.getViewportScrollPosition();
      newTop = viewportScrollPosition.top;
      newLeft = viewportScrollPosition.left;
    } else {
      newTop = target.scrollTop;
      newLeft = target.scrollLeft;
    }

    const topDifference = scrollPosition.top - newTop;
    const leftDifference = scrollPosition.left - newLeft; // Go through and update the cached positions of the scroll
    // parents that are inside the element that was scrolled.

    this.positions.forEach((position, node) => {
      if (position.clientRect && target !== node && target.contains(node)) {
        adjustClientRect(position.clientRect, topDifference, leftDifference);
      }
    });
    scrollPosition.top = newTop;
    scrollPosition.left = newLeft;
    return {
      top: topDifference,
      left: leftDifference
    };
  }
  /**
   * Gets the scroll position of the viewport. Note that we use the scrollX and scrollY directly,
   * instead of going through the `ViewportRuler`, because the first value the ruler looks at is
   * the top/left offset of the `document.documentElement` which works for most cases, but breaks
   * if the element is offset by something like the `BlockScrollStrategy`.
   */


  getViewportScrollPosition() {
    return {
      top: window.scrollY,
      left: window.scrollX
    };
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Creates a deep clone of an element. */


function deepCloneNode(node) {
  const clone = node.cloneNode(true);
  const descendantsWithId = clone.querySelectorAll('[id]');
  const nodeName = node.nodeName.toLowerCase(); // Remove the `id` to avoid having multiple elements with the same id on the page.

  clone.removeAttribute('id');

  for (let i = 0; i < descendantsWithId.length; i++) {
    descendantsWithId[i].removeAttribute('id');
  }

  if (nodeName === 'canvas') {
    transferCanvasData(node, clone);
  } else if (nodeName === 'input' || nodeName === 'select' || nodeName === 'textarea') {
    transferInputData(node, clone);
  }

  transferData('canvas', node, clone, transferCanvasData);
  transferData('input, textarea, select', node, clone, transferInputData);
  return clone;
}
/** Matches elements between an element and its clone and allows for their data to be cloned. */


function transferData(selector, node, clone, callback) {
  const descendantElements = node.querySelectorAll(selector);

  if (descendantElements.length) {
    const cloneElements = clone.querySelectorAll(selector);

    for (let i = 0; i < descendantElements.length; i++) {
      callback(descendantElements[i], cloneElements[i]);
    }
  }
} // Counter for unique cloned radio button names.


let cloneUniqueId = 0;
/** Transfers the data of one input element to another. */

function transferInputData(source, clone) {
  // Browsers throw an error when assigning the value of a file input programmatically.
  if (clone.type !== 'file') {
    clone.value = source.value;
  } // Radio button `name` attributes must be unique for radio button groups
  // otherwise original radio buttons can lose their checked state
  // once the clone is inserted in the DOM.


  if (clone.type === 'radio' && clone.name) {
    clone.name = `mat-clone-${clone.name}-${cloneUniqueId++}`;
  }
}
/** Transfers the data of one canvas element to another. */


function transferCanvasData(source, clone) {
  const context = clone.getContext('2d');

  if (context) {
    // In some cases `drawImage` can throw (e.g. if the canvas size is 0x0).
    // We can't do much about it so just ignore the error.
    try {
      context.drawImage(source, 0, 0);
    } catch (_a) {}
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Options that can be used to bind a passive event listener. */


const passiveEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: true
});
/** Options that can be used to bind an active event listener. */

const activeEventListenerOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false
});
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 */

const MOUSE_EVENT_IGNORE_TIME = 800;
/** Inline styles to be set as `!important` while dragging. */

const dragImportantProperties = new Set([// Needs to be important, because some `mat-table` sets `position: sticky !important`. See #22781.
'position']);
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 */

class DragRef {
  constructor(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._config = _config;
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
    /**
     * CSS `transform` applied to the element when it isn't being dragged. We need a
     * passive transform in order for the dragged element to retain its new position
     * after the user has stopped dragging and because we need to know the relative
     * position in case they start dragging again. This corresponds to `element.style.transform`.
     */

    this._passiveTransform = {
      x: 0,
      y: 0
    };
    /** CSS `transform` that is applied to the element while it's being dragged. */

    this._activeTransform = {
      x: 0,
      y: 0
    };
    /**
     * Whether the dragging sequence has been started. Doesn't
     * necessarily mean that the element has been moved.
     */

    this._hasStartedDragging = false;
    /** Emits when the item is being moved. */

    this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subscription to pointer movement events. */

    this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to the event that is dispatched when the user lifts their pointer. */

    this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to the viewport being scrolled. */

    this._scrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Subscription to the viewport being resized. */

    this._resizeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Cached reference to the boundary element. */

    this._boundaryElement = null;
    /** Whether the native dragging interactions have been enabled on the root element. */

    this._nativeInteractionsEnabled = true;
    /** Elements that can be used to drag the draggable item. */

    this._handles = [];
    /** Registered handles that are currently disabled. */

    this._disabledHandles = new Set();
    /** Layout direction of the item. */

    this._direction = 'ltr';
    /**
     * Amount of milliseconds to wait after the user has put their
     * pointer down before starting to drag the element.
     */

    this.dragStartDelay = 0;
    this._disabled = false;
    /** Emits as the drag sequence is being prepared. */

    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user starts dragging the item. */

    this.started = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = this._moveEvents;
    /** Handler for the `mousedown`/`touchstart` events. */

    this._pointerDown = event => {
      this.beforeStarted.next(); // Delegate the event based on whether it started from a handle or the element itself.

      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);

        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          this._initializeDragSequence(targetHandle, event);
        }
      } else if (!this.disabled) {
        this._initializeDragSequence(this._rootElement, event);
      }
    };
    /** Handler that is invoked when the user moves their pointer after they've initiated a drag. */


    this._pointerMove = event => {
      const pointerPosition = this._getPointerPositionOnPage(event);

      if (!this._hasStartedDragging) {
        const distanceX = Math.abs(pointerPosition.x - this._pickupPositionOnPage.x);
        const distanceY = Math.abs(pointerPosition.y - this._pickupPositionOnPage.y);
        const isOverThreshold = distanceX + distanceY >= this._config.dragStartThreshold; // Only start dragging after the user has moved more than the minimum distance in either
        // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
        // in the `pointerMove` subscription, because we're not guaranteed to have one move event
        // per pixel of movement (e.g. if the user moves their pointer quickly).

        if (isOverThreshold) {
          const isDelayElapsed = Date.now() >= this._dragStartTime + this._getDragStartDelay(event);

          const container = this._dropContainer;

          if (!isDelayElapsed) {
            this._endDragSequence(event);

            return;
          } // Prevent other drag sequences from starting while something in the container is still
          // being dragged. This can happen while we're waiting for the drop animation to finish
          // and can cause errors, because some elements might still be moving around.


          if (!container || !container.isDragging() && !container.isReceiving()) {
            // Prevent the default action as soon as the dragging sequence is considered as
            // "started" since waiting for the next event can allow the device to begin scrolling.
            event.preventDefault();
            this._hasStartedDragging = true;

            this._ngZone.run(() => this._startDragSequence(event));
          }
        }

        return;
      } // We prevent the default action down here so that we know that dragging has started. This is
      // important for touch devices where doing this too early can unnecessarily block scrolling,
      // if there's a dragging delay.


      event.preventDefault();

      const constrainedPointerPosition = this._getConstrainedPointerPosition(pointerPosition);

      this._hasMoved = true;
      this._lastKnownPointerPosition = pointerPosition;

      this._updatePointerDirectionDelta(constrainedPointerPosition);

      if (this._dropContainer) {
        this._updateActiveDropContainer(constrainedPointerPosition, pointerPosition);
      } else {
        const activeTransform = this._activeTransform;
        activeTransform.x = constrainedPointerPosition.x - this._pickupPositionOnPage.x + this._passiveTransform.x;
        activeTransform.y = constrainedPointerPosition.y - this._pickupPositionOnPage.y + this._passiveTransform.y;

        this._applyRootElementTransform(activeTransform.x, activeTransform.y);
      } // Since this event gets fired for every pixel while dragging, we only
      // want to fire it if the consumer opted into it. Also we have to
      // re-enter the zone because we run all of the events on the outside.


      if (this._moveEvents.observers.length) {
        this._ngZone.run(() => {
          this._moveEvents.next({
            source: this,
            pointerPosition: constrainedPointerPosition,
            event,
            distance: this._getDragDistance(constrainedPointerPosition),
            delta: this._pointerDirectionDelta
          });
        });
      }
    };
    /** Handler that is invoked when the user lifts their pointer up, after initiating a drag. */


    this._pointerUp = event => {
      this._endDragSequence(event);
    };
    /** Handles a native `dragstart` event. */


    this._nativeDragStart = event => {
      if (this._handles.length) {
        const targetHandle = this._getTargetHandle(event);

        if (targetHandle && !this._disabledHandles.has(targetHandle) && !this.disabled) {
          event.preventDefault();
        }
      } else if (!this.disabled) {
        // Usually this isn't necessary since the we prevent the default action in `pointerDown`,
        // but some cases like dragging of links can slip through (see #24403).
        event.preventDefault();
      }
    };

    this.withRootElement(element).withParent(_config.parentDragRef || null);
    this._parentPositions = new ParentPositionTracker(_document);

    _dragDropRegistry.registerDragItem(this);
  }
  /** Whether starting to drag this element is disabled. */


  get disabled() {
    return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
  }

  set disabled(value) {
    const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    if (newValue !== this._disabled) {
      this._disabled = newValue;

      this._toggleNativeDragInteractions();

      this._handles.forEach(handle => toggleNativeDragInteractions(handle, newValue));
    }
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */


  getPlaceholderElement() {
    return this._placeholder;
  }
  /** Returns the root draggable element. */


  getRootElement() {
    return this._rootElement;
  }
  /**
   * Gets the currently-visible element that represents the drag item.
   * While dragging this is the placeholder, otherwise it's the root element.
   */


  getVisibleElement() {
    return this.isDragging() ? this.getPlaceholderElement() : this.getRootElement();
  }
  /** Registers the handles that can be used to drag the element. */


  withHandles(handles) {
    this._handles = handles.map(handle => (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(handle));

    this._handles.forEach(handle => toggleNativeDragInteractions(handle, this.disabled));

    this._toggleNativeDragInteractions(); // Delete any lingering disabled handles that may have been destroyed. Note that we re-create
    // the set, rather than iterate over it and filter out the destroyed handles, because while
    // the ES spec allows for sets to be modified while they're being iterated over, some polyfills
    // use an array internally which may throw an error.


    const disabledHandles = new Set();

    this._disabledHandles.forEach(handle => {
      if (this._handles.indexOf(handle) > -1) {
        disabledHandles.add(handle);
      }
    });

    this._disabledHandles = disabledHandles;
    return this;
  }
  /**
   * Registers the template that should be used for the drag preview.
   * @param template Template that from which to stamp out the preview.
   */


  withPreviewTemplate(template) {
    this._previewTemplate = template;
    return this;
  }
  /**
   * Registers the template that should be used for the drag placeholder.
   * @param template Template that from which to stamp out the placeholder.
   */


  withPlaceholderTemplate(template) {
    this._placeholderTemplate = template;
    return this;
  }
  /**
   * Sets an alternate drag root element. The root element is the element that will be moved as
   * the user is dragging. Passing an alternate root element is useful when trying to enable
   * dragging on an element that you might not have access to.
   */


  withRootElement(rootElement) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(rootElement);

    if (element !== this._rootElement) {
      if (this._rootElement) {
        this._removeRootElementListeners(this._rootElement);
      }

      this._ngZone.runOutsideAngular(() => {
        element.addEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.addEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
        element.addEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
      });

      this._initialTransform = undefined;
      this._rootElement = element;
    }

    if (typeof SVGElement !== 'undefined' && this._rootElement instanceof SVGElement) {
      this._ownerSVGElement = this._rootElement.ownerSVGElement;
    }

    return this;
  }
  /**
   * Element to which the draggable's position will be constrained.
   */


  withBoundaryElement(boundaryElement) {
    this._boundaryElement = boundaryElement ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundaryElement) : null;

    this._resizeSubscription.unsubscribe();

    if (boundaryElement) {
      this._resizeSubscription = this._viewportRuler.change(10).subscribe(() => this._containInsideBoundaryOnResize());
    }

    return this;
  }
  /** Sets the parent ref that the ref is nested in.  */


  withParent(parent) {
    this._parentDragRef = parent;
    return this;
  }
  /** Removes the dragging functionality from the DOM element. */


  dispose() {
    var _a, _b;

    this._removeRootElementListeners(this._rootElement); // Do this check before removing from the registry since it'll
    // stop being considered as dragged once it is removed.


    if (this.isDragging()) {
      // Since we move out the element to the end of the body while it's being
      // dragged, we have to make sure that it's removed if it gets destroyed.
      (_a = this._rootElement) === null || _a === void 0 ? void 0 : _a.remove();
    }

    (_b = this._anchor) === null || _b === void 0 ? void 0 : _b.remove();

    this._destroyPreview();

    this._destroyPlaceholder();

    this._dragDropRegistry.removeDragItem(this);

    this._removeSubscriptions();

    this.beforeStarted.complete();
    this.started.complete();
    this.released.complete();
    this.ended.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();

    this._moveEvents.complete();

    this._handles = [];

    this._disabledHandles.clear();

    this._dropContainer = undefined;

    this._resizeSubscription.unsubscribe();

    this._parentPositions.clear();

    this._boundaryElement = this._rootElement = this._ownerSVGElement = this._placeholderTemplate = this._previewTemplate = this._anchor = this._parentDragRef = null;
  }
  /** Checks whether the element is currently being dragged. */


  isDragging() {
    return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
  }
  /** Resets a standalone drag item to its initial position. */


  reset() {
    this._rootElement.style.transform = this._initialTransform || '';
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform = {
      x: 0,
      y: 0
    };
  }
  /**
   * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
   * @param handle Handle element that should be disabled.
   */


  disableHandle(handle) {
    if (!this._disabledHandles.has(handle) && this._handles.indexOf(handle) > -1) {
      this._disabledHandles.add(handle);

      toggleNativeDragInteractions(handle, true);
    }
  }
  /**
   * Enables a handle, if it has been disabled.
   * @param handle Handle element to be enabled.
   */


  enableHandle(handle) {
    if (this._disabledHandles.has(handle)) {
      this._disabledHandles.delete(handle);

      toggleNativeDragInteractions(handle, this.disabled);
    }
  }
  /** Sets the layout direction of the draggable item. */


  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /** Sets the container that the item is part of. */


  _withDropContainer(container) {
    this._dropContainer = container;
  }
  /**
   * Gets the current position in pixels the draggable outside of a drop container.
   */


  getFreeDragPosition() {
    const position = this.isDragging() ? this._activeTransform : this._passiveTransform;
    return {
      x: position.x,
      y: position.y
    };
  }
  /**
   * Sets the current position in pixels the draggable outside of a drop container.
   * @param value New position to be set.
   */


  setFreeDragPosition(value) {
    this._activeTransform = {
      x: 0,
      y: 0
    };
    this._passiveTransform.x = value.x;
    this._passiveTransform.y = value.y;

    if (!this._dropContainer) {
      this._applyRootElementTransform(value.x, value.y);
    }

    return this;
  }
  /**
   * Sets the container into which to insert the preview element.
   * @param value Container into which to insert the preview.
   */


  withPreviewContainer(value) {
    this._previewContainer = value;
    return this;
  }
  /** Updates the item's sort order based on the last-known pointer position. */


  _sortFromLastPointerPosition() {
    const position = this._lastKnownPointerPosition;

    if (position && this._dropContainer) {
      this._updateActiveDropContainer(this._getConstrainedPointerPosition(position), position);
    }
  }
  /** Unsubscribes from the global subscriptions. */


  _removeSubscriptions() {
    this._pointerMoveSubscription.unsubscribe();

    this._pointerUpSubscription.unsubscribe();

    this._scrollSubscription.unsubscribe();
  }
  /** Destroys the preview element and its ViewRef. */


  _destroyPreview() {
    var _a, _b;

    (_a = this._preview) === null || _a === void 0 ? void 0 : _a.remove();
    (_b = this._previewRef) === null || _b === void 0 ? void 0 : _b.destroy();
    this._preview = this._previewRef = null;
  }
  /** Destroys the placeholder element and its ViewRef. */


  _destroyPlaceholder() {
    var _a, _b;

    (_a = this._placeholder) === null || _a === void 0 ? void 0 : _a.remove();
    (_b = this._placeholderRef) === null || _b === void 0 ? void 0 : _b.destroy();
    this._placeholder = this._placeholderRef = null;
  }
  /**
   * Clears subscriptions and stops the dragging sequence.
   * @param event Browser event object that ended the sequence.
   */


  _endDragSequence(event) {
    // Note that here we use `isDragging` from the service, rather than from `this`.
    // The difference is that the one from the service reflects whether a dragging sequence
    // has been initiated, whereas the one on `this` includes whether the user has passed
    // the minimum dragging threshold.
    if (!this._dragDropRegistry.isDragging(this)) {
      return;
    }

    this._removeSubscriptions();

    this._dragDropRegistry.stopDragging(this);

    this._toggleNativeDragInteractions();

    if (this._handles) {
      this._rootElement.style.webkitTapHighlightColor = this._rootElementTapHighlight;
    }

    if (!this._hasStartedDragging) {
      return;
    }

    this.released.next({
      source: this
    });

    if (this._dropContainer) {
      // Stop scrolling immediately, instead of waiting for the animation to finish.
      this._dropContainer._stopScrolling();

      this._animatePreviewToPlaceholder().then(() => {
        this._cleanupDragArtifacts(event);

        this._cleanupCachedDimensions();

        this._dragDropRegistry.stopDragging(this);
      });
    } else {
      // Convert the active transform into a passive one. This means that next time
      // the user starts dragging the item, its position will be calculated relatively
      // to the new passive transform.
      this._passiveTransform.x = this._activeTransform.x;

      const pointerPosition = this._getPointerPositionOnPage(event);

      this._passiveTransform.y = this._activeTransform.y;

      this._ngZone.run(() => {
        this.ended.next({
          source: this,
          distance: this._getDragDistance(pointerPosition),
          dropPoint: pointerPosition
        });
      });

      this._cleanupCachedDimensions();

      this._dragDropRegistry.stopDragging(this);
    }
  }
  /** Starts the dragging sequence. */


  _startDragSequence(event) {
    if (isTouchEvent(event)) {
      this._lastTouchEventTime = Date.now();
    }

    this._toggleNativeDragInteractions();

    const dropContainer = this._dropContainer;

    if (dropContainer) {
      const element = this._rootElement;
      const parent = element.parentNode;

      const placeholder = this._placeholder = this._createPlaceholderElement();

      const anchor = this._anchor = this._anchor || this._document.createComment(''); // Needs to happen before the root element is moved.


      const shadowRoot = this._getShadowRoot(); // Insert an anchor node so that we can restore the element's position in the DOM.


      parent.insertBefore(anchor, element); // There's no risk of transforms stacking when inside a drop container so
      // we can keep the initial transform up to date any time dragging starts.

      this._initialTransform = element.style.transform || ''; // Create the preview after the initial transform has
      // been cached, because it can be affected by the transform.

      this._preview = this._createPreviewElement(); // We move the element out at the end of the body and we make it hidden, because keeping it in
      // place will throw off the consumer's `:last-child` selectors. We can't remove the element
      // from the DOM completely, because iOS will stop firing all subsequent events in the chain.

      toggleVisibility(element, false, dragImportantProperties);

      this._document.body.appendChild(parent.replaceChild(placeholder, element));

      this._getPreviewInsertionPoint(parent, shadowRoot).appendChild(this._preview);

      this.started.next({
        source: this
      }); // Emit before notifying the container.

      dropContainer.start();
      this._initialContainer = dropContainer;
      this._initialIndex = dropContainer.getItemIndex(this);
    } else {
      this.started.next({
        source: this
      });
      this._initialContainer = this._initialIndex = undefined;
    } // Important to run after we've called `start` on the parent container
    // so that it has had time to resolve its scrollable parents.


    this._parentPositions.cache(dropContainer ? dropContainer.getScrollableParents() : []);
  }
  /**
   * Sets up the different variables and subscriptions
   * that will be necessary for the dragging sequence.
   * @param referenceElement Element that started the drag sequence.
   * @param event Browser event object that started the sequence.
   */


  _initializeDragSequence(referenceElement, event) {
    // Stop propagation if the item is inside another
    // draggable so we don't start multiple drag sequences.
    if (this._parentDragRef) {
      event.stopPropagation();
    }

    const isDragging = this.isDragging();
    const isTouchSequence = isTouchEvent(event);
    const isAuxiliaryMouseButton = !isTouchSequence && event.button !== 0;
    const rootElement = this._rootElement;

    const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event);

    const isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime && this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
    const isFakeEvent = isTouchSequence ? (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeTouchstartFromScreenReader)(event) : (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.isFakeMousedownFromScreenReader)(event); // If the event started from an element with the native HTML drag&drop, it'll interfere
    // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
    // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
    // it's flaky and it fails if the user drags it away quickly. Also note that we only want
    // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
    // events from firing on touch devices.

    if (target && target.draggable && event.type === 'mousedown') {
      event.preventDefault();
    } // Abort if the user is already dragging or is using a mouse button other than the primary one.


    if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent || isFakeEvent) {
      return;
    } // If we've got handles, we need to disable the tap highlight on the entire root element,
    // otherwise iOS will still add it, even though all the drag interactions on the handle
    // are disabled.


    if (this._handles.length) {
      const rootStyles = rootElement.style;
      this._rootElementTapHighlight = rootStyles.webkitTapHighlightColor || '';
      rootStyles.webkitTapHighlightColor = 'transparent';
    }

    this._hasStartedDragging = this._hasMoved = false; // Avoid multiple subscriptions and memory leaks when multi touch
    // (isDragging check above isn't enough because of possible temporal and/or dimensional delays)

    this._removeSubscriptions();

    this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
    this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
    this._scrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(scrollEvent => this._updateOnScroll(scrollEvent));

    if (this._boundaryElement) {
      this._boundaryRect = getMutableClientRect(this._boundaryElement);
    } // If we have a custom preview we can't know ahead of time how large it'll be so we position
    // it next to the cursor. The exception is when the consumer has opted into making the preview
    // the same size as the root element, in which case we do know the size.


    const previewTemplate = this._previewTemplate;
    this._pickupPositionInElement = previewTemplate && previewTemplate.template && !previewTemplate.matchSize ? {
      x: 0,
      y: 0
    } : this._getPointerPositionInElement(referenceElement, event);

    const pointerPosition = this._pickupPositionOnPage = this._lastKnownPointerPosition = this._getPointerPositionOnPage(event);

    this._pointerDirectionDelta = {
      x: 0,
      y: 0
    };
    this._pointerPositionAtLastDirectionChange = {
      x: pointerPosition.x,
      y: pointerPosition.y
    };
    this._dragStartTime = Date.now();

    this._dragDropRegistry.startDragging(this, event);
  }
  /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */


  _cleanupDragArtifacts(event) {
    // Restore the element's visibility and insert it at its old position in the DOM.
    // It's important that we maintain the position, because moving the element around in the DOM
    // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
    // while moving the existing elements in all other cases.
    toggleVisibility(this._rootElement, true, dragImportantProperties);

    this._anchor.parentNode.replaceChild(this._rootElement, this._anchor);

    this._destroyPreview();

    this._destroyPlaceholder();

    this._boundaryRect = this._previewRect = this._initialTransform = undefined; // Re-enter the NgZone since we bound `document` events on the outside.

    this._ngZone.run(() => {
      const container = this._dropContainer;
      const currentIndex = container.getItemIndex(this);

      const pointerPosition = this._getPointerPositionOnPage(event);

      const distance = this._getDragDistance(pointerPosition);

      const isPointerOverContainer = container._isOverContainer(pointerPosition.x, pointerPosition.y);

      this.ended.next({
        source: this,
        distance,
        dropPoint: pointerPosition
      });
      this.dropped.next({
        item: this,
        currentIndex,
        previousIndex: this._initialIndex,
        container: container,
        previousContainer: this._initialContainer,
        isPointerOverContainer,
        distance,
        dropPoint: pointerPosition
      });
      container.drop(this, currentIndex, this._initialIndex, this._initialContainer, isPointerOverContainer, distance, pointerPosition);
      this._dropContainer = this._initialContainer;
    });
  }
  /**
   * Updates the item's position in its drop container, or moves it
   * into a new one, depending on its current drag position.
   */


  _updateActiveDropContainer({
    x,
    y
  }, {
    x: rawX,
    y: rawY
  }) {
    // Drop container that draggable has been moved into.
    let newContainer = this._initialContainer._getSiblingContainerFromPosition(this, x, y); // If we couldn't find a new container to move the item into, and the item has left its
    // initial container, check whether the it's over the initial container. This handles the
    // case where two containers are connected one way and the user tries to undo dragging an
    // item into a new container.


    if (!newContainer && this._dropContainer !== this._initialContainer && this._initialContainer._isOverContainer(x, y)) {
      newContainer = this._initialContainer;
    }

    if (newContainer && newContainer !== this._dropContainer) {
      this._ngZone.run(() => {
        // Notify the old container that the item has left.
        this.exited.next({
          item: this,
          container: this._dropContainer
        });

        this._dropContainer.exit(this); // Notify the new container that the item has entered.


        this._dropContainer = newContainer;

        this._dropContainer.enter(this, x, y, newContainer === this._initialContainer && // If we're re-entering the initial container and sorting is disabled,
        // put item the into its starting index to begin with.
        newContainer.sortingDisabled ? this._initialIndex : undefined);

        this.entered.next({
          item: this,
          container: newContainer,
          currentIndex: newContainer.getItemIndex(this)
        });
      });
    } // Dragging may have been interrupted as a result of the events above.


    if (this.isDragging()) {
      this._dropContainer._startScrollingIfNecessary(rawX, rawY);

      this._dropContainer._sortItem(this, x, y, this._pointerDirectionDelta);

      this._applyPreviewTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    }
  }
  /**
   * Creates the element that will be rendered next to the user's pointer
   * and will be used as a preview of the element that is being dragged.
   */


  _createPreviewElement() {
    const previewConfig = this._previewTemplate;
    const previewClass = this.previewClass;
    const previewTemplate = previewConfig ? previewConfig.template : null;
    let preview;

    if (previewTemplate && previewConfig) {
      // Measure the element before we've inserted the preview
      // since the insertion could throw off the measurement.
      const rootRect = previewConfig.matchSize ? this._rootElement.getBoundingClientRect() : null;
      const viewRef = previewConfig.viewContainer.createEmbeddedView(previewTemplate, previewConfig.context);
      viewRef.detectChanges();
      preview = getRootNode(viewRef, this._document);
      this._previewRef = viewRef;

      if (previewConfig.matchSize) {
        matchElementSize(preview, rootRect);
      } else {
        preview.style.transform = getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
      }
    } else {
      const element = this._rootElement;
      preview = deepCloneNode(element);
      matchElementSize(preview, element.getBoundingClientRect());

      if (this._initialTransform) {
        preview.style.transform = this._initialTransform;
      }
    }

    extendStyles(preview.style, {
      // It's important that we disable the pointer events on the preview, because
      // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
      'pointer-events': 'none',
      // We have to reset the margin, because it can throw off positioning relative to the viewport.
      'margin': '0',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'z-index': `${this._config.zIndex || 1000}`
    }, dragImportantProperties);
    toggleNativeDragInteractions(preview, false);
    preview.classList.add('cdk-drag-preview');
    preview.setAttribute('dir', this._direction);

    if (previewClass) {
      if (Array.isArray(previewClass)) {
        previewClass.forEach(className => preview.classList.add(className));
      } else {
        preview.classList.add(previewClass);
      }
    }

    return preview;
  }
  /**
   * Animates the preview element from its current position to the location of the drop placeholder.
   * @returns Promise that resolves when the animation completes.
   */


  _animatePreviewToPlaceholder() {
    // If the user hasn't moved yet, the transitionend event won't fire.
    if (!this._hasMoved) {
      return Promise.resolve();
    }

    const placeholderRect = this._placeholder.getBoundingClientRect(); // Apply the class that adds a transition to the preview.


    this._preview.classList.add('cdk-drag-animating'); // Move the preview to the placeholder position.


    this._applyPreviewTransform(placeholderRect.left, placeholderRect.top); // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
    // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
    // apply its style, we take advantage of the available info to figure out whether we need to
    // bind the event in the first place.


    const duration = getTransformTransitionDurationInMs(this._preview);

    if (duration === 0) {
      return Promise.resolve();
    }

    return this._ngZone.runOutsideAngular(() => {
      return new Promise(resolve => {
        const handler = event => {
          var _a;

          if (!event || (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event) === this._preview && event.propertyName === 'transform') {
            (_a = this._preview) === null || _a === void 0 ? void 0 : _a.removeEventListener('transitionend', handler);
            resolve();
            clearTimeout(timeout);
          }
        }; // If a transition is short enough, the browser might not fire the `transitionend` event.
        // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
        // fire if the transition hasn't completed when it was supposed to.


        const timeout = setTimeout(handler, duration * 1.5);

        this._preview.addEventListener('transitionend', handler);
      });
    });
  }
  /** Creates an element that will be shown instead of the current element while dragging. */


  _createPlaceholderElement() {
    const placeholderConfig = this._placeholderTemplate;
    const placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
    let placeholder;

    if (placeholderTemplate) {
      this._placeholderRef = placeholderConfig.viewContainer.createEmbeddedView(placeholderTemplate, placeholderConfig.context);

      this._placeholderRef.detectChanges();

      placeholder = getRootNode(this._placeholderRef, this._document);
    } else {
      placeholder = deepCloneNode(this._rootElement);
    } // Stop pointer events on the preview so the user can't
    // interact with it while the preview is animating.


    placeholder.style.pointerEvents = 'none';
    placeholder.classList.add('cdk-drag-placeholder');
    return placeholder;
  }
  /**
   * Figures out the coordinates at which an element was picked up.
   * @param referenceElement Element that initiated the dragging.
   * @param event Event that initiated the dragging.
   */


  _getPointerPositionInElement(referenceElement, event) {
    const elementRect = this._rootElement.getBoundingClientRect();

    const handleElement = referenceElement === this._rootElement ? null : referenceElement;
    const referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
    const point = isTouchEvent(event) ? event.targetTouches[0] : event;

    const scrollPosition = this._getViewportScrollPosition();

    const x = point.pageX - referenceRect.left - scrollPosition.left;
    const y = point.pageY - referenceRect.top - scrollPosition.top;
    return {
      x: referenceRect.left - elementRect.left + x,
      y: referenceRect.top - elementRect.top + y
    };
  }
  /** Determines the point of the page that was touched by the user. */


  _getPointerPositionOnPage(event) {
    const scrollPosition = this._getViewportScrollPosition();

    const point = isTouchEvent(event) ? // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
    // Also note that on real devices we're guaranteed for either `touches` or `changedTouches`
    // to have a value, but Firefox in device emulation mode has a bug where both can be empty
    // for `touchstart` and `touchend` so we fall back to a dummy object in order to avoid
    // throwing an error. The value returned here will be incorrect, but since this only
    // breaks inside a developer tool and the value is only used for secondary information,
    // we can get away with it. See https://bugzilla.mozilla.org/show_bug.cgi?id=1615824.
    event.touches[0] || event.changedTouches[0] || {
      pageX: 0,
      pageY: 0
    } : event;
    const x = point.pageX - scrollPosition.left;
    const y = point.pageY - scrollPosition.top; // if dragging SVG element, try to convert from the screen coordinate system to the SVG
    // coordinate system

    if (this._ownerSVGElement) {
      const svgMatrix = this._ownerSVGElement.getScreenCTM();

      if (svgMatrix) {
        const svgPoint = this._ownerSVGElement.createSVGPoint();

        svgPoint.x = x;
        svgPoint.y = y;
        return svgPoint.matrixTransform(svgMatrix.inverse());
      }
    }

    return {
      x,
      y
    };
  }
  /** Gets the pointer position on the page, accounting for any position constraints. */


  _getConstrainedPointerPosition(point) {
    const dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
    let {
      x,
      y
    } = this.constrainPosition ? this.constrainPosition(point, this) : point;

    if (this.lockAxis === 'x' || dropContainerLock === 'x') {
      y = this._pickupPositionOnPage.y;
    } else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
      x = this._pickupPositionOnPage.x;
    }

    if (this._boundaryRect) {
      const {
        x: pickupX,
        y: pickupY
      } = this._pickupPositionInElement;
      const boundaryRect = this._boundaryRect;

      const {
        width: previewWidth,
        height: previewHeight
      } = this._getPreviewRect();

      const minY = boundaryRect.top + pickupY;
      const maxY = boundaryRect.bottom - (previewHeight - pickupY);
      const minX = boundaryRect.left + pickupX;
      const maxX = boundaryRect.right - (previewWidth - pickupX);
      x = clamp$1(x, minX, maxX);
      y = clamp$1(y, minY, maxY);
    }

    return {
      x,
      y
    };
  }
  /** Updates the current drag delta, based on the user's current pointer position on the page. */


  _updatePointerDirectionDelta(pointerPositionOnPage) {
    const {
      x,
      y
    } = pointerPositionOnPage;
    const delta = this._pointerDirectionDelta;
    const positionSinceLastChange = this._pointerPositionAtLastDirectionChange; // Amount of pixels the user has dragged since the last time the direction changed.

    const changeX = Math.abs(x - positionSinceLastChange.x);
    const changeY = Math.abs(y - positionSinceLastChange.y); // Because we handle pointer events on a per-pixel basis, we don't want the delta
    // to change for every pixel, otherwise anything that depends on it can look erratic.
    // To make the delta more consistent, we track how much the user has moved since the last
    // delta change and we only update it after it has reached a certain threshold.

    if (changeX > this._config.pointerDirectionChangeThreshold) {
      delta.x = x > positionSinceLastChange.x ? 1 : -1;
      positionSinceLastChange.x = x;
    }

    if (changeY > this._config.pointerDirectionChangeThreshold) {
      delta.y = y > positionSinceLastChange.y ? 1 : -1;
      positionSinceLastChange.y = y;
    }

    return delta;
  }
  /** Toggles the native drag interactions, based on how many handles are registered. */


  _toggleNativeDragInteractions() {
    if (!this._rootElement || !this._handles) {
      return;
    }

    const shouldEnable = this._handles.length > 0 || !this.isDragging();

    if (shouldEnable !== this._nativeInteractionsEnabled) {
      this._nativeInteractionsEnabled = shouldEnable;
      toggleNativeDragInteractions(this._rootElement, shouldEnable);
    }
  }
  /** Removes the manually-added event listeners from the root element. */


  _removeRootElementListeners(element) {
    element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
    element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    element.removeEventListener('dragstart', this._nativeDragStart, activeEventListenerOptions);
  }
  /**
   * Applies a `transform` to the root element, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */


  _applyRootElementTransform(x, y) {
    const transform = getTransform(x, y);
    const styles = this._rootElement.style; // Cache the previous transform amount only after the first drag sequence, because
    // we don't want our own transforms to stack on top of each other.
    // Should be excluded none because none + translate3d(x, y, x) is invalid css

    if (this._initialTransform == null) {
      this._initialTransform = styles.transform && styles.transform != 'none' ? styles.transform : '';
    } // Preserve the previous `transform` value, if there was one. Note that we apply our own
    // transform before the user's, because things like rotation can affect which direction
    // the element will be translated towards.


    styles.transform = combineTransforms(transform, this._initialTransform);
  }
  /**
   * Applies a `transform` to the preview, taking into account any existing transforms on it.
   * @param x New transform value along the X axis.
   * @param y New transform value along the Y axis.
   */


  _applyPreviewTransform(x, y) {
    var _a; // Only apply the initial transform if the preview is a clone of the original element, otherwise
    // it could be completely different and the transform might not make sense anymore.


    const initialTransform = ((_a = this._previewTemplate) === null || _a === void 0 ? void 0 : _a.template) ? undefined : this._initialTransform;
    const transform = getTransform(x, y);
    this._preview.style.transform = combineTransforms(transform, initialTransform);
  }
  /**
   * Gets the distance that the user has dragged during the current drag sequence.
   * @param currentPosition Current position of the user's pointer.
   */


  _getDragDistance(currentPosition) {
    const pickupPosition = this._pickupPositionOnPage;

    if (pickupPosition) {
      return {
        x: currentPosition.x - pickupPosition.x,
        y: currentPosition.y - pickupPosition.y
      };
    }

    return {
      x: 0,
      y: 0
    };
  }
  /** Cleans up any cached element dimensions that we don't need after dragging has stopped. */


  _cleanupCachedDimensions() {
    this._boundaryRect = this._previewRect = undefined;

    this._parentPositions.clear();
  }
  /**
   * Checks whether the element is still inside its boundary after the viewport has been resized.
   * If not, the position is adjusted so that the element fits again.
   */


  _containInsideBoundaryOnResize() {
    let {
      x,
      y
    } = this._passiveTransform;

    if (x === 0 && y === 0 || this.isDragging() || !this._boundaryElement) {
      return;
    }

    const boundaryRect = this._boundaryElement.getBoundingClientRect();

    const elementRect = this._rootElement.getBoundingClientRect(); // It's possible that the element got hidden away after dragging (e.g. by switching to a
    // different tab). Don't do anything in this case so we don't clear the user's position.


    if (boundaryRect.width === 0 && boundaryRect.height === 0 || elementRect.width === 0 && elementRect.height === 0) {
      return;
    }

    const leftOverflow = boundaryRect.left - elementRect.left;
    const rightOverflow = elementRect.right - boundaryRect.right;
    const topOverflow = boundaryRect.top - elementRect.top;
    const bottomOverflow = elementRect.bottom - boundaryRect.bottom; // If the element has become wider than the boundary, we can't
    // do much to make it fit so we just anchor it to the left.

    if (boundaryRect.width > elementRect.width) {
      if (leftOverflow > 0) {
        x += leftOverflow;
      }

      if (rightOverflow > 0) {
        x -= rightOverflow;
      }
    } else {
      x = 0;
    } // If the element has become taller than the boundary, we can't
    // do much to make it fit so we just anchor it to the top.


    if (boundaryRect.height > elementRect.height) {
      if (topOverflow > 0) {
        y += topOverflow;
      }

      if (bottomOverflow > 0) {
        y -= bottomOverflow;
      }
    } else {
      y = 0;
    }

    if (x !== this._passiveTransform.x || y !== this._passiveTransform.y) {
      this.setFreeDragPosition({
        y,
        x
      });
    }
  }
  /** Gets the drag start delay, based on the event type. */


  _getDragStartDelay(event) {
    const value = this.dragStartDelay;

    if (typeof value === 'number') {
      return value;
    } else if (isTouchEvent(event)) {
      return value.touch;
    }

    return value ? value.mouse : 0;
  }
  /** Updates the internal state of the draggable element when scrolling has occurred. */


  _updateOnScroll(event) {
    const scrollDifference = this._parentPositions.handleScroll(event);

    if (scrollDifference) {
      const target = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getEventTarget)(event); // ClientRect dimensions are based on the scroll position of the page and its parent
      // node so we have to update the cached boundary ClientRect if the user has scrolled.


      if (this._boundaryRect && target !== this._boundaryElement && target.contains(this._boundaryElement)) {
        adjustClientRect(this._boundaryRect, scrollDifference.top, scrollDifference.left);
      }

      this._pickupPositionOnPage.x += scrollDifference.left;
      this._pickupPositionOnPage.y += scrollDifference.top; // If we're in free drag mode, we have to update the active transform, because
      // it isn't relative to the viewport like the preview inside a drop list.

      if (!this._dropContainer) {
        this._activeTransform.x -= scrollDifference.left;
        this._activeTransform.y -= scrollDifference.top;

        this._applyRootElementTransform(this._activeTransform.x, this._activeTransform.y);
      }
    }
  }
  /** Gets the scroll position of the viewport. */


  _getViewportScrollPosition() {
    var _a;

    return ((_a = this._parentPositions.positions.get(this._document)) === null || _a === void 0 ? void 0 : _a.scrollPosition) || this._parentPositions.getViewportScrollPosition();
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */


  _getShadowRoot() {
    if (this._cachedShadowRoot === undefined) {
      this._cachedShadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)(this._rootElement);
    }

    return this._cachedShadowRoot;
  }
  /** Gets the element into which the drag preview should be inserted. */


  _getPreviewInsertionPoint(initialParent, shadowRoot) {
    const previewContainer = this._previewContainer || 'global';

    if (previewContainer === 'parent') {
      return initialParent;
    }

    if (previewContainer === 'global') {
      const documentRef = this._document; // We can't use the body if the user is in fullscreen mode,
      // because the preview will render under the fullscreen element.
      // TODO(crisbeto): dedupe this with the `FullscreenOverlayContainer` eventually.

      return shadowRoot || documentRef.fullscreenElement || documentRef.webkitFullscreenElement || documentRef.mozFullScreenElement || documentRef.msFullscreenElement || documentRef.body;
    }

    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(previewContainer);
  }
  /** Lazily resolves and returns the dimensions of the preview. */


  _getPreviewRect() {
    // Cache the preview element rect if we haven't cached it already or if
    // we cached it too early before the element dimensions were computed.
    if (!this._previewRect || !this._previewRect.width && !this._previewRect.height) {
      this._previewRect = (this._preview || this._rootElement).getBoundingClientRect();
    }

    return this._previewRect;
  }
  /** Gets a handle that is the target of an event. */


  _getTargetHandle(event) {
    return this._handles.find(handle => {
      return event.target && (event.target === handle || handle.contains(event.target));
    });
  }

}
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param x Desired position of the element along the X axis.
 * @param y Desired position of the element along the Y axis.
 */


function getTransform(x, y) {
  // Round the transforms since some browsers will
  // blur the elements for sub-pixel transforms.
  return `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`;
}
/** Clamps a value between a minimum and a maximum. */


function clamp$1(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/** Determines whether an event is a touch event. */


function isTouchEvent(event) {
  // This function is called for every pixel that the user has dragged so we need it to be
  // as fast as possible. Since we only bind mouse events and touch events, we can assume
  // that if the event's name starts with `t`, it's a touch event.
  return event.type[0] === 't';
}
/**
 * Gets the root HTML element of an embedded view.
 * If the root is not an HTML element it gets wrapped in one.
 */


function getRootNode(viewRef, _document) {
  const rootNodes = viewRef.rootNodes;

  if (rootNodes.length === 1 && rootNodes[0].nodeType === _document.ELEMENT_NODE) {
    return rootNodes[0];
  }

  const wrapper = _document.createElement('div');

  rootNodes.forEach(node => wrapper.appendChild(node));
  return wrapper;
}
/**
 * Matches the target element's size to the source's size.
 * @param target Element that needs to be resized.
 * @param sourceRect Dimensions of the source element.
 */


function matchElementSize(target, sourceRect) {
  target.style.width = `${sourceRect.width}px`;
  target.style.height = `${sourceRect.height}px`;
  target.style.transform = getTransform(sourceRect.left, sourceRect.top);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Moves an item one index in an array to another.
 * @param array Array in which to move the item.
 * @param fromIndex Starting index of the item.
 * @param toIndex Index to which the item should be moved.
 */


function moveItemInArray(array, fromIndex, toIndex) {
  const from = clamp(fromIndex, array.length - 1);
  const to = clamp(toIndex, array.length - 1);

  if (from === to) {
    return;
  }

  const target = array[from];
  const delta = to < from ? -1 : 1;

  for (let i = from; i !== to; i += delta) {
    array[i] = array[i + delta];
  }

  array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @param currentArray Array from which to transfer the item.
 * @param targetArray Array into which to put the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 */


function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const from = clamp(currentIndex, currentArray.length - 1);
  const to = clamp(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
  }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @param currentArray Array from which to copy the item.
 * @param targetArray Array into which is copy the item.
 * @param currentIndex Index of the item in its current array.
 * @param targetIndex Index at which to insert the item.
 *
 */


function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
  const to = clamp(targetIndex, targetArray.length);

  if (currentArray.length) {
    targetArray.splice(to, 0, currentArray[currentIndex]);
  }
}
/** Clamps a number between zero and a maximum. */


function clamp(value, max) {
  return Math.max(0, Math.min(max, value));
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 */


const DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Proximity, as a ratio to width/height at which to start auto-scrolling the drop list or the
 * viewport. The value comes from trying it out manually until it feels right.
 */

const SCROLL_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 */

class DropListRef {
  constructor(element, _dragDropRegistry, _document, _ngZone, _viewportRuler) {
    this._dragDropRegistry = _dragDropRegistry;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    /** Whether starting a dragging sequence from this container is disabled. */

    this.disabled = false;
    /** Whether sorting items within the list is disabled. */

    this.sortingDisabled = false;
    /**
     * Whether auto-scrolling the view when the user
     * moves their pointer close to the edges is disabled.
     */

    this.autoScrollDisabled = false;
    /** Number of pixels to scroll for each frame when auto-scrolling an element. */

    this.autoScrollStep = 2;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */


    this.sortPredicate = () => true;
    /** Emits right before dragging has started. */


    this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user drops an item inside the container. */

    this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Whether an item in the list is being dragged. */

    this._isDragging = false;
    /** Cache of the dimensions of all the items inside the container. */

    this._itemPositions = [];
    /**
     * Keeps track of the item that was last swapped with the dragged item, as well as what direction
     * the pointer was moving in when the swap occured and whether the user's pointer continued to
     * overlap with the swapped item after the swapping occurred.
     */

    this._previousSwap = {
      drag: null,
      delta: 0,
      overlaps: false
    };
    /** Draggable items in the container. */

    this._draggables = [];
    /** Drop lists that are connected to the current one. */

    this._siblings = [];
    /** Direction in which the list is oriented. */

    this._orientation = 'vertical';
    /** Connected siblings that currently have a dragged item. */

    this._activeSiblings = new Set();
    /** Layout direction of the drop list. */

    this._direction = 'ltr';
    /** Subscription to the window being scrolled. */

    this._viewportScrollSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription.EMPTY;
    /** Vertical direction in which the list is currently scrolling. */

    this._verticalScrollDirection = 0
    /* NONE */
    ;
    /** Horizontal direction in which the list is currently scrolling. */

    this._horizontalScrollDirection = 0
    /* NONE */
    ;
    /** Used to signal to the current auto-scroll sequence when to stop. */

    this._stopScrollTimers = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Shadow root of the current element. Necessary for `elementFromPoint` to resolve correctly. */

    this._cachedShadowRoot = null;
    /** Starts the interval that'll auto-scroll the element. */

    this._startScrollInterval = () => {
      this._stopScrolling();

      (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.interval)(0, rxjs__WEBPACK_IMPORTED_MODULE_6__.animationFrameScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._stopScrollTimers)).subscribe(() => {
        const node = this._scrollNode;
        const scrollStep = this.autoScrollStep;

        if (this._verticalScrollDirection === 1
        /* UP */
        ) {
          node.scrollBy(0, -scrollStep);
        } else if (this._verticalScrollDirection === 2
        /* DOWN */
        ) {
          node.scrollBy(0, scrollStep);
        }

        if (this._horizontalScrollDirection === 1
        /* LEFT */
        ) {
          node.scrollBy(-scrollStep, 0);
        } else if (this._horizontalScrollDirection === 2
        /* RIGHT */
        ) {
          node.scrollBy(scrollStep, 0);
        }
      });
    };

    this.element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(element);
    this._document = _document;
    this.withScrollableParents([this.element]);

    _dragDropRegistry.registerDropContainer(this);

    this._parentPositions = new ParentPositionTracker(_document);
  }
  /** Removes the drop list functionality from the DOM element. */


  dispose() {
    this._stopScrolling();

    this._stopScrollTimers.complete();

    this._viewportScrollSubscription.unsubscribe();

    this.beforeStarted.complete();
    this.entered.complete();
    this.exited.complete();
    this.dropped.complete();
    this.sorted.complete();

    this._activeSiblings.clear();

    this._scrollNode = null;

    this._parentPositions.clear();

    this._dragDropRegistry.removeDropContainer(this);
  }
  /** Whether an item from this list is currently being dragged. */


  isDragging() {
    return this._isDragging;
  }
  /** Starts dragging an item. */


  start() {
    this._draggingStarted();

    this._notifyReceivingSiblings();
  }
  /**
   * Emits an event to indicate that the user moved an item into the container.
   * @param item Item that was moved into the container.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param index Index at which the item entered. If omitted, the container will try to figure it
   *   out automatically.
   */


  enter(item, pointerX, pointerY, index) {
    this._draggingStarted(); // If sorting is disabled, we want the item to return to its starting
    // position if the user is returning it to its initial container.


    let newIndex;

    if (index == null) {
      newIndex = this.sortingDisabled ? this._draggables.indexOf(item) : -1;

      if (newIndex === -1) {
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
      }
    } else {
      newIndex = index;
    }

    const activeDraggables = this._activeDraggables;
    const currentIndex = activeDraggables.indexOf(item);
    const placeholder = item.getPlaceholderElement();
    let newPositionReference = activeDraggables[newIndex]; // If the item at the new position is the same as the item that is being dragged,
    // it means that we're trying to restore the item to its initial position. In this
    // case we should use the next item from the list as the reference.

    if (newPositionReference === item) {
      newPositionReference = activeDraggables[newIndex + 1];
    } // If we didn't find a new position reference, it means that either the item didn't start off
    // in this container, or that the item requested to be inserted at the end of the list.


    if (!newPositionReference && (newIndex == null || newIndex === -1 || newIndex < activeDraggables.length - 1) && this._shouldEnterAsFirstChild(pointerX, pointerY)) {
      newPositionReference = activeDraggables[0];
    } // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
    // into another container and back again), we have to ensure that it isn't duplicated.


    if (currentIndex > -1) {
      activeDraggables.splice(currentIndex, 1);
    } // Don't use items that are being dragged as a reference, because
    // their element has been moved down to the bottom of the body.


    if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
      const element = newPositionReference.getRootElement();
      element.parentElement.insertBefore(placeholder, element);
      activeDraggables.splice(newIndex, 0, item);
    } else {
      (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).appendChild(placeholder);
      activeDraggables.push(item);
    } // The transform needs to be cleared so it doesn't throw off the measurements.


    placeholder.style.transform = ''; // Note that the positions were already cached when we called `start` above,
    // but we need to refresh them since the amount of items has changed and also parent rects.

    this._cacheItemPositions();

    this._cacheParentPositions(); // Notify siblings at the end so that the item has been inserted into the `activeDraggables`.


    this._notifyReceivingSiblings();

    this.entered.next({
      item,
      container: this,
      currentIndex: this.getItemIndex(item)
    });
  }
  /**
   * Removes an item from the container after it was dragged into another container by the user.
   * @param item Item that was dragged out.
   */


  exit(item) {
    this._reset();

    this.exited.next({
      item,
      container: this
    });
  }
  /**
   * Drops an item into this container.
   * @param item Item being dropped into the container.
   * @param currentIndex Index at which the item should be inserted.
   * @param previousIndex Index of the item when dragging started.
   * @param previousContainer Container from which the item got dragged in.
   * @param isPointerOverContainer Whether the user's pointer was over the
   *    container when the item was dropped.
   * @param distance Distance the user has dragged since the start of the dragging sequence.
   */


  drop(item, currentIndex, previousIndex, previousContainer, isPointerOverContainer, distance, dropPoint) {
    this._reset();

    this.dropped.next({
      item,
      currentIndex,
      previousIndex,
      container: this,
      previousContainer,
      isPointerOverContainer,
      distance,
      dropPoint
    });
  }
  /**
   * Sets the draggable items that are a part of this list.
   * @param items Items that are a part of this list.
   */


  withItems(items) {
    const previousItems = this._draggables;
    this._draggables = items;
    items.forEach(item => item._withDropContainer(this));

    if (this.isDragging()) {
      const draggedItems = previousItems.filter(item => item.isDragging()); // If all of the items being dragged were removed
      // from the list, abort the current drag sequence.

      if (draggedItems.every(item => items.indexOf(item) === -1)) {
        this._reset();
      } else {
        this._cacheItems();
      }
    }

    return this;
  }
  /** Sets the layout direction of the drop list. */


  withDirection(direction) {
    this._direction = direction;
    return this;
  }
  /**
   * Sets the containers that are connected to this one. When two or more containers are
   * connected, the user will be allowed to transfer items between them.
   * @param connectedTo Other containers that the current containers should be connected to.
   */


  connectedTo(connectedTo) {
    this._siblings = connectedTo.slice();
    return this;
  }
  /**
   * Sets the orientation of the container.
   * @param orientation New orientation for the container.
   */


  withOrientation(orientation) {
    this._orientation = orientation;
    return this;
  }
  /**
   * Sets which parent elements are can be scrolled while the user is dragging.
   * @param elements Elements that can be scrolled.
   */


  withScrollableParents(elements) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element); // We always allow the current element to be scrollable
    // so we need to ensure that it's in the array.

    this._scrollableElements = elements.indexOf(element) === -1 ? [element, ...elements] : elements.slice();
    return this;
  }
  /** Gets the scrollable parents that are registered with this drop container. */


  getScrollableParents() {
    return this._scrollableElements;
  }
  /**
   * Figures out the index of an item in the container.
   * @param item Item whose index should be determined.
   */


  getItemIndex(item) {
    if (!this._isDragging) {
      return this._draggables.indexOf(item);
    } // Items are sorted always by top/left in the cache, however they flow differently in RTL.
    // The rest of the logic still stands no matter what orientation we're in, however
    // we need to invert the array when determining the index.


    const items = this._orientation === 'horizontal' && this._direction === 'rtl' ? this._itemPositions.slice().reverse() : this._itemPositions;
    return items.findIndex(currentItem => currentItem.drag === item);
  }
  /**
   * Whether the list is able to receive the item that
   * is currently being dragged inside a connected drop list.
   */


  isReceiving() {
    return this._activeSiblings.size > 0;
  }
  /**
   * Sorts an item inside the container based on its position.
   * @param item Item to be sorted.
   * @param pointerX Position of the item along the X axis.
   * @param pointerY Position of the item along the Y axis.
   * @param pointerDelta Direction in which the pointer is moving along each axis.
   */


  _sortItem(item, pointerX, pointerY, pointerDelta) {
    // Don't sort the item if sorting is disabled or it's out of range.
    if (this.sortingDisabled || !this._clientRect || !isPointerNearClientRect(this._clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
      return;
    }

    const siblings = this._itemPositions;

    const newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);

    if (newIndex === -1 && siblings.length > 0) {
      return;
    }

    const isHorizontal = this._orientation === 'horizontal';
    const currentIndex = siblings.findIndex(currentItem => currentItem.drag === item);
    const siblingAtNewPosition = siblings[newIndex];
    const currentPosition = siblings[currentIndex].clientRect;
    const newPosition = siblingAtNewPosition.clientRect;
    const delta = currentIndex > newIndex ? 1 : -1; // How many pixels the item's placeholder should be offset.

    const itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta); // How many pixels all the other items should be offset.


    const siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta); // Save the previous order of the items before moving the item to its new index.
    // We use this to check whether an item has been moved as a result of the sorting.


    const oldOrder = siblings.slice(); // Shuffle the array in place.

    moveItemInArray(siblings, currentIndex, newIndex);
    this.sorted.next({
      previousIndex: currentIndex,
      currentIndex: newIndex,
      container: this,
      item
    });
    siblings.forEach((sibling, index) => {
      // Don't do anything if the position hasn't changed.
      if (oldOrder[index] === sibling) {
        return;
      }

      const isDraggedItem = sibling.drag === item;
      const offset = isDraggedItem ? itemOffset : siblingOffset;
      const elementToOffset = isDraggedItem ? item.getPlaceholderElement() : sibling.drag.getRootElement(); // Update the offset to reflect the new position.

      sibling.offset += offset; // Since we're moving the items with a `transform`, we need to adjust their cached
      // client rects to reflect their new position, as well as swap their positions in the cache.
      // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
      // elements may be mid-animation which will give us a wrong result.

      if (isHorizontal) {
        // Round the transforms since some browsers will
        // blur the elements, for sub-pixel transforms.
        elementToOffset.style.transform = combineTransforms(`translate3d(${Math.round(sibling.offset)}px, 0, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, 0, offset);
      } else {
        elementToOffset.style.transform = combineTransforms(`translate3d(0, ${Math.round(sibling.offset)}px, 0)`, sibling.initialTransform);
        adjustClientRect(sibling.clientRect, offset, 0);
      }
    }); // Note that it's important that we do this after the client rects have been adjusted.

    this._previousSwap.overlaps = isInsideClientRect(newPosition, pointerX, pointerY);
    this._previousSwap.drag = siblingAtNewPosition.drag;
    this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
  }
  /**
   * Checks whether the user's pointer is close to the edges of either the
   * viewport or the drop list and starts the auto-scroll sequence.
   * @param pointerX User's pointer position along the x axis.
   * @param pointerY User's pointer position along the y axis.
   */


  _startScrollingIfNecessary(pointerX, pointerY) {
    if (this.autoScrollDisabled) {
      return;
    }

    let scrollNode;
    let verticalScrollDirection = 0
    /* NONE */
    ;
    let horizontalScrollDirection = 0
    /* NONE */
    ; // Check whether we should start scrolling any of the parent containers.

    this._parentPositions.positions.forEach((position, element) => {
      // We have special handling for the `document` below. Also this would be
      // nicer with a  for...of loop, but it requires changing a compiler flag.
      if (element === this._document || !position.clientRect || scrollNode) {
        return;
      }

      if (isPointerNearClientRect(position.clientRect, DROP_PROXIMITY_THRESHOLD, pointerX, pointerY)) {
        [verticalScrollDirection, horizontalScrollDirection] = getElementScrollDirections(element, position.clientRect, pointerX, pointerY);

        if (verticalScrollDirection || horizontalScrollDirection) {
          scrollNode = element;
        }
      }
    }); // Otherwise check if we can start scrolling the viewport.


    if (!verticalScrollDirection && !horizontalScrollDirection) {
      const {
        width,
        height
      } = this._viewportRuler.getViewportSize();

      const clientRect = {
        width,
        height,
        top: 0,
        right: width,
        bottom: height,
        left: 0
      };
      verticalScrollDirection = getVerticalScrollDirection(clientRect, pointerY);
      horizontalScrollDirection = getHorizontalScrollDirection(clientRect, pointerX);
      scrollNode = window;
    }

    if (scrollNode && (verticalScrollDirection !== this._verticalScrollDirection || horizontalScrollDirection !== this._horizontalScrollDirection || scrollNode !== this._scrollNode)) {
      this._verticalScrollDirection = verticalScrollDirection;
      this._horizontalScrollDirection = horizontalScrollDirection;
      this._scrollNode = scrollNode;

      if ((verticalScrollDirection || horizontalScrollDirection) && scrollNode) {
        this._ngZone.runOutsideAngular(this._startScrollInterval);
      } else {
        this._stopScrolling();
      }
    }
  }
  /** Stops any currently-running auto-scroll sequences. */


  _stopScrolling() {
    this._stopScrollTimers.next();
  }
  /** Starts the dragging sequence within the list. */


  _draggingStarted() {
    const styles = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).style;
    this.beforeStarted.next();
    this._isDragging = true; // We need to disable scroll snapping while the user is dragging, because it breaks automatic
    // scrolling. The browser seems to round the value based on the snapping points which means
    // that we can't increment/decrement the scroll position.

    this._initialScrollSnap = styles.msScrollSnapType || styles.scrollSnapType || '';
    styles.scrollSnapType = styles.msScrollSnapType = 'none';

    this._cacheItems();

    this._viewportScrollSubscription.unsubscribe();

    this._listenToScrollEvents();
  }
  /** Caches the positions of the configured scrollable parents. */


  _cacheParentPositions() {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element);

    this._parentPositions.cache(this._scrollableElements); // The list element is always in the `scrollableElements`
    // so we can take advantage of the cached `ClientRect`.


    this._clientRect = this._parentPositions.positions.get(element).clientRect;
  }
  /** Refreshes the position cache of the items and sibling containers. */


  _cacheItemPositions() {
    const isHorizontal = this._orientation === 'horizontal';
    this._itemPositions = this._activeDraggables.map(drag => {
      const elementToMeasure = drag.getVisibleElement();
      return {
        drag,
        offset: 0,
        initialTransform: elementToMeasure.style.transform || '',
        clientRect: getMutableClientRect(elementToMeasure)
      };
    }).sort((a, b) => {
      return isHorizontal ? a.clientRect.left - b.clientRect.left : a.clientRect.top - b.clientRect.top;
    });
  }
  /** Resets the container to its initial state. */


  _reset() {
    this._isDragging = false;
    const styles = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element).style;
    styles.scrollSnapType = styles.msScrollSnapType = this._initialScrollSnap; // TODO(crisbeto): may have to wait for the animations to finish.

    this._activeDraggables.forEach(item => {
      var _a;

      const rootElement = item.getRootElement();

      if (rootElement) {
        const initialTransform = (_a = this._itemPositions.find(current => current.drag === item)) === null || _a === void 0 ? void 0 : _a.initialTransform;
        rootElement.style.transform = initialTransform || '';
      }
    });

    this._siblings.forEach(sibling => sibling._stopReceiving(this));

    this._activeDraggables = [];
    this._itemPositions = [];
    this._previousSwap.drag = null;
    this._previousSwap.delta = 0;
    this._previousSwap.overlaps = false;

    this._stopScrolling();

    this._viewportScrollSubscription.unsubscribe();

    this._parentPositions.clear();
  }
  /**
   * Gets the offset in pixels by which the items that aren't being dragged should be moved.
   * @param currentIndex Index of the item currently being dragged.
   * @param siblings All of the items in the list.
   * @param delta Direction in which the user is moving.
   */


  _getSiblingOffsetPx(currentIndex, siblings, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    const currentPosition = siblings[currentIndex].clientRect;
    const immediateSibling = siblings[currentIndex + delta * -1];
    let siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;

    if (immediateSibling) {
      const start = isHorizontal ? 'left' : 'top';
      const end = isHorizontal ? 'right' : 'bottom'; // Get the spacing between the start of the current item and the end of the one immediately
      // after it in the direction in which the user is dragging, or vice versa. We add it to the
      // offset in order to push the element to where it will be when it's inline and is influenced
      // by the `margin` of its siblings.

      if (delta === -1) {
        siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
      } else {
        siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
      }
    }

    return siblingOffset;
  }
  /**
   * Gets the offset in pixels by which the item that is being dragged should be moved.
   * @param currentPosition Current position of the item.
   * @param newPosition Position of the item where the current item should be moved.
   * @param delta Direction in which the user is moving.
   */


  _getItemOffsetPx(currentPosition, newPosition, delta) {
    const isHorizontal = this._orientation === 'horizontal';
    let itemOffset = isHorizontal ? newPosition.left - currentPosition.left : newPosition.top - currentPosition.top; // Account for differences in the item width/height.

    if (delta === -1) {
      itemOffset += isHorizontal ? newPosition.width - currentPosition.width : newPosition.height - currentPosition.height;
    }

    return itemOffset;
  }
  /**
   * Checks if pointer is entering in the first position
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   */


  _shouldEnterAsFirstChild(pointerX, pointerY) {
    if (!this._activeDraggables.length) {
      return false;
    }

    const itemPositions = this._itemPositions;
    const isHorizontal = this._orientation === 'horizontal'; // `itemPositions` are sorted by position while `activeDraggables` are sorted by child index
    // check if container is using some sort of "reverse" ordering (eg: flex-direction: row-reverse)

    const reversed = itemPositions[0].drag !== this._activeDraggables[0];

    if (reversed) {
      const lastItemRect = itemPositions[itemPositions.length - 1].clientRect;
      return isHorizontal ? pointerX >= lastItemRect.right : pointerY >= lastItemRect.bottom;
    } else {
      const firstItemRect = itemPositions[0].clientRect;
      return isHorizontal ? pointerX <= firstItemRect.left : pointerY <= firstItemRect.top;
    }
  }
  /**
   * Gets the index of an item in the drop container, based on the position of the user's pointer.
   * @param item Item that is being sorted.
   * @param pointerX Position of the user's pointer along the X axis.
   * @param pointerY Position of the user's pointer along the Y axis.
   * @param delta Direction in which the user is moving their pointer.
   */


  _getItemIndexFromPointerPosition(item, pointerX, pointerY, delta) {
    const isHorizontal = this._orientation === 'horizontal';

    const index = this._itemPositions.findIndex(({
      drag,
      clientRect
    }) => {
      // Skip the item itself.
      if (drag === item) {
        return false;
      }

      if (delta) {
        const direction = isHorizontal ? delta.x : delta.y; // If the user is still hovering over the same item as last time, their cursor hasn't left
        // the item after we made the swap, and they didn't change the direction in which they're
        // dragging, we don't consider it a direction swap.

        if (drag === this._previousSwap.drag && this._previousSwap.overlaps && direction === this._previousSwap.delta) {
          return false;
        }
      }

      return isHorizontal ? // Round these down since most browsers report client rects with
      // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
      pointerX >= Math.floor(clientRect.left) && pointerX < Math.floor(clientRect.right) : pointerY >= Math.floor(clientRect.top) && pointerY < Math.floor(clientRect.bottom);
    });

    return index === -1 || !this.sortPredicate(index, item, this) ? -1 : index;
  }
  /** Caches the current items in the list and their positions. */


  _cacheItems() {
    this._activeDraggables = this._draggables.slice();

    this._cacheItemPositions();

    this._cacheParentPositions();
  }
  /**
   * Checks whether the user's pointer is positioned over the container.
   * @param x Pointer position along the X axis.
   * @param y Pointer position along the Y axis.
   */


  _isOverContainer(x, y) {
    return this._clientRect != null && isInsideClientRect(this._clientRect, x, y);
  }
  /**
   * Figures out whether an item should be moved into a sibling
   * drop container, based on its current position.
   * @param item Drag item that is being moved.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */


  _getSiblingContainerFromPosition(item, x, y) {
    return this._siblings.find(sibling => sibling._canReceive(item, x, y));
  }
  /**
   * Checks whether the drop list can receive the passed-in item.
   * @param item Item that is being dragged into the list.
   * @param x Position of the item along the X axis.
   * @param y Position of the item along the Y axis.
   */


  _canReceive(item, x, y) {
    if (!this._clientRect || !isInsideClientRect(this._clientRect, x, y) || !this.enterPredicate(item, this)) {
      return false;
    }

    const elementFromPoint = this._getShadowRoot().elementFromPoint(x, y); // If there's no element at the pointer position, then
    // the client rect is probably scrolled out of the view.


    if (!elementFromPoint) {
      return false;
    }

    const nativeElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element); // The `ClientRect`, that we're using to find the container over which the user is
    // hovering, doesn't give us any information on whether the element has been scrolled
    // out of the view or whether it's overlapping with other containers. This means that
    // we could end up transferring the item into a container that's invisible or is positioned
    // below another one. We use the result from `elementFromPoint` to get the top-most element
    // at the pointer position and to find whether it's one of the intersecting drop containers.

    return elementFromPoint === nativeElement || nativeElement.contains(elementFromPoint);
  }
  /**
   * Called by one of the connected drop lists when a dragging sequence has started.
   * @param sibling Sibling in which dragging has started.
   */


  _startReceiving(sibling, items) {
    const activeSiblings = this._activeSiblings;

    if (!activeSiblings.has(sibling) && items.every(item => {
      // Note that we have to add an exception to the `enterPredicate` for items that started off
      // in this drop list. The drag ref has logic that allows an item to return to its initial
      // container, if it has left the initial container and none of the connected containers
      // allow it to enter. See `DragRef._updateActiveDropContainer` for more context.
      return this.enterPredicate(item, this) || this._draggables.indexOf(item) > -1;
    })) {
      activeSiblings.add(sibling);

      this._cacheParentPositions();

      this._listenToScrollEvents();
    }
  }
  /**
   * Called by a connected drop list when dragging has stopped.
   * @param sibling Sibling whose dragging has stopped.
   */


  _stopReceiving(sibling) {
    this._activeSiblings.delete(sibling);

    this._viewportScrollSubscription.unsubscribe();
  }
  /**
   * Starts listening to scroll events on the viewport.
   * Used for updating the internal state of the list.
   */


  _listenToScrollEvents() {
    this._viewportScrollSubscription = this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(event => {
      if (this.isDragging()) {
        const scrollDifference = this._parentPositions.handleScroll(event);

        if (scrollDifference) {
          // Since we know the amount that the user has scrolled we can shift all of the
          // client rectangles ourselves. This is cheaper than re-measuring everything and
          // we can avoid inconsistent behavior where we might be measuring the element before
          // its position has changed.
          this._itemPositions.forEach(({
            clientRect
          }) => {
            adjustClientRect(clientRect, scrollDifference.top, scrollDifference.left);
          }); // We need two loops for this, because we want all of the cached
          // positions to be up-to-date before we re-sort the item.


          this._itemPositions.forEach(({
            drag
          }) => {
            if (this._dragDropRegistry.isDragging(drag)) {
              // We need to re-sort the item manually, because the pointer move
              // events won't be dispatched while the user is scrolling.
              drag._sortFromLastPointerPosition();
            }
          });
        }
      } else if (this.isReceiving()) {
        this._cacheParentPositions();
      }
    });
  }
  /**
   * Lazily resolves and returns the shadow root of the element. We do this in a function, rather
   * than saving it in property directly on init, because we want to resolve it as late as possible
   * in order to ensure that the element has been moved into the shadow DOM. Doing it inside the
   * constructor might be too early if the element is inside of something like `ngFor` or `ngIf`.
   */


  _getShadowRoot() {
    if (!this._cachedShadowRoot) {
      const shadowRoot = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__._getShadowRoot)((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(this.element));

      this._cachedShadowRoot = shadowRoot || this._document;
    }

    return this._cachedShadowRoot;
  }
  /** Notifies any siblings that may potentially receive the item. */


  _notifyReceivingSiblings() {
    const draggedItems = this._activeDraggables.filter(item => item.isDragging());

    this._siblings.forEach(sibling => sibling._startReceiving(this, draggedItems));
  }

}
/**
 * Gets whether the vertical auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getVerticalScrollDirection(clientRect, pointerY) {
  const {
    top,
    bottom,
    height
  } = clientRect;
  const yThreshold = height * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerY >= top - yThreshold && pointerY <= top + yThreshold) {
    return 1
    /* UP */
    ;
  } else if (pointerY >= bottom - yThreshold && pointerY <= bottom + yThreshold) {
    return 2
    /* DOWN */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets whether the horizontal auto-scroll direction of a node.
 * @param clientRect Dimensions of the node.
 * @param pointerX Position of the user's pointer along the x axis.
 */


function getHorizontalScrollDirection(clientRect, pointerX) {
  const {
    left,
    right,
    width
  } = clientRect;
  const xThreshold = width * SCROLL_PROXIMITY_THRESHOLD;

  if (pointerX >= left - xThreshold && pointerX <= left + xThreshold) {
    return 1
    /* LEFT */
    ;
  } else if (pointerX >= right - xThreshold && pointerX <= right + xThreshold) {
    return 2
    /* RIGHT */
    ;
  }

  return 0
  /* NONE */
  ;
}
/**
 * Gets the directions in which an element node should be scrolled,
 * assuming that the user's pointer is already within it scrollable region.
 * @param element Element for which we should calculate the scroll direction.
 * @param clientRect Bounding client rectangle of the element.
 * @param pointerX Position of the user's pointer along the x axis.
 * @param pointerY Position of the user's pointer along the y axis.
 */


function getElementScrollDirections(element, clientRect, pointerX, pointerY) {
  const computedVertical = getVerticalScrollDirection(clientRect, pointerY);
  const computedHorizontal = getHorizontalScrollDirection(clientRect, pointerX);
  let verticalScrollDirection = 0
  /* NONE */
  ;
  let horizontalScrollDirection = 0
  /* NONE */
  ; // Note that we here we do some extra checks for whether the element is actually scrollable in
  // a certain direction and we only assign the scroll direction if it is. We do this so that we
  // can allow other elements to be scrolled, if the current element can't be scrolled anymore.
  // This allows us to handle cases where the scroll regions of two scrollable elements overlap.

  if (computedVertical) {
    const scrollTop = element.scrollTop;

    if (computedVertical === 1
    /* UP */
    ) {
      if (scrollTop > 0) {
        verticalScrollDirection = 1
        /* UP */
        ;
      }
    } else if (element.scrollHeight - scrollTop > element.clientHeight) {
      verticalScrollDirection = 2
      /* DOWN */
      ;
    }
  }

  if (computedHorizontal) {
    const scrollLeft = element.scrollLeft;

    if (computedHorizontal === 1
    /* LEFT */
    ) {
      if (scrollLeft > 0) {
        horizontalScrollDirection = 1
        /* LEFT */
        ;
      }
    } else if (element.scrollWidth - scrollLeft > element.clientWidth) {
      horizontalScrollDirection = 2
      /* RIGHT */
      ;
    }
  }

  return [verticalScrollDirection, horizontalScrollDirection];
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Event options that can be used to bind an active, capturing event. */


const activeCapturingEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * @docs-private
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.

class DragDropRegistry {
  constructor(_ngZone, _document) {
    this._ngZone = _ngZone;
    /** Registered drop container instances. */

    this._dropInstances = new Set();
    /** Registered drag item instances. */

    this._dragInstances = new Set();
    /** Drag item instances that are currently being dragged. */

    this._activeDragInstances = [];
    /** Keeps track of the event listeners that we've bound to the `document`. */

    this._globalListeners = new Map();
    /**
     * Predicate function to check if an item is being dragged.  Moved out into a property,
     * because it'll be called a lot and we don't want to create a new function every time.
     */

    this._draggingPredicate = item => item.isDragging();
    /**
     * Emits the `touchmove` or `mousemove` events that are dispatched
     * while the user is dragging a drag item instance.
     */


    this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits the `touchend` or `mouseup` events that are dispatched
     * while the user is dragging a drag item instance.
     */

    this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Emits when the viewport has been scrolled while the user is dragging an item.
     * @deprecated To be turned into a private member. Use the `scrolled` method instead.
     * @breaking-change 13.0.0
     */

    this.scroll = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Event listener that will prevent the default browser action while the user is dragging.
     * @param event Event whose default action should be prevented.
     */

    this._preventDefaultWhileDragging = event => {
      if (this._activeDragInstances.length > 0) {
        event.preventDefault();
      }
    };
    /** Event listener for `touchmove` that is bound even if no dragging is happening. */


    this._persistentTouchmoveListener = event => {
      if (this._activeDragInstances.length > 0) {
        // Note that we only want to prevent the default action after dragging has actually started.
        // Usually this is the same time at which the item is added to the `_activeDragInstances`,
        // but it could be pushed back if the user has set up a drag delay or threshold.
        if (this._activeDragInstances.some(this._draggingPredicate)) {
          event.preventDefault();
        }

        this.pointerMove.next(event);
      }
    };

    this._document = _document;
  }
  /** Adds a drop container to the registry. */


  registerDropContainer(drop) {
    if (!this._dropInstances.has(drop)) {
      this._dropInstances.add(drop);
    }
  }
  /** Adds a drag item instance to the registry. */


  registerDragItem(drag) {
    this._dragInstances.add(drag); // The `touchmove` event gets bound once, ahead of time, because WebKit
    // won't preventDefault on a dynamically-added `touchmove` listener.
    // See https://bugs.webkit.org/show_bug.cgi?id=184250.


    if (this._dragInstances.size === 1) {
      this._ngZone.runOutsideAngular(() => {
        // The event handler has to be explicitly active,
        // because newer browsers make it passive by default.
        this._document.addEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
      });
    }
  }
  /** Removes a drop container from the registry. */


  removeDropContainer(drop) {
    this._dropInstances.delete(drop);
  }
  /** Removes a drag item instance from the registry. */


  removeDragItem(drag) {
    this._dragInstances.delete(drag);

    this.stopDragging(drag);

    if (this._dragInstances.size === 0) {
      this._document.removeEventListener('touchmove', this._persistentTouchmoveListener, activeCapturingEventOptions);
    }
  }
  /**
   * Starts the dragging sequence for a drag instance.
   * @param drag Drag instance which is being dragged.
   * @param event Event that initiated the dragging.
   */


  startDragging(drag, event) {
    // Do not process the same drag twice to avoid memory leaks and redundant listeners
    if (this._activeDragInstances.indexOf(drag) > -1) {
      return;
    }

    this._activeDragInstances.push(drag);

    if (this._activeDragInstances.length === 1) {
      const isTouchEvent = event.type.startsWith('touch'); // We explicitly bind __active__ listeners here, because newer browsers will default to
      // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
      // use `preventDefault` to prevent the page from scrolling while the user is dragging.

      this._globalListeners.set(isTouchEvent ? 'touchend' : 'mouseup', {
        handler: e => this.pointerUp.next(e),
        options: true
      }).set('scroll', {
        handler: e => this.scroll.next(e),
        // Use capturing so that we pick up scroll changes in any scrollable nodes that aren't
        // the document. See https://github.com/angular/components/issues/17144.
        options: true
      }) // Preventing the default action on `mousemove` isn't enough to disable text selection
      // on Safari so we need to prevent the selection event as well. Alternatively this can
      // be done by setting `user-select: none` on the `body`, however it has causes a style
      // recalculation which can be expensive on pages with a lot of elements.
      .set('selectstart', {
        handler: this._preventDefaultWhileDragging,
        options: activeCapturingEventOptions
      }); // We don't have to bind a move event for touch drag sequences, because
      // we already have a persistent global one bound from `registerDragItem`.


      if (!isTouchEvent) {
        this._globalListeners.set('mousemove', {
          handler: e => this.pointerMove.next(e),
          options: activeCapturingEventOptions
        });
      }

      this._ngZone.runOutsideAngular(() => {
        this._globalListeners.forEach((config, name) => {
          this._document.addEventListener(name, config.handler, config.options);
        });
      });
    }
  }
  /** Stops dragging a drag item instance. */


  stopDragging(drag) {
    const index = this._activeDragInstances.indexOf(drag);

    if (index > -1) {
      this._activeDragInstances.splice(index, 1);

      if (this._activeDragInstances.length === 0) {
        this._clearGlobalListeners();
      }
    }
  }
  /** Gets whether a drag item instance is currently being dragged. */


  isDragging(drag) {
    return this._activeDragInstances.indexOf(drag) > -1;
  }
  /**
   * Gets a stream that will emit when any element on the page is scrolled while an item is being
   * dragged.
   * @param shadowRoot Optional shadow root that the current dragging sequence started from.
   *   Top-level listeners won't pick up events coming from the shadow DOM so this parameter can
   *   be used to include an additional top-level listener at the shadow root level.
   */


  scrolled(shadowRoot) {
    const streams = [this.scroll];

    if (shadowRoot && shadowRoot !== this._document) {
      // Note that this is basically the same as `fromEvent` from rjxs, but we do it ourselves,
      // because we want to guarantee that the event is bound outside of the `NgZone`. With
      // `fromEvent` it'll only happen if the subscription is outside the `NgZone`.
      streams.push(new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
        return this._ngZone.runOutsideAngular(() => {
          const eventOptions = true;

          const callback = event => {
            if (this._activeDragInstances.length) {
              observer.next(event);
            }
          };

          shadowRoot.addEventListener('scroll', callback, eventOptions);
          return () => {
            shadowRoot.removeEventListener('scroll', callback, eventOptions);
          };
        });
      }));
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...streams);
  }

  ngOnDestroy() {
    this._dragInstances.forEach(instance => this.removeDragItem(instance));

    this._dropInstances.forEach(instance => this.removeDropContainer(instance));

    this._clearGlobalListeners();

    this.pointerMove.complete();
    this.pointerUp.complete();
  }
  /** Clears out the global event listeners from the `document`. */


  _clearGlobalListeners() {
    this._globalListeners.forEach((config, name) => {
      this._document.removeEventListener(name, config.handler, config.options);
    });

    this._globalListeners.clear();
  }

}

DragDropRegistry.ɵfac = function DragDropRegistry_Factory(t) {
  return new (t || DragDropRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
};

DragDropRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: DragDropRegistry,
  factory: DragDropRegistry.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDropRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Default configuration to be used when creating a `DragRef`. */


const DEFAULT_CONFIG = {
  dragStartThreshold: 5,
  pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */

class DragDrop {
  constructor(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
    this._document = _document;
    this._ngZone = _ngZone;
    this._viewportRuler = _viewportRuler;
    this._dragDropRegistry = _dragDropRegistry;
  }
  /**
   * Turns an element into a draggable item.
   * @param element Element to which to attach the dragging functionality.
   * @param config Object used to configure the dragging behavior.
   */


  createDrag(element, config = DEFAULT_CONFIG) {
    return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
  }
  /**
   * Turns an element into a drop list.
   * @param element Element to which to attach the drop list functionality.
   */


  createDropList(element) {
    return new DropListRef(element, this._dragDropRegistry, this._document, this._ngZone, this._viewportRuler);
  }

}

DragDrop.ɵfac = function DragDrop_Factory(t) {
  return new (t || DragDrop)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](DragDropRegistry));
};

DragDrop.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({
  token: DragDrop,
  factory: DragDrop.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDrop, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ViewportRuler
    }, {
      type: DragDropRegistry
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * @docs-private
 */


const CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_PARENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDropListGroup`. It serves as
 * alternative token to the actual `CdkDropListGroup` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_DROP_LIST_GROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropListGroup');
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 */

class CdkDropListGroup {
  constructor() {
    /** Drop lists registered inside the group. */
    this._items = new Set();
    this._disabled = false;
  }
  /** Whether starting a dragging sequence from inside this group is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

  ngOnDestroy() {
    this._items.clear();
  }

}

CdkDropListGroup.ɵfac = function CdkDropListGroup_Factory(t) {
  return new (t || CdkDropListGroup)();
};

CdkDropListGroup.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDropListGroup,
  selectors: [["", "cdkDropListGroup", ""]],
  inputs: {
    disabled: ["cdkDropListGroupDisabled", "disabled"]
  },
  exportAs: ["cdkDropListGroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DROP_LIST_GROUP,
    useExisting: CdkDropListGroup
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDropListGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDropListGroup]',
      exportAs: 'cdkDropListGroup',
      providers: [{
        provide: CDK_DROP_LIST_GROUP,
        useExisting: CdkDropListGroup
      }]
    }]
  }], null, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListGroupDisabled']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to configure the
 * behavior of the drag&drop-related components.
 */


const CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CDK_DRAG_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Asserts that a particular node is an element.
 * @param node Node to be checked.
 * @param name Name to attach to the error message.
 */

function assertElementNode(node, name) {
  if (node.nodeType !== 1) {
    throw Error(`${name} must be attached to an element node. ` + `Currently attached to "${node.nodeName}".`);
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Counter used to generate unique ids for drop zones. */


let _uniqueIdCounter = 0;
/**
 * Injection token that can be used to reference instances of `CdkDropList`. It serves as
 * alternative token to the actual `CdkDropList` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */

const CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDropList');
/** Container that wraps a set of draggable items. */

class CdkDropList {
  constructor(
  /** Element that the drop list is attached to. */
  element, dragDrop, _changeDetectorRef, _scrollDispatcher, _dir, _group, config) {
    this.element = element;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollDispatcher = _scrollDispatcher;
    this._dir = _dir;
    this._group = _group;
    /** Emits when the list has been destroyed. */

    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /**
     * Other draggable containers that this container is connected to and into which the
     * container's items can be transferred. Can either be references to other drop containers,
     * or their unique IDs.
     */

    this.connectedTo = [];
    /**
     * Unique ID for the drop zone. Can be used as a reference
     * in the `connectedTo` of another `CdkDropList`.
     */

    this.id = `cdk-drop-list-${_uniqueIdCounter++}`;
    /**
     * Function that is used to determine whether an item
     * is allowed to be moved into a drop container.
     */

    this.enterPredicate = () => true;
    /** Functions that is used to determine whether an item can be sorted into a particular index. */


    this.sortPredicate = () => true;
    /** Emits when the user drops an item inside the container. */


    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits when the user has moved a new drag item into this container.
     */

    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits when the user removes an item from the container
     * by dragging it into another container.
     */

    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits as the user is swapping items while actively dragging. */

    this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Keeps track of the items that are registered with this container. Historically we used to
     * do this with a `ContentChildren` query, however queries don't handle transplanted views very
     * well which means that we can't handle cases like dragging the headers of a `mat-table`
     * correctly. What we do instead is to have the items register themselves with the container
     * and then we sort them based on their position in the DOM.
     */

    this._unsortedItems = new Set();

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDropList');
    }

    this._dropListRef = dragDrop.createDropList(element);
    this._dropListRef.data = this;

    if (config) {
      this._assignDefaults(config);
    }

    this._dropListRef.enterPredicate = (drag, drop) => {
      return this.enterPredicate(drag.data, drop.data);
    };

    this._dropListRef.sortPredicate = (index, drag, drop) => {
      return this.sortPredicate(index, drag.data, drop.data);
    };

    this._setupInputSyncSubscription(this._dropListRef);

    this._handleEvents(this._dropListRef);

    CdkDropList._dropLists.push(this);

    if (_group) {
      _group._items.add(this);
    }
  }
  /** Whether starting a dragging sequence from this container is disabled. */


  get disabled() {
    return this._disabled || !!this._group && this._group.disabled;
  }

  set disabled(value) {
    // Usually we sync the directive and ref state right before dragging starts, in order to have
    // a single point of failure and to avoid having to use setters for everything. `disabled` is
    // a special case, because it can prevent the `beforeStarted` event from firing, which can lock
    // the user in a disabled state, so we also need to sync it as it's being set.
    this._dropListRef.disabled = this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }
  /** Registers an items with the drop list. */


  addItem(item) {
    this._unsortedItems.add(item);

    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Removes an item from the drop list. */


  removeItem(item) {
    this._unsortedItems.delete(item);

    if (this._dropListRef.isDragging()) {
      this._syncItemsWithRef();
    }
  }
  /** Gets the registered items in the list, sorted by their position in the DOM. */


  getSortedItems() {
    return Array.from(this._unsortedItems).sort((a, b) => {
      const documentPosition = a._dragRef.getVisibleElement().compareDocumentPosition(b._dragRef.getVisibleElement()); // `compareDocumentPosition` returns a bitmask so we have to use a bitwise operator.
      // https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
      // tslint:disable-next-line:no-bitwise


      return documentPosition & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
  }

  ngOnDestroy() {
    const index = CdkDropList._dropLists.indexOf(this);

    if (index > -1) {
      CdkDropList._dropLists.splice(index, 1);
    }

    if (this._group) {
      this._group._items.delete(this);
    }

    this._unsortedItems.clear();

    this._dropListRef.dispose();

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */


  _setupInputSyncSubscription(ref) {
    if (this._dir) {
      this._dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._dir.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(value => ref.withDirection(value));
    }

    ref.beforeStarted.subscribe(() => {
      const siblings = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceArray)(this.connectedTo).map(drop => {
        if (typeof drop === 'string') {
          const correspondingDropList = CdkDropList._dropLists.find(list => list.id === drop);

          if (!correspondingDropList && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            console.warn(`CdkDropList could not find connected drop list with id "${drop}"`);
          }

          return correspondingDropList;
        }

        return drop;
      });

      if (this._group) {
        this._group._items.forEach(drop => {
          if (siblings.indexOf(drop) === -1) {
            siblings.push(drop);
          }
        });
      } // Note that we resolve the scrollable parents here so that we delay the resolution
      // as long as possible, ensuring that the element is in its final place in the DOM.


      if (!this._scrollableParentsResolved) {
        const scrollableParents = this._scrollDispatcher.getAncestorScrollContainers(this.element).map(scrollable => scrollable.getElementRef().nativeElement);

        this._dropListRef.withScrollableParents(scrollableParents); // Only do this once since it involves traversing the DOM and the parents
        // shouldn't be able to change without the drop list being destroyed.


        this._scrollableParentsResolved = true;
      }

      ref.disabled = this.disabled;
      ref.lockAxis = this.lockAxis;
      ref.sortingDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(this.sortingDisabled);
      ref.autoScrollDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(this.autoScrollDisabled);
      ref.autoScrollStep = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(this.autoScrollStep, 2);
      ref.connectedTo(siblings.filter(drop => drop && drop !== this).map(list => list._dropListRef)).withOrientation(this.orientation);
    });
  }
  /** Handles events from the underlying DropListRef. */


  _handleEvents(ref) {
    ref.beforeStarted.subscribe(() => {
      this._syncItemsWithRef();

      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(event => {
      this.entered.emit({
        container: this,
        item: event.item.data,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(event => {
      this.exited.emit({
        container: this,
        item: event.item.data
      });

      this._changeDetectorRef.markForCheck();
    });
    ref.sorted.subscribe(event => {
      this.sorted.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        container: this,
        item: event.item.data
      });
    });
    ref.dropped.subscribe(event => {
      this.dropped.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        previousContainer: event.previousContainer.data,
        container: event.container.data,
        item: event.item.data,
        isPointerOverContainer: event.isPointerOverContainer,
        distance: event.distance,
        dropPoint: event.dropPoint
      }); // Mark for check since all of these events run outside of change
      // detection and we're not guaranteed for something else to have triggered it.

      this._changeDetectorRef.markForCheck();
    });
  }
  /** Assigns the default input values based on a provided config object. */


  _assignDefaults(config) {
    const {
      lockAxis,
      draggingDisabled,
      sortingDisabled,
      listAutoScrollDisabled,
      listOrientation
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.sortingDisabled = sortingDisabled == null ? false : sortingDisabled;
    this.autoScrollDisabled = listAutoScrollDisabled == null ? false : listAutoScrollDisabled;
    this.orientation = listOrientation || 'vertical';

    if (lockAxis) {
      this.lockAxis = lockAxis;
    }
  }
  /** Syncs up the registered drag items with underlying drop list ref. */


  _syncItemsWithRef() {
    this._dropListRef.withItems(this.getSortedItems().map(item => item._dragRef));
  }

}
/** Keeps track of the drop lists that are currently on the page. */


CdkDropList._dropLists = [];

CdkDropList.ɵfac = function CdkDropList_Factory(t) {
  return new (t || CdkDropList)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DROP_LIST_GROUP, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8));
};

CdkDropList.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDropList,
  selectors: [["", "cdkDropList", ""], ["cdk-drop-list"]],
  hostAttrs: [1, "cdk-drop-list"],
  hostVars: 7,
  hostBindings: function CdkDropList_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵattribute"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drop-list-disabled", ctx.disabled)("cdk-drop-list-dragging", ctx._dropListRef.isDragging())("cdk-drop-list-receiving", ctx._dropListRef.isReceiving());
    }
  },
  inputs: {
    connectedTo: ["cdkDropListConnectedTo", "connectedTo"],
    data: ["cdkDropListData", "data"],
    orientation: ["cdkDropListOrientation", "orientation"],
    id: "id",
    lockAxis: ["cdkDropListLockAxis", "lockAxis"],
    disabled: ["cdkDropListDisabled", "disabled"],
    sortingDisabled: ["cdkDropListSortingDisabled", "sortingDisabled"],
    enterPredicate: ["cdkDropListEnterPredicate", "enterPredicate"],
    sortPredicate: ["cdkDropListSortPredicate", "sortPredicate"],
    autoScrollDisabled: ["cdkDropListAutoScrollDisabled", "autoScrollDisabled"],
    autoScrollStep: ["cdkDropListAutoScrollStep", "autoScrollStep"]
  },
  outputs: {
    dropped: "cdkDropListDropped",
    entered: "cdkDropListEntered",
    exited: "cdkDropListExited",
    sorted: "cdkDropListSorted"
  },
  exportAs: ["cdkDropList"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([// Prevent child drop lists from picking up the same group as their parent.
  {
    provide: CDK_DROP_LIST_GROUP,
    useValue: undefined
  }, {
    provide: CDK_DROP_LIST,
    useExisting: CdkDropList
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDropList, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDropList], cdk-drop-list',
      exportAs: 'cdkDropList',
      providers: [// Prevent child drop lists from picking up the same group as their parent.
      {
        provide: CDK_DROP_LIST_GROUP,
        useValue: undefined
      }, {
        provide: CDK_DROP_LIST,
        useExisting: CdkDropList
      }],
      host: {
        'class': 'cdk-drop-list',
        '[attr.id]': 'id',
        '[class.cdk-drop-list-disabled]': 'disabled',
        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.ScrollDispatcher
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }]
    }, {
      type: CdkDropListGroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DROP_LIST_GROUP]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }];
  }, {
    connectedTo: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListConnectedTo']
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListData']
    }],
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListOrientation']
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListLockAxis']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListDisabled']
    }],
    sortingDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListSortingDisabled']
    }],
    enterPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListEnterPredicate']
    }],
    sortPredicate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListSortPredicate']
    }],
    autoScrollDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListAutoScrollDisabled']
    }],
    autoScrollStep: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDropListAutoScrollStep']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListDropped']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListExited']
    }],
    sorted: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDropListSorted']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragHandle`. It serves as
 * alternative token to the actual `CdkDragHandle` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_HANDLE = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragHandle');
/** Handle that can be used to drag a CdkDrag instance. */

class CdkDragHandle {
  constructor(element, parentDrag) {
    this.element = element;
    /** Emits when the state of the handle has changed. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._disabled = false;

    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      assertElementNode(element.nativeElement, 'cdkDragHandle');
    }

    this._parentDrag = parentDrag;
  }
  /** Whether starting to drag through this handle is disabled. */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

    this._stateChanges.next(this);
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }

}

CdkDragHandle.ɵfac = function CdkDragHandle_Factory(t) {
  return new (t || CdkDragHandle)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};

CdkDragHandle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragHandle,
  selectors: [["", "cdkDragHandle", ""]],
  hostAttrs: [1, "cdk-drag-handle"],
  inputs: {
    disabled: ["cdkDragHandleDisabled", "disabled"]
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_HANDLE,
    useExisting: CdkDragHandle
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragHandle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDragHandle]',
      host: {
        'class': 'cdk-drag-handle'
      },
      providers: [{
        provide: CDK_DRAG_HANDLE,
        useExisting: CdkDragHandle
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_PARENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }];
  }, {
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragHandleDisabled']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPlaceholder`. It serves as
 * alternative token to the actual `CdkDragPlaceholder` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_PLACEHOLDER = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPlaceholder');
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 */

class CdkDragPlaceholder {
  constructor(templateRef) {
    this.templateRef = templateRef;
  }

}

CdkDragPlaceholder.ɵfac = function CdkDragPlaceholder_Factory(t) {
  return new (t || CdkDragPlaceholder)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
};

CdkDragPlaceholder.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragPlaceholder,
  selectors: [["ng-template", "cdkDragPlaceholder", ""]],
  inputs: {
    data: "data"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PLACEHOLDER,
    useExisting: CdkDragPlaceholder
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragPlaceholder, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPlaceholder]',
      providers: [{
        provide: CDK_DRAG_PLACEHOLDER,
        useExisting: CdkDragPlaceholder
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `CdkDragPreview`. It serves as
 * alternative token to the actual `CdkDragPreview` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


const CDK_DRAG_PREVIEW = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.InjectionToken('CdkDragPreview');
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 */

class CdkDragPreview {
  constructor(templateRef) {
    this.templateRef = templateRef;
    this._matchSize = false;
  }
  /** Whether the preview should preserve the same size as the item that is being dragged. */


  get matchSize() {
    return this._matchSize;
  }

  set matchSize(value) {
    this._matchSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

}

CdkDragPreview.ɵfac = function CdkDragPreview_Factory(t) {
  return new (t || CdkDragPreview)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef));
};

CdkDragPreview.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDragPreview,
  selectors: [["ng-template", "cdkDragPreview", ""]],
  inputs: {
    data: "data",
    matchSize: "matchSize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PREVIEW,
    useExisting: CdkDragPreview
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDragPreview, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: 'ng-template[cdkDragPreview]',
      providers: [{
        provide: CDK_DRAG_PREVIEW,
        useExisting: CdkDragPreview
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.TemplateRef
    }];
  }, {
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }],
    matchSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
    }]
  });
})();

const DRAG_HOST_CLASS = 'cdk-drag';
/** Element that can be moved inside a CdkDropList container. */

class CdkDrag {
  constructor(
  /** Element that the draggable is attached to. */
  element,
  /** Droppable container that the draggable is a part of. */
  dropContainer,
  /**
   * @deprecated `_document` parameter no longer being used and will be removed.
   * @breaking-change 12.0.0
   */
  _document, _ngZone, _viewContainerRef, config, _dir, dragDrop, _changeDetectorRef, _selfHandle, _parentDrag) {
    this.element = element;
    this.dropContainer = dropContainer;
    this._ngZone = _ngZone;
    this._viewContainerRef = _viewContainerRef;
    this._dir = _dir;
    this._changeDetectorRef = _changeDetectorRef;
    this._selfHandle = _selfHandle;
    this._parentDrag = _parentDrag;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the user starts dragging the item. */

    this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user has released a drag item, before any animations have started. */

    this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user stops dragging an item in the container. */

    this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user has moved the item into a new container. */

    this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user removes the item its container by dragging it into another container. */

    this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /** Emits when the user drops the item inside a container. */

    this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    /**
     * Emits as the user is dragging the item. Use with caution,
     * because this event will fire for every pixel that the user has dragged.
     */

    this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(observer => {
      const subscription = this._dragRef.moved.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.map)(movedEvent => ({
        source: this,
        pointerPosition: movedEvent.pointerPosition,
        event: movedEvent.event,
        delta: movedEvent.delta,
        distance: movedEvent.distance
      }))).subscribe(observer);

      return () => {
        subscription.unsubscribe();
      };
    });
    this._dragRef = dragDrop.createDrag(element, {
      dragStartThreshold: config && config.dragStartThreshold != null ? config.dragStartThreshold : 5,
      pointerDirectionChangeThreshold: config && config.pointerDirectionChangeThreshold != null ? config.pointerDirectionChangeThreshold : 5,
      zIndex: config === null || config === void 0 ? void 0 : config.zIndex
    });
    this._dragRef.data = this; // We have to keep track of the drag instances in order to be able to match an element to
    // a drag instance. We can't go through the global registry of `DragRef`, because the root
    // element could be different.

    CdkDrag._dragInstances.push(this);

    if (config) {
      this._assignDefaults(config);
    } // Note that usually the container is assigned when the drop list is picks up the item, but in
    // some cases (mainly transplanted views with OnPush, see #18341) we may end up in a situation
    // where there are no items on the first change detection pass, but the items get picked up as
    // soon as the user triggers another pass by dragging. This is a problem, because the item would
    // have to switch from standalone mode to drag mode in the middle of the dragging sequence which
    // is too late since the two modes save different kinds of information. We work around it by
    // assigning the drop container both from here and the list.


    if (dropContainer) {
      this._dragRef._withDropContainer(dropContainer._dropListRef);

      dropContainer.addItem(this);
    }

    this._syncInputs(this._dragRef);

    this._handleEvents(this._dragRef);
  }
  /** Whether starting to drag this element is disabled. */


  get disabled() {
    return this._disabled || this.dropContainer && this.dropContainer.disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    this._dragRef.disabled = this._disabled;
  }
  /**
   * Returns the element that is being used as a placeholder
   * while the current element is being dragged.
   */


  getPlaceholderElement() {
    return this._dragRef.getPlaceholderElement();
  }
  /** Returns the root draggable element. */


  getRootElement() {
    return this._dragRef.getRootElement();
  }
  /** Resets a standalone drag item to its initial position. */


  reset() {
    this._dragRef.reset();
  }
  /**
   * Gets the pixel coordinates of the draggable outside of a drop container.
   */


  getFreeDragPosition() {
    return this._dragRef.getFreeDragPosition();
  }

  ngAfterViewInit() {
    // Normally this isn't in the zone, but it can cause major performance regressions for apps
    // using `zone-patch-rxjs` because it'll trigger a change detection when it unsubscribes.
    this._ngZone.runOutsideAngular(() => {
      // We need to wait for the zone to stabilize, in order for the reference
      // element to be in the proper place in the DOM. This is mostly relevant
      // for draggable elements inside portals since they get stamped out in
      // their original DOM position and then they get transferred to the portal.
      this._ngZone.onStable.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(() => {
        this._updateRootElement();

        this._setupHandlesListener();

        if (this.freeDragPosition) {
          this._dragRef.setFreeDragPosition(this.freeDragPosition);
        }
      });
    });
  }

  ngOnChanges(changes) {
    const rootSelectorChange = changes['rootElementSelector'];
    const positionChange = changes['freeDragPosition']; // We don't have to react to the first change since it's being
    // handled in `ngAfterViewInit` where it needs to be deferred.

    if (rootSelectorChange && !rootSelectorChange.firstChange) {
      this._updateRootElement();
    } // Skip the first change since it's being handled in `ngAfterViewInit`.


    if (positionChange && !positionChange.firstChange && this.freeDragPosition) {
      this._dragRef.setFreeDragPosition(this.freeDragPosition);
    }
  }

  ngOnDestroy() {
    if (this.dropContainer) {
      this.dropContainer.removeItem(this);
    }

    const index = CdkDrag._dragInstances.indexOf(this);

    if (index > -1) {
      CdkDrag._dragInstances.splice(index, 1);
    } // Unnecessary in most cases, but used to avoid extra change detections with `zone-paths-rxjs`.


    this._ngZone.runOutsideAngular(() => {
      this._destroyed.next();

      this._destroyed.complete();

      this._dragRef.dispose();
    });
  }
  /** Syncs the root element with the `DragRef`. */


  _updateRootElement() {
    var _a;

    const element = this.element.nativeElement;
    let rootElement = element;

    if (this.rootElementSelector) {
      rootElement = element.closest !== undefined ? element.closest(this.rootElementSelector) : // Comment tag doesn't have closest method, so use parent's one.
      (_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.closest(this.rootElementSelector);
    }

    if (rootElement && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      assertElementNode(rootElement, 'cdkDrag');
    }

    this._dragRef.withRootElement(rootElement || element);
  }
  /** Gets the boundary element, based on the `boundaryElement` value. */


  _getBoundaryElement() {
    const boundary = this.boundaryElement;

    if (!boundary) {
      return null;
    }

    if (typeof boundary === 'string') {
      return this.element.nativeElement.closest(boundary);
    }

    return (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(boundary);
  }
  /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */


  _syncInputs(ref) {
    ref.beforeStarted.subscribe(() => {
      if (!ref.isDragging()) {
        const dir = this._dir;
        const dragStartDelay = this.dragStartDelay;
        const placeholder = this._placeholderTemplate ? {
          template: this._placeholderTemplate.templateRef,
          context: this._placeholderTemplate.data,
          viewContainer: this._viewContainerRef
        } : null;
        const preview = this._previewTemplate ? {
          template: this._previewTemplate.templateRef,
          context: this._previewTemplate.data,
          matchSize: this._previewTemplate.matchSize,
          viewContainer: this._viewContainerRef
        } : null;
        ref.disabled = this.disabled;
        ref.lockAxis = this.lockAxis;
        ref.dragStartDelay = typeof dragStartDelay === 'object' && dragStartDelay ? dragStartDelay : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(dragStartDelay);
        ref.constrainPosition = this.constrainPosition;
        ref.previewClass = this.previewClass;
        ref.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(placeholder).withPreviewTemplate(preview).withPreviewContainer(this.previewContainer || 'global');

        if (dir) {
          ref.withDirection(dir.value);
        }
      }
    }); // This only needs to be resolved once.

    ref.beforeStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1)).subscribe(() => {
      var _a; // If we managed to resolve a parent through DI, use it.


      if (this._parentDrag) {
        ref.withParent(this._parentDrag._dragRef);
        return;
      } // Otherwise fall back to resolving the parent by looking up the DOM. This can happen if
      // the item was projected into another item by something like `ngTemplateOutlet`.


      let parent = this.element.nativeElement.parentElement;

      while (parent) {
        if (parent.classList.contains(DRAG_HOST_CLASS)) {
          ref.withParent(((_a = CdkDrag._dragInstances.find(drag => {
            return drag.element.nativeElement === parent;
          })) === null || _a === void 0 ? void 0 : _a._dragRef) || null);
          break;
        }

        parent = parent.parentElement;
      }
    });
  }
  /** Handles the events from the underlying `DragRef`. */


  _handleEvents(ref) {
    ref.started.subscribe(() => {
      this.started.emit({
        source: this
      }); // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.

      this._changeDetectorRef.markForCheck();
    });
    ref.released.subscribe(() => {
      this.released.emit({
        source: this
      });
    });
    ref.ended.subscribe(event => {
      this.ended.emit({
        source: this,
        distance: event.distance,
        dropPoint: event.dropPoint
      }); // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.

      this._changeDetectorRef.markForCheck();
    });
    ref.entered.subscribe(event => {
      this.entered.emit({
        container: event.container.data,
        item: this,
        currentIndex: event.currentIndex
      });
    });
    ref.exited.subscribe(event => {
      this.exited.emit({
        container: event.container.data,
        item: this
      });
    });
    ref.dropped.subscribe(event => {
      this.dropped.emit({
        previousIndex: event.previousIndex,
        currentIndex: event.currentIndex,
        previousContainer: event.previousContainer.data,
        container: event.container.data,
        isPointerOverContainer: event.isPointerOverContainer,
        item: this,
        distance: event.distance,
        dropPoint: event.dropPoint
      });
    });
  }
  /** Assigns the default input values based on a provided config object. */


  _assignDefaults(config) {
    const {
      lockAxis,
      dragStartDelay,
      constrainPosition,
      previewClass,
      boundaryElement,
      draggingDisabled,
      rootElementSelector,
      previewContainer
    } = config;
    this.disabled = draggingDisabled == null ? false : draggingDisabled;
    this.dragStartDelay = dragStartDelay || 0;

    if (lockAxis) {
      this.lockAxis = lockAxis;
    }

    if (constrainPosition) {
      this.constrainPosition = constrainPosition;
    }

    if (previewClass) {
      this.previewClass = previewClass;
    }

    if (boundaryElement) {
      this.boundaryElement = boundaryElement;
    }

    if (rootElementSelector) {
      this.rootElementSelector = rootElementSelector;
    }

    if (previewContainer) {
      this.previewContainer = previewContainer;
    }
  }
  /** Sets up the listener that syncs the handles with the drag ref. */


  _setupHandlesListener() {
    // Listen for any newly-added handles.
    this._handles.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(this._handles), // Sync the new handles with the DragRef.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.tap)(handles => {
      const childHandleElements = handles.filter(handle => handle._parentDrag === this).map(handle => handle.element); // Usually handles are only allowed to be a descendant of the drag element, but if
      // the consumer defined a different drag root, we should allow the drag element
      // itself to be a handle too.

      if (this._selfHandle && this.rootElementSelector) {
        childHandleElements.push(this.element);
      }

      this._dragRef.withHandles(childHandleElements);
    }), // Listen if the state of any of the handles changes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(handles => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...handles.map(item => {
        return item._stateChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.startWith)(item));
      }));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this._destroyed)).subscribe(handleInstance => {
      // Enabled/disable the handle that changed in the DragRef.
      const dragRef = this._dragRef;
      const handle = handleInstance.element.nativeElement;
      handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
    });
  }

}

CdkDrag._dragInstances = [];

CdkDrag.ɵfac = function CdkDrag_Factory(t) {
  return new (t || CdkDrag)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DROP_LIST, 12), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](DragDrop), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_HANDLE, 10), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](CDK_DRAG_PARENT, 12));
};

CdkDrag.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineDirective"]({
  type: CdkDrag,
  selectors: [["", "cdkDrag", ""]],
  contentQueries: function CdkDrag_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PREVIEW, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_PLACEHOLDER, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵcontentQuery"](dirIndex, CDK_DRAG_HANDLE, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._previewTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._placeholderTemplate = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx._handles = _t);
    }
  },
  hostAttrs: [1, "cdk-drag"],
  hostVars: 4,
  hostBindings: function CdkDrag_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("cdk-drag-disabled", ctx.disabled)("cdk-drag-dragging", ctx._dragRef.isDragging());
    }
  },
  inputs: {
    data: ["cdkDragData", "data"],
    lockAxis: ["cdkDragLockAxis", "lockAxis"],
    rootElementSelector: ["cdkDragRootElement", "rootElementSelector"],
    boundaryElement: ["cdkDragBoundary", "boundaryElement"],
    dragStartDelay: ["cdkDragStartDelay", "dragStartDelay"],
    freeDragPosition: ["cdkDragFreeDragPosition", "freeDragPosition"],
    disabled: ["cdkDragDisabled", "disabled"],
    constrainPosition: ["cdkDragConstrainPosition", "constrainPosition"],
    previewClass: ["cdkDragPreviewClass", "previewClass"],
    previewContainer: ["cdkDragPreviewContainer", "previewContainer"]
  },
  outputs: {
    started: "cdkDragStarted",
    released: "cdkDragReleased",
    ended: "cdkDragEnded",
    entered: "cdkDragEntered",
    exited: "cdkDragExited",
    dropped: "cdkDragDropped",
    moved: "cdkDragMoved"
  },
  exportAs: ["cdkDrag"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([{
    provide: CDK_DRAG_PARENT,
    useExisting: CdkDrag
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](CdkDrag, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Directive,
    args: [{
      selector: '[cdkDrag]',
      exportAs: 'cdkDrag',
      host: {
        'class': DRAG_HOST_CLASS,
        '[class.cdk-drag-disabled]': 'disabled',
        '[class.cdk-drag-dragging]': '_dragRef.isDragging()'
      },
      providers: [{
        provide: CDK_DRAG_PARENT,
        useExisting: CdkDrag
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DROP_LIST]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgZone
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewContainerRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_CONFIG]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }]
    }, {
      type: DragDrop
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef
    }, {
      type: CdkDragHandle,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Self
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_HANDLE]
      }]
    }, {
      type: CdkDrag,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.SkipSelf
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject,
        args: [CDK_DRAG_PARENT]
      }]
    }];
  }, {
    _handles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChildren,
      args: [CDK_DRAG_HANDLE, {
        descendants: true
      }]
    }],
    _previewTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
      args: [CDK_DRAG_PREVIEW]
    }],
    _placeholderTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ContentChild,
      args: [CDK_DRAG_PLACEHOLDER]
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragData']
    }],
    lockAxis: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragLockAxis']
    }],
    rootElementSelector: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragRootElement']
    }],
    boundaryElement: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragBoundary']
    }],
    dragStartDelay: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragStartDelay']
    }],
    freeDragPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragFreeDragPosition']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragDisabled']
    }],
    constrainPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragConstrainPosition']
    }],
    previewClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragPreviewClass']
    }],
    previewContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input,
      args: ['cdkDragPreviewContainer']
    }],
    started: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragStarted']
    }],
    released: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragReleased']
    }],
    ended: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragEnded']
    }],
    entered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragEntered']
    }],
    exited: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragExited']
    }],
    dropped: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragDropped']
    }],
    moved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output,
      args: ['cdkDragMoved']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class DragDropModule {}

DragDropModule.ɵfac = function DragDropModule_Factory(t) {
  return new (t || DragDropModule)();
};

DragDropModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: DragDropModule
});
DragDropModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  providers: [DragDrop],
  imports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵsetClassMetadata"](DragDropModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule,
    args: [{
      declarations: [CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__.CdkScrollableModule, CdkDropList, CdkDropListGroup, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder],
      providers: [DragDrop]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5939:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/keycodes.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ A),
/* harmony export */   "ALT": () => (/* binding */ ALT),
/* harmony export */   "APOSTROPHE": () => (/* binding */ APOSTROPHE),
/* harmony export */   "AT_SIGN": () => (/* binding */ AT_SIGN),
/* harmony export */   "B": () => (/* binding */ B),
/* harmony export */   "BACKSLASH": () => (/* binding */ BACKSLASH),
/* harmony export */   "BACKSPACE": () => (/* binding */ BACKSPACE),
/* harmony export */   "C": () => (/* binding */ C),
/* harmony export */   "CAPS_LOCK": () => (/* binding */ CAPS_LOCK),
/* harmony export */   "CLOSE_SQUARE_BRACKET": () => (/* binding */ CLOSE_SQUARE_BRACKET),
/* harmony export */   "COMMA": () => (/* binding */ COMMA),
/* harmony export */   "CONTEXT_MENU": () => (/* binding */ CONTEXT_MENU),
/* harmony export */   "CONTROL": () => (/* binding */ CONTROL),
/* harmony export */   "D": () => (/* binding */ D),
/* harmony export */   "DASH": () => (/* binding */ DASH),
/* harmony export */   "DELETE": () => (/* binding */ DELETE),
/* harmony export */   "DOWN_ARROW": () => (/* binding */ DOWN_ARROW),
/* harmony export */   "E": () => (/* binding */ E),
/* harmony export */   "EIGHT": () => (/* binding */ EIGHT),
/* harmony export */   "END": () => (/* binding */ END),
/* harmony export */   "ENTER": () => (/* binding */ ENTER),
/* harmony export */   "EQUALS": () => (/* binding */ EQUALS),
/* harmony export */   "ESCAPE": () => (/* binding */ ESCAPE),
/* harmony export */   "F": () => (/* binding */ F),
/* harmony export */   "F1": () => (/* binding */ F1),
/* harmony export */   "F10": () => (/* binding */ F10),
/* harmony export */   "F11": () => (/* binding */ F11),
/* harmony export */   "F12": () => (/* binding */ F12),
/* harmony export */   "F2": () => (/* binding */ F2),
/* harmony export */   "F3": () => (/* binding */ F3),
/* harmony export */   "F4": () => (/* binding */ F4),
/* harmony export */   "F5": () => (/* binding */ F5),
/* harmony export */   "F6": () => (/* binding */ F6),
/* harmony export */   "F7": () => (/* binding */ F7),
/* harmony export */   "F8": () => (/* binding */ F8),
/* harmony export */   "F9": () => (/* binding */ F9),
/* harmony export */   "FF_EQUALS": () => (/* binding */ FF_EQUALS),
/* harmony export */   "FF_MINUS": () => (/* binding */ FF_MINUS),
/* harmony export */   "FF_MUTE": () => (/* binding */ FF_MUTE),
/* harmony export */   "FF_SEMICOLON": () => (/* binding */ FF_SEMICOLON),
/* harmony export */   "FF_VOLUME_DOWN": () => (/* binding */ FF_VOLUME_DOWN),
/* harmony export */   "FF_VOLUME_UP": () => (/* binding */ FF_VOLUME_UP),
/* harmony export */   "FIRST_MEDIA": () => (/* binding */ FIRST_MEDIA),
/* harmony export */   "FIVE": () => (/* binding */ FIVE),
/* harmony export */   "FOUR": () => (/* binding */ FOUR),
/* harmony export */   "G": () => (/* binding */ G),
/* harmony export */   "H": () => (/* binding */ H),
/* harmony export */   "HOME": () => (/* binding */ HOME),
/* harmony export */   "I": () => (/* binding */ I),
/* harmony export */   "INSERT": () => (/* binding */ INSERT),
/* harmony export */   "J": () => (/* binding */ J),
/* harmony export */   "K": () => (/* binding */ K),
/* harmony export */   "L": () => (/* binding */ L),
/* harmony export */   "LAST_MEDIA": () => (/* binding */ LAST_MEDIA),
/* harmony export */   "LEFT_ARROW": () => (/* binding */ LEFT_ARROW),
/* harmony export */   "M": () => (/* binding */ M),
/* harmony export */   "MAC_ENTER": () => (/* binding */ MAC_ENTER),
/* harmony export */   "MAC_META": () => (/* binding */ MAC_META),
/* harmony export */   "MAC_WK_CMD_LEFT": () => (/* binding */ MAC_WK_CMD_LEFT),
/* harmony export */   "MAC_WK_CMD_RIGHT": () => (/* binding */ MAC_WK_CMD_RIGHT),
/* harmony export */   "META": () => (/* binding */ META),
/* harmony export */   "MUTE": () => (/* binding */ MUTE),
/* harmony export */   "N": () => (/* binding */ N),
/* harmony export */   "NINE": () => (/* binding */ NINE),
/* harmony export */   "NUMPAD_DIVIDE": () => (/* binding */ NUMPAD_DIVIDE),
/* harmony export */   "NUMPAD_EIGHT": () => (/* binding */ NUMPAD_EIGHT),
/* harmony export */   "NUMPAD_FIVE": () => (/* binding */ NUMPAD_FIVE),
/* harmony export */   "NUMPAD_FOUR": () => (/* binding */ NUMPAD_FOUR),
/* harmony export */   "NUMPAD_MINUS": () => (/* binding */ NUMPAD_MINUS),
/* harmony export */   "NUMPAD_MULTIPLY": () => (/* binding */ NUMPAD_MULTIPLY),
/* harmony export */   "NUMPAD_NINE": () => (/* binding */ NUMPAD_NINE),
/* harmony export */   "NUMPAD_ONE": () => (/* binding */ NUMPAD_ONE),
/* harmony export */   "NUMPAD_PERIOD": () => (/* binding */ NUMPAD_PERIOD),
/* harmony export */   "NUMPAD_PLUS": () => (/* binding */ NUMPAD_PLUS),
/* harmony export */   "NUMPAD_SEVEN": () => (/* binding */ NUMPAD_SEVEN),
/* harmony export */   "NUMPAD_SIX": () => (/* binding */ NUMPAD_SIX),
/* harmony export */   "NUMPAD_THREE": () => (/* binding */ NUMPAD_THREE),
/* harmony export */   "NUMPAD_TWO": () => (/* binding */ NUMPAD_TWO),
/* harmony export */   "NUMPAD_ZERO": () => (/* binding */ NUMPAD_ZERO),
/* harmony export */   "NUM_CENTER": () => (/* binding */ NUM_CENTER),
/* harmony export */   "NUM_LOCK": () => (/* binding */ NUM_LOCK),
/* harmony export */   "O": () => (/* binding */ O),
/* harmony export */   "ONE": () => (/* binding */ ONE),
/* harmony export */   "OPEN_SQUARE_BRACKET": () => (/* binding */ OPEN_SQUARE_BRACKET),
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "PAGE_DOWN": () => (/* binding */ PAGE_DOWN),
/* harmony export */   "PAGE_UP": () => (/* binding */ PAGE_UP),
/* harmony export */   "PAUSE": () => (/* binding */ PAUSE),
/* harmony export */   "PERIOD": () => (/* binding */ PERIOD),
/* harmony export */   "PLUS_SIGN": () => (/* binding */ PLUS_SIGN),
/* harmony export */   "PRINT_SCREEN": () => (/* binding */ PRINT_SCREEN),
/* harmony export */   "Q": () => (/* binding */ Q),
/* harmony export */   "QUESTION_MARK": () => (/* binding */ QUESTION_MARK),
/* harmony export */   "R": () => (/* binding */ R),
/* harmony export */   "RIGHT_ARROW": () => (/* binding */ RIGHT_ARROW),
/* harmony export */   "S": () => (/* binding */ S),
/* harmony export */   "SCROLL_LOCK": () => (/* binding */ SCROLL_LOCK),
/* harmony export */   "SEMICOLON": () => (/* binding */ SEMICOLON),
/* harmony export */   "SEVEN": () => (/* binding */ SEVEN),
/* harmony export */   "SHIFT": () => (/* binding */ SHIFT),
/* harmony export */   "SINGLE_QUOTE": () => (/* binding */ SINGLE_QUOTE),
/* harmony export */   "SIX": () => (/* binding */ SIX),
/* harmony export */   "SLASH": () => (/* binding */ SLASH),
/* harmony export */   "SPACE": () => (/* binding */ SPACE),
/* harmony export */   "T": () => (/* binding */ T),
/* harmony export */   "TAB": () => (/* binding */ TAB),
/* harmony export */   "THREE": () => (/* binding */ THREE),
/* harmony export */   "TILDE": () => (/* binding */ TILDE),
/* harmony export */   "TWO": () => (/* binding */ TWO),
/* harmony export */   "U": () => (/* binding */ U),
/* harmony export */   "UP_ARROW": () => (/* binding */ UP_ARROW),
/* harmony export */   "V": () => (/* binding */ V),
/* harmony export */   "VOLUME_DOWN": () => (/* binding */ VOLUME_DOWN),
/* harmony export */   "VOLUME_UP": () => (/* binding */ VOLUME_UP),
/* harmony export */   "W": () => (/* binding */ W),
/* harmony export */   "X": () => (/* binding */ X),
/* harmony export */   "Y": () => (/* binding */ Y),
/* harmony export */   "Z": () => (/* binding */ Z),
/* harmony export */   "ZERO": () => (/* binding */ ZERO),
/* harmony export */   "hasModifierKey": () => (/* binding */ hasModifierKey)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const MAC_ENTER = 3;
const BACKSPACE = 8;
const TAB = 9;
const NUM_CENTER = 12;
const ENTER = 13;
const SHIFT = 16;
const CONTROL = 17;
const ALT = 18;
const PAUSE = 19;
const CAPS_LOCK = 20;
const ESCAPE = 27;
const SPACE = 32;
const PAGE_UP = 33;
const PAGE_DOWN = 34;
const END = 35;
const HOME = 36;
const LEFT_ARROW = 37;
const UP_ARROW = 38;
const RIGHT_ARROW = 39;
const DOWN_ARROW = 40;
const PLUS_SIGN = 43;
const PRINT_SCREEN = 44;
const INSERT = 45;
const DELETE = 46;
const ZERO = 48;
const ONE = 49;
const TWO = 50;
const THREE = 51;
const FOUR = 52;
const FIVE = 53;
const SIX = 54;
const SEVEN = 55;
const EIGHT = 56;
const NINE = 57;
const FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
const FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
const QUESTION_MARK = 63;
const AT_SIGN = 64;
const A = 65;
const B = 66;
const C = 67;
const D = 68;
const E = 69;
const F = 70;
const G = 71;
const H = 72;
const I = 73;
const J = 74;
const K = 75;
const L = 76;
const M = 77;
const N = 78;
const O = 79;
const P = 80;
const Q = 81;
const R = 82;
const S = 83;
const T = 84;
const U = 85;
const V = 86;
const W = 87;
const X = 88;
const Y = 89;
const Z = 90;
const META = 91; // WIN_KEY_LEFT
const MAC_WK_CMD_LEFT = 91;
const MAC_WK_CMD_RIGHT = 93;
const CONTEXT_MENU = 93;
const NUMPAD_ZERO = 96;
const NUMPAD_ONE = 97;
const NUMPAD_TWO = 98;
const NUMPAD_THREE = 99;
const NUMPAD_FOUR = 100;
const NUMPAD_FIVE = 101;
const NUMPAD_SIX = 102;
const NUMPAD_SEVEN = 103;
const NUMPAD_EIGHT = 104;
const NUMPAD_NINE = 105;
const NUMPAD_MULTIPLY = 106;
const NUMPAD_PLUS = 107;
const NUMPAD_MINUS = 109;
const NUMPAD_PERIOD = 110;
const NUMPAD_DIVIDE = 111;
const F1 = 112;
const F2 = 113;
const F3 = 114;
const F4 = 115;
const F5 = 116;
const F6 = 117;
const F7 = 118;
const F8 = 119;
const F9 = 120;
const F10 = 121;
const F11 = 122;
const F12 = 123;
const NUM_LOCK = 144;
const SCROLL_LOCK = 145;
const FIRST_MEDIA = 166;
const FF_MINUS = 173;
const MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
const VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
const VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
const FF_MUTE = 181;
const FF_VOLUME_DOWN = 182;
const LAST_MEDIA = 183;
const FF_VOLUME_UP = 183;
const SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
const EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
const COMMA = 188;
const DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
const PERIOD = 190;
const SLASH = 191;
const APOSTROPHE = 192;
const TILDE = 192;
const OPEN_SQUARE_BRACKET = 219;
const BACKSLASH = 220;
const CLOSE_SQUARE_BRACKET = 221;
const SINGLE_QUOTE = 222;
const MAC_META = 224;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Checks whether a modifier key is pressed.
 * @param event Event to be checked.
 */
function hasModifierKey(event, ...modifiers) {
    if (modifiers.length) {
        return modifiers.some(modifier => event[modifier]);
    }
    return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5837:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/observers.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkObserveContent": () => (/* binding */ CdkObserveContent),
/* harmony export */   "ContentObserver": () => (/* binding */ ContentObserver),
/* harmony export */   "MutationObserverFactory": () => (/* binding */ MutationObserverFactory),
/* harmony export */   "ObserversModule": () => (/* binding */ ObserversModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 823);





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Factory that creates a new MutationObserver and allows us to stub it out in unit tests.
 * @docs-private
 */

class MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === 'undefined' ? null : new MutationObserver(callback);
  }

}

MutationObserverFactory.ɵfac = function MutationObserverFactory_Factory(t) {
  return new (t || MutationObserverFactory)();
};

MutationObserverFactory.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MutationObserverFactory,
  factory: MutationObserverFactory.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MutationObserverFactory, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/** An injectable service that allows watching elements for changes to their content. */


class ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    /** Keeps track of the existing MutationObservers so they can be reused. */

    this._observedElements = new Map();
  }

  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }

  observe(elementOrRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceElement)(elementOrRef);
    return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(observer => {
      const stream = this._observeElement(element);

      const subscription = stream.subscribe(observer);
      return () => {
        subscription.unsubscribe();

        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */


  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();

      const observer = this._mutationObserverFactory.create(mutations => stream.next(mutations));

      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }

      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }

    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */


  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;

      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */


  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);

      if (observer) {
        observer.disconnect();
      }

      stream.complete();

      this._observedElements.delete(element);
    }
  }

}

ContentObserver.ɵfac = function ContentObserver_Factory(t) {
  return new (t || ContentObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MutationObserverFactory));
};

ContentObserver.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ContentObserver,
  factory: ContentObserver.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentObserver, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: MutationObserverFactory
    }];
  }, null);
})();
/**
 * Directive that triggers a callback whenever the content of
 * its associated element has changed.
 */


class CdkObserveContent {
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    /** Event emitted for each change in the element's content. */

    this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */


  get debounce() {
    return this._debounce;
  }

  set debounce(value) {
    this._debounce = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(value);

    this._subscribe();
  }

  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }

  ngOnDestroy() {
    this._unsubscribe();
  }

  _subscribe() {
    this._unsubscribe();

    const stream = this._contentObserver.observe(this._elementRef); // TODO(mmalerba): We shouldn't be emitting on this @Output() outside the zone.
    // Consider brining it back inside the zone next time we're making breaking changes.
    // Bringing it back inside can cause things like infinite change detection loops and changed
    // after checked errors if people's code isn't handling it properly.


    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(this.debounce)) : stream).subscribe(this.event);
    });
  }

  _unsubscribe() {
    var _a;

    (_a = this._currentSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

}

CdkObserveContent.ɵfac = function CdkObserveContent_Factory(t) {
  return new (t || CdkObserveContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ContentObserver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkObserveContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: ["cdkObserveContentDisabled", "disabled"],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkObserveContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkObserveContent]',
      exportAs: 'cdkObserveContent'
    }]
  }], function () {
    return [{
      type: ContentObserver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    event: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
      args: ['cdkObserveContent']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['cdkObserveContentDisabled']
    }],
    debounce: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

class ObserversModule {}

ObserversModule.ɵfac = function ObserversModule_Factory(t) {
  return new (t || ObserversModule)();
};

ObserversModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ObserversModule
});
ObserversModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [MutationObserverFactory]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserversModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkObserveContent],
      declarations: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 4390:
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/platform.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Platform": () => (/* binding */ Platform),
/* harmony export */   "PlatformModule": () => (/* binding */ PlatformModule),
/* harmony export */   "_getEventTarget": () => (/* binding */ _getEventTarget),
/* harmony export */   "_getFocusedElementPierceShadowDom": () => (/* binding */ _getFocusedElementPierceShadowDom),
/* harmony export */   "_getShadowRoot": () => (/* binding */ _getShadowRoot),
/* harmony export */   "_isTestEnvironment": () => (/* binding */ _isTestEnvironment),
/* harmony export */   "_supportsShadowDom": () => (/* binding */ _supportsShadowDom),
/* harmony export */   "getRtlScrollAxisType": () => (/* binding */ getRtlScrollAxisType),
/* harmony export */   "getSupportedInputTypes": () => (/* binding */ getSupportedInputTypes),
/* harmony export */   "normalizePassiveListenerOptions": () => (/* binding */ normalizePassiveListenerOptions),
/* harmony export */   "supportsPassiveEventListeners": () => (/* binding */ supportsPassiveEventListeners),
/* harmony export */   "supportsScrollBehavior": () => (/* binding */ supportsScrollBehavior)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ 6362);



/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.

let hasV8BreakIterator; // We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687

try {
  hasV8BreakIterator = typeof Intl !== 'undefined' && Intl.v8BreakIterator;
} catch (_a) {
  hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */


class Platform {
  constructor(_platformId) {
    this._platformId = _platformId; // We want to use the Angular platform check because if the Document is shimmed
    // without the navigator, the following checks will fail. This is preferred because
    // sometimes the Document may be shimmed without the user's knowledge or intention

    /** Whether the Angular application is being rendered in the browser. */

    this.isBrowser = this._platformId ? (0,_angular_common__WEBPACK_IMPORTED_MODULE_0__.isPlatformBrowser)(this._platformId) : typeof document === 'object' && !!document;
    /** Whether the current browser is Microsoft Edge. */

    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    /** Whether the current rendering engine is Microsoft Trident. */

    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent); // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.

    /** Whether the current rendering engine is Blink. */

    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT; // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
    // ensure that Webkit runs standalone and is not used as another engine's base.

    /** Whether the current rendering engine is WebKit. */

    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    /** Whether the current platform is Apple iOS. */

    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window); // It's difficult to detect the plain Gecko engine, because most of the browsers identify
    // them self as Gecko-like browsers and modify the userAgent's according to that.
    // Since we only cover one explicit Firefox case, we can simply check for Firefox
    // instead of having an unstable check for Gecko.

    /** Whether the current browser is Firefox. */

    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    /** Whether the current platform is Android. */
    // Trident on mobile adds the android platform to the userAgent to trick detections.

    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT; // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
    // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
    // Safari browser should also use Webkit as its layout engine.

    /** Whether the current browser is Safari. */

    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }

}

Platform.ɵfac = function Platform_Factory(t) {
  return new (t || Platform)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID));
};

Platform.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: Platform,
  factory: Platform.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Platform, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__.PLATFORM_ID]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class PlatformModule {}

PlatformModule.ɵfac = function PlatformModule_Factory(t) {
  return new (t || PlatformModule)();
};

PlatformModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PlatformModule
});
PlatformModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlatformModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{}]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result Set of input types support by the current browser. */


let supportedInputTypes;
/** Types of `<input>` that *might* be supported. */

const candidateInputTypes = [// `color` must come first. Chrome 56 shows a warning if we change the type to `color` after
// first changing it to something else:
// The specified value "" does not conform to the required format.
// The format is "#rrggbb" where rr, gg, bb are two-digit hexadecimal numbers.
'color', 'button', 'checkbox', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'submit', 'tel', 'text', 'time', 'url', 'week'];
/** @returns The input types supported by this browser. */

function getSupportedInputTypes() {
  // Result is cached.
  if (supportedInputTypes) {
    return supportedInputTypes;
  } // We can't check if an input type is not supported until we're on the browser, so say that
  // everything is supported when not on the browser. We don't use `Platform` here since it's
  // just a helper function and can't inject it.


  if (typeof document !== 'object' || !document) {
    supportedInputTypes = new Set(candidateInputTypes);
    return supportedInputTypes;
  }

  let featureTestInput = document.createElement('input');
  supportedInputTypes = new Set(candidateInputTypes.filter(value => {
    featureTestInput.setAttribute('type', value);
    return featureTestInput.type === value;
  }));
  return supportedInputTypes;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of whether the user's browser supports passive event listeners. */


let supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 */

function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== 'undefined') {
    try {
      window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }

  return supportsPassiveEvents;
}
/**
 * Normalizes an `AddEventListener` object to something that can be passed
 * to `addEventListener` on any browser, no matter whether it supports the
 * `options` parameter.
 * @param options Object to be normalized.
 */


function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Cached result of the way the browser handles the horizontal scroll axis in RTL mode. */


let rtlScrollAxisType;
/** Cached result of the check that indicates whether the browser supports scroll behaviors. */

let scrollBehaviorSupported;
/** Check whether the browser supports scroll behaviors. */

function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    // If we're not in the browser, it can't be supported. Also check for `Element`, because
    // some projects stub out the global `document` during SSR which can throw us off.
    if (typeof document !== 'object' || !document || typeof Element !== 'function' || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    } // If the element can have a `scrollBehavior` style, we can be sure that it's supported.


    if ('scrollBehavior' in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      // At this point we have 3 possibilities: `scrollTo` isn't supported at all, it's
      // supported but it doesn't handle scroll behavior, or it has been polyfilled.
      const scrollToFunction = Element.prototype.scrollTo;

      if (scrollToFunction) {
        // We can detect if the function has been polyfilled by calling `toString` on it. Native
        // functions are obfuscated using `[native code]`, whereas if it was overwritten we'd get
        // the actual function source. Via https://davidwalsh.name/detect-native-function. Consider
        // polyfilled functions as supporting scroll behavior.
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }

  return scrollBehaviorSupported;
}
/**
 * Checks the type of RTL scroll axis used by this browser. As of time of writing, Chrome is NORMAL,
 * Firefox & Safari are NEGATED, and IE & Edge are INVERTED.
 */


function getRtlScrollAxisType() {
  // We can't check unless we're on the browser. Just assume 'normal' if we're not.
  if (typeof document !== 'object' || !document) {
    return 0
    /* NORMAL */
    ;
  }

  if (rtlScrollAxisType == null) {
    // Create a 1px wide scrolling container and a 2px wide content element.
    const scrollContainer = document.createElement('div');
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = 'rtl';
    containerStyle.width = '1px';
    containerStyle.overflow = 'auto';
    containerStyle.visibility = 'hidden';
    containerStyle.pointerEvents = 'none';
    containerStyle.position = 'absolute';
    const content = document.createElement('div');
    const contentStyle = content.style;
    contentStyle.width = '2px';
    contentStyle.height = '1px';
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = 0
    /* NORMAL */
    ; // The viewport starts scrolled all the way to the right in RTL mode. If we are in a NORMAL
    // browser this would mean that the scrollLeft should be 1. If it's zero instead we know we're
    // dealing with one of the other two types of browsers.

    if (scrollContainer.scrollLeft === 0) {
      // In a NEGATED browser the scrollLeft is always somewhere in [-maxScrollAmount, 0]. For an
      // INVERTED browser it is always somewhere in [0, maxScrollAmount]. We can determine which by
      // setting to the scrollLeft to 1. This is past the max for a NEGATED browser, so it will
      // return 0 when we read it again.
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? 1
      /* NEGATED */
      : 2
      /* INVERTED */
      ;
    }

    scrollContainer.remove();
  }

  return rtlScrollAxisType;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


let shadowDomIsSupported;
/** Checks whether the user's browser support Shadow DOM. */

function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== 'undefined' ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }

  return shadowDomIsSupported;
}
/** Gets the shadow root of an element, if supported and the element is inside the Shadow DOM. */


function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null; // Note that this should be caught by `_supportsShadowDom`, but some
    // teams have been able to hit this code path on unsupported browsers.

    if (typeof ShadowRoot !== 'undefined' && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }

  return null;
}
/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */


function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== 'undefined' && document ? document.activeElement : null;

  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;

    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }

  return activeElement;
}
/** Gets the target of an event while accounting for Shadow DOM. */


function _getEventTarget(event) {
  // If an event is bound outside the Shadow DOM, the `event.target` will
  // point to the shadow root so we have to use `composedPath` instead.
  return event.composedPath ? event.composedPath()[0] : event.target;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Gets whether the code is currently running in a test environment. */


function _isTestEnvironment() {
  // We can't use `declare const` because it causes conflicts inside Google with the real typings
  // for these symbols and we can't read them off the global object, because they don't appear to
  // be attached there for some runners like Jest.
  // (see: https://github.com/angular/components/issues/23365#issuecomment-938146643)
  return (// @ts-ignore
    typeof __karma__ !== 'undefined' && !!__karma__ || // @ts-ignore
    typeof jasmine !== 'undefined' && !!jasmine || // @ts-ignore
    typeof jest !== 'undefined' && !!jest || // @ts-ignore
    typeof Mocha !== 'undefined' && !!Mocha
  );
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5752:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/cdk/fesm2015/scrolling.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CdkFixedSizeVirtualScroll": () => (/* binding */ CdkFixedSizeVirtualScroll),
/* harmony export */   "CdkScrollable": () => (/* binding */ CdkScrollable),
/* harmony export */   "CdkScrollableModule": () => (/* binding */ CdkScrollableModule),
/* harmony export */   "CdkVirtualForOf": () => (/* binding */ CdkVirtualForOf),
/* harmony export */   "CdkVirtualScrollViewport": () => (/* binding */ CdkVirtualScrollViewport),
/* harmony export */   "DEFAULT_RESIZE_TIME": () => (/* binding */ DEFAULT_RESIZE_TIME),
/* harmony export */   "DEFAULT_SCROLL_TIME": () => (/* binding */ DEFAULT_SCROLL_TIME),
/* harmony export */   "FixedSizeVirtualScrollStrategy": () => (/* binding */ FixedSizeVirtualScrollStrategy),
/* harmony export */   "ScrollDispatcher": () => (/* binding */ ScrollDispatcher),
/* harmony export */   "ScrollingModule": () => (/* binding */ ScrollingModule),
/* harmony export */   "VIRTUAL_SCROLL_STRATEGY": () => (/* binding */ VIRTUAL_SCROLL_STRATEGY),
/* harmony export */   "ViewportRuler": () => (/* binding */ ViewportRuler),
/* harmony export */   "_fixedSizeVirtualScrollStrategyFactory": () => (/* binding */ _fixedSizeVirtualScrollStrategyFactory)
/* harmony export */ });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 3911);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 3066);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 20);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1695);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 9221);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 9095);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/collections */ 9502);












/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** The injection token used to specify the virtual scrolling strategy. */

const _c0 = ["contentWrapper"];
const _c1 = ["*"];
const VIRTUAL_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('VIRTUAL_SCROLL_STRATEGY');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Virtual scrolling strategy for lists with items of known fixed size. */

class FixedSizeVirtualScrollStrategy {
  /**
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */
  constructor(itemSize, minBufferPx, maxBufferPx) {
    this._scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** @docs-private Implemented as part of VirtualScrollStrategy. */

    this.scrolledIndexChange = this._scrolledIndexChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
    /** The attached viewport. */

    this._viewport = null;
    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;
  }
  /**
   * Attaches this scroll strategy to a viewport.
   * @param viewport The viewport to attach this strategy to.
   */


  attach(viewport) {
    this._viewport = viewport;

    this._updateTotalContentSize();

    this._updateRenderedRange();
  }
  /** Detaches this scroll strategy from the currently attached viewport. */


  detach() {
    this._scrolledIndexChange.complete();

    this._viewport = null;
  }
  /**
   * Update the item size and buffer size.
   * @param itemSize The size of the items in the virtually scrolling list.
   * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
   * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
   */


  updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
    if (maxBufferPx < minBufferPx && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx');
    }

    this._itemSize = itemSize;
    this._minBufferPx = minBufferPx;
    this._maxBufferPx = maxBufferPx;

    this._updateTotalContentSize();

    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */


  onContentScrolled() {
    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */


  onDataLengthChanged() {
    this._updateTotalContentSize();

    this._updateRenderedRange();
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */


  onContentRendered() {
    /* no-op */
  }
  /** @docs-private Implemented as part of VirtualScrollStrategy. */


  onRenderedOffsetChanged() {
    /* no-op */
  }
  /**
   * Scroll to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling.
   */


  scrollToIndex(index, behavior) {
    if (this._viewport) {
      this._viewport.scrollToOffset(index * this._itemSize, behavior);
    }
  }
  /** Update the viewport's total content size. */


  _updateTotalContentSize() {
    if (!this._viewport) {
      return;
    }

    this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
  }
  /** Update the viewport's rendered range. */


  _updateRenderedRange() {
    if (!this._viewport) {
      return;
    }

    const renderedRange = this._viewport.getRenderedRange();

    const newRange = {
      start: renderedRange.start,
      end: renderedRange.end
    };

    const viewportSize = this._viewport.getViewportSize();

    const dataLength = this._viewport.getDataLength();

    let scrollOffset = this._viewport.measureScrollOffset(); // Prevent NaN as result when dividing by zero.


    let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0; // If user scrolls to the bottom of the list and data changes to a smaller list

    if (newRange.end > dataLength) {
      // We have to recalculate the first visible index based on new data length and viewport size.
      const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
      const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems)); // If first visible index changed we must update scroll offset to handle start/end buffers
      // Current range must also be adjusted to cover the new position (bottom of new list).

      if (firstVisibleIndex != newVisibleIndex) {
        firstVisibleIndex = newVisibleIndex;
        scrollOffset = newVisibleIndex * this._itemSize;
        newRange.start = Math.floor(firstVisibleIndex);
      }

      newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
    }

    const startBuffer = scrollOffset - newRange.start * this._itemSize;

    if (startBuffer < this._minBufferPx && newRange.start != 0) {
      const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
      newRange.start = Math.max(0, newRange.start - expandStart);
      newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
    } else {
      const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);

      if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
        const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);

        if (expandEnd > 0) {
          newRange.end = Math.min(dataLength, newRange.end + expandEnd);
          newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
        }
      }
    }

    this._viewport.setRenderedRange(newRange);

    this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);

    this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
  }

}
/**
 * Provider factory for `FixedSizeVirtualScrollStrategy` that simply extracts the already created
 * `FixedSizeVirtualScrollStrategy` from the given directive.
 * @param fixedSizeDir The instance of `CdkFixedSizeVirtualScroll` to extract the
 *     `FixedSizeVirtualScrollStrategy` from.
 */


function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
/** A virtual scroll strategy that supports fixed-size items. */


class CdkFixedSizeVirtualScroll {
  constructor() {
    this._itemSize = 20;
    this._minBufferPx = 100;
    this._maxBufferPx = 200;
    /** The scroll strategy used by this directive. */

    this._scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }
  /** The size of the items in the list (in pixels). */


  get itemSize() {
    return this._itemSize;
  }

  set itemSize(value) {
    this._itemSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * The minimum amount of buffer rendered beyond the viewport (in pixels).
   * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
   */


  get minBufferPx() {
    return this._minBufferPx;
  }

  set minBufferPx(value) {
    this._minBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }
  /**
   * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
   */


  get maxBufferPx() {
    return this._maxBufferPx;
  }

  set maxBufferPx(value) {
    this._maxBufferPx = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
  }

  ngOnChanges() {
    this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
  }

}

CdkFixedSizeVirtualScroll.ɵfac = function CdkFixedSizeVirtualScroll_Factory(t) {
  return new (t || CdkFixedSizeVirtualScroll)();
};

CdkFixedSizeVirtualScroll.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkFixedSizeVirtualScroll,
  selectors: [["cdk-virtual-scroll-viewport", "itemSize", ""]],
  inputs: {
    itemSize: "itemSize",
    minBufferPx: "minBufferPx",
    maxBufferPx: "maxBufferPx"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: VIRTUAL_SCROLL_STRATEGY,
    useFactory: _fixedSizeVirtualScrollStrategyFactory,
    deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkFixedSizeVirtualScroll, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'cdk-virtual-scroll-viewport[itemSize]',
      providers: [{
        provide: VIRTUAL_SCROLL_STRATEGY,
        useFactory: _fixedSizeVirtualScrollStrategyFactory,
        deps: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => CdkFixedSizeVirtualScroll)]
      }]
    }]
  }], null, {
    itemSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    minBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    maxBufferPx: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Time in ms to throttle the scrolling events by default. */


const DEFAULT_SCROLL_TIME = 20;
/**
 * Service contained all registered Scrollable references and emits an event when any one of the
 * Scrollable references emit a scrolled event.
 */

class ScrollDispatcher {
  constructor(_ngZone, _platform, document) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    /** Subject for notifying that a registered scrollable reference element has been scrolled. */

    this._scrolled = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Keeps track of the global `scroll` and `resize` subscriptions. */

    this._globalSubscription = null;
    /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */

    this._scrolledCount = 0;
    /**
     * Map of all the scrollable references that are registered with the service and their
     * scroll event subscriptions.
     */

    this.scrollContainers = new Map();
    this._document = document;
  }
  /**
   * Registers a scrollable instance with the service and listens for its scrolled events. When the
   * scrollable is scrolled, the service emits the event to its scrolled observable.
   * @param scrollable Scrollable instance to be registered.
   */


  register(scrollable) {
    if (!this.scrollContainers.has(scrollable)) {
      this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
    }
  }
  /**
   * Deregisters a Scrollable reference and unsubscribes from its scroll event observable.
   * @param scrollable Scrollable instance to be deregistered.
   */


  deregister(scrollable) {
    const scrollableReference = this.scrollContainers.get(scrollable);

    if (scrollableReference) {
      scrollableReference.unsubscribe();
      this.scrollContainers.delete(scrollable);
    }
  }
  /**
   * Returns an observable that emits an event whenever any of the registered Scrollable
   * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
   * to override the default "throttle" time.
   *
   * **Note:** in order to avoid hitting change detection for every scroll event,
   * all of the events emitted from this stream will be run outside the Angular zone.
   * If you need to update any data bindings as a result of a scroll event, you have
   * to run the callback using `NgZone.run`.
   */


  scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
    if (!this._platform.isBrowser) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
    }

    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      if (!this._globalSubscription) {
        this._addGlobalListener();
      } // In the case of a 0ms delay, use an observable without auditTime
      // since it does add a perceptible delay in processing overhead.


      const subscription = auditTimeInMs > 0 ? this._scrolled.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
      this._scrolledCount++;
      return () => {
        subscription.unsubscribe();
        this._scrolledCount--;

        if (!this._scrolledCount) {
          this._removeGlobalListener();
        }
      };
    });
  }

  ngOnDestroy() {
    this._removeGlobalListener();

    this.scrollContainers.forEach((_, container) => this.deregister(container));

    this._scrolled.complete();
  }
  /**
   * Returns an observable that emits whenever any of the
   * scrollable ancestors of an element are scrolled.
   * @param elementOrElementRef Element whose ancestors to listen for.
   * @param auditTimeInMs Time to throttle the scroll events.
   */


  ancestorScrolled(elementOrElementRef, auditTimeInMs) {
    const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
    return this.scrolled(auditTimeInMs).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(target => {
      return !target || ancestors.indexOf(target) > -1;
    }));
  }
  /** Returns all registered Scrollables that contain the provided element. */


  getAncestorScrollContainers(elementOrElementRef) {
    const scrollingContainers = [];
    this.scrollContainers.forEach((_subscription, scrollable) => {
      if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
        scrollingContainers.push(scrollable);
      }
    });
    return scrollingContainers;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Returns true if the element is contained within the provided Scrollable. */


  _scrollableContainsElement(scrollable, elementOrElementRef) {
    let element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceElement)(elementOrElementRef);
    let scrollableElement = scrollable.getElementRef().nativeElement; // Traverse through the element parents until we reach null, checking if any of the elements
    // are the scrollable's element.

    do {
      if (element == scrollableElement) {
        return true;
      }
    } while (element = element.parentElement);

    return false;
  }
  /** Sets up the global scroll listeners. */


  _addGlobalListener() {
    this._globalSubscription = this._ngZone.runOutsideAngular(() => {
      const window = this._getWindow();

      return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(window.document, 'scroll').subscribe(() => this._scrolled.next());
    });
  }
  /** Cleans up the global scroll listener. */


  _removeGlobalListener() {
    if (this._globalSubscription) {
      this._globalSubscription.unsubscribe();

      this._globalSubscription = null;
    }
  }

}

ScrollDispatcher.ɵfac = function ScrollDispatcher_Factory(t) {
  return new (t || ScrollDispatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
};

ScrollDispatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ScrollDispatcher,
  factory: ScrollDispatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollDispatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Sends an event when the directive's element is scrolled. Registers itself with the
 * ScrollDispatcher service to include itself as part of its collection of scrolling events that it
 * can be listened to through the service.
 */


class CdkScrollable {
  constructor(elementRef, scrollDispatcher, ngZone, dir) {
    this.elementRef = elementRef;
    this.scrollDispatcher = scrollDispatcher;
    this.ngZone = ngZone;
    this.dir = dir;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._elementScrolled = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this.ngZone.runOutsideAngular(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.fromEvent)(this.elementRef.nativeElement, 'scroll').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(observer)));
  }

  ngOnInit() {
    this.scrollDispatcher.register(this);
  }

  ngOnDestroy() {
    this.scrollDispatcher.deregister(this);

    this._destroyed.next();

    this._destroyed.complete();
  }
  /** Returns observable that emits when a scroll event is fired on the host element. */


  elementScrolled() {
    return this._elementScrolled;
  }
  /** Gets the ElementRef for the viewport. */


  getElementRef() {
    return this.elementRef;
  }
  /**
   * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
   * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param options specified the offsets to scroll to.
   */


  scrollTo(options) {
    const el = this.elementRef.nativeElement;
    const isRtl = this.dir && this.dir.value == 'rtl'; // Rewrite start & end offsets as right or left offsets.

    if (options.left == null) {
      options.left = isRtl ? options.end : options.start;
    }

    if (options.right == null) {
      options.right = isRtl ? options.start : options.end;
    } // Rewrite the bottom offset as a top offset.


    if (options.bottom != null) {
      options.top = el.scrollHeight - el.clientHeight - options.bottom;
    } // Rewrite the right offset as a left offset.


    if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() != 0
    /* NORMAL */
    ) {
      if (options.left != null) {
        options.right = el.scrollWidth - el.clientWidth - options.left;
      }

      if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 2
      /* INVERTED */
      ) {
        options.left = options.right;
      } else if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 1
      /* NEGATED */
      ) {
        options.left = options.right ? -options.right : options.right;
      }
    } else {
      if (options.right != null) {
        options.left = el.scrollWidth - el.clientWidth - options.right;
      }
    }

    this._applyScrollToOptions(options);
  }

  _applyScrollToOptions(options) {
    const el = this.elementRef.nativeElement;

    if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.supportsScrollBehavior)()) {
      el.scrollTo(options);
    } else {
      if (options.top != null) {
        el.scrollTop = options.top;
      }

      if (options.left != null) {
        el.scrollLeft = options.left;
      }
    }
  }
  /**
   * Measures the scroll offset relative to the specified edge of the viewport. This method can be
   * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
   * about what scrollLeft means in RTL. The values returned by this method are normalized such that
   * left and right always refer to the left and right side of the scrolling container irrespective
   * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
   * in an RTL context.
   * @param from The edge to measure from.
   */


  measureScrollOffset(from) {
    const LEFT = 'left';
    const RIGHT = 'right';
    const el = this.elementRef.nativeElement;

    if (from == 'top') {
      return el.scrollTop;
    }

    if (from == 'bottom') {
      return el.scrollHeight - el.clientHeight - el.scrollTop;
    } // Rewrite start & end as left or right offsets.


    const isRtl = this.dir && this.dir.value == 'rtl';

    if (from == 'start') {
      from = isRtl ? RIGHT : LEFT;
    } else if (from == 'end') {
      from = isRtl ? LEFT : RIGHT;
    }

    if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 2
    /* INVERTED */
    ) {
      // For INVERTED, scrollLeft is (scrollWidth - clientWidth) when scrolled all the way left and
      // 0 when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      } else {
        return el.scrollLeft;
      }
    } else if (isRtl && (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.getRtlScrollAxisType)() == 1
    /* NEGATED */
    ) {
      // For NEGATED, scrollLeft is -(scrollWidth - clientWidth) when scrolled all the way left and
      // 0 when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollLeft + el.scrollWidth - el.clientWidth;
      } else {
        return -el.scrollLeft;
      }
    } else {
      // For NORMAL, as well as non-RTL contexts, scrollLeft is 0 when scrolled all the way left and
      // (scrollWidth - clientWidth) when scrolled all the way right.
      if (from == LEFT) {
        return el.scrollLeft;
      } else {
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
      }
    }
  }

}

CdkScrollable.ɵfac = function CdkScrollable_Factory(t) {
  return new (t || CdkScrollable)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8));
};

CdkScrollable.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkScrollable,
  selectors: [["", "cdk-scrollable", ""], ["", "cdkScrollable", ""]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkScrollable, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdk-scrollable], [cdkScrollable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: ScrollDispatcher
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, null);
})();
/** Time in ms to throttle the resize events by default. */


const DEFAULT_RESIZE_TIME = 20;
/**
 * Simple utility for getting the bounds of the browser viewport.
 * @docs-private
 */

class ViewportRuler {
  constructor(_platform, ngZone, document) {
    this._platform = _platform;
    /** Stream of viewport change events. */

    this._change = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Event listener that will be used to handle the viewport change events. */

    this._changeListener = event => {
      this._change.next(event);
    };

    this._document = document;
    ngZone.runOutsideAngular(() => {
      if (_platform.isBrowser) {
        const window = this._getWindow(); // Note that bind the events ourselves, rather than going through something like RxJS's
        // `fromEvent` so that we can ensure that they're bound outside of the NgZone.


        window.addEventListener('resize', this._changeListener);
        window.addEventListener('orientationchange', this._changeListener);
      } // Clear the cached position so that the viewport is re-measured next time it is required.
      // We don't need to keep track of the subscription, because it is completed on destroy.


      this.change().subscribe(() => this._viewportSize = null);
    });
  }

  ngOnDestroy() {
    if (this._platform.isBrowser) {
      const window = this._getWindow();

      window.removeEventListener('resize', this._changeListener);
      window.removeEventListener('orientationchange', this._changeListener);
    }

    this._change.complete();
  }
  /** Returns the viewport's width and height. */


  getViewportSize() {
    if (!this._viewportSize) {
      this._updateViewportSize();
    }

    const output = {
      width: this._viewportSize.width,
      height: this._viewportSize.height
    }; // If we're not on a browser, don't cache the size since it'll be mocked out anyway.

    if (!this._platform.isBrowser) {
      this._viewportSize = null;
    }

    return output;
  }
  /** Gets a ClientRect for the viewport's bounds. */


  getViewportRect() {
    // Use the document element's bounding rect rather than the window scroll properties
    // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
    // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
    // conceptual viewports. Under most circumstances these viewports are equivalent, but they
    // can disagree when the page is pinch-zoomed (on devices that support touch).
    // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
    // We use the documentElement instead of the body because, by default (without a css reset)
    // browsers typically give the document body an 8px margin, which is not included in
    // getBoundingClientRect().
    const scrollPosition = this.getViewportScrollPosition();
    const {
      width,
      height
    } = this.getViewportSize();
    return {
      top: scrollPosition.top,
      left: scrollPosition.left,
      bottom: scrollPosition.top + height,
      right: scrollPosition.left + width,
      height,
      width
    };
  }
  /** Gets the (top, left) scroll position of the viewport. */


  getViewportScrollPosition() {
    // While we can get a reference to the fake document
    // during SSR, it doesn't have getBoundingClientRect.
    if (!this._platform.isBrowser) {
      return {
        top: 0,
        left: 0
      };
    } // The top-left-corner of the viewport is determined by the scroll position of the document
    // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
    // whether `document.body` or `document.documentElement` is the scrolled element, so reading
    // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
    // `document.documentElement` works consistently, where the `top` and `left` values will
    // equal negative the scroll position.


    const document = this._document;

    const window = this._getWindow();

    const documentElement = document.documentElement;
    const documentRect = documentElement.getBoundingClientRect();
    const top = -documentRect.top || document.body.scrollTop || window.scrollY || documentElement.scrollTop || 0;
    const left = -documentRect.left || document.body.scrollLeft || window.scrollX || documentElement.scrollLeft || 0;
    return {
      top,
      left
    };
  }
  /**
   * Returns a stream that emits whenever the size of the viewport changes.
   * This stream emits outside of the Angular zone.
   * @param throttleTime Time in milliseconds to throttle the stream.
   */


  change(throttleTime = DEFAULT_RESIZE_TIME) {
    return throttleTime > 0 ? this._change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(throttleTime)) : this._change;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */


  _getWindow() {
    return this._document.defaultView || window;
  }
  /** Updates the cached viewport size. */


  _updateViewportSize() {
    const window = this._getWindow();

    this._viewportSize = this._platform.isBrowser ? {
      width: window.innerWidth,
      height: window.innerHeight
    } : {
      width: 0,
      height: 0
    };
  }

}

ViewportRuler.ɵfac = function ViewportRuler_Factory(t) {
  return new (t || ViewportRuler)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8));
};

ViewportRuler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ViewportRuler,
  factory: ViewportRuler.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewportRuler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__.Platform
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** Checks if the given ranges are equal. */


function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
/**
 * Scheduler to be used for scroll events. Needs to fall back to
 * something that doesn't rely on requestAnimationFrame on environments
 * that don't support it (e.g. server-side rendering).
 */


const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_13__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_14__.asapScheduler;
/** A viewport that virtualizes its scrolling with the help of `CdkVirtualForOf`. */

class CdkVirtualScrollViewport extends CdkScrollable {
  constructor(elementRef, _changeDetectorRef, ngZone, _scrollStrategy, dir, scrollDispatcher, viewportRuler) {
    super(elementRef, scrollDispatcher, ngZone, dir);
    this.elementRef = elementRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._scrollStrategy = _scrollStrategy;
    /** Emits when the viewport is detached from a CdkVirtualForOf. */

    this._detachedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits when the rendered range changes. */

    this._renderedRangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._orientation = 'vertical';
    this._appendOnly = false; // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
    // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
    // depending on how the strategy calculates the scrolled index, it may come at a cost to
    // performance.

    /** Emits when the index of the first element visible in the viewport changes. */

    this.scrolledIndexChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => this._scrollStrategy.scrolledIndexChange.subscribe(index => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
    /** A stream that emits whenever the rendered range changes. */

    this.renderedRangeStream = this._renderedRangeSubject;
    /**
     * The total size of all content (in pixels), including content that is not currently rendered.
     */

    this._totalContentSize = 0;
    /** A string representing the `style.width` property value to be used for the spacer element. */

    this._totalContentWidth = '';
    /** A string representing the `style.height` property value to be used for the spacer element. */

    this._totalContentHeight = '';
    /** The currently rendered range of indices. */

    this._renderedRange = {
      start: 0,
      end: 0
    };
    /** The length of the data bound to this viewport (in number of items). */

    this._dataLength = 0;
    /** The size of the viewport (in pixels). */

    this._viewportSize = 0;
    /** The last rendered content offset that was set. */

    this._renderedContentOffset = 0;
    /**
     * Whether the last rendered content offset was to the end of the content (and therefore needs to
     * be rewritten as an offset to the start of the content).
     */

    this._renderedContentOffsetNeedsRewrite = false;
    /** Whether there is a pending change detection cycle. */

    this._isChangeDetectionPending = false;
    /** A list of functions to run after the next change detection cycle. */

    this._runAfterChangeDetection = [];
    /** Subscription to changes in the viewport size. */

    this._viewportChanges = rxjs__WEBPACK_IMPORTED_MODULE_15__.Subscription.EMPTY;

    if (!_scrollStrategy && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
    }

    this._viewportChanges = viewportRuler.change().subscribe(() => {
      this.checkViewportSize();
    });
  }
  /** The direction the viewport scrolls. */


  get orientation() {
    return this._orientation;
  }

  set orientation(orientation) {
    if (this._orientation !== orientation) {
      this._orientation = orientation;

      this._calculateSpacerSize();
    }
  }
  /**
   * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
   * will be removed.
   */


  get appendOnly() {
    return this._appendOnly;
  }

  set appendOnly(value) {
    this._appendOnly = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
  }

  ngOnInit() {
    super.ngOnInit(); // It's still too early to measure the viewport at this point. Deferring with a promise allows
    // the Viewport to be rendered with the correct size before we measure. We run this outside the
    // zone to avoid causing more change detection cycles. We handle the change detection loop
    // ourselves instead.

    this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
      this._measureViewportSize();

      this._scrollStrategy.attach(this);

      this.elementScrolled().pipe( // Start off with a fake scroll event so we properly detect our initial position.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null), // Collect multiple events into one until the next animation frame. This way if
      // there are multiple scroll events in the same frame we only need to recheck
      // our layout once.
      (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER)).subscribe(() => this._scrollStrategy.onContentScrolled());

      this._markChangeDetectionNeeded();
    }));
  }

  ngOnDestroy() {
    this.detach();

    this._scrollStrategy.detach(); // Complete all subjects


    this._renderedRangeSubject.complete();

    this._detachedSubject.complete();

    this._viewportChanges.unsubscribe();

    super.ngOnDestroy();
  }
  /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */


  attach(forOf) {
    if (this._forOf && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error('CdkVirtualScrollViewport is already attached.');
    } // Subscribe to the data stream of the CdkVirtualForOf to keep track of when the data length
    // changes. Run outside the zone to avoid triggering change detection, since we're managing the
    // change detection loop ourselves.


    this.ngZone.runOutsideAngular(() => {
      this._forOf = forOf;

      this._forOf.dataStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._detachedSubject)).subscribe(data => {
        const newLength = data.length;

        if (newLength !== this._dataLength) {
          this._dataLength = newLength;

          this._scrollStrategy.onDataLengthChanged();
        }

        this._doChangeDetection();
      });
    });
  }
  /** Detaches the current `CdkVirtualForOf`. */


  detach() {
    this._forOf = null;

    this._detachedSubject.next();
  }
  /** Gets the length of the data bound to this viewport (in number of items). */


  getDataLength() {
    return this._dataLength;
  }
  /** Gets the size of the viewport (in pixels). */


  getViewportSize() {
    return this._viewportSize;
  } // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
  // cycle happens. I'm being careful to only call it after the render cycle is complete and before
  // setting it to something else, but its error prone and should probably be split into
  // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.

  /** Get the current rendered range of items. */


  getRenderedRange() {
    return this._renderedRange;
  }
  /**
   * Sets the total size of all content (in pixels), including content that is not currently
   * rendered.
   */


  setTotalContentSize(size) {
    if (this._totalContentSize !== size) {
      this._totalContentSize = size;

      this._calculateSpacerSize();

      this._markChangeDetectionNeeded();
    }
  }
  /** Sets the currently rendered range of indices. */


  setRenderedRange(range) {
    if (!rangesEqual(this._renderedRange, range)) {
      if (this.appendOnly) {
        range = {
          start: 0,
          end: Math.max(this._renderedRange.end, range.end)
        };
      }

      this._renderedRangeSubject.next(this._renderedRange = range);

      this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
    }
  }
  /**
   * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
   */


  getOffsetToRenderedContentStart() {
    return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
  }
  /**
   * Sets the offset from the start of the viewport to either the start or end of the rendered data
   * (in pixels).
   */


  setRenderedContentOffset(offset, to = 'to-start') {
    // For a horizontal viewport in a right-to-left language we need to translate along the x-axis
    // in the negative direction.
    const isRtl = this.dir && this.dir.value == 'rtl';
    const isHorizontal = this.orientation == 'horizontal';
    const axis = isHorizontal ? 'X' : 'Y';
    const axisDirection = isHorizontal && isRtl ? -1 : 1;
    let transform = `translate${axis}(${Number(axisDirection * offset)}px)`; // in appendOnly, we always start from the top

    offset = this.appendOnly && to === 'to-start' ? 0 : offset;
    this._renderedContentOffset = offset;

    if (to === 'to-end') {
      transform += ` translate${axis}(-100%)`; // The viewport should rewrite this as a `to-start` offset on the next render cycle. Otherwise
      // elements will appear to expand in the wrong direction (e.g. `mat-expansion-panel` would
      // expand upward).

      this._renderedContentOffsetNeedsRewrite = true;
    }

    if (this._renderedContentTransform != transform) {
      // We know this value is safe because we parse `offset` with `Number()` before passing it
      // into the string.
      this._renderedContentTransform = transform;

      this._markChangeDetectionNeeded(() => {
        if (this._renderedContentOffsetNeedsRewrite) {
          this._renderedContentOffset -= this.measureRenderedContentSize();
          this._renderedContentOffsetNeedsRewrite = false;
          this.setRenderedContentOffset(this._renderedContentOffset);
        } else {
          this._scrollStrategy.onRenderedOffsetChanged();
        }
      });
    }
  }
  /**
   * Scrolls to the given offset from the start of the viewport. Please note that this is not always
   * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
   * direction, this would be the equivalent of setting a fictional `scrollRight` property.
   * @param offset The offset to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */


  scrollToOffset(offset, behavior = 'auto') {
    const options = {
      behavior
    };

    if (this.orientation === 'horizontal') {
      options.start = offset;
    } else {
      options.top = offset;
    }

    this.scrollTo(options);
  }
  /**
   * Scrolls to the offset for the given index.
   * @param index The index of the element to scroll to.
   * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
   */


  scrollToIndex(index, behavior = 'auto') {
    this._scrollStrategy.scrollToIndex(index, behavior);
  }
  /**
   * Gets the current scroll offset from the start of the viewport (in pixels).
   * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
   *     in horizontal mode.
   */


  measureScrollOffset(from) {
    return from ? super.measureScrollOffset(from) : super.measureScrollOffset(this.orientation === 'horizontal' ? 'start' : 'top');
  }
  /** Measure the combined size of all of the rendered items. */


  measureRenderedContentSize() {
    const contentEl = this._contentWrapper.nativeElement;
    return this.orientation === 'horizontal' ? contentEl.offsetWidth : contentEl.offsetHeight;
  }
  /**
   * Measure the total combined size of the given range. Throws if the range includes items that are
   * not rendered.
   */


  measureRangeSize(range) {
    if (!this._forOf) {
      return 0;
    }

    return this._forOf.measureRangeSize(range, this.orientation);
  }
  /** Update the viewport dimensions and re-render. */


  checkViewportSize() {
    // TODO: Cleanup later when add logic for handling content resize
    this._measureViewportSize();

    this._scrollStrategy.onDataLengthChanged();
  }
  /** Measure the viewport size. */


  _measureViewportSize() {
    const viewportEl = this.elementRef.nativeElement;
    this._viewportSize = this.orientation === 'horizontal' ? viewportEl.clientWidth : viewportEl.clientHeight;
  }
  /** Queue up change detection to run. */


  _markChangeDetectionNeeded(runAfter) {
    if (runAfter) {
      this._runAfterChangeDetection.push(runAfter);
    } // Use a Promise to batch together calls to `_doChangeDetection`. This way if we set a bunch of
    // properties sequentially we only have to run `_doChangeDetection` once at the end.


    if (!this._isChangeDetectionPending) {
      this._isChangeDetectionPending = true;
      this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
        this._doChangeDetection();
      }));
    }
  }
  /** Run change detection. */


  _doChangeDetection() {
    this._isChangeDetectionPending = false; // Apply the content transform. The transform can't be set via an Angular binding because
    // bypassSecurityTrustStyle is banned in Google. However the value is safe, it's composed of
    // string literals, a variable that can only be 'X' or 'Y', and user input that is run through
    // the `Number` function first to coerce it to a numeric value.

    this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform; // Apply changes to Angular bindings. Note: We must call `markForCheck` to run change detection
    // from the root, since the repeated items are content projected in. Calling `detectChanges`
    // instead does not properly check the projected content.

    this.ngZone.run(() => this._changeDetectorRef.markForCheck());
    const runAfterChangeDetection = this._runAfterChangeDetection;
    this._runAfterChangeDetection = [];

    for (const fn of runAfterChangeDetection) {
      fn();
    }
  }
  /** Calculates the `style.width` and `style.height` for the spacer element. */


  _calculateSpacerSize() {
    this._totalContentHeight = this.orientation === 'horizontal' ? '' : `${this._totalContentSize}px`;
    this._totalContentWidth = this.orientation === 'horizontal' ? `${this._totalContentSize}px` : '';
  }

}

CdkVirtualScrollViewport.ɵfac = function CdkVirtualScrollViewport_Factory(t) {
  return new (t || CdkVirtualScrollViewport)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](VIRTUAL_SCROLL_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ViewportRuler));
};

CdkVirtualScrollViewport.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: CdkVirtualScrollViewport,
  selectors: [["cdk-virtual-scroll-viewport"]],
  viewQuery: function CdkVirtualScrollViewport_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._contentWrapper = _t.first);
    }
  },
  hostAttrs: [1, "cdk-virtual-scroll-viewport"],
  hostVars: 4,
  hostBindings: function CdkVirtualScrollViewport_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-virtual-scroll-orientation-horizontal", ctx.orientation === "horizontal")("cdk-virtual-scroll-orientation-vertical", ctx.orientation !== "horizontal");
    }
  },
  inputs: {
    orientation: "orientation",
    appendOnly: "appendOnly"
  },
  outputs: {
    scrolledIndexChange: "scrolledIndexChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: CdkScrollable,
    useExisting: CdkVirtualScrollViewport
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 4,
  consts: [[1, "cdk-virtual-scroll-content-wrapper"], ["contentWrapper", ""], [1, "cdk-virtual-scroll-spacer"]],
  template: function CdkVirtualScrollViewport_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx._totalContentWidth)("height", ctx._totalContentHeight);
    }
  },
  styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualScrollViewport, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'cdk-virtual-scroll-viewport',
      host: {
        'class': 'cdk-virtual-scroll-viewport',
        '[class.cdk-virtual-scroll-orientation-horizontal]': 'orientation === "horizontal"',
        '[class.cdk-virtual-scroll-orientation-vertical]': 'orientation !== "horizontal"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: CdkScrollable,
        useExisting: CdkVirtualScrollViewport
      }],
      template: "<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class=\"cdk-virtual-scroll-content-wrapper\">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class=\"cdk-virtual-scroll-spacer\"\n     [style.width]=\"_totalContentWidth\" [style.height]=\"_totalContentHeight\"></div>\n",
      styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;overflow:auto;contain:strict;transform:translateZ(0);will-change:scroll-position;-webkit-overflow-scrolling:touch}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{position:absolute;top:0;left:0;height:1px;width:1px;transform-origin:0 0}[dir=rtl] .cdk-virtual-scroll-spacer{right:0;left:auto;transform-origin:100% 0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [VIRTUAL_SCROLL_STRATEGY]
      }]
    }, {
      type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.Directionality,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: ScrollDispatcher
    }, {
      type: ViewportRuler
    }];
  }, {
    orientation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    appendOnly: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    scrolledIndexChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    _contentWrapper: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
      args: ['contentWrapper', {
        static: true
      }]
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Helper to extract the offset of a DOM Node in a certain direction. */


function getOffset(orientation, direction, node) {
  const el = node;

  if (!el.getBoundingClientRect) {
    return 0;
  }

  const rect = el.getBoundingClientRect();

  if (orientation === 'horizontal') {
    return direction === 'start' ? rect.left : rect.right;
  }

  return direction === 'start' ? rect.top : rect.bottom;
}
/**
 * A directive similar to `ngForOf` to be used for rendering data inside a virtual scrolling
 * container.
 */


class CdkVirtualForOf {
  constructor(
  /** The view container to add items to. */
  _viewContainerRef,
  /** The template to use when stamping out new items. */
  _template,
  /** The set of available differs. */
  _differs,
  /** The strategy used to render items in the virtual scroll viewport. */
  _viewRepeater,
  /** The virtual scrolling viewport that these items are being rendered in. */
  _viewport, ngZone) {
    this._viewContainerRef = _viewContainerRef;
    this._template = _template;
    this._differs = _differs;
    this._viewRepeater = _viewRepeater;
    this._viewport = _viewport;
    /** Emits when the rendered view of the data changes. */

    this.viewChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Subject that emits when a new DataSource instance is given. */

    this._dataSourceChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** Emits whenever the data in the current DataSource changes. */

    this.dataStream = this._dataSourceChanges.pipe( // Start off with null `DataSource`.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.startWith)(null), // Bundle up the previous and current data sources so we can work with both.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.pairwise)(), // Use `_changeDataSource` to disconnect from the previous data source and connect to the
    // new one, passing back a stream of data changes which we run through `switchMap` to give
    // us a data stream that emits the latest data from whatever the current `DataSource` is.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.switchMap)(([prev, cur]) => this._changeDataSource(prev, cur)), // Replay the last emitted data when someone subscribes.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.shareReplay)(1));
    /** The differ used to calculate changes to the data. */

    this._differ = null;
    /** Whether the rendered data should be updated during the next ngDoCheck cycle. */

    this._needsUpdate = false;
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.dataStream.subscribe(data => {
      this._data = data;

      this._onRenderedDataChange();
    });

    this._viewport.renderedRangeStream.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(range => {
      this._renderedRange = range;

      if (this.viewChange.observers.length) {
        ngZone.run(() => this.viewChange.next(this._renderedRange));
      }

      this._onRenderedDataChange();
    });

    this._viewport.attach(this);
  }
  /** The DataSource to display. */


  get cdkVirtualForOf() {
    return this._cdkVirtualForOf;
  }

  set cdkVirtualForOf(value) {
    this._cdkVirtualForOf = value;

    if ((0,_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.isDataSource)(value)) {
      this._dataSourceChanges.next(value);
    } else {
      // If value is an an NgIterable, convert it to an array.
      this._dataSourceChanges.next(new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__.ArrayDataSource((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.isObservable)(value) ? value : Array.from(value || [])));
    }
  }
  /**
   * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
   * the item and produces a value to be used as the item's identity when tracking changes.
   */


  get cdkVirtualForTrackBy() {
    return this._cdkVirtualForTrackBy;
  }

  set cdkVirtualForTrackBy(fn) {
    this._needsUpdate = true;
    this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : undefined;
  }
  /** The template used to stamp out new elements. */


  set cdkVirtualForTemplate(value) {
    if (value) {
      this._needsUpdate = true;
      this._template = value;
    }
  }
  /**
   * The size of the cache used to store templates that are not being used for re-use later.
   * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
   */


  get cdkVirtualForTemplateCacheSize() {
    return this._viewRepeater.viewCacheSize;
  }

  set cdkVirtualForTemplateCacheSize(size) {
    this._viewRepeater.viewCacheSize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(size);
  }
  /**
   * Measures the combined size (width for horizontal orientation, height for vertical) of all items
   * in the specified range. Throws an error if the range includes items that are not currently
   * rendered.
   */


  measureRangeSize(range, orientation) {
    if (range.start >= range.end) {
      return 0;
    }

    if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Error: attempted to measure an item that isn't rendered.`);
    } // The index into the list of rendered views for the first item in the range.


    const renderedStartIndex = range.start - this._renderedRange.start; // The length of the range we're measuring.

    const rangeLen = range.end - range.start; // Loop over all the views, find the first and land node and compute the size by subtracting
    // the top of the first node from the bottom of the last one.

    let firstNode;
    let lastNode; // Find the first node by starting from the beginning and going forwards.

    for (let i = 0; i < rangeLen; i++) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);

      if (view && view.rootNodes.length) {
        firstNode = lastNode = view.rootNodes[0];
        break;
      }
    } // Find the last node by starting from the end and going backwards.


    for (let i = rangeLen - 1; i > -1; i--) {
      const view = this._viewContainerRef.get(i + renderedStartIndex);

      if (view && view.rootNodes.length) {
        lastNode = view.rootNodes[view.rootNodes.length - 1];
        break;
      }
    }

    return firstNode && lastNode ? getOffset(orientation, 'end', lastNode) - getOffset(orientation, 'start', firstNode) : 0;
  }

  ngDoCheck() {
    if (this._differ && this._needsUpdate) {
      // TODO(mmalerba): We should differentiate needs update due to scrolling and a new portion of
      // this list being rendered (can use simpler algorithm) vs needs update due to data actually
      // changing (need to do this diff).
      const changes = this._differ.diff(this._renderedItems);

      if (!changes) {
        this._updateContext();
      } else {
        this._applyChanges(changes);
      }

      this._needsUpdate = false;
    }
  }

  ngOnDestroy() {
    this._viewport.detach();

    this._dataSourceChanges.next(undefined);

    this._dataSourceChanges.complete();

    this.viewChange.complete();

    this._destroyed.next();

    this._destroyed.complete();

    this._viewRepeater.detach();
  }
  /** React to scroll state changes in the viewport. */


  _onRenderedDataChange() {
    if (!this._renderedRange) {
      return;
    }

    this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);

    if (!this._differ) {
      // Use a wrapper function for the `trackBy` so any new values are
      // picked up automatically without having to recreate the differ.
      this._differ = this._differs.find(this._renderedItems).create((index, item) => {
        return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
      });
    }

    this._needsUpdate = true;
  }
  /** Swap out one `DataSource` for another. */


  _changeDataSource(oldDs, newDs) {
    if (oldDs) {
      oldDs.disconnect(this);
    }

    this._needsUpdate = true;
    return newDs ? newDs.connect(this) : (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
  }
  /** Update the `CdkVirtualForOfContext` for all views. */


  _updateContext() {
    const count = this._data.length;
    let i = this._viewContainerRef.length;

    while (i--) {
      const view = this._viewContainerRef.get(i);

      view.context.index = this._renderedRange.start + i;
      view.context.count = count;

      this._updateComputedContextProperties(view.context);

      view.detectChanges();
    }
  }
  /** Apply changes to the DOM. */


  _applyChanges(changes) {
    this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), record => record.item); // Update $implicit for any items that had an identity change.


    changes.forEachIdentityChange(record => {
      const view = this._viewContainerRef.get(record.currentIndex);

      view.context.$implicit = record.item;
    }); // Update the context variables on all items.

    const count = this._data.length;
    let i = this._viewContainerRef.length;

    while (i--) {
      const view = this._viewContainerRef.get(i);

      view.context.index = this._renderedRange.start + i;
      view.context.count = count;

      this._updateComputedContextProperties(view.context);
    }
  }
  /** Update the computed properties on the `CdkVirtualForOfContext`. */


  _updateComputedContextProperties(context) {
    context.first = context.index === 0;
    context.last = context.index === context.count - 1;
    context.even = context.index % 2 === 0;
    context.odd = !context.even;
  }

  _getEmbeddedViewArgs(record, index) {
    // Note that it's important that we insert the item directly at the proper index,
    // rather than inserting it and the moving it in place, because if there's a directive
    // on the same node that injects the `ViewContainerRef`, Angular will insert another
    // comment node which can throw off the move when it's being repeated for all items.
    return {
      templateRef: this._template,
      context: {
        $implicit: record.item,
        // It's guaranteed that the iterable is not "undefined" or "null" because we only
        // generate views for elements if the "cdkVirtualForOf" iterable has elements.
        cdkVirtualForOf: this._cdkVirtualForOf,
        index: -1,
        count: -1,
        first: false,
        last: false,
        odd: false,
        even: false
      },
      index
    };
  }

}

CdkVirtualForOf.ɵfac = function CdkVirtualForOf_Factory(t) {
  return new (t || CdkVirtualForOf)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](CdkVirtualScrollViewport, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

CdkVirtualForOf.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: CdkVirtualForOf,
  selectors: [["", "cdkVirtualFor", "", "cdkVirtualForOf", ""]],
  inputs: {
    cdkVirtualForOf: "cdkVirtualForOf",
    cdkVirtualForTrackBy: "cdkVirtualForTrackBy",
    cdkVirtualForTemplate: "cdkVirtualForTemplate",
    cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
    useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy
  }])]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkVirtualForOf, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[cdkVirtualFor][cdkVirtualForOf]',
      providers: [{
        provide: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY,
        useClass: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy
      }]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.IterableDiffers
    }, {
      type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._RecycleViewRepeaterStrategy,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_20__._VIEW_REPEATER_STRATEGY]
      }]
    }, {
      type: CdkVirtualScrollViewport,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    cdkVirtualForOf: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTrackBy: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    cdkVirtualForTemplateCacheSize: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class CdkScrollableModule {}

CdkScrollableModule.ɵfac = function CdkScrollableModule_Factory(t) {
  return new (t || CdkScrollableModule)();
};

CdkScrollableModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CdkScrollableModule
});
CdkScrollableModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CdkScrollableModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      exports: [CdkScrollable],
      declarations: [CdkScrollable]
    }]
  }], null, null);
})();
/**
 * @docs-primary-export
 */


class ScrollingModule {}

ScrollingModule.ɵfac = function ScrollingModule_Factory(t) {
  return new (t || ScrollingModule)();
};

ScrollingModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ScrollingModule
});
ScrollingModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollingModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__.BidiModule, CdkScrollableModule, CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport],
      declarations: [CdkFixedSizeVirtualScroll, CdkVirtualForOf, CdkVirtualScrollViewport]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 8784:
/*!********************************************************!*\
  !*** ./node_modules/@angular/common/fesm2015/http.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": () => (/* binding */ HTTP_INTERCEPTORS),
/* harmony export */   "HttpBackend": () => (/* binding */ HttpBackend),
/* harmony export */   "HttpClient": () => (/* binding */ HttpClient),
/* harmony export */   "HttpClientJsonpModule": () => (/* binding */ HttpClientJsonpModule),
/* harmony export */   "HttpClientModule": () => (/* binding */ HttpClientModule),
/* harmony export */   "HttpClientXsrfModule": () => (/* binding */ HttpClientXsrfModule),
/* harmony export */   "HttpContext": () => (/* binding */ HttpContext),
/* harmony export */   "HttpContextToken": () => (/* binding */ HttpContextToken),
/* harmony export */   "HttpErrorResponse": () => (/* binding */ HttpErrorResponse),
/* harmony export */   "HttpEventType": () => (/* binding */ HttpEventType),
/* harmony export */   "HttpHandler": () => (/* binding */ HttpHandler),
/* harmony export */   "HttpHeaderResponse": () => (/* binding */ HttpHeaderResponse),
/* harmony export */   "HttpHeaders": () => (/* binding */ HttpHeaders),
/* harmony export */   "HttpParams": () => (/* binding */ HttpParams),
/* harmony export */   "HttpRequest": () => (/* binding */ HttpRequest),
/* harmony export */   "HttpResponse": () => (/* binding */ HttpResponse),
/* harmony export */   "HttpResponseBase": () => (/* binding */ HttpResponseBase),
/* harmony export */   "HttpUrlEncodingCodec": () => (/* binding */ HttpUrlEncodingCodec),
/* harmony export */   "HttpXhrBackend": () => (/* binding */ HttpXhrBackend),
/* harmony export */   "HttpXsrfTokenExtractor": () => (/* binding */ HttpXsrfTokenExtractor),
/* harmony export */   "JsonpClientBackend": () => (/* binding */ JsonpClientBackend),
/* harmony export */   "JsonpInterceptor": () => (/* binding */ JsonpInterceptor),
/* harmony export */   "XhrFactory": () => (/* binding */ XhrFactory),
/* harmony export */   "ɵHttpInterceptingHandler": () => (/* binding */ HttpInterceptingHandler)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1133);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/**
 * @license Angular v13.3.5
 * (c) 2010-2022 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */

class HttpHandler {}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */


class HttpBackend {}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */


class HttpHeaders {
  /**  Constructs a new HTTP header object with the given values.*/
  constructor(headers) {
    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */

    this.lazyUpdate = null;

    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = () => {
        this.headers = new Map();
        headers.split('\n').forEach(line => {
          const index = line.indexOf(':');

          if (index > 0) {
            const name = line.slice(0, index);
            const key = name.toLowerCase();
            const value = line.slice(index + 1).trim();
            this.maybeSetNormalizedName(name, key);

            if (this.headers.has(key)) {
              this.headers.get(key).push(value);
            } else {
              this.headers.set(key, [value]);
            }
          }
        });
      };
    } else {
      this.lazyInit = () => {
        this.headers = new Map();
        Object.keys(headers).forEach(name => {
          let values = headers[name];
          const key = name.toLowerCase();

          if (typeof values === 'string') {
            values = [values];
          }

          if (values.length > 0) {
            this.headers.set(key, values);
            this.maybeSetNormalizedName(name, key);
          }
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */


  has(name) {
    this.init();
    return this.headers.has(name.toLowerCase());
  }
  /**
   * Retrieves the first value of a given header.
   *
   * @param name The header name.
   *
   * @returns The value string if the header exists, null otherwise
   */


  get(name) {
    this.init();
    const values = this.headers.get(name.toLowerCase());
    return values && values.length > 0 ? values[0] : null;
  }
  /**
   * Retrieves the names of the headers.
   *
   * @returns A list of header names.
   */


  keys() {
    this.init();
    return Array.from(this.normalizedNames.values());
  }
  /**
   * Retrieves a list of values for a given header.
   *
   * @param name The header name from which to retrieve values.
   *
   * @returns A string of values if the header exists, null otherwise.
   */


  getAll(name) {
    this.init();
    return this.headers.get(name.toLowerCase()) || null;
  }
  /**
   * Appends a new value to the existing set of values for a header
   * and returns them in a clone of the original instance.
   *
   * @param name The header name for which to append the values.
   * @param value The value to append.
   *
   * @returns A clone of the HTTP headers object with the value appended to the given header.
   */


  append(name, value) {
    return this.clone({
      name,
      value,
      op: 'a'
    });
  }
  /**
   * Sets or modifies a value for a given header in a clone of the original instance.
   * If the header already exists, its value is replaced with the given value
   * in the returned object.
   *
   * @param name The header name.
   * @param value The value or values to set or overide for the given header.
   *
   * @returns A clone of the HTTP headers object with the newly set header value.
   */


  set(name, value) {
    return this.clone({
      name,
      value,
      op: 's'
    });
  }
  /**
   * Deletes values for a given header in a clone of the original instance.
   *
   * @param name The header name.
   * @param value The value or values to delete for the given header.
   *
   * @returns A clone of the HTTP headers object with the given value deleted.
   */


  delete(name, value) {
    return this.clone({
      name,
      value,
      op: 'd'
    });
  }

  maybeSetNormalizedName(name, lcName) {
    if (!this.normalizedNames.has(lcName)) {
      this.normalizedNames.set(lcName, name);
    }
  }

  init() {
    if (!!this.lazyInit) {
      if (this.lazyInit instanceof HttpHeaders) {
        this.copyFrom(this.lazyInit);
      } else {
        this.lazyInit();
      }

      this.lazyInit = null;

      if (!!this.lazyUpdate) {
        this.lazyUpdate.forEach(update => this.applyUpdate(update));
        this.lazyUpdate = null;
      }
    }
  }

  copyFrom(other) {
    other.init();
    Array.from(other.headers.keys()).forEach(key => {
      this.headers.set(key, other.headers.get(key));
      this.normalizedNames.set(key, other.normalizedNames.get(key));
    });
  }

  clone(update) {
    const clone = new HttpHeaders();
    clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
    clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
    return clone;
  }

  applyUpdate(update) {
    const key = update.name.toLowerCase();

    switch (update.op) {
      case 'a':
      case 's':
        let value = update.value;

        if (typeof value === 'string') {
          value = [value];
        }

        if (value.length === 0) {
          return;
        }

        this.maybeSetNormalizedName(update.name, key);
        const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
        base.push(...value);
        this.headers.set(key, base);
        break;

      case 'd':
        const toDelete = update.value;

        if (!toDelete) {
          this.headers.delete(key);
          this.normalizedNames.delete(key);
        } else {
          let existing = this.headers.get(key);

          if (!existing) {
            return;
          }

          existing = existing.filter(value => toDelete.indexOf(value) === -1);

          if (existing.length === 0) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            this.headers.set(key, existing);
          }
        }

        break;
    }
  }
  /**
   * @internal
   */


  forEach(fn) {
    this.init();
    Array.from(this.normalizedNames.keys()).forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */


class HttpUrlEncodingCodec {
  /**
   * Encodes a key name for a URL parameter or query-string.
   * @param key The key name.
   * @returns The encoded key name.
   */
  encodeKey(key) {
    return standardEncoding(key);
  }
  /**
   * Encodes the value of a URL parameter or query-string.
   * @param value The value.
   * @returns The encoded value.
   */


  encodeValue(value) {
    return standardEncoding(value);
  }
  /**
   * Decodes an encoded URL parameter or query-string key.
   * @param key The encoded key name.
   * @returns The decoded key name.
   */


  decodeKey(key) {
    return decodeURIComponent(key);
  }
  /**
   * Decodes an encoded URL parameter or query-string value.
   * @param value The encoded value.
   * @returns The decoded value.
   */


  decodeValue(value) {
    return decodeURIComponent(value);
  }

}

function paramParser(rawParams, codec) {
  const map = new Map();

  if (rawParams.length > 0) {
    // The `window.location.search` can be used while creating an instance of the `HttpParams` class
    // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
    // may start with the `?` char, so we strip it if it's present.
    const params = rawParams.replace(/^\?/, '').split('&');
    params.forEach(param => {
      const eqIdx = param.indexOf('=');
      const [key, val] = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
      const list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }

  return map;
}
/**
 * Encode input string with standard encodeURIComponent and then un-encode specific characters.
 */


const STANDARD_ENCODING_REGEX = /%(\d[a-f0-9])/gi;
const STANDARD_ENCODING_REPLACEMENTS = {
  '40': '@',
  '3A': ':',
  '24': '$',
  '2C': ',',
  '3B': ';',
  '2B': '+',
  '3D': '=',
  '3F': '?',
  '2F': '/'
};

function standardEncoding(v) {
  return encodeURIComponent(v).replace(STANDARD_ENCODING_REGEX, (s, t) => {
    var _a;

    return (_a = STANDARD_ENCODING_REPLACEMENTS[t]) !== null && _a !== void 0 ? _a : s;
  });
}

function valueToString(value) {
  return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */


class HttpParams {
  constructor(options = {}) {
    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();

    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error(`Cannot specify both fromString and fromObject.`);
      }

      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(key => {
        const value = options.fromObject[key];
        this.map.set(key, Array.isArray(value) ? value : [value]);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */


  has(param) {
    this.init();
    return this.map.has(param);
  }
  /**
   * Retrieves the first value for a parameter.
   * @param param The parameter name.
   * @returns The first value of the given parameter,
   * or `null` if the parameter is not present.
   */


  get(param) {
    this.init();
    const res = this.map.get(param);
    return !!res ? res[0] : null;
  }
  /**
   * Retrieves all values for a  parameter.
   * @param param The parameter name.
   * @returns All values in a string array,
   * or `null` if the parameter not present.
   */


  getAll(param) {
    this.init();
    return this.map.get(param) || null;
  }
  /**
   * Retrieves all the parameters for this body.
   * @returns The parameter names in a string array.
   */


  keys() {
    this.init();
    return Array.from(this.map.keys());
  }
  /**
   * Appends a new value to existing values for a parameter.
   * @param param The parameter name.
   * @param value The new value to add.
   * @return A new body with the appended value.
   */


  append(param, value) {
    return this.clone({
      param,
      value,
      op: 'a'
    });
  }
  /**
   * Constructs a new body with appended values for the given parameter name.
   * @param params parameters and values
   * @return A new body with the new value.
   */


  appendAll(params) {
    const updates = [];
    Object.keys(params).forEach(param => {
      const value = params[param];

      if (Array.isArray(value)) {
        value.forEach(_value => {
          updates.push({
            param,
            value: _value,
            op: 'a'
          });
        });
      } else {
        updates.push({
          param,
          value: value,
          op: 'a'
        });
      }
    });
    return this.clone(updates);
  }
  /**
   * Replaces the value for a parameter.
   * @param param The parameter name.
   * @param value The new value.
   * @return A new body with the new value.
   */


  set(param, value) {
    return this.clone({
      param,
      value,
      op: 's'
    });
  }
  /**
   * Removes a given value or all values from a parameter.
   * @param param The parameter name.
   * @param value The value to remove, if provided.
   * @return A new body with the given value removed, or with all values
   * removed if no value is specified.
   */


  delete(param, value) {
    return this.clone({
      param,
      value,
      op: 'd'
    });
  }
  /**
   * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
   * separated by `&`s.
   */


  toString() {
    this.init();
    return this.keys().map(key => {
      const eKey = this.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
      // `b: []` produces `''`
      // `c: ['1', '2']` produces `'c=1&c=2'`

      return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value)).join('&');
    }) // filter out empty values because `b: []` produces `''`
    // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
    .filter(param => param !== '').join('&');
  }

  clone(update) {
    const clone = new HttpParams({
      encoder: this.encoder
    });
    clone.cloneFrom = this.cloneFrom || this;
    clone.updates = (this.updates || []).concat(update);
    return clone;
  }

  init() {
    if (this.map === null) {
      this.map = new Map();
    }

    if (this.cloneFrom !== null) {
      this.cloneFrom.init();
      this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
      this.updates.forEach(update => {
        switch (update.op) {
          case 'a':
          case 's':
            const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
            base.push(valueToString(update.value));
            this.map.set(update.param, base);
            break;

          case 'd':
            if (update.value !== undefined) {
              let base = this.map.get(update.param) || [];
              const idx = base.indexOf(valueToString(update.value));

              if (idx !== -1) {
                base.splice(idx, 1);
              }

              if (base.length > 0) {
                this.map.set(update.param, base);
              } else {
                this.map.delete(update.param);
              }
            } else {
              this.map.delete(update.param);
              break;
            }

        }
      });
      this.cloneFrom = this.updates = null;
    }
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */


class HttpContextToken {
  constructor(defaultValue) {
    this.defaultValue = defaultValue;
  }

}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */


class HttpContext {
  constructor() {
    this.map = new Map();
  }
  /**
   * Store a value in the context. If a value is already present it will be overwritten.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   * @param value The value to store.
   *
   * @returns A reference to itself for easy chaining.
   */


  set(token, value) {
    this.map.set(token, value);
    return this;
  }
  /**
   * Retrieve the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns The stored value or default if one is defined.
   */


  get(token) {
    if (!this.map.has(token)) {
      this.map.set(token, token.defaultValue());
    }

    return this.map.get(token);
  }
  /**
   * Delete the value associated with the given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns A reference to itself for easy chaining.
   */


  delete(token) {
    this.map.delete(token);
    return this;
  }
  /**
   * Checks for existence of a given token.
   *
   * @param token The reference to an instance of `HttpContextToken`.
   *
   * @returns True if the token exists, false otherwise.
   */


  has(token) {
    return this.map.has(token);
  }
  /**
   * @returns a list of tokens currently stored in the context.
   */


  keys() {
    return this.map.keys();
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Determine whether the given HTTP method may include a body.
 */


function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;

    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */


function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */


function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */


function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */


function isUrlSearchParams(value) {
  return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */


class HttpRequest {
  constructor(method, url, third, fourth) {
    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */

    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */

    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */

    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */

    this.responseType = 'json';
    this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.

    let options; // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.

    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    } // If options have been passed, interpret them.


    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

      if (!!options.responseType) {
        this.responseType = options.responseType;
      } // Override headers if they're provided.


      if (!!options.headers) {
        this.headers = options.headers;
      }

      if (!!options.context) {
        this.context = options.context;
      }

      if (!!options.params) {
        this.params = options.params;
      }
    } // If no headers have been passed in, construct a new HttpHeaders instance.


    if (!this.headers) {
      this.headers = new HttpHeaders();
    } // If no context have been passed in, construct a new HttpContext instance.


    if (!this.context) {
      this.context = new HttpContext();
    } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      const params = this.params.toString();

      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        const qIdx = url.indexOf('?'); // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.

        const sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */


  serializeBody() {
    // If no body is present, no need to serialize it.
    if (this.body === null) {
      return null;
    } // Check whether the body is already in a serialized form. If so,
    // it can just be returned directly.


    if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || isUrlSearchParams(this.body) || typeof this.body === 'string') {
      return this.body;
    } // Check whether the body is an instance of HttpUrlEncodedParams.


    if (this.body instanceof HttpParams) {
      return this.body.toString();
    } // Check whether the body is an object or array, and serialize with JSON if so.


    if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
      return JSON.stringify(this.body);
    } // Fall back on toString() for everything else.


    return this.body.toString();
  }
  /**
   * Examine the body and attempt to infer an appropriate MIME type
   * for it.
   *
   * If no such type can be inferred, this method will return `null`.
   */


  detectContentTypeHeader() {
    // An empty body has no content type.
    if (this.body === null) {
      return null;
    } // FormData bodies rely on the browser's content type assignment.


    if (isFormData(this.body)) {
      return null;
    } // Blobs usually have their own content type. If it doesn't, then
    // no type can be inferred.


    if (isBlob(this.body)) {
      return this.body.type || null;
    } // Array buffers have unknown contents and thus no type can be inferred.


    if (isArrayBuffer(this.body)) {
      return null;
    } // Technically, strings could be a form of JSON data, but it's safe enough
    // to assume they're plain strings.


    if (typeof this.body === 'string') {
      return 'text/plain';
    } // `HttpUrlEncodedParams` has its own content-type.


    if (this.body instanceof HttpParams) {
      return 'application/x-www-form-urlencoded;charset=UTF-8';
    } // Arrays, objects, boolean and numbers will be encoded as JSON.


    if (typeof this.body === 'object' || typeof this.body === 'number' || typeof this.body === 'boolean') {
      return 'application/json';
    } // No type could be inferred.


    return null;
  }

  clone(update = {}) {
    var _a; // For method, url, and responseType, take the current value unless
    // it is overridden in the update hash.


    const method = update.method || this.method;
    const url = update.url || this.url;
    const responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
    // whatever current body is present is being overridden with an empty
    // body, whereas an `undefined` value in update.body implies no
    // override.

    const body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
    // `false` and `undefined` in the update args.

    const withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
    const reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
    // `setParams` are used.

    let headers = update.headers || this.headers;
    let params = update.params || this.params; // Pass on context if needed

    const context = (_a = update.context) !== null && _a !== void 0 ? _a : this.context; // Check whether the caller has asked to add headers.

    if (update.setHeaders !== undefined) {
      // Set every requested header.
      headers = Object.keys(update.setHeaders).reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
    } // Check whether the caller has asked to set params.


    if (update.setParams) {
      // Set every requested param.
      params = Object.keys(update.setParams).reduce((params, param) => params.set(param, update.setParams[param]), params);
    } // Finally, construct the new HttpRequest using the pieces from above.


    return new HttpRequest(method, url, body, {
      params,
      headers,
      context,
      reportProgress,
      responseType,
      withCredentials
    });
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */


var HttpEventType;

(function (HttpEventType) {
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   */

  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */

  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */

  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */

  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */

  HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */


class HttpResponseBase {
  /**
   * Super-constructor for all responses.
   *
   * The single parameter accepted is an initialization hash. Any properties
   * of the response passed there will override the default values.
   */
  constructor(init, defaultStatus = 200
  /* Ok */
  , defaultStatusText = 'OK') {
    // If the hash has values passed, use them to initialize the response.
    // Otherwise use the default values.
    this.headers = init.headers || new HttpHeaders();
    this.status = init.status !== undefined ? init.status : defaultStatus;
    this.statusText = init.statusText || defaultStatusText;
    this.url = init.url || null; // Cache the ok value to avoid defining a getter.

    this.ok = this.status >= 200 && this.status < 300;
  }

}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */


class HttpHeaderResponse extends HttpResponseBase {
  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.ResponseHeader;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */


  clone(update = {}) {
    // Perform a straightforward initialization of the new HttpHeaderResponse,
    // overriding the current parameters with new ones if given.
    return new HttpHeaderResponse({
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }

}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */


class HttpResponse extends HttpResponseBase {
  /**
   * Construct a new `HttpResponse`.
   */
  constructor(init = {}) {
    super(init);
    this.type = HttpEventType.Response;
    this.body = init.body !== undefined ? init.body : null;
  }

  clone(update = {}) {
    return new HttpResponse({
      body: update.body !== undefined ? update.body : this.body,
      headers: update.headers || this.headers,
      status: update.status !== undefined ? update.status : this.status,
      statusText: update.statusText || this.statusText,
      url: update.url || this.url || undefined
    });
  }

}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */


class HttpErrorResponse extends HttpResponseBase {
  constructor(init) {
    // Initialize with a default status of 0 / Unknown Error.
    super(init, 0, 'Unknown Error');
    this.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */

    this.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.

    if (this.status >= 200 && this.status < 300) {
      this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
    } else {
      this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
    }

    this.error = init.error || null;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */


function addBody(options, body) {
  return {
    body,
    headers: options.headers,
    context: options.context,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */


class HttpClient {
  constructor(handler) {
    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */


  request(first, url, options = {}) {
    let req; // First, check whether the primary argument is an instance of `HttpRequest`.

    if (first instanceof HttpRequest) {
      // It is. The other arguments must be undefined (per the signatures) and can be
      // ignored.
      req = first;
    } else {
      // It's a string, so it represents a URL. Construct a request based on it,
      // and incorporate the remaining arguments (assuming `GET` unless a method is
      // provided.
      // Figure out the headers.
      let headers = undefined;

      if (options.headers instanceof HttpHeaders) {
        headers = options.headers;
      } else {
        headers = new HttpHeaders(options.headers);
      } // Sort out parameters.


      let params = undefined;

      if (!!options.params) {
        if (options.params instanceof HttpParams) {
          params = options.params;
        } else {
          params = new HttpParams({
            fromObject: options.params
          });
        }
      } // Construct the request.


      req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
        headers,
        context: options.context,
        params,
        reportProgress: options.reportProgress,
        // By default, JSON is assumed to be returned for all calls.
        responseType: options.responseType || 'json',
        withCredentials: options.withCredentials
      });
    } // Start with an Observable.of() the initial request, and run the handler (which
    // includes all interceptors) inside a concatMap(). This way, the handler runs
    // inside an Observable chain, which causes interceptors to be re-run on every
    // subscription (this also makes retries re-run the handler, including interceptors).


    const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)(req => this.handler.handle(req))); // If coming via the API signature which accepts a previously constructed HttpRequest,
    // the only option is to get the event stream. Otherwise, return the event stream if
    // that is what was requested.

    if (first instanceof HttpRequest || options.observe === 'events') {
      return events$;
    } // The requested stream contains either the full response or the body. In either
    // case, the first step is to filter the event stream to extract a stream of
    // responses(s).


    const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof HttpResponse)); // Decide which stream to return.

    switch (options.observe || 'body') {
      case 'body':
        // The requested stream is the body. Map the response stream to the response
        // body. This could be done more simply, but a misbehaving interceptor might
        // transform the response body into a different format and ignore the requested
        // responseType. Guard against this by validating that the response is of the
        // requested type.
        switch (req.responseType) {
          case 'arraybuffer':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is an ArrayBuffer.
              if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                throw new Error('Response is not an ArrayBuffer.');
              }

              return res.body;
            }));

          case 'blob':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a Blob.
              if (res.body !== null && !(res.body instanceof Blob)) {
                throw new Error('Response is not a Blob.');
              }

              return res.body;
            }));

          case 'text':
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => {
              // Validate that the body is a string.
              if (res.body !== null && typeof res.body !== 'string') {
                throw new Error('Response is not a string.');
              }

              return res.body;
            }));

          case 'json':
          default:
            // No validation needed for JSON responses, as they can be of any type.
            return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(res => res.body));
        }

      case 'response':
        // The response stream was requested directly, so return it.
        return res$;

      default:
        // Guard against new future observe types being added.
        throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
    }
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `DELETE` request to execute on the server. See the individual overloads for
   * details on the return type.
   *
   * @param url     The endpoint URL.
   * @param options The HTTP options to send with the request.
   *
   */


  delete(url, options = {}) {
    return this.request('DELETE', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `GET` request to execute on the server. See the individual overloads for
   * details on the return type.
   */


  get(url, options = {}) {
    return this.request('GET', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `HEAD` request to execute on the server. The `HEAD` method returns
   * meta information about the resource without transferring the
   * resource itself. See the individual overloads for
   * details on the return type.
   */


  head(url, options = {}) {
    return this.request('HEAD', url, options);
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes a request with the special method
   * `JSONP` to be dispatched via the interceptor pipeline.
   * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
   * API endpoints that don't support newer,
   * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
   * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
   * requests even if the API endpoint is not located on the same domain (origin) as the client-side
   * application making the request.
   * The endpoint API must support JSONP callback for JSONP requests to work.
   * The resource API returns the JSON response wrapped in a callback function.
   * You can pass the callback function name as one of the query parameters.
   * Note that JSONP requests can only be used with `GET` requests.
   *
   * @param url The resource URL.
   * @param callbackParam The callback function name.
   *
   */


  jsonp(url, callbackParam) {
    return this.request('JSONP', url, {
      params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
      observe: 'body',
      responseType: 'json'
    });
  }
  /**
   * Constructs an `Observable` that, when subscribed, causes the configured
   * `OPTIONS` request to execute on the server. This method allows the client
   * to determine the supported HTTP methods and other capabilities of an endpoint,
   * without implying a resource action. See the individual overloads for
   * details on the return type.
   */


  options(url, options = {}) {
    return this.request('OPTIONS', url, options);
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PATCH` request to execute on the server. See the individual overloads for
   * details on the return type.
   */


  patch(url, body, options = {}) {
    return this.request('PATCH', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `POST` request to execute on the server. The server responds with the location of
   * the replaced resource. See the individual overloads for
   * details on the return type.
   */


  post(url, body, options = {}) {
    return this.request('POST', url, addBody(options, body));
  }
  /**
   * Constructs an observable that, when subscribed, causes the configured
   * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
   * with a new set of values.
   * See the individual overloads for details on the return type.
   */


  put(url, body, options = {}) {
    return this.request('PUT', url, addBody(options, body));
  }

}

HttpClient.ɵfac = function HttpClient_Factory(t) {
  return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpHandler));
};

HttpClient.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpClient,
  factory: HttpClient.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClient, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpHandler
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */


class HttpInterceptorHandler {
  constructor(next, interceptor) {
    this.next = next;
    this.interceptor = interceptor;
  }

  handle(req) {
    return this.interceptor.intercept(req, this.next);
  }

}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */


const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');

class NoopInterceptor {
  intercept(req, next) {
    return next.handle(req);
  }

}

NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
  return new (t || NoopInterceptor)();
};

NoopInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: NoopInterceptor,
  factory: NoopInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NoopInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.


let nextRequestId = 0;
/**
 * When a pending <script> is unsubscribed we'll move it to this document, so it won't be
 * executed.
 */

let foreignDocument; // Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.

const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.

const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */

class JsonpCallbackContext {}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */


class JsonpClientBackend {
  constructor(callbackMap, document) {
    this.callbackMap = callbackMap;
    this.document = document;
    /**
     * A resolved promise that can be used to schedule microtasks in the event handlers.
     */

    this.resolvedPromise = Promise.resolve();
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */


  nextCallback() {
    return `ng_jsonp_callback_${nextRequestId++}`;
  }
  /**
   * Processes a JSONP request and returns an event stream of the results.
   * @param req The request object.
   * @returns An observable of the response events.
   *
   */


  handle(req) {
    // Firstly, check both the method and response type. If either doesn't match
    // then the request was improperly routed here and cannot be handled.
    if (req.method !== 'JSONP') {
      throw new Error(JSONP_ERR_WRONG_METHOD);
    } else if (req.responseType !== 'json') {
      throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
    } // Everything else happens inside the Observable boundary.


    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // The first step to make a request is to generate the callback name, and replace the
      // callback placeholder in the URL with the name. Care has to be taken here to ensure
      // a trailing &, if matched, gets inserted back into the URL in the correct place.
      const callback = this.nextCallback();
      const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`); // Construct the <script> tag and point it at the URL.

      const node = this.document.createElement('script');
      node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
      // are closed over and track state across those callbacks.
      // The response object, if one has been received, or null otherwise.

      let body = null; // Whether the response callback has been called.

      let finished = false; // Set the response callback in this.callbackMap (which will be the window
      // object in the browser. The script being loaded via the <script> tag will
      // eventually call this callback.

      this.callbackMap[callback] = data => {
        // Data has been received from the JSONP script. Firstly, delete this callback.
        delete this.callbackMap[callback]; // Set state to indicate data was received.

        body = data;
        finished = true;
      }; // cleanup() is a utility closure that removes the <script> from the page and
      // the response callback from the window. This logic is used in both the
      // success, error, and cancellation paths, so it's extracted out for convenience.


      const cleanup = () => {
        // Remove the <script> tag if it's still on the page.
        if (node.parentNode) {
          node.parentNode.removeChild(node);
        } // Remove the response callback from the callbackMap (window object in the
        // browser).


        delete this.callbackMap[callback];
      }; // onLoad() is the success callback which runs after the response callback
      // if the JSONP script loads successfully. The event itself is unimportant.
      // If something went wrong, onLoad() may run without the response callback
      // having been invoked.


      const onLoad = event => {
        // We wrap it in an extra Promise, to ensure the microtask
        // is scheduled after the loaded endpoint has executed any potential microtask itself,
        // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
        this.resolvedPromise.then(() => {
          // Cleanup the page.
          cleanup(); // Check whether the response callback has run.

          if (!finished) {
            // It hasn't, something went wrong with the request. Return an error via
            // the Observable error path. All JSONP errors have status 0.
            observer.error(new HttpErrorResponse({
              url,
              status: 0,
              statusText: 'JSONP Error',
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          } // Success. body either contains the response body or null if none was
          // returned.


          observer.next(new HttpResponse({
            body,
            status: 200
            /* Ok */
            ,
            statusText: 'OK',
            url
          })); // Complete the stream, the response is over.

          observer.complete();
        });
      }; // onError() is the error callback, which runs if the script returned generates
      // a Javascript error. It emits the error via the Observable error channel as
      // a HttpErrorResponse.


      const onError = error => {
        cleanup(); // Wrap the error in a HttpErrorResponse.

        observer.error(new HttpErrorResponse({
          error,
          status: 0,
          statusText: 'JSONP Error',
          url
        }));
      }; // Subscribe to both the success (load) and error events on the <script> tag,
      // and add it to the page.


      node.addEventListener('load', onLoad);
      node.addEventListener('error', onError);
      this.document.body.appendChild(node); // The request has now been successfully sent.

      observer.next({
        type: HttpEventType.Sent
      }); // Cancellation handler.

      return () => {
        if (!finished) {
          this.removeListeners(node);
        } // And finally, clean up the page.


        cleanup();
      };
    });
  }

  removeListeners(script) {
    // Issue #34818
    // Changing <script>'s ownerDocument will prevent it from execution.
    // https://html.spec.whatwg.org/multipage/scripting.html#execute-the-script-block
    if (!foreignDocument) {
      foreignDocument = this.document.implementation.createHTMLDocument();
    }

    foreignDocument.adoptNode(script);
  }

}

JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
  return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT));
};

JsonpClientBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpClientBackend,
  factory: JsonpClientBackend.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpClientBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpCallbackContext
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }];
  }, null);
})();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */


class JsonpInterceptor {
  constructor(jsonp) {
    this.jsonp = jsonp;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param req The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */


  intercept(req, next) {
    if (req.method === 'JSONP') {
      return this.jsonp.handle(req);
    } // Fall through for normal HTTP requests.


    return next.handle(req);
  }

}

JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
  return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpClientBackend));
};

JsonpInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: JsonpInterceptor,
  factory: JsonpInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: JsonpClientBackend
    }];
  }, null);
})();

const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */

function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }

  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }

  return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */


class HttpXhrBackend {
  constructor(xhrFactory) {
    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */


  handle(req) {
    // Quick check to give a better error message when a user attempts to use
    // HttpClient.jsonp() without installing the HttpClientJsonpModule
    if (req.method === 'JSONP') {
      throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
    } // Everything happens on Observable subscription.


    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      // Start by setting up the XHR object with request method, URL, and withCredentials flag.
      const xhr = this.xhrFactory.build();
      xhr.open(req.method, req.urlWithParams);

      if (!!req.withCredentials) {
        xhr.withCredentials = true;
      } // Add all the requested headers.


      req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(','))); // Add an Accept header if one isn't present already.

      if (!req.headers.has('Accept')) {
        xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      } // Auto-detect the Content-Type header if one isn't present already.


      if (!req.headers.has('Content-Type')) {
        const detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

        if (detectedType !== null) {
          xhr.setRequestHeader('Content-Type', detectedType);
        }
      } // Set the responseType if one was requested.


      if (req.responseType) {
        const responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
        // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
        // xhr.response will be null, and xhr.responseText cannot be accessed to
        // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
        // is parsed by first requesting text and then applying JSON.parse.

        xhr.responseType = responseType !== 'json' ? responseType : 'text';
      } // Serialize the request body if one is present. If not, this will be set to null.


      const reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
      // in two events - the HttpHeaderResponse event and the full HttpResponse
      // event. However, since response headers don't change in between these
      // two events, it doesn't make sense to parse them twice. So headerResponse
      // caches the data extracted from the response whenever it's first parsed,
      // to ensure parsing isn't duplicated.

      let headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
      // state, and memoizes it into headerResponse.

      const partialFromXhr = () => {
        if (headerResponse !== null) {
          return headerResponse;
        }

        const statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

        const headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
        // request URL.

        const url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

        headerResponse = new HttpHeaderResponse({
          headers,
          status: xhr.status,
          statusText,
          url
        });
        return headerResponse;
      }; // Next, a few closures are defined for the various events which XMLHttpRequest can
      // emit. This allows them to be unregistered as event listeners later.
      // First up is the load event, which represents a response being fully available.


      const onLoad = () => {
        // Read response state from the memoized partial data.
        let {
          headers,
          status,
          statusText,
          url
        } = partialFromXhr(); // The body will be read out if present.

        let body = null;

        if (status !== 204
        /* NoContent */
        ) {
          // Use XMLHttpRequest.response if set, responseText otherwise.
          body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
        } // Normalize another potential bug (this one comes from CORS).


        if (status === 0) {
          status = !!body ? 200
          /* Ok */
          : 0;
        } // ok determines whether the response will be transmitted on the event or
        // error channel. Unsuccessful status codes (not 2xx) will always be errors,
        // but a successful status code can still result in an error if the user
        // asked for JSON data and the body cannot be parsed as such.


        let ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
        // will have done that already).

        if (req.responseType === 'json' && typeof body === 'string') {
          // Save the original body, before attempting XSSI prefix stripping.
          const originalBody = body;
          body = body.replace(XSSI_PREFIX, '');

          try {
            // Attempt the parse. If it fails, a parse error should be delivered to the user.
            body = body !== '' ? JSON.parse(body) : null;
          } catch (error) {
            // Since the JSON.parse failed, it's reasonable to assume this might not have been a
            // JSON response. Restore the original body (including any XSSI prefix) to deliver
            // a better error response.
            body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
            // just isn't JSON. Otherwise, deliver the parsing error to the user.

            if (ok) {
              // Even though the response status was 2xx, this is still an error.
              ok = false; // The parse error contains the text of the body that failed to parse.

              body = {
                error,
                text: body
              };
            }
          }
        }

        if (ok) {
          // A successful response is delivered on the event stream.
          observer.next(new HttpResponse({
            body,
            headers,
            status,
            statusText,
            url: url || undefined
          })); // The full body has been received and delivered, no further events
          // are possible. This request is complete.

          observer.complete();
        } else {
          // An unsuccessful request is delivered on the error channel.
          observer.error(new HttpErrorResponse({
            // The error in this case is the response body (error from the server).
            error: body,
            headers,
            status,
            statusText,
            url: url || undefined
          }));
        }
      }; // The onError callback is called when something goes wrong at the network level.
      // Connection timeout, DNS error, offline, etc. These are actual errors, and are
      // transmitted on the error channel.


      const onError = error => {
        const {
          url
        } = partialFromXhr();
        const res = new HttpErrorResponse({
          error,
          status: xhr.status || 0,
          statusText: xhr.statusText || 'Unknown Error',
          url: url || undefined
        });
        observer.error(res);
      }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
      // has been sent on the stream. This is necessary to track if progress
      // is enabled since the event will be sent on only the first download
      // progerss event.


      let sentHeaders = false; // The download progress event handler, which is only registered if
      // progress events are enabled.

      const onDownProgress = event => {
        // Send the HttpResponseHeaders event if it hasn't been sent already.
        if (!sentHeaders) {
          observer.next(partialFromXhr());
          sentHeaders = true;
        } // Start building the download progress event to deliver on the response
        // event stream.


        let progressEvent = {
          type: HttpEventType.DownloadProgress,
          loaded: event.loaded
        }; // Set the total number of bytes in the event if it's available.

        if (event.lengthComputable) {
          progressEvent.total = event.total;
        } // If the request was for text content and a partial response is
        // available on XMLHttpRequest, include it in the progress event
        // to allow for streaming reads.


        if (req.responseType === 'text' && !!xhr.responseText) {
          progressEvent.partialText = xhr.responseText;
        } // Finally, fire the event.


        observer.next(progressEvent);
      }; // The upload progress event handler, which is only registered if
      // progress events are enabled.


      const onUpProgress = event => {
        // Upload progress events are simpler. Begin building the progress
        // event.
        let progress = {
          type: HttpEventType.UploadProgress,
          loaded: event.loaded
        }; // If the total number of bytes being uploaded is available, include
        // it.

        if (event.lengthComputable) {
          progress.total = event.total;
        } // Send the event.


        observer.next(progress);
      }; // By default, register for load and error events.


      xhr.addEventListener('load', onLoad);
      xhr.addEventListener('error', onError);
      xhr.addEventListener('timeout', onError);
      xhr.addEventListener('abort', onError); // Progress events are only enabled if requested.

      if (req.reportProgress) {
        // Download progress is always enabled if requested.
        xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

        if (reqBody !== null && xhr.upload) {
          xhr.upload.addEventListener('progress', onUpProgress);
        }
      } // Fire the request, and notify the event stream that it was fired.


      xhr.send(reqBody);
      observer.next({
        type: HttpEventType.Sent
      }); // This is the return from the Observable function, which is the
      // request cancellation handler.

      return () => {
        // On a cancellation, remove all registered event listeners.
        xhr.removeEventListener('error', onError);
        xhr.removeEventListener('abort', onError);
        xhr.removeEventListener('load', onLoad);
        xhr.removeEventListener('timeout', onError);

        if (req.reportProgress) {
          xhr.removeEventListener('progress', onDownProgress);

          if (reqBody !== null && xhr.upload) {
            xhr.upload.removeEventListener('progress', onUpProgress);
          }
        } // Finally, abort the in-flight request.


        if (xhr.readyState !== xhr.DONE) {
          xhr.abort();
        }
      };
    });
  }

}

HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
  return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory));
};

HttpXhrBackend.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXhrBackend,
  factory: HttpXhrBackend.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXhrBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */

class HttpXsrfTokenExtractor {}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */


class HttpXsrfCookieExtractor {
  constructor(doc, platform, cookieName) {
    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = '';
    this.lastToken = null;
    /**
     * @internal for testing
     */

    this.parseCount = 0;
  }

  getToken() {
    if (this.platform === 'server') {
      return null;
    }

    const cookieString = this.doc.cookie || '';

    if (cookieString !== this.lastCookieString) {
      this.parseCount++;
      this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
      this.lastCookieString = cookieString;
    }

    return this.lastToken;
  }

}

HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
  return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME));
};

HttpXsrfCookieExtractor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfCookieExtractor,
  factory: HttpXsrfCookieExtractor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_COOKIE_NAME]
      }]
    }];
  }, null);
})();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */


class HttpXsrfInterceptor {
  constructor(tokenService, headerName) {
    this.tokenService = tokenService;
    this.headerName = headerName;
  }

  intercept(req, next) {
    const lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
    // Non-mutating requests don't require a token, and absolute URLs require special handling
    // anyway as the cookie set
    // on our origin is not the same as the token expected by another origin.

    if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
      return next.handle(req);
    }

    const token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

    if (token !== null && !req.headers.has(this.headerName)) {
      req = req.clone({
        headers: req.headers.set(this.headerName, token)
      });
    }

    return next.handle(req);
  }

}

HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
  return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_HEADER_NAME));
};

HttpXsrfInterceptor.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpXsrfInterceptor,
  factory: HttpXsrfInterceptor.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpXsrfTokenExtractor
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [XSRF_HEADER_NAME]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */


class HttpInterceptingHandler {
  constructor(backend, injector) {
    this.backend = backend;
    this.injector = injector;
    this.chain = null;
  }

  handle(req) {
    if (this.chain === null) {
      const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
      this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
    }

    return this.chain.handle(req);
  }

}

HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) {
  return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector));
};

HttpInterceptingHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: HttpInterceptingHandler,
  factory: HttpInterceptingHandler.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
  }], function () {
    return [{
      type: HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector
    }];
  }, null);
})();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */


function interceptingHandler(backend, interceptors = []) {
  if (!interceptors) {
    return backend;
  }

  return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */


function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }

  return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */


class HttpClientXsrfModule {
  /**
   * Disable the default XSRF protection.
   */
  static disable() {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [{
        provide: HttpXsrfInterceptor,
        useClass: NoopInterceptor
      }]
    };
  }
  /**
   * Configure XSRF protection.
   * @param options An object that can specify either or both
   * cookie name or header name.
   * - Cookie name default is `XSRF-TOKEN`.
   * - Header name default is `X-XSRF-TOKEN`.
   *
   */


  static withOptions(options = {}) {
    return {
      ngModule: HttpClientXsrfModule,
      providers: [options.cookieName ? {
        provide: XSRF_COOKIE_NAME,
        useValue: options.cookieName
      } : [], options.headerName ? {
        provide: XSRF_HEADER_NAME,
        useValue: options.headerName
      } : []]
    };
  }

}

HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) {
  return new (t || HttpClientXsrfModule)();
};

HttpClientXsrfModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientXsrfModule
});
HttpClientXsrfModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpXsrfInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useExisting: HttpXsrfInterceptor,
    multi: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }, {
    provide: XSRF_COOKIE_NAME,
    useValue: 'XSRF-TOKEN'
  }, {
    provide: XSRF_HEADER_NAME,
    useValue: 'X-XSRF-TOKEN'
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, {
        provide: XSRF_COOKIE_NAME,
        useValue: 'XSRF-TOKEN'
      }, {
        provide: XSRF_HEADER_NAME,
        useValue: 'X-XSRF-TOKEN'
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


class HttpClientModule {}

HttpClientModule.ɵfac = function HttpClientModule_Factory(t) {
  return new (t || HttpClientModule)();
};

HttpClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientModule
});
HttpClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [HttpClient, {
    provide: HttpHandler,
    useClass: HttpInterceptingHandler
  }, HttpXhrBackend, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }],
  imports: [[HttpClientXsrfModule.withOptions({
    cookieName: 'XSRF-TOKEN',
    headerName: 'X-XSRF-TOKEN'
  })]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      /**
       * Optional configuration for XSRF protection.
       */
      imports: [HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })],

      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [HttpClient, {
        provide: HttpHandler,
        useClass: HttpInterceptingHandler
      }, HttpXhrBackend, {
        provide: HttpBackend,
        useExisting: HttpXhrBackend
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


class HttpClientJsonpModule {}

HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) {
  return new (t || HttpClientJsonpModule)();
};

HttpClientJsonpModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: HttpClientJsonpModule
});
HttpClientJsonpModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  providers: [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: JsonpInterceptor,
    multi: true
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
    args: [{
      providers: [JsonpClientBackend, {
        provide: JsonpCallbackContext,
        useFactory: jsonpCallbackContext
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: JsonpInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */


const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1961:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/card.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MatCard": () => (/* binding */ MatCard),
/* harmony export */   "MatCardActions": () => (/* binding */ MatCardActions),
/* harmony export */   "MatCardAvatar": () => (/* binding */ MatCardAvatar),
/* harmony export */   "MatCardContent": () => (/* binding */ MatCardContent),
/* harmony export */   "MatCardFooter": () => (/* binding */ MatCardFooter),
/* harmony export */   "MatCardHeader": () => (/* binding */ MatCardHeader),
/* harmony export */   "MatCardImage": () => (/* binding */ MatCardImage),
/* harmony export */   "MatCardLgImage": () => (/* binding */ MatCardLgImage),
/* harmony export */   "MatCardMdImage": () => (/* binding */ MatCardMdImage),
/* harmony export */   "MatCardModule": () => (/* binding */ MatCardModule),
/* harmony export */   "MatCardSmImage": () => (/* binding */ MatCardSmImage),
/* harmony export */   "MatCardSubtitle": () => (/* binding */ MatCardSubtitle),
/* harmony export */   "MatCardTitle": () => (/* binding */ MatCardTitle),
/* harmony export */   "MatCardTitleGroup": () => (/* binding */ MatCardTitleGroup),
/* harmony export */   "MatCardXlImage": () => (/* binding */ MatCardXlImage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 8133);




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Content of a card, needed as it's used as a selector in the API.
 * @docs-private
 */

const _c0 = ["*", [["mat-card-footer"]]];
const _c1 = ["*", "mat-card-footer"];
const _c2 = [[["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]], [["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], "*"];
const _c3 = ["[mat-card-avatar], [matCardAvatar]", "mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "*"];
const _c4 = [[["mat-card-title"], ["mat-card-subtitle"], ["", "mat-card-title", ""], ["", "mat-card-subtitle", ""], ["", "matCardTitle", ""], ["", "matCardSubtitle", ""]], [["img"]], "*"];
const _c5 = ["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]", "img", "*"];

class MatCardContent {}

MatCardContent.ɵfac = function MatCardContent_Factory(t) {
  return new (t || MatCardContent)();
};

MatCardContent.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardContent,
  selectors: [["mat-card-content"], ["", "mat-card-content", ""], ["", "matCardContent", ""]],
  hostAttrs: [1, "mat-card-content"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardContent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-content, [mat-card-content], [matCardContent]',
      host: {
        'class': 'mat-card-content'
      }
    }]
  }], null, null);
})();
/**
 * Title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardTitle {}

MatCardTitle.ɵfac = function MatCardTitle_Factory(t) {
  return new (t || MatCardTitle)();
};

MatCardTitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardTitle,
  selectors: [["mat-card-title"], ["", "mat-card-title", ""], ["", "matCardTitle", ""]],
  hostAttrs: [1, "mat-card-title"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-title, [mat-card-title], [matCardTitle]`,
      host: {
        'class': 'mat-card-title'
      }
    }]
  }], null, null);
})();
/**
 * Sub-title of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardSubtitle {}

MatCardSubtitle.ɵfac = function MatCardSubtitle_Factory(t) {
  return new (t || MatCardSubtitle)();
};

MatCardSubtitle.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSubtitle,
  selectors: [["mat-card-subtitle"], ["", "mat-card-subtitle", ""], ["", "matCardSubtitle", ""]],
  hostAttrs: [1, "mat-card-subtitle"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSubtitle, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: `mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]`,
      host: {
        'class': 'mat-card-subtitle'
      }
    }]
  }], null, null);
})();
/**
 * Action section of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardActions {
  constructor() {
    /** Position of the actions inside the card. */
    this.align = 'start';
  }

}

MatCardActions.ɵfac = function MatCardActions_Factory(t) {
  return new (t || MatCardActions)();
};

MatCardActions.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardActions,
  selectors: [["mat-card-actions"]],
  hostAttrs: [1, "mat-card-actions"],
  hostVars: 2,
  hostBindings: function MatCardActions_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-card-actions-align-end", ctx.align === "end");
    }
  },
  inputs: {
    align: "align"
  },
  exportAs: ["matCardActions"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardActions, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-actions',
      exportAs: 'matCardActions',
      host: {
        'class': 'mat-card-actions',
        '[class.mat-card-actions-align-end]': 'align === "end"'
      }
    }]
  }], null, {
    align: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Footer of a card, needed as it's used as a selector in the API.
 * @docs-private
 */


class MatCardFooter {}

MatCardFooter.ɵfac = function MatCardFooter_Factory(t) {
  return new (t || MatCardFooter)();
};

MatCardFooter.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardFooter,
  selectors: [["mat-card-footer"]],
  hostAttrs: [1, "mat-card-footer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardFooter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: 'mat-card-footer',
      host: {
        'class': 'mat-card-footer'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardImage {}

MatCardImage.ɵfac = function MatCardImage_Factory(t) {
  return new (t || MatCardImage)();
};

MatCardImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardImage,
  selectors: [["", "mat-card-image", ""], ["", "matCardImage", ""]],
  hostAttrs: [1, "mat-card-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-image], [matCardImage]',
      host: {
        'class': 'mat-card-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardSmImage {}

MatCardSmImage.ɵfac = function MatCardSmImage_Factory(t) {
  return new (t || MatCardSmImage)();
};

MatCardSmImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardSmImage,
  selectors: [["", "mat-card-sm-image", ""], ["", "matCardImageSmall", ""]],
  hostAttrs: [1, "mat-card-sm-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardSmImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-sm-image], [matCardImageSmall]',
      host: {
        'class': 'mat-card-sm-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardMdImage {}

MatCardMdImage.ɵfac = function MatCardMdImage_Factory(t) {
  return new (t || MatCardMdImage)();
};

MatCardMdImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardMdImage,
  selectors: [["", "mat-card-md-image", ""], ["", "matCardImageMedium", ""]],
  hostAttrs: [1, "mat-card-md-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardMdImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-md-image], [matCardImageMedium]',
      host: {
        'class': 'mat-card-md-image'
      }
    }]
  }], null, null);
})();
/**
 * Image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardLgImage {}

MatCardLgImage.ɵfac = function MatCardLgImage_Factory(t) {
  return new (t || MatCardLgImage)();
};

MatCardLgImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardLgImage,
  selectors: [["", "mat-card-lg-image", ""], ["", "matCardImageLarge", ""]],
  hostAttrs: [1, "mat-card-lg-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardLgImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-lg-image], [matCardImageLarge]',
      host: {
        'class': 'mat-card-lg-image'
      }
    }]
  }], null, null);
})();
/**
 * Large image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardXlImage {}

MatCardXlImage.ɵfac = function MatCardXlImage_Factory(t) {
  return new (t || MatCardXlImage)();
};

MatCardXlImage.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardXlImage,
  selectors: [["", "mat-card-xl-image", ""], ["", "matCardImageXLarge", ""]],
  hostAttrs: [1, "mat-card-xl-image"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardXlImage, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-xl-image], [matCardImageXLarge]',
      host: {
        'class': 'mat-card-xl-image'
      }
    }]
  }], null, null);
})();
/**
 * Avatar image used in a card, needed to add the mat- CSS styling.
 * @docs-private
 */


class MatCardAvatar {}

MatCardAvatar.ɵfac = function MatCardAvatar_Factory(t) {
  return new (t || MatCardAvatar)();
};

MatCardAvatar.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatCardAvatar,
  selectors: [["", "mat-card-avatar", ""], ["", "matCardAvatar", ""]],
  hostAttrs: [1, "mat-card-avatar"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardAvatar, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-card-avatar], [matCardAvatar]',
      host: {
        'class': 'mat-card-avatar'
      }
    }]
  }], null, null);
})();
/**
 * A basic content container component that adds the styles of a Material design card.
 *
 * While this component can be used alone, it also provides a number
 * of preset styles for common card sections, including:
 * - mat-card-title
 * - mat-card-subtitle
 * - mat-card-content
 * - mat-card-actions
 * - mat-card-footer
 */


class MatCard {
  // @breaking-change 9.0.0 `_animationMode` parameter to be made required.
  constructor(_animationMode) {
    this._animationMode = _animationMode;
  }

}

MatCard.ɵfac = function MatCard_Factory(t) {
  return new (t || MatCard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE, 8));
};

MatCard.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCard,
  selectors: [["mat-card"]],
  hostAttrs: [1, "mat-card", "mat-focus-indicator"],
  hostVars: 2,
  hostBindings: function MatCard_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  exportAs: ["matCard"],
  ngContentSelectors: _c1,
  decls: 2,
  vars: 0,
  template: function MatCard_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    }
  },
  styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCard, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card',
      exportAs: 'matCard',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card mat-focus-indicator',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      template: "<ng-content></ng-content>\n<ng-content select=\"mat-card-footer\"></ng-content>\n",
      styles: [".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a
 * preset header section (i.e. a title, subtitle, and avatar layout).
 * @docs-private
 */


class MatCardHeader {}

MatCardHeader.ɵfac = function MatCardHeader_Factory(t) {
  return new (t || MatCardHeader)();
};

MatCardHeader.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardHeader,
  selectors: [["mat-card-header"]],
  hostAttrs: [1, "mat-card-header"],
  ngContentSelectors: _c3,
  decls: 4,
  vars: 0,
  consts: [[1, "mat-card-header-text"]],
  template: function MatCardHeader_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardHeader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-header',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card-header'
      },
      template: "<ng-content select=\"[mat-card-avatar], [matCardAvatar]\"></ng-content>\n<div class=\"mat-card-header-text\">\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * Component intended to be used within the `<mat-card>` component. It adds styles for a preset
 * layout that groups an image with a title section.
 * @docs-private
 */


class MatCardTitleGroup {}

MatCardTitleGroup.ɵfac = function MatCardTitleGroup_Factory(t) {
  return new (t || MatCardTitleGroup)();
};

MatCardTitleGroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatCardTitleGroup,
  selectors: [["mat-card-title-group"]],
  hostAttrs: [1, "mat-card-title-group"],
  ngContentSelectors: _c5,
  decls: 4,
  vars: 0,
  template: function MatCardTitleGroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardTitleGroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-card-title-group',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      host: {
        'class': 'mat-card-title-group'
      },
      template: "<div>\n  <ng-content\n      select=\"mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]\"></ng-content>\n</div>\n<ng-content select=\"img\"></ng-content>\n<ng-content></ng-content>\n"
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatCardModule {}

MatCardModule.ɵfac = function MatCardModule_Factory(t) {
  return new (t || MatCardModule)();
};

MatCardModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCardModule
});
MatCardModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCardModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      exports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
      declarations: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardContent, MatCardTitle, MatCardSubtitle, MatCardActions, MatCardFooter, MatCardSmImage, MatCardMdImage, MatCardLgImage, MatCardImage, MatCardXlImage, MatCardAvatar]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 8133:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/core.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationCurves": () => (/* binding */ AnimationCurves),
/* harmony export */   "AnimationDurations": () => (/* binding */ AnimationDurations),
/* harmony export */   "DateAdapter": () => (/* binding */ DateAdapter),
/* harmony export */   "ErrorStateMatcher": () => (/* binding */ ErrorStateMatcher),
/* harmony export */   "MATERIAL_SANITY_CHECKS": () => (/* binding */ MATERIAL_SANITY_CHECKS),
/* harmony export */   "MAT_DATE_FORMATS": () => (/* binding */ MAT_DATE_FORMATS),
/* harmony export */   "MAT_DATE_LOCALE": () => (/* binding */ MAT_DATE_LOCALE),
/* harmony export */   "MAT_DATE_LOCALE_FACTORY": () => (/* binding */ MAT_DATE_LOCALE_FACTORY),
/* harmony export */   "MAT_NATIVE_DATE_FORMATS": () => (/* binding */ MAT_NATIVE_DATE_FORMATS),
/* harmony export */   "MAT_OPTGROUP": () => (/* binding */ MAT_OPTGROUP),
/* harmony export */   "MAT_OPTION_PARENT_COMPONENT": () => (/* binding */ MAT_OPTION_PARENT_COMPONENT),
/* harmony export */   "MAT_RIPPLE_GLOBAL_OPTIONS": () => (/* binding */ MAT_RIPPLE_GLOBAL_OPTIONS),
/* harmony export */   "MatCommonModule": () => (/* binding */ MatCommonModule),
/* harmony export */   "MatLine": () => (/* binding */ MatLine),
/* harmony export */   "MatLineModule": () => (/* binding */ MatLineModule),
/* harmony export */   "MatNativeDateModule": () => (/* binding */ MatNativeDateModule),
/* harmony export */   "MatOptgroup": () => (/* binding */ MatOptgroup),
/* harmony export */   "MatOption": () => (/* binding */ MatOption),
/* harmony export */   "MatOptionModule": () => (/* binding */ MatOptionModule),
/* harmony export */   "MatOptionSelectionChange": () => (/* binding */ MatOptionSelectionChange),
/* harmony export */   "MatPseudoCheckbox": () => (/* binding */ MatPseudoCheckbox),
/* harmony export */   "MatPseudoCheckboxModule": () => (/* binding */ MatPseudoCheckboxModule),
/* harmony export */   "MatRipple": () => (/* binding */ MatRipple),
/* harmony export */   "MatRippleModule": () => (/* binding */ MatRippleModule),
/* harmony export */   "NativeDateAdapter": () => (/* binding */ NativeDateAdapter),
/* harmony export */   "NativeDateModule": () => (/* binding */ NativeDateModule),
/* harmony export */   "RippleRef": () => (/* binding */ RippleRef),
/* harmony export */   "RippleRenderer": () => (/* binding */ RippleRenderer),
/* harmony export */   "ShowOnDirtyErrorStateMatcher": () => (/* binding */ ShowOnDirtyErrorStateMatcher),
/* harmony export */   "VERSION": () => (/* binding */ VERSION),
/* harmony export */   "_MatOptgroupBase": () => (/* binding */ _MatOptgroupBase),
/* harmony export */   "_MatOptionBase": () => (/* binding */ _MatOptionBase),
/* harmony export */   "_countGroupLabelsBeforeOption": () => (/* binding */ _countGroupLabelsBeforeOption),
/* harmony export */   "_getOptionScrollPosition": () => (/* binding */ _getOptionScrollPosition),
/* harmony export */   "defaultRippleAnimationConfig": () => (/* binding */ defaultRippleAnimationConfig),
/* harmony export */   "mixinColor": () => (/* binding */ mixinColor),
/* harmony export */   "mixinDisableRipple": () => (/* binding */ mixinDisableRipple),
/* harmony export */   "mixinDisabled": () => (/* binding */ mixinDisabled),
/* harmony export */   "mixinErrorState": () => (/* binding */ mixinErrorState),
/* harmony export */   "mixinInitialized": () => (/* binding */ mixinInitialized),
/* harmony export */   "mixinTabIndex": () => (/* binding */ mixinTabIndex),
/* harmony export */   "setLines": () => (/* binding */ setLines)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ 1588);
/* harmony import */ var _angular_cdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk */ 2597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 4390);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ 4128);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/keycodes */ 5939);















/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Current version of Angular Material. */

const _c0 = ["*", [["mat-option"], ["ng-container"]]];
const _c1 = ["*", "mat-option, ng-container"];

function MatOption_mat_pseudo_checkbox_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-pseudo-checkbox", 4);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", ctx_r0.selected ? "checked" : "unchecked")("disabled", ctx_r0.disabled);
  }
}

function MatOption_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r1.group.label, ")");
  }
}

const _c2 = ["*"];
const VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('13.3.5');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** @docs-private */

class AnimationCurves {}

AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
/** @docs-private */

class AnimationDurations {}

AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
/** @docs-private */

function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
/** Injection token that configures whether the Material sanity checks are enabled. */


const MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-sanity-checks', {
  providedIn: 'root',
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */

class MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    /** Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype). */

    this._hasDoneGlobalChecks = false; // While A11yModule also does this, we repeat it here to avoid importing A11yModule
    // in MatCommonModule.

    highContrastModeDetector._applyBodyHighContrastModeCssClasses();

    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;

      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (this._checkIsEnabled('doctype')) {
          _checkDoctypeIsDefined(this._document);
        }

        if (this._checkIsEnabled('theme')) {
          _checkThemeIsPresent(this._document);
        }

        if (this._checkIsEnabled('version')) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */


  _checkIsEnabled(name) {
    if ((0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__._isTestEnvironment)()) {
      return false;
    }

    if (typeof this._sanityChecks === 'boolean') {
      return this._sanityChecks;
    }

    return !!this._sanityChecks[name];
  }

}

MatCommonModule.ɵfac = function MatCommonModule_Factory(t) {
  return new (t || MatCommonModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MATERIAL_SANITY_CHECKS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT));
};

MatCommonModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatCommonModule
});
MatCommonModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatCommonModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule],
      exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__.BidiModule]
    }]
  }], function () {
    return [{
      type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.HighContrastModeDetector
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MATERIAL_SANITY_CHECKS]
      }]
    }, {
      type: Document,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT]
      }]
    }];
  }, null);
})();
/** Checks that the page has a doctype. */


function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn('Current document does not have a doctype. This may cause ' + 'some Angular Material components not to behave as expected.');
  }
}
/** Checks that a theme has been included. */


function _checkThemeIsPresent(doc) {
  // We need to assert that the `body` is defined, because these checks run very early
  // and the `body` won't be defined if the consumer put their scripts in the `head`.
  if (!doc.body || typeof getComputedStyle !== 'function') {
    return;
  }

  const testElement = doc.createElement('div');
  testElement.classList.add('mat-theme-loaded-marker');
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement); // In some situations the computed style of the test element can be null. For example in
  // Firefox, the computed style is null if an application is running inside of a hidden iframe.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

  if (computedStyle && computedStyle.display !== 'none') {
    console.warn('Could not find Angular Material core theme. Most Material ' + 'components may not work as expected. For more info refer ' + 'to the theming guide: https://material.angular.io/guide/theming');
  }

  testElement.remove();
}
/** Checks whether the Material version matches the CDK version. */


function _checkCdkVersionMatch() {
  if (VERSION.full !== _angular_cdk__WEBPACK_IMPORTED_MODULE_5__.VERSION.full) {
    console.warn('The Angular Material version (' + VERSION.full + ') does not match ' + 'the Angular CDK version (' + _angular_cdk__WEBPACK_IMPORTED_MODULE_5__.VERSION.full + ').\n' + 'Please ensure the versions of these two packages exactly match.');
  }
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinDisabled(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disabled = false;
    }

    get disabled() {
      return this._disabled;
    }

    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinColor(base, defaultColor) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this.defaultColor = defaultColor; // Set the default color that can be specified from the mixin.

      this.color = defaultColor;
    }

    get color() {
      return this._color;
    }

    set color(value) {
      const colorPalette = value || this.defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }

        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinDisableRipple(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._disableRipple = false;
    }
    /** Whether the ripple effect is disabled or not. */


    get disableRipple() {
      return this._disableRipple;
    }

    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinTabIndex(base, defaultTabIndex = 0) {
  return class extends base {
    constructor(...args) {
      super(...args);
      this._tabIndex = defaultTabIndex;
      this.defaultTabIndex = defaultTabIndex;
    }

    get tabIndex() {
      return this.disabled ? -1 : this._tabIndex;
    }

    set tabIndex(value) {
      // If the specified tabIndex value is null or undefined, fall back to the default value.
      this._tabIndex = value != null ? (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceNumberProperty)(value) : this.defaultTabIndex;
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


function mixinErrorState(base) {
  return class extends base {
    constructor(...args) {
      super(...args); // This class member exists as an interop with `MatFormFieldControl` which expects
      // a public `stateChanges` observable to emit whenever the form field should be updated.
      // The description is not specifically mentioning the error state, as classes using this
      // mixin can/should emit an event in other cases too.

      /** Emits whenever the component state changes. */

      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
      /** Whether the component is in an error state. */

      this.errorState = false;
    }
    /** Updates the error state based on the provided error state matcher. */


    updateErrorState() {
      const oldState = this.errorState;
      const parent = this._parentFormGroup || this._parentForm;
      const matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
      const control = this.ngControl ? this.ngControl.control : null;
      const newState = matcher.isErrorState(control, parent);

      if (newState !== oldState) {
        this.errorState = newState;
        this.stateChanges.next();
      }
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Mixin to augment a directive with an initialized property that will emits when ngOnInit ends. */


function mixinInitialized(base) {
  return class extends base {
    constructor(...args) {
      super(...args);
      /** Whether this directive has been marked as initialized. */

      this._isInitialized = false;
      /**
       * List of subscribers that subscribed before the directive was initialized. Should be notified
       * during _markInitialized. Set to null after pending subscribers are notified, and should
       * not expect to be populated after.
       */

      this._pendingSubscribers = [];
      /**
       * Observable stream that emits when the directive initializes. If already initialized, the
       * subscriber is stored to be notified once _markInitialized is called.
       */

      this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Observable(subscriber => {
        // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
        // when _markInitialized is called.
        if (this._isInitialized) {
          this._notifySubscriber(subscriber);
        } else {
          this._pendingSubscribers.push(subscriber);
        }
      });
    }
    /**
     * Marks the state as initialized and notifies pending subscribers. Should be called at the end
     * of ngOnInit.
     * @docs-private
     */


    _markInitialized() {
      if (this._isInitialized && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('This directive has already been marked as initialized and ' + 'should not be called twice.');
      }

      this._isInitialized = true;

      this._pendingSubscribers.forEach(this._notifySubscriber);

      this._pendingSubscribers = null;
    }
    /** Emits and completes the subscriber stream (should only emit once). */


    _notifySubscriber(subscriber) {
      subscriber.next();
      subscriber.complete();
    }

  };
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** InjectionToken for datepicker that can be used to override default locale code. */


const MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_LOCALE', {
  providedIn: 'root',
  factory: MAT_DATE_LOCALE_FACTORY
});
/** @docs-private */

function MAT_DATE_LOCALE_FACTORY() {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.LOCALE_ID);
}
/** Adapts type `D` to be usable as a date by cdk-based components that work with dates. */


class DateAdapter {
  constructor() {
    this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    /** A stream that emits when the locale changes. */

    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */


  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */


  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }

    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */


  setLocale(locale) {
    this.locale = locale;

    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */


  compareDate(first, second) {
    return this.getYear(first) - this.getYear(second) || this.getMonth(first) - this.getMonth(second) || this.getDate(first) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */


  sameDate(first, second) {
    if (first && second) {
      let firstValid = this.isValid(first);
      let secondValid = this.isValid(second);

      if (firstValid && secondValid) {
        return !this.compareDate(first, second);
      }

      return firstValid == secondValid;
    }

    return first == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */


  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }

    if (max && this.compareDate(date, max) > 0) {
      return max;
    }

    return date;
  }

}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-date-formats');
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */

const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/** Creates an array and fills it with values. */

function range(length, valueFunction) {
  const valuesArray = Array(length);

  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }

  return valuesArray;
}
/** Adapts the native JS Date for use with cdk-based components that work with dates. */


class NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale,
  /**
   * @deprecated No longer being used. To be removed.
   * @breaking-change 14.0.0
   */
  _platform) {
    super();
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 14.0.0
     */

    this.useUtcForDisplay = false;
    super.setLocale(matDateLocale);
  }

  getYear(date) {
    return date.getFullYear();
  }

  getMonth(date) {
    return date.getMonth();
  }

  getDate(date) {
    return date.getDate();
  }

  getDayOfWeek(date) {
    return date.getDay();
  }

  getMonthNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style,
      timeZone: 'utc'
    });
    return range(12, i => this._format(dtf, new Date(2017, i, 1)));
  }

  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: 'numeric',
      timeZone: 'utc'
    });
    return range(31, i => this._format(dtf, new Date(2017, 0, i + 1)));
  }

  getDayOfWeekNames(style) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style,
      timeZone: 'utc'
    });
    return range(7, i => this._format(dtf, new Date(2017, 0, i + 1)));
  }

  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: 'numeric',
      timeZone: 'utc'
    });
    return this._format(dtf, date);
  }

  getFirstDayOfWeek() {
    // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
    return 0;
  }

  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }

  clone(date) {
    return new Date(date.getTime());
  }

  createDate(year, month, date) {
    if (typeof ngDevMode === 'undefined' || ngDevMode) {
      // Check for invalid month and date (except upper bound on date which we have to check after
      // creating the Date).
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }

      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }

    let result = this._createDateWithOverflow(year, month, date); // Check that the date wasn't above the upper bound for the month, causing the month to overflow


    if (result.getMonth() != month && (typeof ngDevMode === 'undefined' || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }

    return result;
  }

  today() {
    return new Date();
  }

  parse(value) {
    // We have no way using the native JS Date to set the parse format or locale, so we ignore these
    // parameters.
    if (typeof value == 'number') {
      return new Date(value);
    }

    return value ? new Date(Date.parse(value)) : null;
  }

  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error('NativeDateAdapter: Cannot format invalid date.');
    }

    const dtf = new Intl.DateTimeFormat(this.locale, Object.assign(Object.assign({}, displayFormat), {
      timeZone: 'utc'
    }));
    return this._format(dtf, date);
  }

  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }

  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date)); // It's possible to wind up in the wrong month if the original month has more days than the new
    // month. In this case we want to go to the last day of the desired month.
    // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
    // guarantee this.


    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }

    return newDate;
  }

  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }

  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join('-');
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */


  deserialize(value) {
    if (typeof value === 'string') {
      if (!value) {
        return null;
      } // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
      // string is the right format first.


      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);

        if (this.isValid(date)) {
          return date;
        }
      }
    }

    return super.deserialize(value);
  }

  isDateInstance(obj) {
    return obj instanceof Date;
  }

  isValid(date) {
    return !isNaN(date.getTime());
  }

  invalid() {
    return new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */


  _createDateWithOverflow(year, month, date) {
    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setFullYear` and `setHours` instead.
    const d = new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */


  _2digit(n) {
    return ('00' + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containg the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */


  _format(dtf, date) {
    // Passing the year to the constructor causes year numbers <100 to be converted to 19xx.
    // To work around this we use `setUTCFullYear` and `setUTCHours` instead.
    const d = new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }

}

NativeDateAdapter.ɵfac = function NativeDateAdapter_Factory(t) {
  return new (t || NativeDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform));
};

NativeDateAdapter.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: NativeDateAdapter,
  factory: NativeDateAdapter.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateAdapter, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_DATE_LOCALE]
      }]
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    },
    monthYearLabel: {
      year: 'numeric',
      month: 'short'
    },
    dateA11yLabel: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    monthYearA11yLabel: {
      year: 'numeric',
      month: 'long'
    }
  }
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

class NativeDateModule {}

NativeDateModule.ɵfac = function NativeDateModule_Factory(t) {
  return new (t || NativeDateModule)();
};

NativeDateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NativeDateModule
});
NativeDateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NativeDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();

class MatNativeDateModule {}

MatNativeDateModule.ɵfac = function MatNativeDateModule_Factory(t) {
  return new (t || MatNativeDateModule)();
};

MatNativeDateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatNativeDateModule
});
MatNativeDateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [{
    provide: MAT_DATE_FORMATS,
    useValue: MAT_NATIVE_DATE_FORMATS
  }],
  imports: [[NativeDateModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatNativeDateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [NativeDateModule],
      providers: [{
        provide: MAT_DATE_FORMATS,
        useValue: MAT_NATIVE_DATE_FORMATS
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Error state matcher that matches when a control is invalid and dirty. */


class ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }

}

ShowOnDirtyErrorStateMatcher.ɵfac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || ShowOnDirtyErrorStateMatcher)();
};

ShowOnDirtyErrorStateMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ShowOnDirtyErrorStateMatcher,
  factory: ShowOnDirtyErrorStateMatcher.ɵfac
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowOnDirtyErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], null, null);
})();
/** Provider that defines how form controls behave with regards to displaying error messages. */


class ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }

}

ErrorStateMatcher.ɵfac = function ErrorStateMatcher_Factory(t) {
  return new (t || ErrorStateMatcher)();
};

ErrorStateMatcher.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ErrorStateMatcher,
  factory: ErrorStateMatcher.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorStateMatcher, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a @ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */


class MatLine {}

MatLine.ɵfac = function MatLine_Factory(t) {
  return new (t || MatLine)();
};

MatLine.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLine, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-line], [matLine]',
      host: {
        'class': 'mat-line'
      }
    }]
  }], null, null);
})();
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * @docs-private
 */


function setLines(lines, element, prefix = 'mat') {
  // Note: doesn't need to unsubscribe, because `changes`
  // gets completed by Angular when the view is destroyed.
  lines.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(lines)).subscribe(({
    length
  }) => {
    setClass(element, `${prefix}-2-line`, false);
    setClass(element, `${prefix}-3-line`, false);
    setClass(element, `${prefix}-multi-line`, false);

    if (length === 2 || length === 3) {
      setClass(element, `${prefix}-${length}-line`, true);
    } else if (length > 3) {
      setClass(element, `${prefix}-multi-line`, true);
    }
  });
}
/** Adds or removes a class from an element. */


function setClass(element, className, isAdd) {
  element.nativeElement.classList.toggle(className, isAdd);
}

class MatLineModule {}

MatLineModule.ɵfac = function MatLineModule_Factory(t) {
  return new (t || MatLineModule)();
};

MatLineModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatLineModule
});
MatLineModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[MatCommonModule], MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatLineModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatLine, MatCommonModule],
      declarations: [MatLine]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Reference to a previously launched ripple element.
 */


class RippleRef {
  constructor(_renderer,
  /** Reference to the ripple HTML element. */
  element,
  /** Ripple configuration used for the ripple. */
  config) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    /** Current state of the ripple. */

    this.state = 3
    /* HIDDEN */
    ;
  }
  /** Fades out the ripple element. */


  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }

} // TODO: import these values from `@material/ripple` eventually.

/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */


const defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */

const ignoreMouseEventsTimeout = 800;
/** Options that apply to all the event listeners that are bound by the ripple renderer. */

const passiveEventOptions = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.normalizePassiveListenerOptions)({
  passive: true
});
/** Events that signal that the pointer is down. */

const pointerDownEvents = ['mousedown', 'touchstart'];
/** Events that signal that the pointer is up. */

const pointerUpEvents = ['mouseup', 'mouseleave', 'touchend', 'touchcancel'];
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * @docs-private
 */

class RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    /** Whether the pointer is currently down or not. */

    this._isPointerDown = false;
    /** Set of currently active ripple references. */

    this._activeRipples = new Set();
    /** Whether pointer-up event listeners have been registered. */

    this._pointerUpEventsRegistered = false; // Only do anything if we're on the browser.

    if (platform.isBrowser) {
      this._containerElement = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */


  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();

    const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), config.animation);

    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }

    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const duration = animationConfig.enterDuration;
    const ripple = document.createElement('div');
    ripple.classList.add('mat-ripple-element');
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`; // If a custom color has been specified, set it as inline style. If no color is
    // set, the default color will be applied through the ripple theme styles.

    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }

    ripple.style.transitionDuration = `${duration}ms`;

    this._containerElement.appendChild(ripple); // By default the browser does not recalculate the styles of dynamically created
    // ripple elements. This is critical because then the `scale` would not animate properly.


    enforceStyleRecalculation(ripple);
    ripple.style.transform = 'scale(1)'; // Exposed reference to the ripple that will be returned.

    const rippleRef = new RippleRef(this, ripple, config);
    rippleRef.state = 0
    /* FADING_IN */
    ; // Add the ripple reference to the list of all active ripples.

    this._activeRipples.add(rippleRef);

    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    } // Wait for the ripple element to be completely faded in.
    // Once it's faded in, the ripple can be hidden immediately if the mouse is released.


    this._runTimeoutOutsideZone(() => {
      const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
      rippleRef.state = 1
      /* VISIBLE */
      ; // When the timer runs out while the user has kept their pointer down, we want to
      // keep only the persistent ripples and the latest transient ripple. We do this,
      // because we don't want stacked transient ripples to appear after their enter
      // animation has finished.

      if (!config.persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
        rippleRef.fadeOut();
      }
    }, duration);

    return rippleRef;
  }
  /** Fades out a ripple reference. */


  fadeOutRipple(rippleRef) {
    const wasActive = this._activeRipples.delete(rippleRef);

    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    } // Clear out the cached bounding rect if we have no more ripples.


    if (!this._activeRipples.size) {
      this._containerRect = null;
    } // For ripples that are not active anymore, don't re-run the fade-out animation.


    if (!wasActive) {
      return;
    }

    const rippleEl = rippleRef.element;
    const animationConfig = Object.assign(Object.assign({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = '0';
    rippleRef.state = 2
    /* FADING_OUT */
    ; // Once the ripple faded out, the ripple can be safely removed from the DOM.

    this._runTimeoutOutsideZone(() => {
      rippleRef.state = 3
      /* HIDDEN */
      ;
      rippleEl.remove();
    }, animationConfig.exitDuration);
  }
  /** Fades out all currently active ripples. */


  fadeOutAll() {
    this._activeRipples.forEach(ripple => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */


  fadeOutAllNonPersistent() {
    this._activeRipples.forEach(ripple => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */


  setupTriggerEvents(elementOrElementRef) {
    const element = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceElement)(elementOrElementRef);

    if (!element || element === this._triggerElement) {
      return;
    } // Remove all previously registered event listeners from the trigger element.


    this._removeTriggerEvents();

    this._triggerElement = element;

    this._registerEvents(pointerDownEvents);
  }
  /**
   * Handles all registered events.
   * @docs-private
   */


  handleEvent(event) {
    if (event.type === 'mousedown') {
      this._onMousedown(event);
    } else if (event.type === 'touchstart') {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    } // If pointer-up events haven't been registered yet, do so now.
    // We do this on-demand in order to reduce the total number of event listeners
    // registered by the ripples, which speeds up the rendering time for large UIs.


    if (!this._pointerUpEventsRegistered) {
      this._registerEvents(pointerUpEvents);

      this._pointerUpEventsRegistered = true;
    }
  }
  /** Function being called whenever the trigger is being pressed using mouse. */


  _onMousedown(event) {
    // Screen readers will fire fake mouse events for space/enter. Skip launching a
    // ripple in this case for consistency with the non-screen-reader experience.
    const isFakeMousedown = (0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeMousedownFromScreenReader)(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;

    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */


  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__.isFakeTouchstartFromScreenReader)(event)) {
      // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
      // events will launch a second ripple if we don't ignore mouse events for a specific
      // time after a touchstart event.
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true; // Use `changedTouches` so we skip any touches where the user put
      // their finger down, but used another finger to tap the element again.

      const touches = event.changedTouches;

      for (let i = 0; i < touches.length; i++) {
        this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
      }
    }
  }
  /** Function being called whenever the trigger is being released. */


  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }

    this._isPointerDown = false; // Fade-out all ripples that are visible and not persistent.

    this._activeRipples.forEach(ripple => {
      // By default, only ripples that are completely visible will fade out on pointer release.
      // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
      const isVisible = ripple.state === 1
      /* VISIBLE */
      || ripple.config.terminateOnPointerUp && ripple.state === 0
      /* FADING_IN */
      ;

      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  /** Runs a timeout outside of the Angular zone to avoid triggering the change detection. */


  _runTimeoutOutsideZone(fn, delay = 0) {
    this._ngZone.runOutsideAngular(() => setTimeout(fn, delay));
  }
  /** Registers event listeners for a given list of events. */


  _registerEvents(eventTypes) {
    this._ngZone.runOutsideAngular(() => {
      eventTypes.forEach(type => {
        this._triggerElement.addEventListener(type, this, passiveEventOptions);
      });
    });
  }
  /** Removes previously registered event listeners from the trigger element. */


  _removeTriggerEvents() {
    if (this._triggerElement) {
      pointerDownEvents.forEach(type => {
        this._triggerElement.removeEventListener(type, this, passiveEventOptions);
      });

      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach(type => {
          this._triggerElement.removeEventListener(type, this, passiveEventOptions);
        });
      }
    }
  }

}
/** Enforces a style recalculation of a DOM element by computing its styles. */


function enforceStyleRecalculation(element) {
  // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
  // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
  // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
  window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */


function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
/** Injection token that can be used to specify the global ripple options. */


const MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-ripple-global-options');

class MatRipple {
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    /**
     * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
     * will be the distance from the center of the ripple to the furthest corner of the host element's
     * bounding rectangle.
     */

    this.radius = 0;
    this._disabled = false;
    /** Whether ripple directive is initialized and the input bindings are set. */

    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */


  get disabled() {
    return this._disabled;
  }

  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }

    this._disabled = value;

    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */


  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }

  set trigger(trigger) {
    this._trigger = trigger;

    this._setupTriggerEventsIfEnabled();
  }

  ngOnInit() {
    this._isInitialized = true;

    this._setupTriggerEventsIfEnabled();
  }

  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */


  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */


  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */


  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: Object.assign(Object.assign(Object.assign({}, this._globalOptions.animation), this._animationMode === 'NoopAnimations' ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */


  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */


  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */


  launch(configOrX, y = 0, config) {
    if (typeof configOrX === 'number') {
      return this._rippleRenderer.fadeInRipple(configOrX, y, Object.assign(Object.assign({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, Object.assign(Object.assign({}, this.rippleConfig), configOrX));
    }
  }

}

MatRipple.ɵfac = function MatRipple_Factory(t) {
  return new (t || MatRipple)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE, 8));
};

MatRipple.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: ["matRippleColor", "color"],
    unbounded: ["matRippleUnbounded", "unbounded"],
    centered: ["matRippleCentered", "centered"],
    radius: ["matRippleRadius", "radius"],
    animation: ["matRippleAnimation", "animation"],
    disabled: ["matRippleDisabled", "disabled"],
    trigger: ["matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRipple, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[mat-ripple], [matRipple]',
      exportAs: 'matRipple',
      host: {
        'class': 'mat-ripple',
        '[class.mat-ripple-unbounded]': 'unbounded'
      }
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }, {
      type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_RIPPLE_GLOBAL_OPTIONS]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    color: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleColor']
    }],
    unbounded: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleUnbounded']
    }],
    centered: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleCentered']
    }],
    radius: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleRadius']
    }],
    animation: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleAnimation']
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleDisabled']
    }],
    trigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
      args: ['matRippleTrigger']
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatRippleModule {}

MatRippleModule.ɵfac = function MatRippleModule_Factory(t) {
  return new (t || MatRippleModule)();
};

MatRippleModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatRippleModule
});
MatRippleModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[MatCommonModule], MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatRippleModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatRipple, MatCommonModule],
      declarations: [MatRipple]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * @docs-private
 */


class MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    /** Display state of the checkbox. */

    this.state = 'unchecked';
    /** Whether the checkbox is disabled. */

    this.disabled = false;
  }

}

MatPseudoCheckbox.ɵfac = function MatPseudoCheckbox_Factory(t) {
  return new (t || MatPseudoCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE, 8));
};

MatPseudoCheckbox.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 8,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled"
  },
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {},
  styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckbox, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      selector: 'mat-pseudo-checkbox',
      template: '',
      host: {
        'class': 'mat-pseudo-checkbox',
        '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
        '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
        '[class.mat-pseudo-checkbox-disabled]': 'disabled',
        '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
      },
      styles: [".mat-pseudo-checkbox{width:16px;height:16px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:\"\";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border-color:transparent}._mat-animation-noopable.mat-pseudo-checkbox{transition:none;animation:none}._mat-animation-noopable.mat-pseudo-checkbox::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:5px;left:1px;width:10px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{top:2.4px;left:1px;width:8px;height:3px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}\n"]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
      }]
    }];
  }, {
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatPseudoCheckboxModule {}

MatPseudoCheckboxModule.ɵfac = function MatPseudoCheckboxModule_Factory(t) {
  return new (t || MatPseudoCheckboxModule)();
};

MatPseudoCheckboxModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatPseudoCheckboxModule
});
MatPseudoCheckboxModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[MatCommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatPseudoCheckboxModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatCommonModule],
      exports: [MatPseudoCheckbox],
      declarations: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token used to provide the parent component to options.
 */


const MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_OPTION_PARENT_COMPONENT');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Notes on the accessibility pattern used for `mat-optgroup`.
// The option group has two different "modes": regular and inert. The regular mode uses the
// recommended a11y pattern which has `role="group"` on the group element with `aria-labelledby`
// pointing to the label. This works for `mat-select`, but it seems to hit a bug for autocomplete
// under VoiceOver where the group doesn't get read out at all. The bug appears to be that if
// there's __any__ a11y-related attribute on the group (e.g. `role` or `aria-labelledby`),
// VoiceOver on Safari won't read it out.
// We've introduced the `inert` mode as a workaround. Under this mode, all a11y attributes are
// removed from the group, and we get the screen reader to read out the group label by mirroring it
// inside an invisible element in the option. This is sub-optimal, because the screen reader will
// repeat the group label on each navigation, whereas the default pattern only reads the group when
// the user enters a new group. The following alternate approaches were considered:
// 1. Reading out the group label using the `LiveAnnouncer` solves the problem, but we can't control
//    when the text will be read out so sometimes it comes in too late or never if the user
//    navigates quickly.
// 2. `<mat-option aria-describedby="groupLabel"` - This works on Safari, but VoiceOver in Chrome
//    won't read out the description at all.
// 3. `<mat-option aria-labelledby="optionLabel groupLabel"` - This works on Chrome, but Safari
//     doesn't read out the text at all. Furthermore, on
// Boilerplate for applying mixins to MatOptgroup.

/** @docs-private */

const _MatOptgroupMixinBase = mixinDisabled(class {}); // Counter for unique group ids.


let _uniqueOptgroupIdCounter = 0;

class _MatOptgroupBase extends _MatOptgroupMixinBase {
  constructor(parent) {
    var _a;

    super();
    /** Unique id for the underlying label. */

    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = (_a = parent === null || parent === void 0 ? void 0 : parent.inertGroups) !== null && _a !== void 0 ? _a : false;
  }

}

_MatOptgroupBase.ɵfac = function _MatOptgroupBase_Factory(t) {
  return new (t || _MatOptgroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8));
};

_MatOptgroupBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatOptgroupBase,
  inputs: {
    label: "label"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptgroupBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }];
  }, {
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * Injection token that can be used to reference instances of `MatOptgroup`. It serves as
 * alternative token to the actual `MatOptgroup` class which could cause unnecessary
 * retention of the class and its component metadata.
 */


const MAT_OPTGROUP = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatOptgroup');
/**
 * Component that is used to group instances of `mat-option`.
 */

class MatOptgroup extends _MatOptgroupBase {}

MatOptgroup.ɵfac = /* @__PURE__ */function () {
  let ɵMatOptgroup_BaseFactory;
  return function MatOptgroup_Factory(t) {
    return (ɵMatOptgroup_BaseFactory || (ɵMatOptgroup_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatOptgroup)))(t || MatOptgroup);
  };
}();

MatOptgroup.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-optgroup"],
  hostVars: 5,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-optgroup-disabled", ctx.disabled);
    }
  },
  inputs: {
    disabled: "disabled"
  },
  exportAs: ["matOptgroup"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
    provide: MAT_OPTGROUP,
    useExisting: MatOptgroup
  }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c1,
  decls: 4,
  vars: 2,
  consts: [["aria-hidden", "true", 1, "mat-optgroup-label", 3, "id"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._labelId);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
    }
  },
  styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptgroup, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-optgroup',
      exportAs: 'matOptgroup',
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      inputs: ['disabled'],
      host: {
        'class': 'mat-optgroup',
        '[attr.role]': '_inert ? null : "group"',
        '[attr.aria-disabled]': '_inert ? null : disabled.toString()',
        '[attr.aria-labelledby]': '_inert ? null : _labelId',
        '[class.mat-optgroup-disabled]': 'disabled'
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      template: "<span class=\"mat-optgroup-label\" aria-hidden=\"true\" [id]=\"_labelId\">{{ label }} <ng-content></ng-content></span>\n<ng-content select=\"mat-option, ng-container\"></ng-content>\n",
      styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}\n"]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */


let _uniqueIdCounter = 0;
/** Event object emitted by MatOption when selected or deselected. */

class MatOptionSelectionChange {
  constructor(
  /** Reference to the option that emitted the event. */
  source,
  /** Whether the change in the option's value was a result of a user action. */
  isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }

}

class _MatOptionBase {
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = '';
    /** The unique ID of the option. */

    this.id = `mat-option-${_uniqueIdCounter++}`;
    /** Event emitted when the option is selected or deselected. */
    // tslint:disable-next-line:no-output-on-prefix

    this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    /** Emits when the state of the option changes and any parents have to be notified. */

    this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
  }
  /** Whether the wrapping component is in multiple selection mode. */


  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */


  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */


  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }

  set disabled(value) {
    this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__.coerceBooleanProperty)(value);
  }
  /** Whether ripples for the option are disabled. */


  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */


  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */


  get viewValue() {
    // TODO(kara): Add input property alternative for node envs.
    return (this._getHostElement().textContent || '').trim();
  }
  /** Selects the option. */


  select() {
    if (!this._selected) {
      this._selected = true;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent();
    }
  }
  /** Deselects the option. */


  deselect() {
    if (this._selected) {
      this._selected = false;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent();
    }
  }
  /** Sets focus onto this option. */


  focus(_origin, options) {
    // Note that we aren't using `_origin`, but we need to keep it because some internal consumers
    // use `MatOption` in a `FocusKeyManager` and we need it to match `FocusableOption`.
    const element = this._getHostElement();

    if (typeof element.focus === 'function') {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setActiveStyles() {
    if (!this._active) {
      this._active = true;

      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */


  setInactiveStyles() {
    if (this._active) {
      this._active = false;

      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */


  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */


  _handleKeydown(event) {
    if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.SPACE) && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_11__.hasModifierKey)(event)) {
      this._selectViaInteraction(); // Prevent the page from scrolling down and form submits.


      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */


  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;

      this._changeDetectorRef.markForCheck();

      this._emitSelectionChangeEvent(true);
    }
  }
  /**
   * Gets the `aria-selected` value for the option. We explicitly omit the `aria-selected`
   * attribute from single-selection, unselected options. Including the `aria-selected="false"`
   * attributes adds a significant amount of noise to screen-reader users without providing useful
   * information.
   */


  _getAriaSelected() {
    return this.selected || (this.multiple ? false : null);
  }
  /** Returns the correct tabindex for the option depending on disabled state. */


  _getTabIndex() {
    return this.disabled ? '-1' : '0';
  }
  /** Gets the host DOM element. */


  _getHostElement() {
    return this._element.nativeElement;
  }

  ngAfterViewChecked() {
    // Since parent components could be using the option's label to display the selected values
    // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
    // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
    // relatively cheap, however we still limit them only to selected options in order to avoid
    // hitting the DOM too often.
    if (this._selected) {
      const viewValue = this.viewValue;

      if (viewValue !== this._mostRecentViewValue) {
        this._mostRecentViewValue = viewValue;

        this._stateChanges.next();
      }
    }
  }

  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */


  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }

}

_MatOptionBase.ɵfac = function _MatOptionBase_Factory(t) {
  _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
};

_MatOptionBase.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: _MatOptionBase,
  inputs: {
    value: "value",
    id: "id",
    disabled: "disabled"
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatOptionBase, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined
    }, {
      type: _MatOptgroupBase
    }];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    id: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    onSelectionChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }]
  });
})();
/**
 * Single option inside of a `<mat-select>` element.
 */


class MatOption extends _MatOptionBase {
  constructor(element, changeDetectorRef, parent, group) {
    super(element, changeDetectorRef, parent, group);
  }

}

MatOption.ɵfac = function MatOption_Factory(t) {
  return new (t || MatOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTION_PARENT_COMPONENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_OPTGROUP, 8));
};

MatOption.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatOption,
  selectors: [["mat-option"]],
  hostAttrs: ["role", "option", 1, "mat-option", "mat-focus-indicator"],
  hostVars: 12,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx._getTabIndex())("aria-selected", ctx._getAriaSelected())("aria-disabled", ctx.disabled.toString());
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-selected", ctx.selected)("mat-option-multiple", ctx.multiple)("mat-active", ctx.active)("mat-option-disabled", ctx.disabled);
    }
  },
  exportAs: ["matOption"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c2,
  decls: 5,
  vars: 4,
  consts: [["class", "mat-option-pseudo-checkbox", 3, "state", "disabled", 4, "ngIf"], [1, "mat-option-text"], ["class", "cdk-visually-hidden", 4, "ngIf"], ["mat-ripple", "", 1, "mat-option-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mat-option-pseudo-checkbox", 3, "state", "disabled"], [1, "cdk-visually-hidden"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatOption_mat_pseudo_checkbox_0_Template, 1, 2, "mat-pseudo-checkbox", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatOption_span_3_Template, 2, 1, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiple);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group && ctx.group._inert);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  directives: [MatPseudoCheckbox, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MatRipple],
  styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOption, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: 'mat-option',
      exportAs: 'matOption',
      host: {
        'role': 'option',
        '[attr.tabindex]': '_getTabIndex()',
        '[class.mat-selected]': 'selected',
        '[class.mat-option-multiple]': 'multiple',
        '[class.mat-active]': 'active',
        '[id]': 'id',
        '[attr.aria-selected]': '_getAriaSelected()',
        '[attr.aria-disabled]': 'disabled.toString()',
        '[class.mat-option-disabled]': 'disabled',
        '(click)': '_selectViaInteraction()',
        '(keydown)': '_handleKeydown($event)',
        'class': 'mat-option mat-focus-indicator'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\"\n    [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox>\n\n<span class=\"mat-option-text\"><ng-content></ng-content></span>\n\n<!-- See a11y notes inside optgroup.ts for context behind this element. -->\n<span class=\"cdk-visually-hidden\" *ngIf=\"group && group._inert\">({{ group.label }})</span>\n\n<div class=\"mat-option-ripple\" mat-ripple\n     [matRippleTrigger]=\"_getHostElement()\"\n     [matRippleDisabled]=\"disabled || disableRipple\">\n</div>\n",
      styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;max-width:100%;position:relative;cursor:pointer;outline:none;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center;-webkit-tap-highlight-color:transparent}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}.cdk-high-contrast-active .mat-option{margin:0 1px}.cdk-high-contrast-active .mat-option.mat-active{border:solid 1px currentColor;margin:0}.cdk-high-contrast-active .mat-option[aria-disabled=true]{opacity:.5}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option .mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_OPTION_PARENT_COMPONENT]
      }]
    }, {
      type: MatOptgroup,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_OPTGROUP]
      }]
    }];
  }, null);
})();
/**
 * Counts the amount of option group labels that precede the specified option.
 * @param optionIndex Index of the option at which to start counting.
 * @param options Flat list of all of the options.
 * @param optionGroups Flat list of all of the option groups.
 * @docs-private
 */


function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
  if (optionGroups.length) {
    let optionsArray = options.toArray();
    let groups = optionGroups.toArray();
    let groupCounter = 0;

    for (let i = 0; i < optionIndex + 1; i++) {
      if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
        groupCounter++;
      }
    }

    return groupCounter;
  }

  return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * @param optionOffset Offset of the option from the top of the panel.
 * @param optionHeight Height of the options.
 * @param currentScrollPosition Current scroll position of the panel.
 * @param panelHeight Height of the panel.
 * @docs-private
 */


function _getOptionScrollPosition(optionOffset, optionHeight, currentScrollPosition, panelHeight) {
  if (optionOffset < currentScrollPosition) {
    return optionOffset;
  }

  if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
    return Math.max(0, optionOffset - panelHeight + optionHeight);
  }

  return currentScrollPosition;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatOptionModule {}

MatOptionModule.ɵfac = function MatOptionModule_Factory(t) {
  return new (t || MatOptionModule)();
};

MatOptionModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatOptionModule
});
MatOptionModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatOptionModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, MatCommonModule, MatPseudoCheckboxModule],
      exports: [MatOption, MatOptgroup],
      declarations: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 5590:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2015/icon.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ICON_REGISTRY_PROVIDER": () => (/* binding */ ICON_REGISTRY_PROVIDER),
/* harmony export */   "ICON_REGISTRY_PROVIDER_FACTORY": () => (/* binding */ ICON_REGISTRY_PROVIDER_FACTORY),
/* harmony export */   "MAT_ICON_LOCATION": () => (/* binding */ MAT_ICON_LOCATION),
/* harmony export */   "MAT_ICON_LOCATION_FACTORY": () => (/* binding */ MAT_ICON_LOCATION_FACTORY),
/* harmony export */   "MatIcon": () => (/* binding */ MatIcon),
/* harmony export */   "MatIconModule": () => (/* binding */ MatIconModule),
/* harmony export */   "MatIconRegistry": () => (/* binding */ MatIconRegistry),
/* harmony export */   "getMatIconFailedToSanitizeLiteralError": () => (/* binding */ getMatIconFailedToSanitizeLiteralError),
/* harmony export */   "getMatIconFailedToSanitizeUrlError": () => (/* binding */ getMatIconFailedToSanitizeUrlError),
/* harmony export */   "getMatIconNameNotFoundError": () => (/* binding */ getMatIconNameNotFoundError),
/* harmony export */   "getMatIconNoHttpProviderError": () => (/* binding */ getMatIconNoHttpProviderError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 6484);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4350);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 4661);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 318);











/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * The Trusted Types policy, or null if Trusted Types are not
 * enabled/supported, or undefined if the policy has not been created yet.
 */

const _c0 = ["*"];
let policy;
/**
 * Returns the Trusted Types policy, or null if Trusted Types are not
 * enabled/supported. The first call to this function will create the policy.
 */

function getPolicy() {
  if (policy === undefined) {
    policy = null;

    if (typeof window !== 'undefined') {
      const ttWindow = window;

      if (ttWindow.trustedTypes !== undefined) {
        policy = ttWindow.trustedTypes.createPolicy('angular#components', {
          createHTML: s => s
        });
      }
    }
  }

  return policy;
}
/**
 * Unsafely promote a string to a TrustedHTML, falling back to strings when
 * Trusted Types are not available.
 * @security This is a security-sensitive function; any use of this function
 * must go through security review. In particular, it must be assured that the
 * provided string will never cause an XSS vulnerability if used in a context
 * that will be interpreted as HTML by a browser, e.g. when assigning to
 * element.innerHTML.
 */


function trustedHTMLFromString(html) {
  var _a;

  return ((_a = getPolicy()) === null || _a === void 0 ? void 0 : _a.createHTML(html)) || html;
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Returns an exception to be thrown in the case when attempting to
 * load an icon with a name that cannot be found.
 * @docs-private
 */


function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
/**
 * Returns an exception to be thrown when the consumer attempts to use
 * `<mat-icon>` without including @angular/common/http.
 * @docs-private
 */


function getMatIconNoHttpProviderError() {
  return Error('Could not find HttpClient provider for use with Angular Material icons. ' + 'Please include the HttpClientModule from @angular/common/http in your ' + 'app imports.');
}
/**
 * Returns an exception to be thrown when a URL couldn't be sanitized.
 * @param url URL that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL ` + `via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
/**
 * Returns an exception to be thrown when a HTML string couldn't be sanitized.
 * @param literal HTML that was attempted to be sanitized.
 * @docs-private
 */


function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by ` + `Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
/**
 * Configuration for an icon, including the URL and possibly the cached SVG element.
 * @docs-private
 */


class SvgIconConfig {
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }

}
/**
 * Service to register and display icons used by the `<mat-icon>` component.
 * - Registers icon URLs by namespace and name.
 * - Registers icon set URLs by namespace.
 * - Registers aliases for CSS classes, for use with icon fonts.
 * - Loads icons from URLs and extracts individual icons from icon sets.
 */


class MatIconRegistry {
  constructor(_httpClient, _sanitizer, document, _errorHandler) {
    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    /**
     * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
     */

    this._svgIconConfigs = new Map();
    /**
     * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
     * Multiple icon sets can be registered under the same namespace.
     */

    this._iconSetConfigs = new Map();
    /** Cache for icons loaded by direct URLs. */

    this._cachedIconsByUrl = new Map();
    /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */

    this._inProgressUrlFetches = new Map();
    /** Map from font identifiers to their CSS class names. Used for icon fonts. */

    this._fontCssClassesByAlias = new Map();
    /** Registered icon resolver functions. */

    this._resolvers = [];
    /**
     * The CSS class to apply when an `<mat-icon>` component has no icon name, url, or font specified.
     * The default 'material-icons' value assumes that the material icon font has been loaded as
     * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
     */

    this._defaultFontSetClass = 'material-icons';
    this._document = document;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */


  addSvgIcon(iconName, url, options) {
    return this.addSvgIconInNamespace('', iconName, url, options);
  }
  /**
   * Registers an icon using an HTML string in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */


  addSvgIconLiteral(iconName, literal, options) {
    return this.addSvgIconLiteralInNamespace('', iconName, literal, options);
  }
  /**
   * Registers an icon by URL in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */


  addSvgIconInNamespace(namespace, iconName, url, options) {
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon resolver function with the registry. The function will be invoked with the
   * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
   * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
   * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
   * will be invoked in the order in which they have been registered.
   * @param resolver Resolver function to be registered.
   */


  addSvgIconResolver(resolver) {
    this._resolvers.push(resolver);

    return this;
  }
  /**
   * Registers an icon using an HTML string in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */


  addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal); // TODO: add an ngDevMode check


    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    } // Security: The literal is passed in as SafeHtml, and is thus trusted.


    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig('', trustedLiteral, options));
  }
  /**
   * Registers an icon set by URL in the default namespace.
   * @param url
   */


  addSvgIconSet(url, options) {
    return this.addSvgIconSetInNamespace('', url, options);
  }
  /**
   * Registers an icon set using an HTML string in the default namespace.
   * @param literal SVG source of the icon set.
   */


  addSvgIconSetLiteral(literal, options) {
    return this.addSvgIconSetLiteralInNamespace('', literal, options);
  }
  /**
   * Registers an icon set by URL in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param url
   */


  addSvgIconSetInNamespace(namespace, url, options) {
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon set using an HTML string in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param literal SVG source of the icon set.
   */


  addSvgIconSetLiteralInNamespace(namespace, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, literal);

    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    } // Security: The literal is passed in as SafeHtml, and is thus trusted.


    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig('', trustedLiteral, options));
  }
  /**
   * Defines an alias for a CSS class name to be used for icon fonts. Creating an matIcon
   * component with the alias as the fontSet input will cause the class name to be applied
   * to the `<mat-icon>` element.
   *
   * @param alias Alias for the font.
   * @param className Class name override to be used instead of the alias.
   */


  registerFontClassAlias(alias, className = alias) {
    this._fontCssClassesByAlias.set(alias, className);

    return this;
  }
  /**
   * Returns the CSS class name associated with the alias by a previous call to
   * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
   */


  classNameForFontAlias(alias) {
    return this._fontCssClassesByAlias.get(alias) || alias;
  }
  /**
   * Sets the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   *
   * @param className
   */


  setDefaultFontSetClass(className) {
    this._defaultFontSetClass = className;
    return this;
  }
  /**
   * Returns the CSS class name to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */


  getDefaultFontSetClass() {
    return this._defaultFontSetClass;
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
   * The response from the URL may be cached so this will not always cause an HTTP request, but
   * the produced element will always be a new copy of the originally fetched icon. (That is,
   * it will not contain any modifications made to elements previously returned).
   *
   * @param safeUrl URL from which to fetch the SVG icon.
   */


  getSvgIconFromUrl(safeUrl) {
    const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl);

    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }

    const cachedIcon = this._cachedIconsByUrl.get(url);

    if (cachedIcon) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(cachedIcon));
    }

    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svg => this._cachedIconsByUrl.set(url, svg)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
   * and namespace. The icon must have been previously registered with addIcon or addIconSet;
   * if not, the Observable will throw an error.
   *
   * @param name Name of the icon to be retrieved.
   * @param namespace Namespace in which to look for the icon.
   */


  getNamedSvgIcon(name, namespace = '') {
    const key = iconKey(namespace, name);

    let config = this._svgIconConfigs.get(key); // Return (copy of) cached icon if possible.


    if (config) {
      return this._getSvgFromConfig(config);
    } // Otherwise try to resolve the config from one of the resolver functions.


    config = this._getIconConfigFromResolvers(namespace, name);

    if (config) {
      this._svgIconConfigs.set(key, config);

      return this._getSvgFromConfig(config);
    } // See if we have any icon sets registered for the namespace.


    const iconSetConfigs = this._iconSetConfigs.get(namespace);

    if (iconSetConfigs) {
      return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
    }

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(getMatIconNameNotFoundError(key));
  }

  ngOnDestroy() {
    this._resolvers = [];

    this._svgIconConfigs.clear();

    this._iconSetConfigs.clear();

    this._cachedIconsByUrl.clear();
  }
  /**
   * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
   */


  _getSvgFromConfig(config) {
    if (config.svgText) {
      // We already have the SVG element for this icon, return a copy.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(cloneSvg(this._svgElementFromConfig(config)));
    } else {
      // Fetch the icon from the config's URL, cache it, and return a copy.
      return this._loadSvgIconFromConfig(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => cloneSvg(svg)));
    }
  }
  /**
   * Attempts to find an icon with the specified name in any of the SVG icon sets.
   * First searches the available cached icons for a nested element with a matching name, and
   * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
   * that have not been cached, and searches again after all fetches are completed.
   * The returned Observable produces the SVG element if possible, and throws
   * an error if no icon with the specified name can be found.
   */


  _getSvgFromIconSetConfigs(name, iconSetConfigs) {
    // For all the icon set SVG elements we've fetched, see if any contain an icon with the
    // requested name.
    const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);

    if (namedIcon) {
      // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
      // time anyway, there's probably not much advantage compared to just always extracting
      // it from the icon set.
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(namedIcon);
    } // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
    // fetched, fetch them now and look for iconName in the results.


    const iconSetFetchRequests = iconSetConfigs.filter(iconSetConfig => !iconSetConfig.svgText).map(iconSetConfig => {
      return this._loadSvgIconSetFromConfig(iconSetConfig).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
        const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, iconSetConfig.url); // Swallow errors fetching individual URLs so the
        // combined Observable won't necessarily fail.


        const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;

        this._errorHandler.handleError(new Error(errorMessage));

        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
      }));
    }); // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
    // cached SVG element (unless the request failed), and we can check again for the icon.

    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(iconSetFetchRequests).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => {
      const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs); // TODO: add an ngDevMode check


      if (!foundIcon) {
        throw getMatIconNameNotFoundError(name);
      }

      return foundIcon;
    }));
  }
  /**
   * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */


  _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
    // Iterate backwards, so icon sets added later have precedence.
    for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
      const config = iconSetConfigs[i]; // Parsing the icon set's text into an SVG element can be expensive. We can avoid some of
      // the parsing by doing a quick check using `indexOf` to see if there's any chance for the
      // icon to be in the set. This won't be 100% accurate, but it should help us avoid at least
      // some of the parsing.

      if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
        const svg = this._svgElementFromConfig(config);

        const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);

        if (foundIcon) {
          return foundIcon;
        }
      }
    }

    return null;
  }
  /**
   * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
   * from it.
   */


  _loadSvgIconFromConfig(config) {
    return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(() => this._svgElementFromConfig(config)));
  }
  /**
   * Loads the content of the icon set URL specified in the
   * SvgIconConfig and attaches it to the config.
   */


  _loadSvgIconSetFromConfig(config) {
    if (config.svgText) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
    }

    return this._fetchIcon(config).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(svgText => config.svgText = svgText));
  }
  /**
   * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */


  _extractSvgIconFromSet(iconSet, iconName, options) {
    // Use the `id="iconName"` syntax in order to escape special
    // characters in the ID (versus using the #iconName syntax).
    const iconSource = iconSet.querySelector(`[id="${iconName}"]`);

    if (!iconSource) {
      return null;
    } // Clone the element and remove the ID to prevent multiple elements from being added
    // to the page with the same ID.


    const iconElement = iconSource.cloneNode(true);
    iconElement.removeAttribute('id'); // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
    // the content of a new <svg> node.

    if (iconElement.nodeName.toLowerCase() === 'svg') {
      return this._setSvgAttributes(iconElement, options);
    } // If the node is a <symbol>, it won't be rendered so we have to convert it into <svg>. Note
    // that the same could be achieved by referring to it via <use href="#id">, however the <use>
    // tag is problematic on Firefox, because it needs to include the current page path.


    if (iconElement.nodeName.toLowerCase() === 'symbol') {
      return this._setSvgAttributes(this._toSvgElement(iconElement), options);
    } // createElement('SVG') doesn't work as expected; the DOM ends up with
    // the correct nodes, but the SVG content doesn't render. Instead we
    // have to create an empty SVG node using innerHTML and append its content.
    // Elements created using DOMParser.parseFromString have the same problem.
    // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display


    const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>')); // Clone the node so we don't remove it from the parent icon set element.


    svg.appendChild(iconElement);
    return this._setSvgAttributes(svg, options);
  }
  /**
   * Creates a DOM element from the given SVG string.
   */


  _svgElementFromString(str) {
    const div = this._document.createElement('DIV');

    div.innerHTML = str;
    const svg = div.querySelector('svg'); // TODO: add an ngDevMode check

    if (!svg) {
      throw Error('<svg> tag not found');
    }

    return svg;
  }
  /**
   * Converts an element into an SVG node by cloning all of its children.
   */


  _toSvgElement(element) {
    const svg = this._svgElementFromString(trustedHTMLFromString('<svg></svg>'));

    const attributes = element.attributes; // Copy over all the attributes from the `symbol` to the new SVG, except the id.

    for (let i = 0; i < attributes.length; i++) {
      const {
        name,
        value
      } = attributes[i];

      if (name !== 'id') {
        svg.setAttribute(name, value);
      }
    }

    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
        svg.appendChild(element.childNodes[i].cloneNode(true));
      }
    }

    return svg;
  }
  /**
   * Sets the default attributes for an SVG element to be used as an icon.
   */


  _setSvgAttributes(svg, options) {
    svg.setAttribute('fit', '');
    svg.setAttribute('height', '100%');
    svg.setAttribute('width', '100%');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.

    if (options && options.viewBox) {
      svg.setAttribute('viewBox', options.viewBox);
    }

    return svg;
  }
  /**
   * Returns an Observable which produces the string contents of the given icon. Results may be
   * cached, so future calls with the same URL may not cause another HTTP request.
   */


  _fetchIcon(iconConfig) {
    var _a;

    const {
      url: safeUrl,
      options
    } = iconConfig;
    const withCredentials = (_a = options === null || options === void 0 ? void 0 : options.withCredentials) !== null && _a !== void 0 ? _a : false;

    if (!this._httpClient) {
      throw getMatIconNoHttpProviderError();
    } // TODO: add an ngDevMode check


    if (safeUrl == null) {
      throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
    }

    const url = this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.RESOURCE_URL, safeUrl); // TODO: add an ngDevMode check


    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    } // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
    // already a request in progress for that URL. It's necessary to call share() on the
    // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.


    const inProgressFetch = this._inProgressUrlFetches.get(url);

    if (inProgressFetch) {
      return inProgressFetch;
    }

    const req = this._httpClient.get(url, {
      responseType: 'text',
      withCredentials
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(svg => {
      // Security: This SVG is fetched from a SafeResourceUrl, and is thus
      // trusted HTML.
      return trustedHTMLFromString(svg);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => this._inProgressUrlFetches.delete(url)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.share)());

    this._inProgressUrlFetches.set(url, req);

    return req;
  }
  /**
   * Registers an icon config by name in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param iconName Name under which to register the config.
   * @param config Config to be registered.
   */


  _addSvgIconConfig(namespace, iconName, config) {
    this._svgIconConfigs.set(iconKey(namespace, iconName), config);

    return this;
  }
  /**
   * Registers an icon set config in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param config Config to be registered.
   */


  _addSvgIconSetConfig(namespace, config) {
    const configNamespace = this._iconSetConfigs.get(namespace);

    if (configNamespace) {
      configNamespace.push(config);
    } else {
      this._iconSetConfigs.set(namespace, [config]);
    }

    return this;
  }
  /** Parses a config's text into an SVG element. */


  _svgElementFromConfig(config) {
    if (!config.svgElement) {
      const svg = this._svgElementFromString(config.svgText);

      this._setSvgAttributes(svg, config.options);

      config.svgElement = svg;
    }

    return config.svgElement;
  }
  /** Tries to create an icon config through the registered resolver functions. */


  _getIconConfigFromResolvers(namespace, name) {
    for (let i = 0; i < this._resolvers.length; i++) {
      const result = this._resolvers[i](name, namespace);

      if (result) {
        return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
      }
    }

    return undefined;
  }

}

MatIconRegistry.ɵfac = function MatIconRegistry_Factory(t) {
  return new (t || MatIconRegistry)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
};

MatIconRegistry.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MatIconRegistry,
  factory: MatIconRegistry.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconRegistry, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }]
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
    }];
  }, null);
})();
/** @docs-private */


function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document, errorHandler);
}
/** @docs-private */


const ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatIconRegistry], [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler, [new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), _angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
/** Clones an SVGElement while preserving type information. */

function cloneSvg(svg) {
  return svg.cloneNode(true);
}
/** Returns the cache key to use for an icon namespace and name. */


function iconKey(namespace, name) {
  return namespace + ':' + name;
}

function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatIcon.

/** @docs-private */


const _MatIconBase = (0,_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.mixinColor)(class {
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }

});
/**
 * Injection token used to provide the current location to `MatIcon`.
 * Used to handle server-side rendering and to stub out during unit tests.
 * @docs-private
 */


const MAT_ICON_LOCATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-icon-location', {
  providedIn: 'root',
  factory: MAT_ICON_LOCATION_FACTORY
});
/** @docs-private */

function MAT_ICON_LOCATION_FACTORY() {
  const _document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT);

  const _location = _document ? _document.location : null;

  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ''
  };
}
/** SVG attributes that accept a FuncIRI (e.g. `url(<something>)`). */


const funcIriAttributes = ['clip-path', 'color-profile', 'src', 'cursor', 'fill', 'filter', 'marker', 'marker-start', 'marker-mid', 'marker-end', 'mask', 'stroke'];
/** Selector that can be used to find all elements that are using a `FuncIRI`. */

const funcIriAttributeSelector = funcIriAttributes.map(attr => `[${attr}]`).join(', ');
/** Regex that can be used to extract the id out of a FuncIRI. */

const funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */

class MatIcon extends _MatIconBase {
  constructor(elementRef, _iconRegistry, ariaHidden, _location, _errorHandler) {
    super(elementRef);
    this._iconRegistry = _iconRegistry;
    this._location = _location;
    this._errorHandler = _errorHandler;
    this._inline = false;
    /** Subscription to the current in-progress SVG icon request. */

    this._currentIconFetch = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY; // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
    // the right thing to do for the majority of icon use-cases.

    if (!ariaHidden) {
      elementRef.nativeElement.setAttribute('aria-hidden', 'true');
    }
  }
  /**
   * Whether the icon should be inlined, automatically sizing the icon to match the font size of
   * the element the icon is contained in.
   */


  get inline() {
    return this._inline;
  }

  set inline(inline) {
    this._inline = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceBooleanProperty)(inline);
  }
  /** Name of the icon in the SVG icon set. */


  get svgIcon() {
    return this._svgIcon;
  }

  set svgIcon(value) {
    if (value !== this._svgIcon) {
      if (value) {
        this._updateSvgIcon(value);
      } else if (this._svgIcon) {
        this._clearSvgElement();
      }

      this._svgIcon = value;
    }
  }
  /** Font set that the icon is a part of. */


  get fontSet() {
    return this._fontSet;
  }

  set fontSet(value) {
    const newValue = this._cleanupFontValue(value);

    if (newValue !== this._fontSet) {
      this._fontSet = newValue;

      this._updateFontIconClasses();
    }
  }
  /** Name of an icon within a font set. */


  get fontIcon() {
    return this._fontIcon;
  }

  set fontIcon(value) {
    const newValue = this._cleanupFontValue(value);

    if (newValue !== this._fontIcon) {
      this._fontIcon = newValue;

      this._updateFontIconClasses();
    }
  }
  /**
   * Splits an svgIcon binding value into its icon set and icon name components.
   * Returns a 2-element array of [(icon set), (icon name)].
   * The separator for the two fields is ':'. If there is no separator, an empty
   * string is returned for the icon set and the entire value is returned for
   * the icon name. If the argument is falsy, returns an array of two empty strings.
   * Throws an error if the name contains two or more ':' separators.
   * Examples:
   *   `'social:cake' -> ['social', 'cake']
   *   'penguin' -> ['', 'penguin']
   *   null -> ['', '']
   *   'a:b:c' -> (throws Error)`
   */


  _splitIconName(iconName) {
    if (!iconName) {
      return ['', ''];
    }

    const parts = iconName.split(':');

    switch (parts.length) {
      case 1:
        return ['', parts[0]];
      // Use default namespace.

      case 2:
        return parts;

      default:
        throw Error(`Invalid icon name: "${iconName}"`);
      // TODO: add an ngDevMode check
    }
  }

  ngOnInit() {
    // Update font classes because ngOnChanges won't be called if none of the inputs are present,
    // e.g. <mat-icon>arrow</mat-icon> In this case we need to add a CSS class for the default font.
    this._updateFontIconClasses();
  }

  ngAfterViewChecked() {
    const cachedElements = this._elementsWithExternalReferences;

    if (cachedElements && cachedElements.size) {
      const newPath = this._location.getPathname(); // We need to check whether the URL has changed on each change detection since
      // the browser doesn't have an API that will let us react on link clicks and
      // we can't depend on the Angular router. The references need to be updated,
      // because while most browsers don't care whether the URL is correct after
      // the first render, Safari will break if the user navigates to a different
      // page and the SVG isn't re-rendered.


      if (newPath !== this._previousPath) {
        this._previousPath = newPath;

        this._prependPathToReferences(newPath);
      }
    }
  }

  ngOnDestroy() {
    this._currentIconFetch.unsubscribe();

    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
  }

  _usingFontIcon() {
    return !this.svgIcon;
  }

  _setSvgElement(svg) {
    this._clearSvgElement(); // Note: we do this fix here, rather than the icon registry, because the
    // references have to point to the URL at the time that the icon was created.


    const path = this._location.getPathname();

    this._previousPath = path;

    this._cacheChildrenWithExternalReferences(svg);

    this._prependPathToReferences(path);

    this._elementRef.nativeElement.appendChild(svg);
  }

  _clearSvgElement() {
    const layoutElement = this._elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;

    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    } // Remove existing non-element child nodes and SVGs, and add the new SVG element. Note that
    // we can't use innerHTML, because IE will throw if the element has a data binding.


    while (childCount--) {
      const child = layoutElement.childNodes[childCount]; // 1 corresponds to Node.ELEMENT_NODE. We remove all non-element nodes in order to get rid
      // of any loose text nodes, as well as any SVG elements in order to remove any old icons.

      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === 'svg') {
        child.remove();
      }
    }
  }

  _updateFontIconClasses() {
    if (!this._usingFontIcon()) {
      return;
    }

    const elem = this._elementRef.nativeElement;
    const fontSetClass = this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet) : this._iconRegistry.getDefaultFontSetClass();

    if (fontSetClass != this._previousFontSetClass) {
      if (this._previousFontSetClass) {
        elem.classList.remove(this._previousFontSetClass);
      }

      if (fontSetClass) {
        elem.classList.add(fontSetClass);
      }

      this._previousFontSetClass = fontSetClass;
    }

    if (this.fontIcon != this._previousFontIconClass) {
      if (this._previousFontIconClass) {
        elem.classList.remove(this._previousFontIconClass);
      }

      if (this.fontIcon) {
        elem.classList.add(this.fontIcon);
      }

      this._previousFontIconClass = this.fontIcon;
    }
  }
  /**
   * Cleans up a value to be used as a fontIcon or fontSet.
   * Since the value ends up being assigned as a CSS class, we
   * have to trim the value and omit space-separated values.
   */


  _cleanupFontValue(value) {
    return typeof value === 'string' ? value.trim().split(' ')[0] : value;
  }
  /**
   * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
   * reference. This is required because WebKit browsers require references to be prefixed with
   * the current path, if the page has a `base` tag.
   */


  _prependPathToReferences(path) {
    const elements = this._elementsWithExternalReferences;

    if (elements) {
      elements.forEach((attrs, element) => {
        attrs.forEach(attr => {
          element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
        });
      });
    }
  }
  /**
   * Caches the children of an SVG element that have `url()`
   * references that we need to prefix with the current path.
   */


  _cacheChildrenWithExternalReferences(element) {
    const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
    const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || new Map();

    for (let i = 0; i < elementsWithFuncIri.length; i++) {
      funcIriAttributes.forEach(attr => {
        const elementWithReference = elementsWithFuncIri[i];
        const value = elementWithReference.getAttribute(attr);
        const match = value ? value.match(funcIriPattern) : null;

        if (match) {
          let attributes = elements.get(elementWithReference);

          if (!attributes) {
            attributes = [];
            elements.set(elementWithReference, attributes);
          }

          attributes.push({
            name: attr,
            value: match[1]
          });
        }
      });
    }
  }
  /** Sets a new SVG icon with a particular name. */


  _updateSvgIcon(rawName) {
    this._svgNamespace = null;
    this._svgName = null;

    this._currentIconFetch.unsubscribe();

    if (rawName) {
      const [namespace, iconName] = this._splitIconName(rawName);

      if (namespace) {
        this._svgNamespace = namespace;
      }

      if (iconName) {
        this._svgName = iconName;
      }

      this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(svg => this._setSvgElement(svg), err => {
        const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;

        this._errorHandler.handleError(new Error(errorMessage));
      });
    }
  }

}

MatIcon.ɵfac = function MatIcon_Factory(t) {
  return new (t || MatIcon)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('aria-hidden'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_ICON_LOCATION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler));
};

MatIcon.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MatIcon,
  selectors: [["mat-icon"]],
  hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
  hostVars: 7,
  hostBindings: function MatIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    }
  },
  inputs: {
    color: "color",
    inline: "inline",
    svgIcon: "svgIcon",
    fontSet: "fontSet",
    fontIcon: "fontIcon"
  },
  exportAs: ["matIcon"],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function MatIcon_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    }
  },
  styles: [".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],
  encapsulation: 2,
  changeDetection: 0
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIcon, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      template: '<ng-content></ng-content>',
      selector: 'mat-icon',
      exportAs: 'matIcon',
      inputs: ['color'],
      host: {
        'role': 'img',
        'class': 'mat-icon notranslate',
        '[attr.data-mat-icon-type]': '_usingFontIcon() ? "font" : "svg"',
        '[attr.data-mat-icon-name]': '_svgName || fontIcon',
        '[attr.data-mat-icon-namespace]': '_svgNamespace || fontSet',
        '[class.mat-icon-inline]': 'inline',
        '[class.mat-icon-no-color]': 'color !== "primary" && color !== "accent" && color !== "warn"'
      },
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
      styles: [".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"]
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: MatIconRegistry
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
        args: ['aria-hidden']
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [MAT_ICON_LOCATION]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler
    }];
  }, {
    inline: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    svgIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fontSet: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    fontIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


class MatIconModule {}

MatIconModule.ɵfac = function MatIconModule_Factory(t) {
  return new (t || MatIconModule)();
};

MatIconModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: MatIconModule
});
MatIconModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatIconModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
      exports: [MatIcon, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatCommonModule],
      declarations: [MatIcon]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_modules_book_module_ts.js.map