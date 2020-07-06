import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sliderImage = [
    {image:"/assets/img/profile2.jpg",class:"active"},
    {image:"/assets/img/blogpost.jpg",class:"inactive"},
    {image:"/assets/img/profile2.jpg",class:"inactive"},
    // {image:"/assets/img/blogpost.jpg"},
  ]
}
