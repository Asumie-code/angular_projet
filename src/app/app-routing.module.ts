import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';



const routes: Routes = [
     { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
     {
      path: 'compose',
      component: ComposeMessageComponent,
      outlet: 'popup'
    },
      {
        matcher: (url) => {
          if (url.length === 1 && url[0].path.match(/^@[\w]+$/gm)) {
            return {
              consumed: url,
              posParams: {
                username: new UrlSegment(url[0].path.slice(1), {})
              }
            };
          }
      
          return null;
        },
        component: ProfileComponent
      },
      {path: '**', component: PageNotFoundComponent}, // routes object matching should be in order of importance 

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
