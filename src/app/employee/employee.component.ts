import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeDetails } from '../model/employeeDetails.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private tran: TransferServiceService, private router: Router, private snackBar: MatSnackBar) { }

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  //This is the data source from which the table is build
  dataSource = new MatTableDataSource<EmployeeDetails>()

  ngOnInit(): void {
    //Here we are checking of the user is logged in and redirecting to login page if not redireected int and also show why he is redirected
    if (JSON.parse(localStorage.getItem('loggedIn') || 'false') != true) {
      this.router.navigate(['']);
      this.snackBar.open("You need to login first!", "", {
        duration: 3000,
        panelClass: ['red-snackbar']
      })
      return;
    }
    //This is where the hhtp get request is made and data is fetched
    this.tran.getEmployeeData().subscribe(data => {
      this.dataSource = new MatTableDataSource<EmployeeDetails>(data);
      if(this.paginator)
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    if(this.paginator)
    this.dataSource.paginator = this.paginator;
  }

  //Defining the column header
  displayedColumns: string[] = ['id', 'employee_name', 'employee_salary', 'employee_age', 'profile_image'];


//Whent the user clicks on any employee name, this function is called and it
//redirects to the single emplyee information page while passing the correct employee data
  OpenEmployeeDetails(singleEmployeeDetail: EmployeeDetails) {
    this.tran.currentEmployeeElement = singleEmployeeDetail;
    this.router.navigate(['/employeeDetails']);
  }


}
