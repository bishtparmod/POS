import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import {Validators, FormGroup, FormBuilder} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  public forgotForm:FormGroup
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formbuilder:FormBuilder
  ) { 
    this.forgotForm = this.formbuilder.group({
      email : ['', [Validators.required,Validators.email]]
    })
  }

  ngOnInit() {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submit(){
    console.log(this.forgotForm)
  }

  openLoginDialog():void {
    this.closeDialog()
    const dialogRef = this.dialog.open(LoginComponent,{
      width:"50%",
      data:{message:"done"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
