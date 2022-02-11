import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'

// declaring the api url that contains data
// let rootURL = 'https://quiet-headland-10477.herokuapp.com/';

//this is a decorator, adds metadata to a class 
// the 'root' tells Angular that this service is available every
@Injectable({
  providedIn: 'root'
})


export class FetchApiDataService {

  //Inject the HttpClient module to the construct for use of Http
  //this is declared as dependcy in the constructor 
  constructor(private http: HttpClient) { }


  //Making the api call for the user registration endpoint
  //HTTP modules use observables to handle AJAX requests and responses; send data from child to parent compoenent
  public userRegistration(userDetails: any): Observable<any> { //method takes an arguement type of 'any' type of data that userDetails is
    console.log(userDetails);
    return this.http.post('https://quiet-headland-10477.herokuapp.com/users', userDetails).pipe(
      catchError(this.handleError)
    );
    //function instructs a post request to the API endpoint `rootURL/${users}`
  }
  
  public userLogin(userDetails: any): Observable<any> { //method takes an arguement type of 'any' type of data that userDetails is
    console.log(userDetails);
    return this.http.post('https://quiet-headland-10477.herokuapp.com/login', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  //api call to obtain all 'movies' data
  getAllMovies(): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get('https://quiet-headland-10477.herokuapp.com/movies', {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getMovie(title: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get(`https://quiet-headland-10477.herokuapp.com/movies/${title}`, { 
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getGenre(id: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get(`https://quiet-headland-10477.herokuapp.com/genres/${id}`, { 
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getDirector(id: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get(`https://quiet-headland-10477.herokuapp.com/genres/${id}`, { 
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  getUser(username: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.get(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  
  addFavoriteMovie(username: any, movieId: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.post(`https://quiet-headland-10477.herokuapp.com/users/${username}/movies/${movieId}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }
  
  deleteFavoriteMovie(username: any, movieId: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.delete(`https://quiet-headland-10477.herokuapp.com/users/${username}/movies/${movieId}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  profileUpdate(username: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.put(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }

  deleteUser(username: any): Observable<any> {
    let token = localStorage.getItem('token');
    return this.http.delete(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer' + token,
        })
    }).pipe(
      map(this.extractResponseData),
      catchError(this.handleError)
    );
  }


  private extractResponseData(res: any): any
  {
    let body = res.json;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status},` +
        `Error body is: ${error.error}`
      )
    }
    return throwError(
      'Something bad happened; please try again later'
    );
  }
}
