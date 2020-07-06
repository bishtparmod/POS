import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-slider-image',
  templateUrl: './slider-image.component.html',
  styleUrls: ['./slider-image.component.css']
})
export class SliderImageComponent implements OnInit {

  @Input() Active : string
  @Input() Src : string
  constructor() { }

  ngOnInit() {
  }

}
