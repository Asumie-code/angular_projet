import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'




// routing module
import { AppRoutingModule } from './app-routing.module';
// app root 
import { AppComponent } from './app.component';


import { Router } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ConfigComponent } from './config/config.component';







@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // need this module to use [(ngModel)] directive,
    ReactiveFormsModule,
    HttpClientModule,

    // the HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false, 
      passThruUnknownUrl: true, 
      put204: false // return entity after PUT/update
    }),
    AppRoutingModule,

  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    // use a custom replacer to display function names in the route configs
    const replacer = (key: any, value: any) => (typeof value === 'function') ? value.name : value

    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
