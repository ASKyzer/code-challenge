(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_new_city_new_city_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/new-city/new-city.component */ "./src/app/components/new-city/new-city.component.ts");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/components/city/city.component.ts");







var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'city/:id', component: _components_city_city_component__WEBPACK_IMPORTED_MODULE_6__["CityComponent"] },
    { path: 'edit/:id', component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'new', component: _components_new_city_new_city_component__WEBPACK_IMPORTED_MODULE_5__["NewCityComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\" class=\"page-container\">\n  <app-toolbar></app-toolbar>\n\n  <div class=\"allButFooter\">\n    <div class=\"\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".allButFooter {\n  min-height: calc(100vh - 9rem);\n  padding-top: 3.5rem; }\n\napp-toolbar {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsQnV0Rm9vdGVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDlyZW0pO1xuICBwYWRkaW5nLXRvcDogMy41cmVtO1xufVxuXG5hcHAtdG9vbGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table/table.component */ "./src/app/components/table/table.component.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/map/map.component */ "./src/app/components/map/map.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_new_city_new_city_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/new-city/new-city.component */ "./src/app/components/new-city/new-city.component.ts");
/* harmony import */ var _components_city_city_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/city/city.component */ "./src/app/components/city/city.component.ts");
/* harmony import */ var _components_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/server-error/server-error.component */ "./src/app/components/server-error/server-error.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/loader/loader.component */ "./src/app/components/loader/loader.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_10__["ToolbarComponent"],
                _components_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_12__["CardComponent"],
                _components_map_map_component__WEBPACK_IMPORTED_MODULE_13__["MapComponent"],
                _components_form_form_component__WEBPACK_IMPORTED_MODULE_14__["FormComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_16__["EditComponent"],
                _components_new_city_new_city_component__WEBPACK_IMPORTED_MODULE_17__["NewCityComponent"],
                _components_city_city_component__WEBPACK_IMPORTED_MODULE_18__["CityComponent"],
                _components_server_error_server_error_component__WEBPACK_IMPORTED_MODULE_19__["ServerErrorComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
                _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_21__["LoaderComponent"],
                _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_23__["HeroComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: ''
                })
            ],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_22__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <mat-card class=\"city-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"city-header-image\"></div>\n        <mat-card-title>{{ city.title }}</mat-card-title>\n      </mat-card-header>\n      <img mat-card-image src={{city.image_url}} alt=\"{{ city.title }}\">\n      <mat-card-content>\n        <p>{{ city.content }}</p>\n      </mat-card-content>\n      <mat-card-actions>\n        <a [routerLink]=\"['/edit', city.id]\">\n          <button color=\"primary\" mat-button>EDIT {{ city.id }}</button>\n        </a>\n        <button (click)=\"onDeleteClick(city.id)\" mat-button color=\"warn\">DELETE</button>\n      </mat-card-actions>\n      <app-map [title]=\"city.title\" [lat]=\"city.lat\" [long]=\"city.long\"></app-map>\n    </mat-card>\n"

/***/ }),

/***/ "./src/app/components/card/card.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/card/card.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".city-card {\n  margin: 2.5rem 0; }\n\n.city-header-image {\n  background-size: cover; }\n\nli a {\n  text-decoration: none; }\n\n.map-container {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpdHktY2FyZCB7XG4gIG1hcmdpbjogMi41cmVtIDA7XG59XG5cbi5jaXR5LWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmxpIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tYXAtY29udGFpbmVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




var CardComponent = /** @class */ (function () {
    function CardComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.apiService.deleteOne(id).subscribe(function (city) {
            _this.router.navigate(['']);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('city'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CardComponent.prototype, "city", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/components/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/components/card/card.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/city/city.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/city/city.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngIf=\"!errorMsg; else errorCard\" class=\"container\">\n    <app-card [city]=\"city\"></app-card>\n  </div>\n  <ng-template #errorCard>\n    <app-server-error [errorMsg]=\"errorMsg\"></app-server-error>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/city/city.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/city/city.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2l0eS9jaXR5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/city/city.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/city/city.component.ts ***!
  \***************************************************/
/*! exports provided: CityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityComponent", function() { return CityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




var CityComponent = /** @class */ (function () {
    function CityComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
    }
    CityComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            return _this.apiService
                .getOne(_this.id)
                .subscribe(function (city) { return (_this.city = city); }, function (error) { return (_this.errorMsg = error); });
        });
    };
    CityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-city',
            template: __webpack_require__(/*! ./city.component.html */ "./src/app/components/city/city.component.html"),
            styles: [__webpack_require__(/*! ./city.component.scss */ "./src/app/components/city/city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], CityComponent);
    return CityComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"edit-city__header\">Editing {{ city.title }}</h4>\n  <app-form [city]=\"city\"></app-form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/edit/edit.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".edit-city__header {\n  margin-top: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9lZGl0L2VkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWRpdC9lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtY2l0eV9faGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




var EditComponent = /** @class */ (function () {
    function EditComponent(route, apiService) {
        this.route = route;
        this.apiService = apiService;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            return _this.apiService
                .getOne(_this.id)
                .subscribe(function (city) { return (_this.city = city); }, function (error) { return (_this.errorMsg = error); });
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.scss */ "./src/app/components/edit/edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"copyright\">\n    <p>&copy; Copyright {{ copyright }} Adrian Kyzer</p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background: #FF407F;\n  padding: 0;\n  margin-top: auto;\n  height: 8rem; }\n  footer .copyright {\n    color: #fff;\n    text-align: center;\n    line-height: 8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2Fkcmlhbmt5emVyL0Rlc2t0b3AvUHJhY3RpY2UtQ29kZXMvd2YtY29kZS1jaGFsbGVuZ2Uvc3JjL2FwcC9zaGFyZWQvc2Fzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQ0ZvQjtFREdwQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtFQUpkO0lBT0ksV0NQYztJRFFkLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zYXNzL3ZhcmlhYmxlcyc7XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICRjb2xvci1hY2NlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGhlaWdodDogOHJlbTtcblxuICAgICYgLmNvcHlyaWdodCB7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDhyZW07XG4gIH1cbn1cblxuXG4iLCIkY29sb3ItcHJpbWFyeTogIzNGNTBCNTtcbiRjb2xvci1hY2NlbnQ6ICNGRjQwN0Y7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItbWVkaXVtLWdyYXk6ICNjY2M7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.copyright = new Date().getFullYear();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/form/form.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-container\">\n  <form [formGroup]=\"cityForm\" [hidden]='success' (ngSubmit)=\"submitHandler()\" class=\"form\">\n    <mat-form-field class=\"form-full-width\">\n      <input matInput placeholder=\"Enter City\" [formControl]=\"title\" formControlName=\"title\" required />\n      <mat-error *ngIf=\"cityForm.controls['title'].invalid && cityForm.controls['title'].touched\">\n        {{ errorMessage }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-full-width\">\n      <textarea matInput placeholder=\"Enter City Description\" formControlName=\"content\" rows=\"10\"></textarea>\n      <mat-error *ngIf=\"cityForm.controls['content'].invalid && cityForm.controls['content'].touched\">\n        {{ errorMessage }}\n      </mat-error>\n    </mat-form-field>\n\n    <table class=\"form-full-width\" cellspacing=\"0\">\n      <tr>\n        <td>\n          <mat-form-field class=\"form-full-width\">\n            <input matInput placeholder=\"Enter Latitude\" formControlName=\"lat\">\n          </mat-form-field>\n        </td>\n        <td>\n          <mat-form-field class=\"form-full-width\">\n            <input matInput placeholder=\"Enter Longitude\" formControlName=\"long\">\n          </mat-form-field>\n        </td>\n      </tr>\n    </table>\n\n    <mat-form-field class=\"form-full-width\">\n      <input matInput placeholder=\"Enter Image Url\" formControlName=\"image_url\">\n    </mat-form-field>\n\n    <button [disabled]=\"cityForm.invalid\" class=\"btn waves-effect waves-light blue\" color='primary'>\n      Submit<i class=\"material-icons right\">send</i>\n    </button>\n    <button (click)=\"onCancelClick(); $event.preventDefault()\" class=\"btn waves-effect waves-light red\" color=\"accent\">\n      Cancel<i class=\"material-icons right\">cancel</i>\n    </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/form/form.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/form/form.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-container {\n  background: white;\n  display: flex;\n  flex-direction: column;\n  padding: 30px 50px;\n  border: 1px solid #ccc;\n  box-shadow: 2px 2px 20px #ccc;\n  margin-bottom: 50px; }\n  .form-container > * {\n    width: 100%; }\n  .form-full-width,\ntextarea {\n  width: 100%;\n  margin-bottom: 1rem; }\n  .form button {\n  margin-right: 1rem; }\n  td {\n  padding-right: 8px; }\n  input,\ntr {\n  border: none; }\n  input:focus,\ntr:focus {\n  border: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRyaWFua3l6ZXIvRGVza3RvcC9QcmFjdGljZS1Db2Rlcy93Zi1jb2RlLWNoYWxsZW5nZS9zcmMvYXBwL3NoYXJlZC9zYXNzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQ0pzQjtFREt0Qiw2QkNMc0I7RURNdEIsbUJBQW1CLEVBQUE7RUFQckI7SUFVTSxXQUFXLEVBQUE7RUFJakI7O0VBRUUsV0FBVztFQUNYLG1CQUFtQixFQUFBO0VBR3JCO0VBQ0Usa0JBQWtCLEVBQUE7RUFHcEI7RUFDRSxrQkFBa0IsRUFBQTtFQUdwQjs7RUFFRSxZQUFZLEVBQUE7RUFHZDs7RUFFRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2hhcmVkL3Nhc3MvdmFyaWFibGVzJztcblxuLmZvcm0tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLW1lZGl1bS1ncmF5O1xuICBib3gtc2hhZG93OiAycHggMnB4IDIwcHggJGNvbG9yLW1lZGl1bS1ncmF5O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgJj4qeyBcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmZvcm0tZnVsbC13aWR0aCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mb3JtIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxudGQge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG5cbmlucHV0LFxudHIge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmlucHV0OmZvY3VzLFxudHI6Zm9jdXMge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcblxufVxuIiwiJGNvbG9yLXByaW1hcnk6ICMzRjUwQjU7XG4kY29sb3ItYWNjZW50OiAjRkY0MDdGO1xuJGNvbG9yLXdoaXRlOiAjZmZmO1xuJGNvbG9yLW1lZGl1bS1ncmF5OiAjY2NjO1xuJGNvbG9yLWJsYWNrOiAjMDAwO1xuIl19 */"

/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");






var FormComponent = /** @class */ (function () {
    function FormComponent(fb, router, route, apiService, loaction) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.loaction = loaction;
        this.errorMessage = 'This field is required';
    }
    FormComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.getRouteParam();
    };
    FormComponent.prototype.createForm = function () {
        this.cityForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            long: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            image_url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    };
    FormComponent.prototype.getRouteParam = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (param) {
            var cityID = +param.get('id');
            if (cityID) {
                _this.getCity(cityID);
            }
            else {
                _this.city = {
                    id: null,
                    title: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    content: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    lat: null,
                    long: null,
                    image_url: null
                };
            }
        });
    };
    FormComponent.prototype.getCity = function (id) {
        var _this = this;
        this.apiService.getOne(id).subscribe(function (city) { return _this.editCity(city); }), function (err) { return console.log(err); };
    };
    FormComponent.prototype.editCity = function (city) {
        var title = city.title, content = city.content, lat = city.lat, long = city.long, image_url = city.image_url;
        this.cityForm.patchValue({
            title: title,
            content: content,
            lat: lat,
            long: long,
            image_url: image_url
        });
    };
    FormComponent.prototype.submitHandler = function () {
        var _this = this;
        this.mapToCityModel();
        console.log(this.cityForm);
        if (this.city.id) {
            this.apiService.updateCity(this.city).subscribe(function () { return _this.router.navigate(['']); }),
                function (err) { return console.log(err); };
        }
        else {
            this.apiService.addCity(this.city).subscribe(function () { return _this.router.navigate(['']); }), function (err) { return console.log(err); };
        }
    };
    FormComponent.prototype.mapToCityModel = function () {
        this.city.title = this.cityForm.value.title;
        this.city.content = this.cityForm.value.content;
        this.city.lat = this.cityForm.value.lat;
        this.city.long = this.cityForm.value.long;
        this.city.image_url = this.cityForm.value.image_url;
    };
    FormComponent.prototype.onCancelClick = function () {
        this.loaction.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('city'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FormComponent.prototype, "city", void 0);
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/components/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/components/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\n  <p class=\"hero__quote\">{{ heroQuote }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hero/hero.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  background-image: url(\"http://www.nidokidos.org/attachment.php?attachmentid=374982&d=1517032318\");\n  background-size: cover;\n  height: 500px;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.hero__quote {\n  color: #fff;\n  font-size: 2.5rem;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  width: 80%;\n  flex-wrap: wrap;\n  text-shadow: 2px 2px 10px #fff;\n  position: relative;\n  font-style: italic; }\n\n.hero__quote:before, .hero__quote:after {\n    font-size: 8rem;\n    position: absolute; }\n\n.hero__quote:before {\n    content: open-quote;\n    top: -60px;\n    left: -50px;\n    -webkit-transform: skewX(-10deg);\n            transform: skewX(-10deg); }\n\n.hero__quote:after {\n    content: close-quote;\n    -webkit-transform: skewX(-10deg);\n            transform: skewX(-10deg); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRyaWFua3l6ZXIvRGVza3RvcC9QcmFjdGljZS1Db2Rlcy93Zi1jb2RlLWNoYWxsZW5nZS9zcmMvYXBwL3NoYXJlZC9zYXNzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUdBQWlHO0VBQ2pHLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQ1ZnQjtFRFdoQixpQkFBaUI7RUFDakIsc0hBQXNIO0VBQ3RILFVBQVU7RUFDVixlQUFlO0VBQ2YsOEJDZmdCO0VEZ0JoQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBUnBCO0lBWUksZUFBZTtJQUNmLGtCQUFrQixFQUFBOztBQWJ0QjtJQWlCSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUE7O0FBcEI1QjtJQXdCSSxvQkFBb0I7SUFDcEIsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZXJvL2hlcm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc2Fzcy92YXJpYWJsZXMnO1xuXG4uaGVybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3d3dy5uaWRva2lkb3Mub3JnL2F0dGFjaG1lbnQucGhwP2F0dGFjaG1lbnRpZD0zNzQ5ODImZD0xNTE3MDMyMzE4Jyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVyb19fcXVvdGUge1xuICBjb2xvcjogJGNvbG9yLXdoaXRlO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgd2lkdGg6IDgwJTtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAxMHB4ICRjb2xvci13aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG5cbiAgJjpiZWZvcmUsXG4gICY6YWZ0ZXIge1xuICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogb3Blbi1xdW90ZTtcbiAgICB0b3A6IC02MHB4O1xuICAgIGxlZnQ6IC01MHB4O1xuICAgIHRyYW5zZm9ybTogc2tld1goLTEwZGVnKVxuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogY2xvc2UtcXVvdGU7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTBkZWcpXG4gIH1cbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM0Y1MEI1O1xuJGNvbG9yLWFjY2VudDogI0ZGNDA3RjtcbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1tZWRpdW0tZ3JheTogI2NjYztcbiRjb2xvci1ibGFjazogIzAwMDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.heroQuote = 'You’re on your own. And you know what you know. And you are the one who’ll decide where to go.';
    }
    HeroComponent.prototype.ngOnInit = function () { };
    HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/components/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.scss */ "./src/app/components/hero/hero.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hero></app-hero>\n<div class=\"container\">\n  <app-table [cities]=\"cities\" [errorMsg]=\"errorMsg\" [showSpinner]=\"showSpinner\"></app-table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService) {
        this.apiService = apiService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        return this.apiService
            .getAll()
            .subscribe(function (cities) { return (_this.cities = cities); }, function (error) { return (_this.errorMsg = error); });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sk-circle\">\n  <div class=\"sk-circle1 sk-child\"></div>\n  <div class=\"sk-circle2 sk-child\"></div>\n  <div class=\"sk-circle3 sk-child\"></div>\n  <div class=\"sk-circle4 sk-child\"></div>\n  <div class=\"sk-circle5 sk-child\"></div>\n  <div class=\"sk-circle6 sk-child\"></div>\n  <div class=\"sk-circle7 sk-child\"></div>\n  <div class=\"sk-circle8 sk-child\"></div>\n  <div class=\"sk-circle9 sk-child\"></div>\n  <div class=\"sk-circle10 sk-child\"></div>\n  <div class=\"sk-circle11 sk-child\"></div>\n  <div class=\"sk-circle12 sk-child\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sk-circle {\n  margin: 100px auto;\n  width: 50px;\n  height: 50px;\n  position: relative; }\n\n.sk-circle .sk-child {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n\n.sk-circle .sk-child:before {\n  content: '';\n  display: block;\n  margin: 0 auto;\n  width: 15%;\n  height: 15%;\n  background-color: #FF407F;\n  border-radius: 100%;\n  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;\n  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both; }\n\n.sk-circle .sk-circle2 {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg); }\n\n.sk-circle .sk-circle3 {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg); }\n\n.sk-circle .sk-circle4 {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg); }\n\n.sk-circle .sk-circle5 {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg); }\n\n.sk-circle .sk-circle6 {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg); }\n\n.sk-circle .sk-circle7 {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg); }\n\n.sk-circle .sk-circle8 {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg); }\n\n.sk-circle .sk-circle9 {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg); }\n\n.sk-circle .sk-circle10 {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg); }\n\n.sk-circle .sk-circle11 {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg); }\n\n.sk-circle .sk-circle12 {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg); }\n\n.sk-circle .sk-circle2:before {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.sk-circle .sk-circle3:before {\n  -webkit-animation-delay: -1s;\n  animation-delay: -1s; }\n\n.sk-circle .sk-circle4:before {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.sk-circle .sk-circle5:before {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n.sk-circle .sk-circle6:before {\n  -webkit-animation-delay: -0.7s;\n  animation-delay: -0.7s; }\n\n.sk-circle .sk-circle7:before {\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.sk-circle .sk-circle8:before {\n  -webkit-animation-delay: -0.5s;\n  animation-delay: -0.5s; }\n\n.sk-circle .sk-circle9:before {\n  -webkit-animation-delay: -0.4s;\n  animation-delay: -0.4s; }\n\n.sk-circle .sk-circle10:before {\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.sk-circle .sk-circle11:before {\n  -webkit-animation-delay: -0.2s;\n  animation-delay: -0.2s; }\n\n.sk-circle .sk-circle12:before {\n  -webkit-animation-delay: -0.1s;\n  animation-delay: -0.1s; }\n\n@-webkit-keyframes sk-circleBounceDelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n@keyframes sk-circleBounceDelay {\n  0%,\n  80%,\n  100% {\n    -webkit-transform: scale(0);\n    transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n    transform: scale(1); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2Fkcmlhbmt5emVyL0Rlc2t0b3AvUHJhY3RpY2UtQ29kZXMvd2YtY29kZS1jaGFsbGVuZ2Uvc3JjL2FwcC9zaGFyZWQvc2Fzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNLEVBQUE7O0FBR1I7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQ3RCb0I7RUR1QnBCLG1CQUFtQjtFQUNuQixzRUFBc0U7RUFDdEUsOERBQThELEVBQUE7O0FBR2hFO0VBQ0UsZ0NBQWdDO0VBRWhDLHdCQUF3QixFQUFBOztBQUcxQjtFQUNFLGdDQUFnQztFQUVoQyx3QkFBd0IsRUFBQTs7QUFHMUI7RUFDRSxnQ0FBZ0M7RUFFaEMsd0JBQXdCLEVBQUE7O0FBRzFCO0VBQ0UsaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQ0FBaUM7RUFFakMseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQ0FBaUM7RUFFakMseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsaUNBQWlDO0VBRWpDLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGlDQUFpQztFQUVqQyx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLDhCQUE4QjtFQUM5QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSw4QkFBOEI7RUFDOUIsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQixFQUFBOztBQUd4QjtFQUVFOzs7SUFHRSwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUEsRUFBQTs7QUFJdkI7RUFFRTs7O0lBR0UsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBO0VBR3JCO0lBQ0UsMkJBQTJCO0lBQzNCLG1CQUFtQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc2Fzcy92YXJpYWJsZXMnO1xuXG4uc2stY2lyY2xlIHtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNoaWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNoaWxkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNSU7XG4gIGhlaWdodDogMTUlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYWNjZW50O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stY2lyY2xlQm91bmNlRGVsYXkgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICBhbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMiB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTMge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU0IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTYge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU3IHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlOCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTkge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMCB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTExIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMzpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNDpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTU6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU2OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlNzpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTg6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGU5OmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbn1cblxuLnNrLWNpcmNsZSAuc2stY2lyY2xlMTA6YmVmb3JlIHtcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xufVxuXG4uc2stY2lyY2xlIC5zay1jaXJjbGUxMTpiZWZvcmUge1xuICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG59XG5cbi5zay1jaXJjbGUgLnNrLWNpcmNsZTEyOmJlZm9yZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcblxuICAwJSxcbiAgODAlLFxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuXG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XG5cbiAgMCUsXG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cblxuICA0MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG4iLCIkY29sb3ItcHJpbWFyeTogIzNGNTBCNTtcbiRjb2xvci1hY2NlbnQ6ICNGRjQwN0Y7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItbWVkaXVtLWdyYXk6ICNjY2M7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () { };
    LoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/components/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/components/loader/loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/components/map/map.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\n  {{ title }}\n</h4>\n<div class=\"map-container\">\n  <agm-map [latitude]=\"lat\" [longitude]=\"long\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\n  </agm-map>\n</div>\n"

/***/ }),

/***/ "./src/app/components/map/map.component.scss":
/*!***************************************************!*\
  !*** ./src/app/components/map/map.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%; }\n\n.map-container {\n  border: 1px solid #000;\n  height: 400px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9tYXAvbWFwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2Fkcmlhbmt5emVyL0Rlc2t0b3AvUHJhY3RpY2UtQ29kZXMvd2YtY29kZS1jaGFsbGVuZ2Uvc3JjL2FwcC9zaGFyZWQvc2Fzcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLHNCQ0hnQjtFREloQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc2Fzcy92YXJpYWJsZXMnO1xuXG5hZ20tbWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWFwLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ibGFjaztcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM0Y1MEI1O1xuJGNvbG9yLWFjY2VudDogI0ZGNDA3RjtcbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1tZWRpdW0tZ3JheTogI2NjYztcbiRjb2xvci1ibGFjazogIzAwMDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/map/map.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/map/map.component.ts ***!
  \*************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MapComponent = /** @class */ (function () {
    function MapComponent(http) {
        this.http = http;
    }
    MapComponent.prototype.ngOnInit = function () {
        this.lat = Number(this.lat);
        this.long = Number(this.long);
        console.log(this.lat, this.long, this.title);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('title'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MapComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lat'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "lat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('long'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], MapComponent.prototype, "long", void 0);
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/components/map/map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/new-city/new-city.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-city/new-city.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"new-city__header\">Add A New City</h4>\n  <app-form></app-form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-city/new-city.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/new-city/new-city.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-city__header {\n  margin-top: 3rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9uZXctY2l0eS9uZXctY2l0eS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctY2l0eS9uZXctY2l0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctY2l0eV9faGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogM3JlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-city/new-city.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-city/new-city.component.ts ***!
  \***********************************************************/
/*! exports provided: NewCityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCityComponent", function() { return NewCityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewCityComponent = /** @class */ (function () {
    function NewCityComponent() {
    }
    NewCityComponent.prototype.ngOnInit = function () {
    };
    NewCityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-city',
            template: __webpack_require__(/*! ./new-city.component.html */ "./src/app/components/new-city/new-city.component.html"),
            styles: [__webpack_require__(/*! ./new-city.component.scss */ "./src/app/components/new-city/new-city.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewCityComponent);
    return NewCityComponent;
}());



/***/ }),

/***/ "./src/app/components/server-error/server-error.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/server-error/server-error.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-align\">\n  <mat-card class=\"error-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"error-header-image\"></div>\n      <mat-card-title>OH NO!</mat-card-title>\n      <mat-card-subtitle>Something went wrong.</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"{{ errorImage }}\" alt=\"Photo of Error 500\">\n    <mat-card-content>\n      <h6>{{ errorMsg }}</h6>\n    </mat-card-content>\n    <mat-card-actions>\n      <a href=\"{{ externalTravelLink }}\"><button mat-button color=\"accent\">Travel Photography</button></a>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/server-error/server-error.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/server-error/server-error.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error-card {\n  margin: 2rem;\n  padding-bottom: 3rem; }\n\n.error-header-image {\n  background-image: url(\"http://chittagongit.com/images/error-image-icon/error-image-icon-15.jpg\");\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy9zZXJ2ZXItZXJyb3Ivc2VydmVyLWVycm9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGdHQUFnRztFQUNoRyxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VydmVyLWVycm9yL3NlcnZlci1lcnJvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1jYXJkIHtcbiAgbWFyZ2luOiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcbn1cblxuLmVycm9yLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL2NoaXR0YWdvbmdpdC5jb20vaW1hZ2VzL2Vycm9yLWltYWdlLWljb24vZXJyb3ItaW1hZ2UtaWNvbi0xNS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/server-error/server-error.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/server-error/server-error.component.ts ***!
  \*******************************************************************/
/*! exports provided: ServerErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorComponent", function() { return ServerErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServerErrorComponent = /** @class */ (function () {
    function ServerErrorComponent() {
        this.customErrorMessage = 'We are currently experiencing an internal server error.  The amazing places you are currently looking for are not available.  Please check back later.  We apologize for any convinience.  Meanwhile, check out some travel photos from the most talented photographers of Flickr by clicking below.';
        this.errorImage = 'https://cdn.dribbble.com/users/761395/screenshots/6130138/error_500.png';
        this.externalTravelLink = 'https://www.flickr.com/search/?text=travel';
    }
    ServerErrorComponent.prototype.ngOnInit = function () {
        console.log(this.errorMsg);
        this.errorMsg = this.customErrorMessage;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('errorMsg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ServerErrorComponent.prototype, "errorMsg", void 0);
    ServerErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-server-error',
            template: __webpack_require__(/*! ./server-error.component.html */ "./src/app/components/server-error/server-error.component.html"),
            styles: [__webpack_require__(/*! ./server-error.component.scss */ "./src/app/components/server-error/server-error.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServerErrorComponent);
    return ServerErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/table/table.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cities-container\">\n  <h4 class=\"cities__header\">Oh the places you'll go.</h4>\n  <table *ngIf=\"!errorMsg; else apiError\" mat-table [dataSource]=\"cities\">\n    <!-- City Column -->\n    <ng-container matColumnDef=\"city\">\n      <th mat-header-cell *matHeaderCellDef> City </th>\n      <td mat-cell *matCellDef=\"let city\">{{city.title}} </td>\n    </ng-container>\n\n    <!-- Description Column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef> Description </th>\n      <td mat-cell *matCellDef=\"let city\"> {{city.content}} </td>\n    </ng-container>\n\n    <!-- See City on Map Button Column -->\n    <ng-container matColumnDef=\"view\">\n      <th mat-header-cell *matHeaderCellDef> </th>\n      <td (click)=\"onEditClick\" mat-cell *matCellDef=\"let city\">\n        <a [routerLink]=\"['/city', city.id]\" mat-menu-item>\n          <mat-icon class=\"menu-icon place-icon\">place</mat-icon>\n        </a>\n      </td>\n    </ng-container>\n\n    <tr class=\"table__header\" mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <ng-template #apiError>\n    <app-server-error [errorMsg]=\"errorMsg\"></app-server-error>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/table/table.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/table/table.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cities-container {\n  height: 100%;\n  overflow: auto;\n  box-sizing: border-box; }\n  .cities-container table td {\n    padding: 1rem 1rem; }\n  .cities-container th {\n    color: #fff; }\n  table {\n  margin: 2rem 0; }\n  .cities__header {\n  margin: 0;\n  margin-top: 2rem;\n  margin-bottom: .5rem; }\n  .table__header {\n  background: #3F50B5; }\n  .place-icon {\n  color: #3F50B5; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvc2hhcmVkL3Nhc3MvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLHNCQUFzQixFQUFBO0VBSHhCO0lBTUksa0JBQWtCLEVBQUE7RUFOdEI7SUFTSSxXQ1RjLEVBQUE7RURhbEI7RUFDRSxjQUFjLEVBQUE7RUFHaEI7RUFDRSxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0UsbUJDMUJxQixFQUFBO0VENkJ2QjtFQUNFLGNDOUJxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL3NoYXJlZC9zYXNzL3ZhcmlhYmxlcyc7XG5cbi5jaXRpZXMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmIHRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW07XG4gIH1cbiAgJiB0aCB7XG4gICAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgfSBcbn1cblxudGFibGUge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmNpdGllc19faGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLnRhYmxlX19oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuLnBsYWNlLWljb24ge1xuICBjb2xvcjokY29sb3ItcHJpbWFyeTtcbn1cblxuXG4iLCIkY29sb3ItcHJpbWFyeTogIzNGNTBCNTtcbiRjb2xvci1hY2NlbnQ6ICNGRjQwN0Y7XG4kY29sb3Itd2hpdGU6ICNmZmY7XG4kY29sb3ItbWVkaXVtLWdyYXk6ICNjY2M7XG4kY29sb3ItYmxhY2s6ICMwMDA7XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/table/table.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.displayedColumns = ['city', 'description', 'view'];
    }
    TableComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cities'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TableComponent.prototype, "cities", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('errorMsg'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], TableComponent.prototype, "errorMsg", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('showSpinner'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], TableComponent.prototype, "showSpinner", void 0);
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/components/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/components/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>Amazing Places</span>\n      <span class=\"menu-spacer\"></span>\n      <ul class=\"right\">\n        <li>\n          <a routerLink=\"/\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <button mat-mini-fab>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">home</mat-icon>\n            </button>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/new\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <button mat-mini-fab>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">add</mat-icon>\n            </button>\n          </a>\n        </li>\n      </ul>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-icon {\n  padding: 0 14px;\n  cursor: pointer; }\n\n.menu-spacer {\n  flex: 1 1 auto; }\n\na button {\n  text-decoration: none;\n  color: #000;\n  background: #fff; }\n\n.active-link button {\n  color: #fff;\n  background: #FF407F; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZHJpYW5reXplci9EZXNrdG9wL1ByYWN0aWNlLUNvZGVzL3dmLWNvZGUtY2hhbGxlbmdlL3NyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRyaWFua3l6ZXIvRGVza3RvcC9QcmFjdGljZS1Db2Rlcy93Zi1jb2RlLWNoYWxsZW5nZS9zcmMvYXBwL3NoYXJlZC9zYXNzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UscUJBQXFCO0VBQ3JCLFdDVGdCO0VEVWhCLGdCQ1pnQixFQUFBOztBRGVsQjtFQUNFLFdDaEJnQjtFRGlCaEIsbUJDbEJvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvc2Fzcy92YXJpYWJsZXMnO1xuXG4ubWVudS1pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tZW51LXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5hIGJ1dHRvbiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICRjb2xvci1ibGFjaztcbiAgYmFja2dyb3VuZDogJGNvbG9yLXdoaXRlO1xufVxuXG4uYWN0aXZlLWxpbmsgYnV0dG9uIHtcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcbiAgYmFja2dyb3VuZDogJGNvbG9yLWFjY2VudDtcbn1cbiIsIiRjb2xvci1wcmltYXJ5OiAjM0Y1MEI1O1xuJGNvbG9yLWFjY2VudDogI0ZGNDA3RjtcbiRjb2xvci13aGl0ZTogI2ZmZjtcbiRjb2xvci1tZWRpdW0tZ3JheTogI2NjYztcbiRjb2xvci1ibGFjazogIzAwMDtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");











var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.url = 'https://wf-challenge-ywlsrfkhim.herokuapp.com/api/v1/posts';
    }
    ApiService.prototype.handleError = function (error) {
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(error.message || 'Server Error');
    };
    ApiService.prototype.getAll = function () {
        return this.http.get(this.url).catch(this.handleError);
    };
    ApiService.prototype.getOne = function (id) {
        return this.http.get(this.url + "/" + id).catch(this.handleError);
    };
    ApiService.prototype.updateCity = function (city) {
        return this.http.put(this.url + "/" + city.id, city, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    ApiService.prototype.addCity = function (city) {
        return this.http.post(this.url, city, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        });
    };
    ApiService.prototype.deleteOne = function (id) {
        return this.http.delete(this.url + "/" + id);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adriankyzer/Desktop/Practice-Codes/wf-code-challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map