import { Component, OnInit, ViewChild, ElementRef,Inject } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginComponent } from '../../Auth/login/login.component';
import { SignupComponent } from 'src/app/Auth/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  public header:boolean=false
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if(window.location.pathname === '/'){
      this.header= true
    }else{
      this.header=false
    }
  }

  openLoginDialog():void {
    const dialogRef = this.dialog.open(LoginComponent,{
      width:"50%",
      data:{message:"done"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openSignupDialog():void {
    const dialogRef = this.dialog.open(SignupComponent,{
      width:"50%",
      data:{message:"done"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}



@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
  <div>hello</div>
  `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}