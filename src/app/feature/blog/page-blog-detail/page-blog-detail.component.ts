import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { lastValueFrom } from 'rxjs';
import { Post, PostResponse } from '../dto/post.dto';
import { Comments } from '../dto/comment.dto';

@Component({
  selector: 'app-page-blog-detail',
  templateUrl: './page-blog-detail.component.html',
  styleUrls: ['./page-blog-detail.component.css']
})

/**
 * Page Blog-Detail Component
 */
export class PageBlogDetailComponent implements OnInit {

  post: PostResponse
  comments: Comments[]
  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.init()
  }

  async init() {
    const postId = this._route.snapshot.params['id'];
    console.log("POST", postId);
    this.post = await lastValueFrom(this._blogService.getOnePost(postId))
    console.log("post", this.post);
    this.comments = await lastValueFrom(this._blogService.getPostComment(postId))
    console.log("comment", this.comments);
  }

}
