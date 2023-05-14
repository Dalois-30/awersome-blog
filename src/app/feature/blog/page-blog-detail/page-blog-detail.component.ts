import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-blog-detail',
  templateUrl: './page-blog-detail.component.html',
  styleUrls: ['./page-blog-detail.component.css']
})

/**
 * Page Blog-Detail Component
 */
export class PageBlogDetailComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  async init() {
    const postId = this._route.snapshot.params['id'];
  }

}
