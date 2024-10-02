import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-index-personal',
  templateUrl: './index-personal.component.html',
  styleUrls: ['./index-personal.component.css']
})

/***
 * Personal Component
 */
export class IndexPersonalComponent implements OnInit {

  private _album = [];
  postCount: number;
  blogListData: any;

  constructor(
    private _lightbox: Lightbox,
    private _blogService: BlogService,
  ) {
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/personal/' + i + '.png';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };

      this._album.push(album);
    }
  }

  ngOnInit(): void {
    this.init()
  }


  workList = [
    {
      image: 'assets/images/personal/1.png',
      title: 'Go-Africa Investment',
      category: 'Blockchain'
    },
    {
      image: 'assets/images/personal/2.png',
      title: 'Mendo Cash',
      category: 'NestJs',
      link: 'https://cash.mendo.cm/'
    },
    {
      image: 'assets/images/personal/3.png',
      title: 'Ecommerce App',
      category: 'React'
    },
    {
      image: 'assets/images/personal/4.png',
      title: 'E-learnig',
      category: 'Angular'
    },
    {
      image: 'assets/images/personal/5.png',
      title: 'Youtube clone',
      category: 'React'
    },
    {
      image: 'assets/images/personal/6.png',
      title: 'Configure and use a blockchain node',
      category: 'Blockchain'
    }
  ];

  async init() {
    this._blogService.getFirstsPosts(0, 3).subscribe((posts) => {
      this.blogListData = posts.data;
      this.postCount = posts.totalItems;
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  /***
   * Testimonial Slider
   */
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      900: {
        items: 1
      }
    },
    nav: false
  };

  /**
   * Blog Data
   */
   blogData = [
    {
      image: "assets/images/personal/hub-hero.png",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Claude Tapi",
      date: "13th August, 2022"
    },
    {
      image: "assets/images/personal/appwebcover.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Claude Tapi",
      date: "30th November, 2022"
    },
    {
      image: "assets/images/personal/Stat1.png",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Claude Tapi",
      date: "19th December, 2022"
    }
  ];


}
