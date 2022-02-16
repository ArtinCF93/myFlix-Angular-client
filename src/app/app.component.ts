import { Component } from '@angular/core';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component'
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponentComponent } from './movie-card-component/movie-card-component.component'; 
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFlix-Angular-client';

  constructor(public dialog: MatDialog) {}
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

    openMovieCardDialog(): void {
      this.dialog.open(MovieCardComponentComponent, {
        width: '500px'
      })
    }
}
