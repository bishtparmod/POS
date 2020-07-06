import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { SliderComponent } from './slider/slider.component';
import { SliderImageComponent } from './slider-image/slider-image.component';



@NgModule({
  declarations: [PaginationComponent, SliderComponent, SliderImageComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PaginationComponent,
    SliderComponent,
    SliderImageComponent
  ]
})
export class ShareModule { }
