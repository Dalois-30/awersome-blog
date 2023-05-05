import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPageComponent } from './core/components/master-page/master-page.component';

const routes: Routes = [

  { path: '', component: MasterPageComponent, loadChildren: () => import('./feature/blog/blog.module').then(m => m.BlogModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'other', loadChildren: () => import('./feature/other/other.module').then(m => m.OtherModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
