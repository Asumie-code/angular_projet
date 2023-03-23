import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ItemDetailComponent } from './components/component-sharing-data/item-detail/item-detail.component';
import { ItemOutputComponent } from './components/component-sharing-data/item-output/item-output.component';
import { InputOutputComponent } from './components/component-sharing-data/input-output/input-output.component';
import { AliasingComponent } from './components/component-sharing-data/aliasing/aliasing.component';
import { InTheMetadataComponent } from './components/component-sharing-data/in-the-metadata/in-the-metadata.component';
import { ZippyBasicComponent } from './components/component-content-projection/zippy-basic/zippy-basic.component';
import { ZippyMultislotComponent } from './components/component-content-projection/zippy-multislot/zippy-multislot.component';
import { ZippyComponent, ZippyContentDirective, ZippyToggleDirective } from './components/component-content-projection/example-zippy/example-zippy.component';
import { ZippyNgprojectasComponent } from './components/component-content-projection/zippy-ngprojectas/zippy-ngprojectas.component';
import { AdBannerComponent } from './components/component-dynamic-component/ad-banner.component';
import { AdDirective } from './components/component-dynamic-component/ad.directive';
import { HeroJobAdComponent } from './components/component-dynamic-component/hero-job-ad.component';
import { HeroProfileComponent } from './components/component-dynamic-component/hero-profile.component';
import { AdService } from './services/ad.service';
import { PopupComponent } from './components/component-angular-elements/popup.component';
import { PopupService } from './services/popup.service';
import { CompWithHostBindingComponent } from './components/template-attribute-binding/comp-with-host-binding.component';
import { MyInputWithAttributeDecoratorComponent } from './components/template-attribute-binding/my-input-wiht-attribute-decorator.component';
import { NavBarComponent } from './components/template-attribute-binding/single-and-multiple-style-binding.component';
import { TemplateAttributeBindingComponent } from './components/template-attribute-binding/template-attribute-binding.component';
import { TemplateEventBindingComponent } from './components/template-event-binding/event-binding.component';
import { ClickDirective } from './components/template-event-binding/click.directive';
import { TemplateItemDetailComponent } from './components/template-event-binding/item-detail/item-detail.component';
import { SizerComponent } from './components/template-two-way-binding/sizer/szier.component';
import { TemplateTwoWayBinding } from './components/template-two-way-binding/template-two-way-binding.component';
import { HeroBirthdayComponent } from './components/template-pipes/hero-birthday1.component';
import { HeroBirthday2Component } from './components/template-pipes/hero-birthday2.component';
import { PowerBoosterComponent } from './components/template-pipes/power-booster.component';
import { ExponentialStrengthPipe } from './components/template-pipes/exponential-strength.pipe';
import { PowerBoostCalculatorComponent } from './components/template-pipes/power-boost-calculator.component';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './components/template-pipes/flying-heroes.component';
import { FlyingHeroesImpurePipe, FlyingHeroesPipe } from './components/template-pipes/flying-heroes.pipe';
import { PrecedenceComponent } from './components/template-pipes/precedence.component';
import { HeroAsyncMessageComponent } from './components/template-pipes/hero-async-message.component';
import { HeroListComponent } from './components/template-pipes/hero-list.component';
import { FetchJsonPipe } from './components/template-pipes/fetch-json.pipe';
import { TemplatePipesComponent } from './components/template-pipes/template-pipes.component';
import { HttpClientModule } from '@angular/common/http';
import { TemplateVariables } from './components/template-variables/template-variables.component';
import { BuiltInDirective } from './components/directives/built-in-directive/built-in-directive.component';
import { DirectiveItemDetailComponent } from './components/directives/built-in-directive/item-detail/directive-item-detail.component';
import { ItemSwitchComponents } from './components/directives/built-in-directive/directive-item-switch.component';
import { DirectiveAttributeComponent } from './components/directives-attribute-directives/directive-attribute.component';
import { HighlightDirective } from './components/directives-attribute-directives/highlight.directive';
import { StructuralDirective } from './components/directives-structural-directives/structural-directives.component';
import { heroSwitchComponents } from './components/directives-structural-directives/hero-swiitch.component';
import { UnlessDirective } from './components/directives-structural-directives/unless.directive';
import { IfLoadedDirective } from './components/directives-structural-directives/if-loaded.directive';
import { StructDirHero } from './components/directives-structural-directives/hero.component';
import { TrigonometryDirective } from './components/directives-structural-directives/trigonometry.directive';
import { DependencyInjectionComponent } from './components/dependency-injection/dependency-injection.component';
import { CarComponent } from './components/dependency-injection/car/car.component';
import { DiHeroListComponent } from './components/dependency-injection/heroes/hero-list.compnent';
import { DiHeroesComponent } from './components/dependency-injection/heroes/heroes.component';
import { DiHeroesTspComponent } from './components/dependency-injection/heroes/heroes-tsp.component';
import { InjectorComponent } from './components/dependency-injection/injector.component';
import { DiLogger } from './components/dependency-injection/di-logger.service';
import { UserService } from './components/dependency-injection/user.service';
import { APP_CONFIG, HERO_DI_CONFIG } from './components/dependency-injection/app.config';
import { ProvidersModule } from './components/dependency-injection/providers.module';
import { HostComponent } from './components/di-resolution-modifiers/host/host.component';
import { HostChildComponent } from './components/di-resolution-modifiers/host-child/host-child.component';
import { HostParentComponent } from './components/di-resolution-modifiers/host-parent/host-parent.component';
import { OptionalComponent } from './components/di-resolution-modifiers/optional/optional.component';
import { SelfComponent } from './components/di-resolution-modifiers/self/self.component';
import { SelfNoDataComponent } from './components/di-resolution-modifiers/self-no-data/self-no-data.component';
import { SkipselfComponent } from './components/di-resolution-modifiers/skipself/skipself.component';
import { DiResolutionModifiers } from './components/di-resolution-modifiers/di-resolution-modifiers.component';
import { DiViewprovider } from './components/di-viewprovider/di-viewprovider.component';
import { InspectorComponent } from './components/di-viewprovider/inspector/inspector.component';
import { DiChildComponent } from './components/di-viewprovider/child/child.component';
import { VillainsListComponent } from './components/di-element-injector/villains-list.component';
import { DiElementInjector } from './components/di-element-injector/di-element-injector.component';


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
    HostSelectorExampleComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    AliasingComponent,
    InTheMetadataComponent,
    ZippyBasicComponent, 
    ZippyMultislotComponent,
    ZippyComponent, 
    ZippyContentDirective,
    ZippyToggleDirective,
    ZippyNgprojectasComponent,
    AdBannerComponent, 
    AdDirective, 
    HeroJobAdComponent,
    HeroProfileComponent,
    PopupComponent,
    CompWithHostBindingComponent, 
    MyInputWithAttributeDecoratorComponent,
    NavBarComponent,
    TemplateAttributeBindingComponent,
    TemplateEventBindingComponent, 
    ClickDirective,
    TemplateItemDetailComponent,
    SizerComponent,
    TemplateTwoWayBinding,
    HeroBirthdayComponent,
    HeroBirthday2Component,
    PowerBoosterComponent, 
    ExponentialStrengthPipe, 
    PowerBoostCalculatorComponent,
    FlyingHeroesComponent, 
    FlyingHeroesImpureComponent,
    FlyingHeroesImpurePipe, 
    FlyingHeroesPipe,
    PrecedenceComponent,
    HeroAsyncMessageComponent,
    HeroListComponent, 
    FetchJsonPipe,
    TemplatePipesComponent,
    TemplateVariables,
    BuiltInDirective,
    DirectiveItemDetailComponent,
    ItemSwitchComponents,
    DirectiveAttributeComponent, 
    HighlightDirective,
    StructuralDirective,
    heroSwitchComponents,
    UnlessDirective,
    IfLoadedDirective,
    StructDirHero,
    TrigonometryDirective,
    DependencyInjectionComponent,
    CarComponent,
    DiHeroListComponent, 
    DiHeroesComponent,
    DiHeroesTspComponent,
    InjectorComponent,
    HostComponent, 
    HostChildComponent, 
    HostParentComponent, 
    OptionalComponent, 
    SelfComponent, 
    SelfNoDataComponent, 
    SkipselfComponent,
    DiResolutionModifiers,
    DiViewprovider,
    InspectorComponent,
    DiChildComponent,
    DiElementInjector,
    VillainsListComponent, 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // need this module to use [(ngModel)] directive,
    HttpClientModule,
    ProvidersModule 
  ],
  providers: [
    AdService,
    PopupService,
    DiLogger, 
    UserService, 
    {provide: APP_CONFIG, useValue: HERO_DI_CONFIG}
  ],
  exports: [CarComponent, DiHeroesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
