import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-director-modal-component',
  templateUrl: './director-modal-component.component.html',
  styleUrls: ['./director-modal-component.component.css']
})

/**
 * @class DirectorModalComponent
 * This component is a modal that renders the director information
 * of the clicked movie
 */
export class DirectorModalComponent implements OnInit {

  director: any = []

  /**
   * @function constructor
   * @param http 
   */
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getDirector(localStorage.getItem('DirectorId')) //this passes the id of the Director into the getDirector() as the 'id' parameter
  }
  
/**
 * Gets director information
 * @function getDirector
 * @param id
 * @returns director infromation based on specified _id of director object
 */
  getDirector(id: any){ //this paramter name has to match the paramter in the api
    let token = localStorage.getItem('token');
    this.http.get<any>(`https://quiet-headland-10477.herokuapp.com/directors/${id}` , {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    })
    .subscribe(
      response => {
        this.director = response;
        console.log(response);
      }
    );
  }

}
