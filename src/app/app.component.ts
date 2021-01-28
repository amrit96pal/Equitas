import { Component, OnInit } from '@angular/core';
import { TransferServiceService } from './transfer-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public trans: TransferServiceService) {

  }
  ngOnInit(): void {
  }

  title = 'EquitasAssignment';
}
