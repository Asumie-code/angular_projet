import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'



// routing module
import { AppRoutingModule } from './app-routing.module';
// app root 
import { AppComponent } from './app.component';
import { HeroBioComponent } from './hero-bio.component';
import { HeroBiosAndContactsComponent, HeroBiosComponent } from './hero-bios.component';
import { HeroContactComponent } from './hero-contact.component';
import { StorageComponent } from './storage.component';
import { HighlightDirective } from './highlight.directive';
import { HeroOfTheMonthComponent } from './hero-of-the-month.component';
import { HeroesBaseComponent, SortedHeroesComponent } from './sorted-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroBioComponent,
    HeroBiosComponent,
    HeroContactComponent,
    HeroBiosAndContactsComponent,
    StorageComponent,
    HighlightDirective,
    HeroOfTheMonthComponent,
    HeroesBaseComponent, 
    SortedHeroesComponent

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
