import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { lastValueFrom } from 'rxjs';
import { Category, CategoryResponse } from '../dto/category.dto';
import { AuthService } from 'src/app/auth/auth.service';
import { PostResponse } from '../dto/post.dto';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
    private _blogService: BlogService,
    private sanitizer: DomSanitizer
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

  getFifteenFirstWords(content: string): string {
    // Créer un élément div pour traiter le contenu HTML
    const div = document.createElement('div');
    div.innerHTML = content;

    // Extraire le texte de l'élément div
    const text = div.textContent || div.innerText || '';

    // Séparer la chaîne de caractères en mots
    const words = text.split(' ');

    // Récupérer les 15 premiers mots et les rejoindre en une seule chaîne de caractères
    const firstFifteenWords = words.slice(0, 15).join(' ');

    return firstFifteenWords;
  }

  // Fonction pour rendre le HTML sûr
  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }


}
