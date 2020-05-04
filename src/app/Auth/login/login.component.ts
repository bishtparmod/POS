import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup
  @ViewChild("loginModal",{static:false}) loginModal: ElementRef;
  @ViewChild("closeLogin",{static:false}) closeLogin: ElementRef;
  
  
  constructor(public formbuilder:FormBuilder) {
    this.loginForm = this.formbuilder.group({
      email : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
  }

  ngOnInit() {
  }

  submit(){
    console.log(this.loginForm)
  }

}
