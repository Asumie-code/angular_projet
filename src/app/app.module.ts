import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterContentParentComponent } from './components/after-content/after-content-parent.component';
import { AfterContentComponent } from './components/after-content/after-content.component';
import { ChildComponent } from './components/after-content/child.component';
import { AfterViewParentComponent } from './components/after-view/after-view-parent.component';
import { AfterViewComponent } from './components/after-view/after-view.component';
import { ChildViewComponent } from './components/after-view/child-view.component';

import { AutoMyComponentComponent } from './components/auto-my-component/auto-my-component.component';
import { CounterParentComponent } from './components/counter/counter-parent.component';
import { MyCounterComponent } from './components/counter/counter.component';
import { DoCheckParentComponent } from './components/do-check/do-check-parent.component';
import { DoCheckComponent } from './components/do-check/do-check.component';
import { HeroChildComponent } from './components/hero/hero-child.component';
import { HeroParentComponent } from './components/hero/hero-parent.component';
import { NameChildComponent } from './components/name/name-child.component';
import { NameparentComponent } from './components/name/name-parent.component';
import { OnChangesParentComponent } from './components/on-changes/on-changes-parent.component';
import { OnChangesComponent } from './components/on-changes/on-changes.component';
import { PeekABooParentComponent } from './components/peekapoo/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/peekapoo/peek-a-boo.component';
import { SpyParentComponent } from './components/spy/spy.component';
import { SpyDirective } from './components/spy/spy.directive';
import { VersionChildComponent } from './components/version/version-child.component';
import { VersionParentComponet } from './components/version/version-parent.component';
import { EmulatedEncapsulationComponent } from './components/view-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './components/view-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/view-encapsulation/shadow-dom-encapsulation.component';

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
    AfterViewParentComponent,
    AfterContentComponent,
    AfterContentParentComponent,
    ChildComponent,
    DoCheckComponent,
    DoCheckParentComponent,
    NoEncapsulationComponent,
    EmulatedEncapsulationComponent,
    ShadowDomEncapsulationComponent,
    HeroChildComponent, 
    HeroParentComponent, 
    NameChildComponent, 
    NameparentComponent, 
    VersionChildComponent, 
    VersionParentComponet
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
