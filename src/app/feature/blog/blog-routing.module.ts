import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageBlogDetailComponent } from 'src/app/feature/blog/page-blog-detail/page-blog-detail.component';
import { PageBlogListSidebarComponent } from 'src/app/feature/blog/page-blog-list-sidebar/page-blog-list-sidebar.component';
import { PageContactDetailComponent } from 'src/app/feature/blog/page-contact-detail/page-contact-detail.component';
import { SwitcherComponent } from 'src/app/shared/switcher/switcher.component';
import { IndexPersonalComponent } from './index-personal/index-personal.component';

const routes: Routes = [
  { path: '', component: IndexPersonalComponent },
  { path: 'blog', component: PageBlogListSidebarComponent },
  { path: 'blog/:id', component: PageBlogDetailComponent },
  { path: 'page-contact-detail', component: PageContactDetailComponent },
  { path: '#', component: SwitcherComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
