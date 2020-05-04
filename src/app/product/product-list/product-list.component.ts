import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  length = 100;
  pageSize = 4;
  pageSizeOptions: number[] = [4,8,12,16];

  // MatPaginator Output
  pageEvent: PageEvent;
  constructor() { }

  ngOnInit() {
  }

  onPageChange(page){
    // alert(JSON.stringify(page))
    this.pageEvent=page
  }

}
