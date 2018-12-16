import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

  @Input() blogPost: BlogPost;
  collapsed : boolean = true;

  constructor() { }

  toggle(): void {
    this.collapsed = !this.collapsed;
  }

  ngOnInit() {
  }

}
