import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, shareReplay, tap } from 'rxjs/operators';
import { User, UserDecoded } from '../feature/blog/dto/user.dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private host: string = environment.apiUrl;
  public user: any;
  private jwtHelper!: JwtHelperService;

  constructor(public httpClient: HttpClient, private router: Router) {
    this.jwtHelper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token: any = localStorage.getItem('blog_user');
    if (!token) return false;
    return !this.jwtHelper.isTokenExpired(token);

  }
  /* Getting the current user details */
  get currentUser(): any {
    return localStorage.getItem('blog_user')!;
  }

  /* Getting decoded token value */
  get decodedToken(): UserDecoded | any {
    return this.jwtHelper.decodeToken(this.currentUser);
  }

  login(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.host + '/auth/register/', { email, password }, { observe: 'body' }).pipe(
      shareReplay(1),
      tap({
        next: (response: any) => {
          console.log("response", response);
          localStorage.setItem('blog_user', response.data.token);
          console.log(this.decodedToken);
          console.log("Connexion réussie !");
        },
        error: (error: HttpErrorResponse) => {
          console.log("server error :", error);
          throw new HttpErrorResponse({ status: 409, statusText: "An Error Occured" });
        }
      })
    );
  }

  register(email: string, username: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.host + '/auth/signup/', { email, password, username }, { observe: 'body' });
  }

  saveToken(jwt: any): boolean {
    const jwtHelper = new JwtHelperService();
    localStorage.setItem('blog_user', jwt);

    return true;
  }

  logOut(): void {
    localStorage.removeItem('blog_user');
    this.router.ngOnDestroy();
    this.router.dispose();
    location.href = '/pages/auth/login';
  }


  /*
  * @return Observable<User>
  */
  getCurrentUser(id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.host}/users/${id}/`).pipe(
      shareReplay(1),
      map(resp => resp.data)
    );
  }


}
