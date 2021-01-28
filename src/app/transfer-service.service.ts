import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { REST_ENDPOINTS } from './globalSettings';
import { EmployeeDetails } from '../app/model/employeeDetails.model';


@Injectable({
  providedIn: 'root'
})
export class TransferServiceService implements OnInit {
  //This is the hard coded emailId and Password credentials
  emailId = "amrit96pal@gmail.com";
  password = "Equitas";
  //This is the variable that takes in the current employee selected from employee table and singleEmployeeDetails
  //component consumes this variable  for displaying
  currentEmployeeElement: EmployeeDetails = new EmployeeDetails();

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit(): void {
    //this is the session which is set as false in tbe beginging
    localStorage.setItem('loggedIn', 'false');
    throw new Error('Method not implemented.');
  }

  //This functions is fired form the landing page after the login credentials is validated
  //this function sets the session logged in as true in the local storage so that when the
  //tab is closed and opened the user is still logged in for seemless experience
  loggedInSystem() {
    localStorage.setItem('loggedIn', 'true');
  }

  //This funcition is fired form the navigation panel when the user click on logout
  //this remove ths session item from local storage so that once logged out the user cant
  //log in as the session is checked on every url hit and if the session is absent
  //the user is informed to log in first and also is redirected to login page
  logout() {
    if (JSON.parse(localStorage.getItem('loggedIn') || 'false') != true) {
      this.snackBar.open("You are logged already logged out!", "", {
        duration: 3000,
        panelClass: ['red-snackbar'],
      })
    } else {
      localStorage.removeItem('loggedIn');
      this.snackBar.open("Logged out Successfully!", "", {
        duration: 3000,
        panelClass: ['blue-snackbar'],
      })
    }
  }

  //This is the HTTP get methos that fetches the employee data
  getEmployeeData(): Observable<EmployeeDetails[]> {
    return this.http.get<EmployeeDetails[]>(REST_ENDPOINTS.GET_ALL_EMPLOYEE_DATA);
  }


}
