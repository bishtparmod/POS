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

  sliderImage = [
    {image:"/assets/img/profile2.jpg",class:"active"},
    {image:"/assets/img/blogpost.jpg",class:"inactive"},
    {image:"/assets/img/profile2.jpg",class:"inactive"}
  ]
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
