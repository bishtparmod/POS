import { Component, OnInit, Input } from '@angular/core';
import $ from "jquery";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() Image : any
  @Input() Imageheight : any
  @Input() Imagewidth : string
  
  public activeImage = 0;
  constructor() { }
  prevImage(){
    this.activeImage = this.activeImage -1;
  }
  nextImage(){
    if(this.activeImage < this.Image.length -1) {
      this.activeImage = this.activeImage +1;
    }else{
      this.activeImage = 0
    }
  }
  ngOnInit() {
    setInterval(() => {
      this.nextImage() 
    }, 2000);
    // $('.carousel-item div').live('click',function(){
    //   $('.carousel-item div').addClass('active')
    //   // $(this).addClass('active');
    // });
  }

}
