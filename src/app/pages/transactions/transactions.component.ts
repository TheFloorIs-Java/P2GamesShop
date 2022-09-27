import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  viewAllButtonPressed : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onViewAllButtonClicked() : void {
    this.viewAllButtonPressed = !this.viewAllButtonPressed;
  }
}
