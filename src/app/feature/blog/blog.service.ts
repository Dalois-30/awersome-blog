import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, shareReplay } from 'rxjs';
import { AddCommentDto } from './dto/add-comment.dto';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly _apiUrl = environment.apiUrl;

  constructor(
    private _http: HttpClient,
  ) { }

  getAllCategories(page: number){
    return this._http.get<any>(`${this._apiUrl}/category?page=${page}&limit=10`).pipe(
      shareReplay(1),
      map(resp => resp.data)
    )
  }

  getAllPosts(page: number){
    return this._http.get<any>(`${this._apiUrl}/posts?page=${page}&limit=10`).pipe(
      shareReplay(1)
    )
  }

  getOnePost(uuid: string){
    return this._http.get<any>(`${this._apiUrl}/posts/getOne/${uuid}`).pipe(
      shareReplay(1),
      map(resp => resp.data)
    )
  }

  getPostComment(uuid: string){
    return this._http.get<any>(`${this._apiUrl}/comments?postId=${uuid}`).pipe(
      shareReplay(1),
      map(resp => resp.data)
    )
  }

  addComment(addComment: AddCommentDto){
    return this._http.post<any>(`${this._apiUrl}/comments/add-comment`, addComment).pipe(
      shareReplay(1)
    )
  }
}
