import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HeroListEnterLeavePageComponent } from './hero-list/hero-list-enter-leave-page.component';
import { OpenClosePageComponent } from './open-close/open-close-page.component';
import { InsertRemoveComponent } from './insert-remove/insert-remove.component';
import { HeroListPageComponent } from './hero-list-page/hero-list-page.component';
import { ToggleAnimationsPageComponent } from './toggle-animations/open-close/toggle-animations-page.component';
import { HomeComponent } from './home.component';
import { StatusSliderPageComponent } from './status-slider/status-slider-page.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  {path:'open-close', component: OpenClosePageComponent }, 
  {path: 'enter-leave', component: HeroListEnterLeavePageComponent}, 
  {path: 'insert-remove', component: InsertRemoveComponent}, 
  {path: 'heroes', component: HeroListPageComponent},
  {path: 'toggle', component: ToggleAnimationsPageComponent},
  {path:'home', component: HomeComponent},
  {path:'status', component: StatusSliderPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
