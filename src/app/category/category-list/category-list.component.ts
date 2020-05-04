import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categoryForm:FormGroup
  public subcategoryForm:FormGroup
  public animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ]
  length = 100;
  pageSize = 4;
  pageSizeOptions: number[] = [4,8,12,16];

  // MatPaginator Output
  pageEvent: PageEvent;
  constructor(public formbuilder:FormBuilder) { 
    this.categoryForm = this.formbuilder.group({
      categoryName : ['', [Validators.required,Validators.pattern(/^\w+( \w+)*$/)]]
    })

    this.subcategoryForm = this.formbuilder.group({
      categoryList:['',Validators.required],
      subcategoryName : ['', [Validators.required,Validators.pattern(/^\w+( \w+)*$/)]]
    })
  }

  ngOnInit() {
  }

  onPageChange(page){
    this.pageEvent=page
  }

  submit(){
    console.log(this.categoryForm)
  }


}
