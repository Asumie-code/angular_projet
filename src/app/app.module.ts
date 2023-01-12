import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutoMyComponentComponent } from './components/auto-my-component/auto-my-component.component';
import { PeekABooParentComponent } from './components/peekapoo/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/peekapoo/peek-a-boo.component';
import { SpyParentComponent } from './components/spy/spy.component';
import { SpyDirective } from './components/spy/spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    AutoMyComponentComponent,
    PeekABooComponent,
    PeekABooParentComponent,
    SpyParentComponent,
    SpyDirective 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // need this module to use [(ngModel)] directive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
