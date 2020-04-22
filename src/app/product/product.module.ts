import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ShareModule
  ]
})
export class ProductModule { }
