import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css']
})
export class OfferDetailComponent implements OnInit {


  offerForm:FormGroup
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
    {name: 'Category', sound: 'Woof!'},
    {name: 'Subcategory', sound: 'Meow!'},
    {name: 'Product', sound: 'Moo!'}
  ]
  constructor(public formbuilder:FormBuilder) { 
    this.offerForm=this.formbuilder.group({
      discount:['',[Validators.required,Validators.pattern(/^\w+( \w+)*$/)]],
      discountType:['',[Validators.required]],
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
