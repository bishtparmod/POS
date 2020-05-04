import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public header:boolean=false
  constructor() { }

  ngOnInit() {
    if(window.location.pathname === '/'){
      this.header= true
    }else{
      this.header=false
    }
  }

}
