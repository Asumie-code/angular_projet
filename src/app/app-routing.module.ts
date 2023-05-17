import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, UrlSegment } from '@angular/router';
import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { authGuard } from './auth/auth.guard';



const routes: Routes = [
     {
       path: 'admin',
       loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
       canMatch: [authGuard]
     },
     {
      path: 'crisis-center',
      loadChildren: () => import('./crisis-center/crisis-center.module').then(m => m.crisesModule),
      data: {preload: true}
    },
     { path: '',   redirectTo: '/superheroes', pathMatch: 'full' },
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
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: SelectivePreloadingStrategyService})],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule { }
