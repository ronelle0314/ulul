import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BillService } from '../shared/bill/bill.service';

@Component({
  selector: 'app-input-file',
  templateUrl: './input-file.component.html',
  styleUrls: ['./input-file.component.css']
})
export class InputFileComponent implements OnInit {

  constructor(private billService: BillService) { }

  ngOnInit() {
  }

  @Output() sendFilePathToAppComponentEvent = new EventEmitter<string>();   
  
  fileUploaded(e) {
    this.sendFilePathToAppComponentEvent.emit(e.target.value);  
    this.billService.postTestToApi(); 
  }
}
