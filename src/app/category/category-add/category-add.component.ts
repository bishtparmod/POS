import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  public categoryForm:FormGroup
  constructor(public formbuilder:FormBuilder) {
    this.categoryForm = this.formbuilder.group({
      categoryName : ['', [Validators.required,Validators.pattern(/^\w+( \w+)*$/)]]
    })
   }

  ngOnInit() {
  }

  submit(){
    console.log(this.categoryForm)
  }

}
