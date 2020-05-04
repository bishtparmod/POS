import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { ValitionService } from '../../Service/validation/valition.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm:FormGroup
  @ViewChild("signupModal",{static:false}) signupModal: ElementRef;
  @ViewChild("closeSignup",{static:false}) closeSignup: ElementRef;
  constructor(public formbuilder:FormBuilder, public validationService:ValitionService) {
    this.signupForm = this.formbuilder.group({
      username : ['', [Validators.required,Validators.pattern(/^\w+( \w+)*$/)]],
      email : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmPassword:['',[Validators.required,,Validators.minLength(8)]]
    },{
      validators:this.validationService.MatchPassword('password','confirmPassword')
    })
   }

  ngOnInit() {
  }

  submit(){
    console.log(this.signupForm)
  }
}
