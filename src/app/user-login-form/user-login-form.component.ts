import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialogRef } from '@angular/material/dialog'; //this closes the dialog on success
import { MatSnackBar } from '@angular/material/snack-bar'; //this import is used to display notifications back to the user

import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.css']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userLoginData = { Username: '', Password: ''}

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(): void {
    this.fetchApiData.userLogin(this.userLoginData).subscribe((result) => {
      localStorage.setItem('user', result.user.Username)
      localStorage.setItem('token', result.token)
      this.dialogRef.close();
      this.snackBar.open(result, 'Successful login', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'Login failed', {
        duration: 2000
      });
    });
  }
}
