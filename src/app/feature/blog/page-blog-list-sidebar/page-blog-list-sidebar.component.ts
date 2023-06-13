import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { lastValueFrom } from 'rxjs';
import { Category, CategoryResponse } from '../dto/category.dto';

interface blog {
  image: string;
  title: string;
  content: string,
  like: string;
  message: string;
  name: string;
  date: string;
};

@Component({
  selector: 'app-page-blog-list-sidebar',
  templateUrl: './page-blog-list-sidebar.component.html',
  styleUrls: ['./page-blog-list-sidebar.component.css']
})

/**
 * Page Blog-ListSidebar Component
 */
export class PageBlogListSidebarComponent implements OnInit {

  postCount: number;
  blogListData: any;
  categoryListData: CategoryResponse[];
  constructor(
    private _blogService: BlogService
  ) { }

  //TODO: transformer la div sidebar en component partagé

  async ngOnInit(): Promise<void> {
    this._blogService.getAllPosts(0).subscribe((posts) => {
      this.blogListData = posts.data;
      this.postCount = posts.totalItems;
    });
    console.log("blogListData", this.blogListData);
    this.categoryListData = await lastValueFrom(this._blogService.getAllCategories(0));
    console.log('categoryListData', this.categoryListData);

  }

}
