import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent
  ],
  imports: [
      BrowserModule,
      RouterModule,
      HttpClientModule,
      HttpModule,
      Ng2CompleterModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
