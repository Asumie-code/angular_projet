import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http'




// routing module
import { AppRoutingModule } from './app-routing.module';
// app root 
import { AppComponent } from './app.component';


import { Router } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { ConfigComponent } from './config/config.component';
import { DownloaderComponent } from './downloader/downloader.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessageService } from './message.service';
import { HttpErrorHandler } from './http-error-handler.service';
import { httpInterceptorProviders } from './http-interceptors';
import { AuthService } from './auth.service';
import { MessagesComponent } from './messages/messages.component';
import { PackageSearchComponent } from './package-search/package-search.component';
import { RequestCache, RequestCacheWithMap } from './request-cache.service';
import { UploaderComponent } from './uploader/uploader.component';








@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    DownloaderComponent, 
    HeroesComponent,
    MessagesComponent,
    PackageSearchComponent,
    UploaderComponent


  ],
  imports: [
    BrowserModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie', 
      headerName: 'My-Xsrf-Header'
    }),
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
    MessageService,
    AuthService, 
    HttpErrorHandler, 
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders,
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
