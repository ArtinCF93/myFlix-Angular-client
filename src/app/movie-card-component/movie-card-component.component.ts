import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-movie-card-component',
  templateUrl: './movie-card-component.component.html',
  styleUrls: ['./movie-card-component.component.css']
})
export class MovieCardComponentComponent implements OnInit {

  //this is where the movies returned from the API will be kept
  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
  ) { }

  //ngOnInit is called when Angular is done creating the component
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((result: any) => {
      this.movies = result;
      console.log(this.movies);
      return this.movies;
    });
  }
}
