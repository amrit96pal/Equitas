import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { TransferServiceService } from '../transfer-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Button } from 'protractor';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(public dialog: MatDialog, private transferService: TransferServiceService, private router: Router) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('loggedIn') || 'false') == true) {
      this.router.navigate(['/employee']);
    }
  }

  //This function is fired when the user clicks on the login button on the landing page, this opens the dialog box LoginPopup
  openDialog() {
    const dialogRef = this.dialog.open(LoginPopup, {
      height: '250px',
      width: '450px',
    });
  }



}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'loginPopup.html',
})
export class LoginPopup {

  //These are the strings that show the custom error message if wrong input is entered
  EmailIdError: String = "";
  PasswordError: String = "";

  constructor(
    public dialogRef: MatDialogRef<LoginPopup>, private transfer: TransferServiceService, private snackBar: MatSnackBar, private router: Router) { }
    //The formgroup used to store the entered values
  profileForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl(''),
  });

  //This closes the popup login box
  onNoClick(): void {
    this.dialogRef.close();
  }

  // This functions is fired when the user hits submit Button, this verifies for any empty input or wron input and gives error message accordingly
  // and also if everything succedes this also redircts to emplyee page
  Submit() {
    if (this.profileForm.get('emailId')?.value == '') {
      this.EmailIdError = "Enter an Email Id";
    }
    else if (!this.profileForm.get('emailId')?.value.match('/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/')) {
      this.EmailIdError = "Enter a valid Email Id";
    }
    if (this.profileForm.get('password')?.value == '') {
      this.PasswordError = "Enter a password"
    }
    if (this.profileForm.get('emailId')?.value == this.transfer.emailId && this.profileForm.get('password')?.value == this.transfer.password) {
      this.transfer.loggedInSystem();
      this.snackBar.open("Logged in Successfully!!!", "Close", {
        duration: 3000,
        panelClass: ['blue-login-snackbar']
      })
      this.dialogRef.close();
      this.router.navigate(['/employee']);
    } else {
      this.profileForm.setValue({
        emailId: '',
        password: ''
      })
      this.snackBar.open("Enter credentials are incorrect!", "Try Again", {
        duration: 3000
      })
    }
  }

}