import { NgModule, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleEmployeeDetailComponent } from './single-employee-detail/single-employee-detail.component';

//These are all the routes listed
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'employeeDetails', component: SingleEmployeeDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('loggedIn') || 'false') != true) {
      this.router.navigate(['']);
    }
    throw new Error('Method not implemented.');
  }
}
