import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productForm:FormGroup
  public gender = [
    {name:'Male'},
    {name:'Female'},
    {name:'Both'}
  ]
  public size = [
    {name:'XS'},
    {name:'S'},
    {name:'M'},
    {name:'L'},
    {name:'XL'},
    {name:'XXL'},
    {name:'XXXL'}
  ]
  public slug = [
    {name:'Half'},
    {name:'Full'}
  ]
  public animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ]
  constructor(public formbuilder:FormBuilder) { 
    this.productForm=this.formbuilder.group({
      productName:['',[Validators.required,Validators.pattern(/^\w+( \w+)*$/)]],
      category:['',[Validators.required]],
      subcategory:['',[Validators.required]],
      size:['',Validators.required],
      gender:['',Validators.required],
      quantity:['',[Validators.required,Validators.pattern('/^[0-9]$/')]],
      image:['',Validators.required],
      slug:['',Validators.required],
      chest:['',Validators.required],
      waist:['',Validators.required]
    })
  }

  ngOnInit() {
  }

}
