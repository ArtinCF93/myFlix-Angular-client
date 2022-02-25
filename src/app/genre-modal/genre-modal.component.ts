import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-genre-modal',
  templateUrl: './genre-modal.component.html',
  styleUrls: ['./genre-modal.component.css']
})
export class GenreModalComponent implements OnInit {

  genre: any =[]

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getGenre(localStorage.getItem('GenreId'))
  }

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
