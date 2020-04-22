import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("loginModal",{static:false}) loginModal: ElementRef;
  
  constructor() { }

  ngOnInit() {
  }

}
