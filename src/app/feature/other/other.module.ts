import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { PageErrorComponent } from 'src/app/feature/other/page-error/page-error.component';
import { PageThankyouComponent } from 'src/app/feature/other/page-thankyou/page-thankyou.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageComingsoonComponent } from './page-comingsoon/page-comingsoon.component';


@NgModule({
  declarations: [
    PageErrorComponent,
    PageThankyouComponent,
    PageComingsoonComponent
  ],
  imports: [
    CommonModule,
    OtherRoutingModule,
    SharedModule
  ]
})
export class OtherModule { }
