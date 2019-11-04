import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';
import { HttpHeaders } from '@angular/common/http';
//import { Headers } from '@angular/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    ngOnInit() {
        let headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
        console.log("respose1");
        return this.httpClient.post("http://www.ije-api.tcore.xyz/v1/auth/login", JSON.stringify({ "body": { "email": "customer@travelportal.com", "password": "customer" } }), { headers: headers })
            .subscribe((res: any) => {
                console.log("respose2=== " + JSON.stringify(res["body"]["data"]["api_token"]));
                this.token = JSON.stringify(res["body"]["data"]["api_token"]);
            });
    }
    constructor(private http: Http, private httpClient: HttpClient) {
        
    }
    public searchString: string = "";
    public searchStr: string = "";
    public searchStri: string = "";
    selectedCode: any;
    errors :string;
    token;

    codes = [];
    result = [];
    depCity = "";
    desCity = "";
    depDate = "";
    retDate = "";
    public origin_destinations = {
        departure_city: "",
        destination_city: "",
        departure_date: "",
        return_date: " "
    }
    public search_param = {
        cabin: "",
        calendar:false,
        no_of_adult: 0,
        no_of_child: 0,
        no_of_infant: 0
    }
    public minDepartureDate = new Date().toISOString().split('T')[0];
    public minReturnDate;
    
    onDateChange(date) {
        this.origin_destinations.departure_date = date
        this.minReturnDate = date;
    }
    onSubmit() {
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
        let headers = new HttpHeaders().set('Content-Type', 'application/json; charset = utf-8;').set('Accept', 'application/json');

        // let options = new RequestOptions({ headers: headers, withCredentials: true });
        this.httpClient.post("http://www.ije-api.tcore.xyz/v1/flight/search-flight", {
            "header": { "cookie": this.token }, "body": {
                "origin_destinations": [{ "departure_city": this.origin_destinations.departure_city, "destination_city": this.origin_destinations.destination_city, "departure_date": this.origin_destinations.departure_date, "return_date": this.origin_destinations.return_date }], "search_param": {
                    "no_of_adult": this.search_param.no_of_adult,
                    "no_of_child": this.search_param.no_of_child, "no_of_infant": this.search_param.no_of_infant, "cabin": this.search_param.cabin
                }
            }
        }, { headers: headers })
            .subscribe(success => {
                    if (success) {
                        console.log("in post " + JSON.stringify(success["body"]["data"]["itineraries"][0]["origin_destinations"][0]["segments"]));
                        this.result = success["body"]["data"]["itineraries"][0]["origin_destinations"][0]["segments"];
                }},
            err => {
                console.log("error response " + JSON.stringify(err["error"]["body"]["errors"][0]));
                this.errors = JSON.stringify(err["error"]["body"]["errors"][0]);
                    
                });
    }
    onCodeChange(name) {
        console.log("in oncodechange " + name);
        this.selectedCode = this.getSelectedCity(name);
    }
    getSelectedCity(name: string) {
        
        return this.httpClient.get("http://www.ije-api.tcore.xyz/v1/plugins/airports-type-ahead/" + name)
            .subscribe((res: any[]) => {
                console.log("in getselectedcity " + JSON.stringify(res["body"]["data"]));
                this.codes = res["body"]["data"];
                console.log("codes is now " + this.codes);
                //res["data"].forEach(x => {
                //    this.codes.push(x.name);
                //    console.log("x.name is "+x.name)
            })
    }


    //public dataresult = [];
    //public service: CompleterData;
    //protected onSelected(item: CompleterItem) {
    //    this.searchStr = item ? item.title : "";
    //    this.httpClient
    //}
        //this.httpClient.get("http://www.ije-api.tcore.xyz/v1/plugins/cities-type-ahead/" + this.searchStr);
        //    .subscribe((res: any[]) => {
        //        console.log(res["data"]);
        //        res["data"].forEach(x => {
        //            this.dataresult.push(x.name);


            //.pipe(
            //map((data: any) => {
            //    //let headers = new HttpHeaders({
            //    //    'Accept': 'application/json',
            //    //    'Content-Type': 'application/json',
            //    //})
            //    console.log("data is == " +  data);
            //    //is.dataresult = data
            //    //turn true;
            //})).subscribe();
}
