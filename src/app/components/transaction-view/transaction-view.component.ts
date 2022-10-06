import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { TransactionService } from 'src/app/services/TransactionService';

@Component({
  selector: 'app-transaction-view',
  templateUrl: './transaction-view.component.html',
  styleUrls: ['./transaction-view.component.css']
})
export class TransactionViewComponent implements OnInit {
  @Input()
  transaction : Transaction = {transaction_id:0, user_id: 0, total_price:0, products:"", date:new Date("2022-10-06")};

  constructor(private tservice : TransactionService) { }

  ngOnInit(): void {
  }

}
