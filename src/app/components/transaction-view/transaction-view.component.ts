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
  transaction : Transaction = {id:0, item:""};

  constructor(private tservice : TransactionService) { }

  ngOnInit(): void {
  }

}
