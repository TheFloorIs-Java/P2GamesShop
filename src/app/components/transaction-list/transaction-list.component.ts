import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionService } from 'src/app/services/TransactionService';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions : Array<Transaction> = [];
  date : String = "";
  user_id : number = 0;

  constructor(private tservice : TransactionService) { 
  }

  ngOnInit(): void {
    this.tservice.getAllTransactions().subscribe(data => this.transactions = data);
  }

  onViewAllButtonClicked() : void {
    // console.log(this.date);
    this.tservice.getAllTransactions().subscribe(data => this.transactions = data);
    window.location.reload;
  }

  onDateInputButtonClicked() : void {
    // console.log(this.date);
    this.tservice.getAllTransactionsByDate(this.date).subscribe(data => this.transactions = data);
    window.location.reload;
  }

  onUserInputButtonClicked() : void {
    // console.log(this.date);
    this.tservice.getAllTransactionsFromUser(this.user_id).subscribe(data => this.transactions = data);
    window.location.reload;
  }
}
