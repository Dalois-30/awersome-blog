import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterPageComponent } from './core/components/master-page/master-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: MasterPageComponent, 
    children: [
      { 
        path: '', 
        loadChildren: () => import('./feature/blog/blog.module').then(m => m.BlogModule) 
      },
      { 
        path: 'other', 
        loadChildren: () => import('./feature/other/other.module').then(m => m.OtherModule) 
      }
    ]
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking',
    useHash: false // Assurez-vous que c'est à false pour utiliser l'API History
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }