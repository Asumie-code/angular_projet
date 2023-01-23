import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterViewParentComponent } from './components/after-view/after-view-parent.component';
import { AfterViewComponent } from './components/after-view/after-view.component';
import { ChildViewComponent } from './components/after-view/child-view.component';

import { AutoMyComponentComponent } from './components/auto-my-component/auto-my-component.component';
import { CounterParentComponent } from './components/counter/counter-parent.component';
import { MyCounterComponent } from './components/counter/counter.component';
import { OnChangesParentComponent } from './components/on-changes/on-changes-parent.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
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
    SpyDirective,
    CounterParentComponent,
    MyCounterComponent,
    OnChangesComponent,
    OnChangesParentComponent,
    ChildViewComponent,
    AfterViewComponent,
    AfterViewParentComponent
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
