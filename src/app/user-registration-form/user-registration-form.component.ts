import { Component, OnInit, Input } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog'; //this closes the dialog on success
import { MatSnackBar } from '@angular/material/snack-bar'; //this import is used to display notifications back to the user

//this imports the component that makes the API calls
import { FetchApiDataService } from '../fetch-api-data.service';

//the @ decorator tells Angular that the class below is a component
@Component({
  selector: 'app-user-registration-form', // this is basiclly a custom HTML tag that can be used to represent this component for rendering
  templateUrl: './user-registration-form.component.html', //this is the userinterface of the component
  styleUrls: ['./user-registration-form.component.css'] //the style of component
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = { Name: '', Username: '', Password: '', Email: '', Birthday: ''};

  constructor( //these will all be used as keywords below in registerUser() function
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  //this is the function responsible for sending form inputs to the backend
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      //logic for a successful user registration goes here!
      this.dialogRef.close(); //this will close the modal on success
      console.log(result);
      this.snackBar.open(result, 'Successfully Registered', {
        duration: 2000
      });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'Something went wrong', {
        duration: 2000
      });
    });
  }
}
