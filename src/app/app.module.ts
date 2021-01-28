import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NavigationPanelComponent } from './navigation-panel/navigation-panel.component';
import { LoginPopup, LandingPageComponent } from './landing-page/landing-page.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeComponent } from './employee/employee.component';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { SingleEmployeeDetailComponent } from './single-employee-detail/single-employee-detail.component';
import { yearsOld } from './single-employee-detail/years-old.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  declarations: [
    AppComponent,
    NavigationPanelComponent,
    LandingPageComponent,
    LoginPopup,
    EmployeeComponent,
    SingleEmployeeDetailComponent,
    yearsOld
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatGridListModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  providers: [LoginPopup],
  bootstrap: [AppComponent]
})
export class AppModule { }
