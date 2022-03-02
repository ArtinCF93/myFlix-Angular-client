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

/**
 * @class FetchApiDataService
 * Service component that contain several api http requests
 */
export class FetchApiDataService {

  //Inject the HttpClient module to the construct for use of Http
  //this is declared as dependcy in the constructor
  /**
   * @function constructor
   * @param http 
   */ 
  constructor(private http: HttpClient) { }


  /**
   * Making a post api call for the user registration endpoint
   * @function userRegistration
   * @param userDetails 
   * @returns {user}
   */
  //HTTP modules use observables to handle AJAX requests and responses; send data from child to parent compoenent
  public userRegistration(userDetails: any): Observable<any> { //method takes an arguement type of 'any' type of data that userDetails is
    console.log(userDetails);
    return this.http.post('https://quiet-headland-10477.herokuapp.com/users', userDetails).pipe(
      catchError(this.handleError)
    );
    //function instructs a post request to the API endpoint `rootURL/${users}`
  }
  
  /**
   * Making a post api call for the user login endpoint
   * @param userDetails 
   * @returns {user}
   */
  public userLogin(userDetails: any): Observable<any> { //method takes an arguement type of 'any' type of data that userDetails is
    console.log(userDetails);
    return this.http.post('https://quiet-headland-10477.herokuapp.com/login', userDetails).pipe(
      catchError(this.handleError)
    );
  }


  /**
   * Making a put api call for the user update endpoint
   * @param userDetails 
   * @returns {user} updated
   */
  profileUpdate(userDetails: any) {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('user')
    return this.http.put(`https://quiet-headland-10477.herokuapp.com/users/${username}`, userDetails, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    }).pipe(
      catchError(this.handleError)
    );
  }

/**
 * Making a delete api call for the user update endpoint
 * @function deleteUser
 */
  deleteUser(): Observable<any> {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('user')
    return this.http.delete(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    }).pipe(
      catchError(this.handleError)
    );
  }


  private extractResponseData(res: any): any
  {
    let body = res.json;
    return body || {};
  }

  /**
   * @function handleError
   * @param error 
   * @returns error code
   */
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
