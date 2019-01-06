import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BillService } from '../shared/bill/bill.service';


@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})

export class BillingComponent implements OnInit {
  bills: Array<any>;

  constructor(private billService: BillService) { 

  }

  ngOnInit() {
    this.billService.getAll().subscribe(data =>{
      this.bills = data;
    })
  }

 
}
