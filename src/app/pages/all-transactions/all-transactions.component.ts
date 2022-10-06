import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';
import { TransactionService } from 'src/app/services/TransactionService';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
  viewAllButtonClicked : boolean = false;
  date : String = "";

  constructor(private tservice: TransactionService, private securityService: SecurityService) { 
  }

  ngOnInit(): void {
    this.securityService.adminCheck();
  }
}
