import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { HeroListEnterLeavePageComponent } from './hero-list/hero-list-enter-leave-page.component';
import { OpenClosePageComponent } from './open-close/open-close-page.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/enter-leave' },
  {path:'open-close', component: OpenClosePageComponent }, 
  {path: 'enter-leave', component: HeroListEnterLeavePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
