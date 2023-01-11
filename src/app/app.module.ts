import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutoMyComponentComponent } from './components/auto-my-component/auto-my-component.component';
import { PeekABooParentComponent } from './components/peekapoo/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/peekapoo/peek-a-boo.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoMyComponentComponent,
    PeekABooComponent,
    PeekABooParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
