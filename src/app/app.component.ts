import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BillService } from './shared/bill/bill.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filePath: string;
  message: string;
  title = 'barsmicroservices';

  constructor(private billService: BillService) {  }

  receiveFilePathFromFormComponent($event: any) {
    this.message = $event;
    console.log("APP COMPONENT RECEIVED : " + this.message)
    this.billService.getFilePathFromComponent(this.message);
    this.billService.postFilePathToApi();
  }
}

