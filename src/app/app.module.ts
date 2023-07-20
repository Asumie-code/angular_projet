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
import { OpenCloseComponent } from './open-close/open-close.component';
import { HeroListEnterLeaveComponent } from './hero-list/hero-list-enter-leave.component';
import { HeroListEnterLeavePageComponent } from './hero-list/hero-list-enter-leave-page.component';
import { OpenClosePageComponent } from './open-close/open-close-page.component';










@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeavePageComponent,
    OpenClosePageComponent



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
