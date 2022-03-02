//this is the angular module that exports everything necessary to use elements

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card-component/movie-card-component.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { DirectorModalComponent } from './director-modal-component/director-modal-component.component';
import { GenreModalComponent } from './genre-modal/genre-modal.component';
import { MovieViewModalComponent } from './movie-view-modal/movie-view-modal.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    DirectorModalComponent,
    GenreModalComponent,
    MovieViewModalComponent,
    ProfileViewComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forRoot([
      {
        path: 'welcome',
        component: WelcomePageComponent
      },
      {
        path: 'login',
        component: UserLoginFormComponent
      },
      {
        path: 'registration',
        component: UserRegistrationFormComponent
      },
      {
        path: 'movies',
        component: MovieCardComponent
      },
      {
        path: 'profile',
        component: ProfileViewComponent
      },
      {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'prefix'
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * This is the apps module library
 * @class AppModule
 */
export class AppModule { }
