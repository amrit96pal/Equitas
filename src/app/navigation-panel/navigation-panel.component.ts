import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransferServiceService } from '../transfer-service.service';

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.css']
})
export class NavigationPanelComponent implements OnInit {

  constructor(private tran: TransferServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  //This function is fired when the user wants to logout, this function calls another function in the transfer service
  //which delets the session to prevent any frauld and after that is done the page is redirected to login page
  logout() {
    this.tran.logout();
    this.router.navigate(['']);
  }

}
