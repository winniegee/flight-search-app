(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*search box css start here*/\r\n/*.search-sec{\r\n    padding: 2rem;\r\n}*/\r\n.search-slt{\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 0.875rem;\r\n    line-height: 1.5;\r\n    color: #55595c;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    height: calc(3rem + 2px) !important;\r\n    border-radius:0;\r\n}\r\n.wrn-btn{\r\n    width: 100%;\r\n    font-size: 16px;\r\n    font-weight: 400;\r\n    text-transform: capitalize;\r\n    height: calc(3rem + 2px) !important;\r\n    border-radius:0;\r\n}\r\n@media (min-width: 992px){\r\n    .search-sec{\r\n        position: relative;\r\n        top: -114px;\r\n        background: rgba(26, 70, 104, 0.51);\r\n    }\r\n}\r\nh2.h3{\r\n    color:white!important;\r\n}\r\n@media (max-width: 992px){\r\n    .search-sec{\r\n        background: #1A4668;\r\n    }\r\n}"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"background:url('../../Content/leonardo-yip-rn-NLirHQPY-unsplash.jpg') center center;height:200vh\">\r\n    <div class=\"container\">\r\n        <div class=\"row pt-1 pb-1\">\r\n            <div class=\"col-lg-12\">\r\n                <h4 class=\"text-center\" style=\"color:ghostwhite;font-family:'Times New Roman', Times, serif;font:200;\">Search Flights below</h4>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <section class=\"search-sec\" style=\"padding-top:150px;background-color:transparent\">\r\n        <div class=\"container\">\r\n            <form action=\"#\" method=\"post\" novalidate=\"novalidate\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-0\">\r\n                                <input type=\"text\" list=\"iataList\" class=\"form-control search-slt\" placeholder=\"Departure City\" name=\"list\" [(ngModel)]=\"depCity\" (keyup)=\"onCodeChange(depCity)\" />\r\n                                <datalist id=\"iataList\">\r\n                                    <select>\r\n                                        <option *ngFor=\"let code of codes\" value=\"{{code.name}} ({{code.code}})\"></option>\r\n                                    </select>\r\n                                </datalist>\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-0\">\r\n                                <input type=\"text\" list=\"iataLists\" class=\"form-control search-slt\" placeholder=\"Destination City\" name=\"lists\" [(ngModel)]=\"desCity\" (keyup)=\"onCodeChange(desCity)\" />\r\n                                <datalist id=\"iataLists\">\r\n                                    <select>\r\n                                        <option *ngFor=\"let code of codes\" value=\"{{code.name}} ({{code.code}})\" name=\"destination\"></option>\r\n                                    </select>\r\n                                </datalist>\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-0\">\r\n                                <input type=\"text\" (ngModelChange)=\"onDateChange($event)\" onfocus=\"(this.type='date')\" [min]=\"minDepartureDate\" onblur=\"(this.type='text')\" class=\"form-control search-slt\" placeholder=\"Departure Date\" [(ngModel)]=\"depDate\" name=\"fdate\">\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-0\">\r\n                                <input type=\"text\" onfocus=\"(this.type='date')\" onblur=\"(this.type='text')\" [min]=\"minReturnDate\" class=\"form-control search-slt\" placeholder=\"Return Date\" [(ngModel)]=\"retDate\" name=\"ldate\">\r\n                            </div>\r\n                            <div class=\"col-lg-3 col-md-3 col-sm-12 p-0\">\r\n                                <select class=\"form-control search-slt\" [(ngModel)]=\"search_param.cabin\" name=\"cabin\">\r\n                                    <option id=\"0\">Cabin Class</option>\r\n                                    <option>First</option>\r\n                                    <option>Economy</option>\r\n                                    <option>Premium</option>\r\n                                    <option>Business</option>\r\n                                    <option>All</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-1 \">\r\n                                <input type=\"number\" min=\"1\" max=\"9\" onKeyDown=\"return false\" placeholder=\"No of Adults(age>12yrs)\" class=\"form-control search-slt\" [(ngModel)]=\"search_param.no_of_adult\" name=\"adult\" />\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-1\">\r\n                                <input type=\"number\" min=\"1\" max=\"9\" onKeyDown=\"return false\" placeholder=\"No of Children(2-12yrs)\" class=\"form-control search-slt\" [(ngModel)]=\"search_param.no_of_child\" name=\"childrenNo\" />\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-1\">\r\n                                <input type=\"number\" min=\"1\" max=\"9\" onKeyDown=\"return false\" placeholder=\"No of infants(0-2yrs)\" class=\"form-control search-slt\" [(ngModel)]=\"search_param.no_of_infant\" name=\"infant\" />\r\n                            </div>\r\n                            <div class=\"col-lg-2 col-md-3 col-sm-12 p-1\">\r\n                                <button type=\"button\" class=\"btn btn-danger wrn-btn\" (click)=\"onSubmit()\">Search</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n    <section class=\"search-sec\" style=\"padding-top:50px;background-color:transparent\" *ngIf=\"result\">\r\n        <div class=\"container\">\r\n            <h3 style=\"color:white\">Flight Results</h3>\r\n            <div class=\"row\" *ngFor=\"let r of result\">\r\n                <h2 style=\"color:white\">Departure Date and Time: {{r.departure.date}} {{r.departure.time}}</h2>\r\n                <h2 style=\"color:white\">Airport:  {{r.departure.airport.name}}</h2>\r\n                <h2 style=\"color:white\">Arrival Date and Time: {{r.arrival.date}} {{r.arrival.time}}</h2>\r\n                <h2 style=\"color:white\">Airport:  {{r.arrival.airport.name }}</h2><br />\r\n                <h2 style=\"color:white\">Airline:  {{r.operating_airline.name }}</h2><br /><br />\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <section class=\"search-sec\" style=\"padding-top:50px;background-color:transparent\" *ngIf=\"errors\">\r\n        <div class=\"container\">\r\n                <h2 style=\"color:white\">{{errors}}</h2>\r\n            \r\n            </div>\r\n</section>\r\n        </div>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { Headers } from '@angular/http';
var AppComponent = /** @class */ (function () {
    function AppComponent(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.searchString = "";
        this.searchStr = "";
        this.searchStri = "";
        this.codes = [];
        this.result = [];
        this.depCity = "";
        this.desCity = "";
        this.depDate = "";
        this.retDate = "";
        this.origin_destinations = {
            departure_city: "",
            destination_city: "",
            departure_date: "",
            return_date: " "
        };
        this.search_param = {
            cabin: "",
            calendar: false,
            no_of_adult: 0,
            no_of_child: 0,
            no_of_infant: 0
        };
        this.minDepartureDate = new Date().toISOString().split('T')[0];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json').set('Accept', 'application/json');
        console.log("respose1");
        return this.httpClient.post("http://www.ije-api.tcore.xyz/v1/auth/login", JSON.stringify({ "body": { "email": "customer@travelportal.com", "password": "customer" } }), { headers: headers })
            .subscribe(function (res) {
            console.log("respose2=== " + JSON.stringify(res["body"]["data"]["api_token"]));
            _this.token = JSON.stringify(res["body"]["data"]["api_token"]);
        });
    };
    AppComponent.prototype.onDateChange = function (date) {
        this.origin_destinations.departure_date = date;
        this.minReturnDate = date;
    };
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.errors = "";
        this.result = [];
        var DepcodedNo = this.depCity.indexOf("(");
        var DepIATA = this.depCity.substring(DepcodedNo + 1, this.depCity.length - 1);
        var DescodedNo = this.desCity.indexOf("(");
        var DesIATA = this.desCity.substring(DescodedNo + 1, this.desCity.length - 1);
        this.origin_destinations.departure_city = DepIATA;
        this.origin_destinations.destination_city = DesIATA;
        this.origin_destinations.departure_date = this.depDate.split("-").join("/");
        this.origin_destinations.return_date = this.retDate.split("-").join("/");
        this.origin_destinations.departure_date = this.origin_destinations.departure_date.split("/")[1] + "/" + this.origin_destinations.departure_date.split("/")[2] + "/" + this.origin_destinations.departure_date.split("/")[0];
        this.origin_destinations.return_date = this.origin_destinations.return_date.split("/")[1] + "/" + this.origin_destinations.return_date.split("/")[2] + "/" + this.origin_destinations.return_date.split("/")[0];
        var origin_destination = JSON.stringify(this.origin_destinations);
        var search_param = JSON.stringify(this.search_param);
        console.log("last origin dest " + JSON.stringify({
            "header": { "cookie": this.token }, "body": {
                "origin_destinations": [{ "departure_city": this.origin_destinations.departure_city, "destination_city": this.origin_destinations.destination_city, "departure_date": this.origin_destinations.departure_date, "return_date": this.origin_destinations.return_date }], "search_param": {
                    "no_of_adult": this.search_param.no_of_adult,
                    "no_of_child": this.search_param.no_of_child, "no_of_infant": this.search_param.no_of_infant, "cabin": this.search_param.cabin
                }
            }
        }));
        var originDestination = JSON.stringify(this.origin_destinations);
        var searchParam = JSON.stringify(this.search_param);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json; charset = utf-8;').set('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers, withCredentials: true });
        this.httpClient.post("http://www.ije-api.tcore.xyz/v1/flight/search-flight", {
            "header": { "cookie": this.token }, "body": {
                "origin_destinations": [{ "departure_city": this.origin_destinations.departure_city, "destination_city": this.origin_destinations.destination_city, "departure_date": this.origin_destinations.departure_date, "return_date": this.origin_destinations.return_date }], "search_param": {
                    "no_of_adult": this.search_param.no_of_adult,
                    "no_of_child": this.search_param.no_of_child, "no_of_infant": this.search_param.no_of_infant, "cabin": this.search_param.cabin
                }
            }
        }, { headers: headers })
            .subscribe(function (success) {
            if (success) {
                console.log("in post " + JSON.stringify(success["body"]["data"]["itineraries"][0]["origin_destinations"][0]["segments"]));
                _this.result = success["body"]["data"]["itineraries"][0]["origin_destinations"][0]["segments"];
            }
        }, function (err) {
            console.log("error response " + JSON.stringify(err["error"]["body"]["errors"][0]));
            _this.errors = JSON.stringify(err["error"]["body"]["errors"][0]);
        });
    };
    AppComponent.prototype.onCodeChange = function (name) {
        console.log("in oncodechange " + name);
        this.selectedCode = this.getSelectedCity(name);
    };
    AppComponent.prototype.getSelectedCity = function (name) {
        var _this = this;
        return this.httpClient.get("http://www.ije-api.tcore.xyz/v1/plugins/airports-type-ahead/" + name)
            .subscribe(function (res) {
            console.log("in getselectedcity " + JSON.stringify(res["body"]["data"]));
            _this.codes = res["body"]["data"];
            console.log("codes is now " + _this.codes);
            //res["data"].forEach(x => {
            //    this.codes.push(x.name);
            //    console.log("x.name is "+x.name)
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search-page/search-page.component */ "./app/search-page/search-page.component.ts");
/* harmony import */ var ng2_completer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-completer */ "../node_modules/ng2-completer/esm5/ng2-completer.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_7__["SearchPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                ng2_completer__WEBPACK_IMPORTED_MODULE_8__["Ng2CompleterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/search-page/search-page.component.css":
/*!***************************************************!*\
  !*** ./app/search-page/search-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/search-page/search-page.component.html":
/*!****************************************************!*\
  !*** ./app/search-page/search-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./app/search-page/search-page.component.ts":
/*!**************************************************!*\
  !*** ./app/search-page/search-page.component.ts ***!
  \**************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent() {
    }
    SearchPageComponent.prototype.ngOnInit = function () {
    };
    SearchPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-page',
            template: __webpack_require__(/*! ./search-page.component.html */ "./app/search-page/search-page.component.html"),
            styles: [__webpack_require__(/*! ./search-page.component.css */ "./app/search-page/search-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Osezuaheo\source\repos\flight-search-app\Fllight_Search_App\Client_App\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map