import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { lastValueFrom } from 'rxjs';
import { Post, PostResponse } from '../dto/post.dto';
import { Comments } from '../dto/comment.dto';
import { FormControl } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { AddCommentDto } from '../dto/add-comment.dto';
import { SpinnerAction } from 'src/app/auth/auth-login/auth-login.component';
import { ToastrService } from 'ngx-toastr';
import { CategoryResponse } from '../dto/category.dto';
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-blog-detail',
  templateUrl: './page-blog-detail.component.html',
  styleUrls: ['./page-blog-detail.component.css']
})

/**
 * Page Blog-Detail Component
 */
export class PageBlogDetailComponent implements OnInit {


  content = new FormControl();
  post: PostResponse;
  comments: Comments[];
  blogListData: any;
  categoryListData: CategoryResponse[];
  constructor(
    private _route: ActivatedRoute,
    private _blogService: BlogService,
    private _authService: AuthService,
    private toast: ToastrService,
    private _router: Router,
    private _location: Location,
  ) { 
  }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    const postId = this._route.snapshot.params['id'];
    console.log("POST", postId);
    this.post = await lastValueFrom(this._blogService.getOnePost(postId))
    console.log("post", this.post);
    this.comments = await lastValueFrom(this._blogService.getPostComment(postId))
    console.log("comment", this.comments);
    this.categoryListData = await lastValueFrom(this._blogService.getAllCategories(0));
    console.log('categoryListData', this.categoryListData);
    this._blogService.getAllPosts(0).subscribe((posts) => {
      this.blogListData = posts.data;
    });
  }

    /*show and hide spinner*/
    ShowHideSpinner(action: SpinnerAction) {
      let spinner = document.getElementById("spinner2");
      spinner!.style.visibility = action;
    }

  async addComment(){
    const value = this.content.value;
    console.log("user", this._authService.decodedToken);
    console.log("valeur get comment", value);
    console.log("authentifié ?", this._authService.isAuthenticated());
    const addComment = new AddCommentDto();
    addComment.content = value;
    addComment.post = this.post.post.id;
    addComment.user = this._authService.decodedToken.id;
    if (!this._authService.isAuthenticated()) {
      this.toast.warning("Veuillez vous connecter avant de pouvoir ajouter un commentaire !");
      this._router.navigate(['/auth/login']);
      return;
    }
    this._blogService.addComment(addComment).subscribe({
      next: res => {
        console.log('addComment', addComment);
        console.log('result', res);
        if (res.statusCode == 400) {
          this.toast.error("Une erreur est survenue, veuillez reéssayer !");
          this.ShowHideSpinner(SpinnerAction.HIDDEN)
          return;
        } else {
          this.toast.success("Commentaire ajouté");
          this.init();
          this.ShowHideSpinner(SpinnerAction.HIDDEN);
          this.content.reset();
        }
      },
    })
  }

  navigateBy(id: number) {
    this._router.navigate(['/blog/'+id]);
    this.init();
  }
}
