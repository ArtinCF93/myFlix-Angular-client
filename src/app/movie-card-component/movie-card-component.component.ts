import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styleUrls: ['./movie-card-component.component.css']
})
export class MovieCardComponentComponent implements OnInit {

  //this is where the movies returned from the API will be kept
  // movies = [
  //   {
  //     Title: 'Star Wars',
  //     ImagePath: "https://m.media-amazon.com/images/I/81eZNmyL49L._AC_SY879_.jpg",
  //     Director: 
  //       { Name: 'George Lucas'}
      
  //   }
  // ];

  movies: any = []

  constructor(
    private http: HttpClient
  ) { }

  //ngOnInit is called when Angular is done creating the component
  ngOnInit(): void {
    this.getAllMovies();
  }

  // getMovies(): void {
  //   this.fetchApiData.getAllMovies().subscribe((result: any) => {
  //     this.movies = result;
  //     console.log(this.movies);
  //     return this.movies;
  //   });
  // }

  // getAllMovies(): Observable<any> {
  //   let token = localStorage.getItem('token');
  //   return this.http.get('https://quiet-headland-10477.herokuapp.com/movies', {
  //     headers: new HttpHeaders(
  //       {
  //         Authorization: 'Bearer ' + token,
  //       })
  //   }).pipe(
  //     map(this.extractResponseData),
  //     catchError(this.handleError)
  //   );
  // }

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
}
