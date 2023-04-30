import { NgModule } from '@angular/core';
import { RouterModule, RouterStateSnapshot, Routes, TitleStrategy } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';



@Injectable({providedIn: 'root'}) 
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super()
  }
  override updateTitle(snapshot: RouterStateSnapshot): void {
      const title = this.buildTitle(snapshot)
      if(title !== undefined) {
        this.title.setTitle(`My Application | ${title}`)
      }
  }
}














const routes: Routes = [
    {path: 'first-component', component: FirstComponent, title: 'First Component'}, 
    {
      path: 'second-component', 
      component: SecondComponent,
      children: [
        {path: 'child-a', component: ChildAComponent},
        {path: 'child-b', component: ChildBComponent},
      ]
    }, 
    {path: '', redirectTo: '/first-component', pathMatch: 'full'},
    {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy}
  ]
})
export class AppRoutingModule { }
