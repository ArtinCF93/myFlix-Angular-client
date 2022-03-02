import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  user: any = []
  favoriteMovies: any = []
  movies: any = []
  matchingMovies: any = []

  @Input() userData = { Name: this.user.Name, Username: this.user.Username, Password: this.user.Password, Email: this.user.Email, Birthday: this.user.Birthday};


  constructor(
    private http: HttpClient,
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getUser()
    this.getAllMatchingMovies()
  }

  getUser() {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('user')
    return this.http.get<any>(`https://quiet-headland-10477.herokuapp.com/users/${username}`, {
      headers: new HttpHeaders(
        {
          Authorization: 'Bearer ' + token,
        })
    }).subscribe(
      response => {
        this.user = response;
        this.favoriteMovies = response.FavoriteMovies
        console.log(response)
        console.log(response.FavoriteMovies)
      }
    );
  }


  getAllMatchingMovies() {
    let token = localStorage.getItem('token');
    this.http.get<any>('https://quiet-headland-10477.herokuapp.com/movies', {
          headers: new HttpHeaders(
            {
              Authorization: 'Bearer ' + token,
            })
        }).subscribe(
      response => {
        response.forEach((element: any) => {
          
        if (this.favoriteMovies.includes(element._id)) {
          this.matchingMovies.push(element)
        } 
        })
        console.log(this.matchingMovies);
        return this.matchingMovies
      }
    )
  }

  updateUser(): void {
    this.fetchApiData.profileUpdate(this.userData).subscribe((result: any) => {
      //logic for a successful user registration goes here!
      console.log(result);
      localStorage.setItem('user', result.Username)
      this.snackBar.open(result, 'Successfully Updated', {
        duration: 2000
      });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'Something went wrong', {
        duration: 2000
      });
    });
  }

  deleteUser(): void {
    this.fetchApiData.deleteUser().subscribe((result: any) => {
      //logic for a successful user registration goes here!
      console.log(result);
      this.snackBar.open(result, 'Successfully Deleted', {
        duration: 2000
      });
    }, (result) => {
      // this.snackBar.open(result, 'Something went wrong', {
      //   duration: 2000
      // });
      localStorage.setItem('user', '')
      localStorage.setItem('token', '')
      this.router.navigate(['welcome']);
    });
  }

  deleteFavoriteMovie(id: any) {
    let token = localStorage.getItem('token');
    let username = localStorage.getItem('user');
    return this.http.delete(`https://quiet-headland-10477.herokuapp.com/users/${username}/movies/${id}`, {
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

  navigatetoProfile(): void {
    this.router.navigate(['profile']);
  }

  navigatetoMovies(): void {
    this.router.navigate(['movies']);
  }

}
