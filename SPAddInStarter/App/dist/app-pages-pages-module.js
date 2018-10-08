(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pages-module"],{

/***/ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js ***!
  \*************************************************************/
/*! exports provided: NgxJsonViewerModule, NgxJsonViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxJsonViewerModule", function() { return NgxJsonViewerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxJsonViewerComponent", function() { return NgxJsonViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");


var NgxJsonViewerComponent = /** @class */ (function () {
    function NgxJsonViewerComponent() {
        this.expanded = true;
        /**
         * @deprecated It will be always true and deleted in version 3.0.0
         */
        this.cleanOnChange = true;
        this.segments = [];
    }
    /**
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.cleanOnChange) {
            this.segments = [];
        }
        if (typeof this.json === 'object') {
            Object.keys(this.json).forEach(function (key) {
                _this.segments.push(_this.parseKeyValue(key, _this.json[key]));
            });
        }
    };
    /**
     * @param {?} segment
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.isExpandable = function (segment) {
        return segment.type === 'object' || segment.type === 'array';
    };
    /**
     * @param {?} segment
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.toggle = function (segment) {
        if (this.isExpandable(segment)) {
            segment.expanded = !segment.expanded;
        }
    };
    /**
     * @param {?} key
     * @param {?} value
     * @return {?}
     */
    NgxJsonViewerComponent.prototype.parseKeyValue = function (key, value) {
        var /** @type {?} */ segment = {
            key: key,
            value: value,
            type: undefined,
            description: '' + value,
            expanded: this.expanded
        };
        switch (typeof segment.value) {
            case 'number': {
                segment.type = 'number';
                break;
            }
            case 'boolean': {
                segment.type = 'boolean';
                break;
            }
            case 'function': {
                segment.type = 'function';
                break;
            }
            case 'string': {
                segment.type = 'string';
                segment.description = '"' + segment.value + '"';
                break;
            }
            case 'undefined': {
                segment.type = 'undefined';
                segment.description = 'undefined';
                break;
            }
            case 'object': {
                // yea, null is object
                if (segment.value === null) {
                    segment.type = 'null';
                    segment.description = 'null';
                }
                else if (Array.isArray(segment.value)) {
                    segment.type = 'array';
                    segment.description = 'Array[' + segment.value.length + '] ' + JSON.stringify(segment.value);
                }
                else if (segment.value instanceof Date) {
                    segment.type = 'date';
                }
                else {
                    segment.type = 'object';
                    segment.description = 'Object ' + JSON.stringify(segment.value);
                }
                break;
            }
        }
        return segment;
    };
    return NgxJsonViewerComponent;
}());
NgxJsonViewerComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'ngx-json-viewer',
                template: "\n    <section class=\"ngx-json-viewer\">\n      <section\n        *ngFor=\"let segment of segments\"\n        [ngClass]=\"['segment', 'segment-type-' + segment.type]\">\n        <section\n          (click)=\"toggle(segment)\"\n          [ngClass]=\"{\n            'segment-main': true,\n            'expandable': isExpandable(segment),\n            'expanded': segment.expanded\n          }\">\n          <div *ngIf=\"isExpandable(segment)\" class=\"toggler\"></div>\n          <span class=\"segment-key\">{{ segment.key }}</span>\n          <span class=\"segment-separator\">:</span>\n          <span *ngIf=\"!segment.expanded || !isExpandable(segment)\" class=\"segment-value\">{{ segment.description }}</span>\n        </section>\n        <section *ngIf=\"segment.expanded && isExpandable(segment)\" class=\"children\">\n          <ngx-json-viewer [json]=\"segment.value\" [expanded]=\"expanded\"></ngx-json-viewer>\n        </section>\n      </section>\n    </section>\n  ",
                styles: ["\n    @charset \"UTF-8\";\n    .ngx-json-viewer {\n      font-family: monospace;\n      font-size: 1em;\n      width: 100%;\n      height: 100%;\n      overflow: hidden;\n      position: relative; }\n      .ngx-json-viewer .segment {\n        padding: 2px;\n        margin: 1px 1px 1px 12px; }\n        .ngx-json-viewer .segment .segment-main {\n          word-wrap: break-word; }\n          .ngx-json-viewer .segment .segment-main .toggler {\n            position: absolute;\n            margin-left: -14px;\n            margin-top: 3px;\n            font-size: .8em;\n            line-height: 1.2em;\n            vertical-align: middle;\n            color: #787878; }\n            .ngx-json-viewer .segment .segment-main .toggler::after {\n              display: inline-block;\n              content: \"\u25BA\";\n              -webkit-transition: -webkit-transform 0.1s ease-in;\n              transition: -webkit-transform 0.1s ease-in;\n              transition: transform 0.1s ease-in;\n              transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in; }\n          .ngx-json-viewer .segment .segment-main .segment-key {\n            color: #4E187C; }\n          .ngx-json-viewer .segment .segment-main .segment-separator {\n            color: #999; }\n          .ngx-json-viewer .segment .segment-main .segment-value {\n            color: #000; }\n        .ngx-json-viewer .segment .children {\n          margin-left: 12px; }\n      .ngx-json-viewer .segment-type-string > .segment-main > .segment-value {\n        color: #FF6B6B; }\n      .ngx-json-viewer .segment-type-number > .segment-main > .segment-value {\n        color: #009688; }\n      .ngx-json-viewer .segment-type-boolean > .segment-main > .segment-value {\n        color: #b938a4; }\n      .ngx-json-viewer .segment-type-date > .segment-main > .segment-value {\n        color: #05668D; }\n      .ngx-json-viewer .segment-type-array > .segment-main > .segment-value {\n        color: #999; }\n      .ngx-json-viewer .segment-type-object > .segment-main > .segment-value {\n        color: #999; }\n      .ngx-json-viewer .segment-type-function > .segment-main > .segment-value {\n        color: #999; }\n      .ngx-json-viewer .segment-type-null > .segment-main > .segment-value {\n        color: #fff; }\n      .ngx-json-viewer .segment-type-undefined > .segment-main > .segment-value {\n        color: #fff; }\n      .ngx-json-viewer .segment-type-null > .segment-main > .segment-value {\n        background-color: red; }\n      .ngx-json-viewer .segment-type-undefined > .segment-main > .segment-key {\n        color: #999; }\n      .ngx-json-viewer .segment-type-undefined > .segment-main > .segment-value {\n        background-color: #999; }\n      .ngx-json-viewer .segment-type-object > .segment-main,\n      .ngx-json-viewer .segment-type-array > .segment-main {\n        white-space: nowrap; }\n      .ngx-json-viewer .expanded > .toggler::after {\n        -webkit-transform: rotate(90deg);\n                transform: rotate(90deg); }\n      .ngx-json-viewer .expandable,\n      .ngx-json-viewer .expandable > .toggler {\n        cursor: pointer; }\n  "]
            },] },
];
/**
 * @nocollapse
 */
NgxJsonViewerComponent.ctorParameters = function () { return []; };
NgxJsonViewerComponent.propDecorators = {
    'json': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'expanded': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'cleanOnChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
var NgxJsonViewerModule = /** @class */ (function () {
    function NgxJsonViewerModule() {
    }
    return NgxJsonViewerModule;
}());
NgxJsonViewerModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    NgxJsonViewerComponent
                ],
                exports: [
                    NgxJsonViewerComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
NgxJsonViewerModule.ctorParameters = function () { return []; };
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=ngx-json-viewer.es5.js.map


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card accent=\"success\" class=\"w-100\">\n      <nb-card-header>Branding</nb-card-header>\n      <nb-card-body>\n        <button type=\"button\" class=\"btn btn-primary\" status=\"primary\" (click)=\"deployBranding()\">Deploy Branding</button>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card accent=\"success\" class=\"w-100\">\n      <nb-card-header>{{view.web?.Title}} - Host Web Properties</nb-card-header>\n      <nb-card-body>\n        <ngx-json-viewer [json]=\"view.web\"></ngx-json-viewer>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card accent=\"success\" class=\"w-100\">\n      <nb-card-header>Webs ({{view.license?.type}} License)</nb-card-header>\n      <nb-card-body>\n        <ngx-json-viewer [expanded]=\"false\" [json]=\"view.webinfos\"></ngx-json-viewer>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators/takeWhile */ "./node_modules/rxjs-compat/_esm5/operators/takeWhile.js");
/* harmony import */ var _services_sp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sp.service */ "./src/app/services/sp.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pnp_sp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pnp/sp */ "./node_modules/@pnp/sp/dist/sp.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, themeService, spService) {
        var _this = this;
        this.http = http;
        this.themeService = themeService;
        this.spService = spService;
        this.alive = true;
        this.view = {};
        this.lightCard = {
            title: 'Light',
            iconClass: 'nb-lightbulb',
            type: 'primary',
        };
        this.rollerShadesCard = {
            title: 'Roller Shades',
            iconClass: 'nb-roller-shades',
            type: 'success',
        };
        this.wirelessAudioCard = {
            title: 'Wireless Audio',
            iconClass: 'nb-audio',
            type: 'info',
        };
        this.coffeeMakerCard = {
            title: 'Coffee Maker',
            iconClass: 'nb-coffee-maker',
            type: 'warning',
        };
        this.commonStatusCardsSet = [
            this.lightCard,
            this.rollerShadesCard,
            this.wirelessAudioCard,
            this.coffeeMakerCard,
        ];
        this.statusCardsByThemes = {
            default: this.commonStatusCardsSet,
            cosmic: this.commonStatusCardsSet,
            corporate: [
                __assign({}, this.lightCard, { type: 'warning' }),
                __assign({}, this.rollerShadesCard, { type: 'primary' }),
                __assign({}, this.wirelessAudioCard, { type: 'danger' }),
                __assign({}, this.coffeeMakerCard, { type: 'secondary' }),
            ],
        };
        this.themeService.getJsTheme()
            .pipe(Object(rxjs_operators_takeWhile__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () { return _this.alive; }))
            .subscribe(function (theme) {
            _this.statusCards = _this.statusCardsByThemes[theme.name];
        });
        this.spService.loadSP().then(function () {
            _this.spService.cdWeb().get().then(function (w) {
                _this.view.web = w;
                // console.log("Web: {0}", JSON.stringify(w,null,4));
            });
            _this.spService.cdWeb().webinfos.get().then(function (l) {
                _this.view.webinfos = l;
            });
            _this.spService.getLicense().then(function (r) {
                console.log(r);
                _this.view.license = { allProperties: r };
                _this.spService.getLicenseType().then(function (r1) {
                    _this.view.license.type = r1;
                });
            }).catch(function (e) {
                console.log("Error loading license!");
                console.log(e);
            });
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    DashboardComponent.prototype.deployBranding = function () {
        var _this = this;
        this.http.get(this.spService.addInWenUrl + "/_api/SP_TenantSettings_Current").subscribe(function (r) {
            console.log(r["CorporateCatalogUrl"]);
            _this.spService.loadSP().then(function () {
                console.log("deployBranding SP Loaded");
                var hostWeb = _this.spService.cdWeb();
                var catalog = new _pnp_sp__WEBPACK_IMPORTED_MODULE_5__["AppCatalog"](hostWeb);
                catalog.get().then(console.log);
                //this.spService.cdWeb().getAppCatalog().get(r["CorporateCatalogUrl"]);
                fetch(_this.spService.addInWenUrl + "/products/sp-branding-webparts.sppkg")
                    .then(function (res) { return res.blob(); }) // Gets the response and returns it as a blob
                    .then(function (blob) {
                    catalog.add("sp-branding-webparts.sppkg", blob).then(function (r) {
                        console.log("catalog.add");
                        console.log(r.data.UniqueId);
                        console.log(JSON.stringify(r.data, null, 4));
                        // all file operations are available
                        // r.file.select("Name").get().then(console.log);
                        _this.spService.cdWeb().getAppCatalog().getAppById(r.data.UniqueId).deploy().then(console.log);
                        // catalog.getAppById("6aeba061-45b5-4920-b8ad-b1d5779c135d").get().then(console.log)
                    });
                });
            });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"], _services_sp_service__WEBPACK_IMPORTED_MODULE_3__["SpService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__["ThemeModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_1__["NgxJsonViewerModule"]
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            ],
        }),
        __metadata("design:paramtypes", [])
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/groups/groups.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/groups/groups.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card accent=\"success\" class=\"w-100\">\n      <nb-card-header>Site Groups</nb-card-header>\n      <nb-card-body>\n        <ngx-json-viewer [json]=\"view.groups\" [expanded]=\"false\"></ngx-json-viewer>\n      </nb-card-body>\n    </nb-card>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/groups/groups.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/groups/groups.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/groups/groups.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/groups/groups.component.ts ***!
  \**************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sp.service */ "./src/app/services/sp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(spService) {
        var _this = this;
        this.spService = spService;
        this.view = {};
        this.spService.loadSP().then(function () {
            _this.spService.cdWeb().siteGroups.get().then(function (l) {
                _this.view.groups = l;
            });
        });
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'groups',
            template: __webpack_require__(/*! ./groups.component.html */ "./src/app/pages/groups/groups.component.html"),
            styles: [__webpack_require__(/*! ./groups.component.scss */ "./src/app/pages/groups/groups.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sp_service__WEBPACK_IMPORTED_MODULE_1__["SpService"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/pages/groups/groups.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/groups/groups.module.ts ***!
  \***********************************************/
/*! exports provided: GroupsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsModule", function() { return GroupsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups.component */ "./src/app/pages/groups/groups.component.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var GroupsModule = /** @class */ (function () {
    function GroupsModule() {
    }
    GroupsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_3__["NgxJsonViewerModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"]
            ],
            declarations: [_groups_component__WEBPACK_IMPORTED_MODULE_2__["GroupsComponent"]]
        })
    ], GroupsModule);
    return GroupsModule;
}());



/***/ }),

/***/ "./src/app/pages/lists/lists.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/lists/lists.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <nb-card accent=\"success\" class=\"w-100\">\n      <nb-card-header>Lists</nb-card-header>\n      <nb-card-body>\n        <ngx-json-viewer [expanded]=\"false\" [json]=\"view.lists\"></ngx-json-viewer>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-md-6\">\n    <nb-card accent=\"success\" class=\"w-100\">\n      <nb-card-header>Libraries</nb-card-header>\n      <nb-card-body>\n        <ngx-json-viewer [expanded]=\"false\" [json]=\"view.libraries\"></ngx-json-viewer>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/lists/lists.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/lists/lists.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/lists/lists.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/lists/lists.component.ts ***!
  \************************************************/
/*! exports provided: ListsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsComponent", function() { return ListsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sp.service */ "./src/app/services/sp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListsComponent = /** @class */ (function () {
    function ListsComponent(spService) {
        var _this = this;
        this.spService = spService;
        this.view = {};
        this.spService.loadSP().then(function () {
            _this.spService.cdWeb().lists.get().then(function (l) {
                _this.view.lists = l.filter(function (v) { return v.BaseType == 0; });
                _this.view.libraries = l.filter(function (v) { return v.BaseType == 1; });
            });
        });
    }
    ListsComponent.prototype.ngOnInit = function () {
    };
    ListsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lists',
            template: __webpack_require__(/*! ./lists.component.html */ "./src/app/pages/lists/lists.component.html"),
            styles: [__webpack_require__(/*! ./lists.component.scss */ "./src/app/pages/lists/lists.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_sp_service__WEBPACK_IMPORTED_MODULE_1__["SpService"]])
    ], ListsComponent);
    return ListsComponent;
}());



/***/ }),

/***/ "./src/app/pages/lists/lists.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lists/lists.module.ts ***!
  \*********************************************/
/*! exports provided: ListsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListsModule", function() { return ListsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lists_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lists.component */ "./src/app/pages/lists/lists.component.ts");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ListsModule = /** @class */ (function () {
    function ListsModule() {
    }
    ListsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_3__["NgxJsonViewerModule"]
            ],
            declarations: [
                _lists_component__WEBPACK_IMPORTED_MODULE_2__["ListsComponent"]
            ]
        })
    ], ListsModule);
    return ListsModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: MiscellaneousRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousRoutingModule", function() { return MiscellaneousRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous.component */ "./src/app/pages/miscellaneous/miscellaneous.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
        children: [{
                path: '404',
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
            }],
    }];
var MiscellaneousRoutingModule = /** @class */ (function () {
    function MiscellaneousRoutingModule() {
    }
    MiscellaneousRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MiscellaneousRoutingModule);
    return MiscellaneousRoutingModule;
}());

var routedComponents = [
    _miscellaneous_component__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousComponent"],
    _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"],
];


/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.component.ts ***!
  \****************************************************************/
/*! exports provided: MiscellaneousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousComponent", function() { return MiscellaneousComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MiscellaneousComponent = /** @class */ (function () {
    function MiscellaneousComponent() {
    }
    MiscellaneousComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-miscellaneous',
            template: "\n    <router-outlet></router-outlet>\n  ",
        })
    ], MiscellaneousComponent);
    return MiscellaneousComponent;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/miscellaneous.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/miscellaneous/miscellaneous.module.ts ***!
  \*************************************************************/
/*! exports provided: MiscellaneousModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousModule", function() { return MiscellaneousModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./miscellaneous-routing.module */ "./src/app/pages/miscellaneous/miscellaneous-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MiscellaneousModule = /** @class */ (function () {
    function MiscellaneousModule() {
    }
    MiscellaneousModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["MiscellaneousRoutingModule"],
            ],
            declarations: _miscellaneous_routing_module__WEBPACK_IMPORTED_MODULE_2__["routedComponents"].slice(),
        })
    ], MiscellaneousModule);
    return MiscellaneousModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <nb-card>\n      <nb-card-body>\n        <div class=\"flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12\">\n          <h2 class=\"title\">404 Page Not Found</h2>\n          <small class=\"sub-title\">The page you were looking for doesn't exist</small>\n          <button (click)=\"goToHome()\" type=\"button\" class=\"btn btn-block btn-hero-primary\">\n            Take me home\n          </button>\n        </div>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-centered {\n  margin: auto; }\n\nnb-card-body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.title {\n  text-align: center; }\n\n.sub-title {\n  text-align: center;\n  display: block;\n  margin-bottom: 3rem; }\n\n.btn {\n  margin-bottom: 2rem; }\n"

/***/ }),

/***/ "./src/app/pages/miscellaneous/not-found/not-found.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/miscellaneous/not-found/not-found.component.ts ***!
  \**********************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent(menuService) {
        this.menuService = menuService;
    }
    NotFoundComponent.prototype.goToHome = function () {
        this.menuService.navigateHome();
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-not-found',
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/pages/miscellaneous/not-found/not-found.component.scss")],
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/pages/miscellaneous/not-found/not-found.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_0__["NbMenuService"]])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Home',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Administration',
        icon: 'nb-gear',
        children: [
            {
                title: 'Lists & Libraries',
                link: '/pages/lists'
            },
            {
                title: 'Groups',
                link: '/pages/groups'
            },
            {
                title: 'Web Pages',
                link: '/pages/web-pages'
            },
            {
                title: 'Apps',
                link: '/pages/apps'
            },
            {
                title: 'Services',
                link: '/pages/services'
            }
        ]
    },
    {
        title: 'Request Feature',
        icon: 'nb-lightbulb',
        link: '/pages/dashboard'
    },
    {
        title: 'Support',
        icon: 'nb-lightbulb',
        link: '/pages/dashboard'
    }
];


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists/lists.component */ "./src/app/pages/lists/lists.component.ts");
/* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/pages/groups/groups.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            },
            {
                path: 'lists',
                component: _lists_lists_component__WEBPACK_IMPORTED_MODULE_4__["ListsComponent"],
            },
            {
                path: 'groups',
                component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_5__["GroupsComponent"],
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
        ],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-menu */ "./src/app/pages/pages-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"];
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-pages',
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ "./src/app/pages/miscellaneous/miscellaneous.module.ts");
/* harmony import */ var _lists_lists_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lists/lists.module */ "./src/app/pages/lists/lists.module.ts");
/* harmony import */ var _groups_groups_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./groups/groups.module */ "./src/app/pages/groups/groups.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"],
                _lists_lists_module__WEBPACK_IMPORTED_MODULE_6__["ListsModule"],
                _groups_groups_module__WEBPACK_IMPORTED_MODULE_7__["GroupsModule"],
                _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousModule"],
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-pages-module.js.map