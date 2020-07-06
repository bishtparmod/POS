import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm:FormGroup
  @ViewChild("loginModal",{static:false}) loginModal: ElementRef;
  @ViewChild("closeLogin",{static:false}) closeLogin: ElementRef;
  
  
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formbuilder:FormBuilder
    ) {
    this.loginForm = this.formbuilder.group({
      email : ['', [Validators.required,Validators.email]],
      password : ['', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    })
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit(){
    console.log(this.loginForm)
  }

  openSignupDialog():void {
    this.closeDialog()
    const dialogRef = this.dialog.open(SignupComponent,{
      width:"50%",
      data:{message:"done"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openForgotDialog():void {
    this.closeDialog()
    const dialogRef = this.dialog.open(ForgotpasswordComponent,{
      width:"50%",
      data:{message:"done"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
