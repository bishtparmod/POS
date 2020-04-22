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
    console.log(window.location)
    if(window.location.pathname === '/'){
      this.header= false
    }else{
      this.header=true
    }
  }

}
