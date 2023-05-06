import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageErrorComponent } from 'src/app/feature/other/page-error/page-error.component';
import { PageThankyouComponent } from 'src/app/feature/other/page-thankyou/page-thankyou.component';
import { PageComingsoonComponent } from './page-comingsoon/page-comingsoon.component';

const routes: Routes = [
  { path: 'page-error', component: PageErrorComponent },
  { path: 'page-comming', component: PageComingsoonComponent },
  { path: 'page-thankyou', component: PageThankyouComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherRoutingModule { }
