import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfterContentParentComponent } from './components/component-lifecycle/after-content/after-content-parent.component';
import { AfterContentComponent } from './components/component-lifecycle/after-content/after-content.component';
import { ChildComponent } from './components/component-lifecycle/after-content/child.component';
import { AfterViewParentComponent } from './components/component-lifecycle/after-view/after-view-parent.component';
import { AfterViewComponent } from './components/component-lifecycle/after-view/after-view.component';
import { ChildViewComponent } from './components/component-lifecycle/after-view/child-view.component';

import { AutoMyComponentComponent } from './components/auto-my-component/auto-my-component.component';
import { CountdownLocalVarParentComponent, CountdownViewChildParentComponent } from './components/component-interaction/countdown-timer/countdown-parent.component';
import { CountdownTimerComponent } from './components/component-interaction/countdown-timer/countdown-timer.component';
import { CounterParentComponent } from './components/component-lifecycle/counter/counter-parent.component';
import { MyCounterComponent } from './components/component-lifecycle/counter/counter.component';
import { DoCheckParentComponent } from './components/component-lifecycle/do-check/do-check-parent.component';
import { DoCheckComponent } from './components/component-lifecycle/do-check/do-check.component';
import { HeroChildComponent } from './components/component-interaction/hero/hero-child.component';
import { HeroParentComponent } from './components/component-interaction/hero/hero-parent.component';
import { AstronautComponent } from './components/component-interaction/mission/astronaut.component';
import { MissionControlComponent } from './components/component-interaction/mission/missioncontrol.component';
import { NameChildComponent } from './components/component-interaction/name/name-child.component';
import { NameparentComponent } from './components/component-interaction/name/name-parent.component';
import { OnChangesParentComponent } from './components/component-lifecycle/on-changes/on-changes-parent.component';
import { OnChangesComponent } from './components/component-lifecycle/on-changes/on-changes.component';
import { PeekABooParentComponent } from './components/component-lifecycle/peekapoo/peek-a-boo-parent.component';
import { PeekABooComponent } from './components/component-lifecycle/peekapoo/peek-a-boo.component';
import { SpyParentComponent } from './components/component-lifecycle/spy/spy.component';
import { SpyDirective } from './components/component-lifecycle/spy/spy.directive';
import { VersionChildComponent } from './components/component-interaction/version/version-child.component';
import { VersionParentComponet } from './components/component-interaction/version/version-parent.component';
import { EmulatedEncapsulationComponent } from './components/component-interaction/view-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from './components/component-interaction/view-encapsulation/no-encapsulation.component';
import { ShadowDomEncapsulationComponent } from './components/component-interaction/view-encapsulation/shadow-dom-encapsulation.component';
import { VoterComponent } from './components/component-interaction/voter/voter.component';
import { VoteTakerComponent } from './components/component-interaction/voter/votetaker.component';
import { HeroAppComponent } from './components/component-styles/host-selector/hero-app.component';
import { HeroAppMainComponent } from './components/component-styles/host-selector/hero-app-main.component';
import { QuestSummaryComponent } from './components/component-styles/host-selector/quest-summary.component';
import { HeroTeamComponent } from './components/component-styles/host-selector/hero-team.component';
import { HeroDetailsComponent } from './components/component-styles/host-selector/hero-details.component';
import { HeroControlsComponent } from './components/component-styles/host-selector/hero-controls.component';
import { HostSelectorExampleComponent } from './components/component-styles/host-selector/host-selector-example.component';

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
    VersionParentComponet,
    VoteTakerComponent,
    VoterComponent,
    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent,
    AstronautComponent,
    HeroAppComponent,
    HeroAppMainComponent,
    QuestSummaryComponent,
    HeroTeamComponent,
    HeroDetailsComponent,
    HeroControlsComponent,
    HostSelectorExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // need this module to use [(ngModel)] directive
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
