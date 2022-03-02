import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

import { DirectorModalComponent } from '../director-modal-component/director-modal-component.component';
import { MovieViewModalComponent } from '../movie-view-modal/movie-view-modal.component';
import { GenreModalComponent } from '../genre-modal/genre-modal.component';


@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styleUrls: ['./movie-card-component.component.css']
})

/**
 * @class MovieCardComponent
 * This is the landing page in which all the movies from the
 * database are listed. Each of the movies will have buttons
 * that will expand infromation about them including Director,
 * Genre, Synopsis
 */
export class MovieCardComponent implements OnInit {


  movies: any = []

  /**
   * @function constructor
   * @param http 
   * @param dialog 
   * @param router 
   */
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    public router: Router
  ) { }

  //ngOnInit is called when Angular is done creating the component
  ngOnInit(): void {
    this.getAllMovies();
  }

/**
 * loads a list of movies from database
 * @function getAllMovies
 * @returns {this.movies} populates the array of movies from the data base
 */
  getAllMovies() {
    let token = localStorage.getItem('token');
    this.http.get<any>('https://quiet-headland-10477.herokuapp.com/movies', {
          headers: new HttpHeaders(
            {
              Authorization: 'Bearer ' + token,
            })
        }).subscribe(
      response => {
        console.log(response);
        this.movies = response;
      }
    )
  }

  /**
   * Adds a favorite movie to the list of user's favorite movies
   * @function addFavoriteMovie
   * @param id 
   * @returns {movie._id} in an array of favorite movie
   */
  addFavoriteMovie(id: any) {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('user');
    this.http.post<any>(`https://quiet-headland-10477.herokuapp.com/users/${username}/movies/${id}`, {}, { // {} needs to be placed to pass in an object
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    }).subscribe(
      response => {
          console.log(response);
      }
    )
  }

/**
 * Opens the DirectorModalComponent in a modal
 * @function openDirectorDialog
 * @param id 
 */
  openDirectorDialog(id: any): void {
    localStorage.setItem('DirectorId', id) // this saves the id of the Director of the chosen movie and saves it as DirectorId in localstorage and binds it with the component
    this.dialog.open(DirectorModalComponent, {
      width: '280px'
    })
  }

  /**
   * Opens the GenreModalComponent in a modal
   * @function openGenreDialog
   * @param id 
   */
  openGenreDialog(id: any): void {
    localStorage.setItem('GenreId', id)
    this.dialog.open(GenreModalComponent, {
      width: '280px'
    })
  }

  /**
   * Opens the GenreModalComponent in a modal
   * @function openMovieDialog
   * @param Title 
   */
  openMovieDialog(Title: any): void {
    localStorage.setItem('MovieTitle', Title)
    this.dialog.open(MovieViewModalComponent, {
      width: '280px'
    })
  }

  /**
   * navigates to the user's profile
   * @function navigatetoProfile
   */
  navigatetoProfile(): void {
    this.router.navigate(['profile']);
      }



}