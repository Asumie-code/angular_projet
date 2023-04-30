import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'



// routing module
import { AppRoutingModule } from './app-routing.module';
// app root 
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    NotFoundPageComponent,
    ChildAComponent,
    ChildBComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // need this module to use [(ngModel)] directive,
    HttpClientModule,
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
