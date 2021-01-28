import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';
import { EmployeeDetails } from '../model/employeeDetails.model';
import { yearsOld } from './years-old.pipe';


@Component({
  selector: 'app-single-employee-detail',
  templateUrl: './single-employee-detail.component.html',
  styleUrls: ['./single-employee-detail.component.css']
})
export class SingleEmployeeDetailComponent implements OnInit {


  constructor(private tran: TransferServiceService, private router: Router, private snackBar: MatSnackBar) { }

  //This is the variable that takes in the current employee object that needs to be displayed
  currentEmployee: EmployeeDetails = new EmployeeDetails();
  //This stores the string values of the salary and using currency pipe on it ot show USD
  salary: string = "";

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('loggedIn') || 'false') != true) {
      this.router.navigate(['']);
      this.snackBar.open("You need to login first!", "", {
        duration: 3000,
        panelClass: ['red-snackbar']
      })
      return;
    }

    //Here is the check to see if the use is logged in and tries to see single epmmloyee details without clicking on any employee
    //then the user should be informed to select any employee and is redirected to employee table page to select the emplyee
    //this handles all the corner cases
    this.currentEmployee = this.tran.currentEmployeeElement;
    if (!this.currentEmployee.id) {
      this.snackBar.open("Select an Employee", "", {
        duration: 3000,
        panelClass: ['red-snackbar']
      });
      this.router.navigate(['/employee']);
      return;
    }
    if (this.currentEmployee.employee_salary)
      this.salary = this.currentEmployee.employee_salary?.toString();

  }

}
