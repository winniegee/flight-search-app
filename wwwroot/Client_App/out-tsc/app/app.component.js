var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
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
        var headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
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
        var headers = new HttpHeaders().set('Content-Type', 'application/json; charset = utf-8;').set('Accept', 'application/json');
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
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [Http, HttpClient])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map