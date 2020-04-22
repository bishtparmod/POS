import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild("signupModal",{static:false}) signupModal: ElementRef;
  constructor() { }

  ngOnInit() {
  }

}
