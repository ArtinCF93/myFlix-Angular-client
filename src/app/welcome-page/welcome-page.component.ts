import { Component, OnInit } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component'
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  
    //this is the function that will open the dialog when the signup button is clicked
    openUserRegistrationDialog(): void {
      this.dialog.open(UserRegistrationFormComponent, {
        width: '280px'
      })
    }

    openUserLoginDialog(): void {
      this.dialog.open(UserLoginFormComponent, {
        width: '280px'
      }) 
    }
}
