import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  //An array of 1..* arrays  
  blogPosts: BlogPost[][] = [];
  currentPage: number;

  @ViewChildren('tiles') blogPostTileComponents: QueryList<BlogPostTileComponent>;
  //Use this if it was one component (without ngFor)
  //@ViewChild('tiles') blogPostTileComponent: BlogPostTileComponent;

  constructor() { }

  expandAll(){
    this.blogPostTileComponents.forEach(e => e.toggle());
  }

  ngOnInit() {
    this.currentPage = 0;
    this.fill(1);
    this.fill(4);
    this.fill(7);
    this.fill(10);
    this.fill(13);
  }

  updatePage(pageNumber){
    this.currentPage = pageNumber;
  }

  fill(index: number): void {
    let summary = '';
    let bp: BlogPost[] = [];
    let limit: number = index + 3;
    for (var i = index; i < limit; i++) {
      summary = 'A pipe can accept any number of optional parameters' + 
      'to fine-tune its output. To add parameters to a pipe, follow the' + 
      'pipe name with a colon ( : ) and then the parameter value (such as' + 
      'currency: EUR). If the pipe accepts multiple parameters, separate '+ 
      'the values with colons (such as slice:1:5)';
      bp.push(
        new BlogPost("Blog title " + i, summary)
      );
    }
    this.blogPosts.push(bp);
  } 
}
