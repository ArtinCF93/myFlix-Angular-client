import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-genre-modal',
  templateUrl: './genre-modal.component.html',
  styleUrls: ['./genre-modal.component.css']
})

/**
 * @class GenreModalComponent
 * This component is a modal that renders the genre information
 * of the clicked movie
 */
export class GenreModalComponent implements OnInit {

  genre: any =[]

  /**
   * @function constructor
   * @param http 
   */
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getGenre(localStorage.getItem('GenreId'))
  }

  /**
 * Gets genre information
 * @function getGenre
 * @param id
 * @returns genre infromation based on specified _id of genre object
 */
  getGenre(id: any) {
    let token = localStorage.getItem('token');
    return this.http.get<any>(`https://quiet-headland-10477.herokuapp.com/genres/${id}`, { 
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    }).subscribe(
      response => {
        this.genre = response;
        console.log(response)
      }
    )
  }

}
