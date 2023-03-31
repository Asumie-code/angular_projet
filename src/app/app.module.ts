import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'


// feature modules
import { GreetingModule } from './greeting/greeting.module';

// routing module
import { AppRoutingModule } from './app-routing.module';
// app root 
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // need this module to use [(ngModel)] directive,
    HttpClientModule,
    GreetingModule.forRoot({userName: 'Miss Marple'})
  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
