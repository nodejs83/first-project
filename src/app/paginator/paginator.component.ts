import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Input() numberOfPages: number;
  @Output() pageNumberClick = new EventEmitter<number>();
  pages: number[] = [];

  constructor() { }

  ngOnInit() {
    for(var i = 0; i < this.numberOfPages; i++){
      this.pages.push(i);  
    }
  }

  pageNumberClicked(page: number){
    this.pageNumberClick.emit(page);
  }

}
