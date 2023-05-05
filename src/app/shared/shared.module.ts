import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

import { ScrollspyDirective } from './scrollspy.directive';
import { FeatherModule } from 'angular-feather';

import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { allIcons } from 'angular-feather/icons';
import { LightboxModule } from 'ngx-lightbox';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    ScrollspyDirective,
    PricingComponent,
    FeaturesComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    FeatherModule,
    RouterModule,
    FeatherModule.pick(allIcons),
    ScrollToModule.forRoot(),
    NgbDropdownModule,
    NgbModule,
    NgbNavModule,
    FormsModule,
    NgxTypedJsModule, // utile
    LightboxModule,
  ],
  exports: [
    ScrollspyDirective,
    PricingComponent,
    CarouselModule,
    FeatherModule,
    RouterModule,
    FeatherModule,
    FeaturesComponent,
    BlogComponent,
    ScrollToModule,
    NgbDropdownModule,
    NgbNavModule,
    FormsModule,
    NgxTypedJsModule,
    LightboxModule
  ]
})

export class SharedModule { }
