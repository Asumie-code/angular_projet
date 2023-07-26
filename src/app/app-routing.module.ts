import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HeroListEnterLeavePageComponent } from './hero-list/hero-list-enter-leave-page.component';
import { OpenClosePageComponent } from './open-close/open-close-page.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations/open-close/toggle-animations-page.component';
import { HomeComponent } from './home.component';
import { StatusSliderPageComponent } from './status-slider/status-slider-page.component';
import { HeroListAutoCalcPageComponent } from './hero-list-auto/hero-list-auto-page.component';
import { HeroListGroupPageComponent } from './hero-list-groups/hero-list-groups-page.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  {
    path: 'open-close',
    component: OpenClosePageComponent,
    data: { animation: 'openClosePage' }
  },
  {
    path: 'status',
    component: StatusSliderPageComponent,
    data: { animation: 'statusPage' }
  },
  {
    path: 'toggle',
    component: ToggleAnimationsPageComponent,
    data: { animation: 'togglePage' }
  },
  {
    path: 'heroes',
    component: HeroListPageComponent,
    data: { animation: 'filterPage' }
  },
  {
    path: 'hero-groups',
    component: HeroListGroupPageComponent,
    data: { animation: 'heroGroupPage' }
  },
  {
    path: 'enter-leave',
    component: HeroListEnterLeavePageComponent,
    data: { animation: 'enterLeavePage' }
  },
  {
    path: 'auto',
    component: HeroListAutoCalcPageComponent,
    data: { animation: 'autoPage' }
  },
  {
    path: 'insert-remove',
    component: InsertRemoveComponent,
    data: { animation: 'insertRemovePage' }
  },

  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'HomePage' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
