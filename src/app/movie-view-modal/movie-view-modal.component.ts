import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-view-modal',
  templateUrl: './movie-view-modal.component.html',
  styleUrls: ['./movie-view-modal.component.css']
})

/**
 * @class MovieViewModalComponent
 * This component is a modal that renders the movie information
 * of the clicked movie
 */
export class MovieViewModalComponent implements OnInit {

  movie: any = []
  
  /**
   * @function constructor
   * @param http 
   */
  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getMovie(localStorage.getItem('MovieTitle'))
  }

  /**
   * Render information of a single movie
   * @function getMovie
   * @param Title 
   */
  getMovie(Title: any) {
    let token = localStorage.getItem('token');
    this.http.get<any>(`https://quiet-headland-10477.herokuapp.com/movies/${Title}`, {
          headers: new HttpHeaders(
            {
              Authorization: 'Bearer ' + token,
            })
        }).subscribe(
          response => {
            this.movie = response;
            console.log(response);
          }
        );
  }

}
