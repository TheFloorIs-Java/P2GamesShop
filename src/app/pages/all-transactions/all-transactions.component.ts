import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
  viewAllButtonClicked : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onViewAllButtonClicked() : void {
    this.viewAllButtonClicked = !this.viewAllButtonClicked;
  }

}
