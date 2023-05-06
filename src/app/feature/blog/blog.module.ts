import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PageBlogDetailComponent } from 'src/app/feature/blog/page-blog-detail/page-blog-detail.component';
import { PageBlogListSidebarComponent } from 'src/app/feature/blog/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageContactDetailComponent } from 'src/app/feature/blog/page-contact-detail/page-contact-detail.component';
import { SwitcherComponent } from 'src/app/shared/switcher/switcher.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndexPersonalComponent } from './index-personal/index-personal.component';

@NgModule({
  declarations: [      
    IndexPersonalComponent,
    PageBlogDetailComponent,
    PageBlogListSidebarComponent,
    PageContactDetailComponent,
    SwitcherComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule, 
    SharedModule
  ]
})
export class BlogModule { }
