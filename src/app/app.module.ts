import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'




// routing module
import { AppRoutingModule } from './app-routing.module';
// app root 
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { HeroesModule } from './heroes/heroes.module';
import { crisesModule } from './crisis-center/crisis-center.module';
import { ComposeMessageComponent } from './compose-message/compose-message.component';




@NgModule({
  declarations: [
    AppComponent,


    PageNotFoundComponent,
    ProfileComponent,
    ComposeMessageComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // need this module to use [(ngModel)] directive,
    HttpClientModule,
    HeroesModule,
    crisesModule,
    AppRoutingModule,

  ],
  providers: [
  ],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
