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
import { HeroFormTemplateComponent } from './template/hero-form-template.component';
import { ForbiddenValidatorDirective } from './shared/foridden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/identity-revealed.directive';
import { HeroFormReactiveComponent } from './reactive/hero-form-reactive.component';






@NgModule({
  declarations: [
    AppComponent,
    HeroFormTemplateComponent,
    ForbiddenValidatorDirective,
    IdentityRevealedValidatorDirective,
    HeroFormReactiveComponent


  ],
  imports: [
    BrowserModule,
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
