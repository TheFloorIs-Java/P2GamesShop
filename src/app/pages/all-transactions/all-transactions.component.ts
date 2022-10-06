import { Component, OnInit } from '@angular/core';
import { SecurityService } from 'src/app/services/security.service';

@Component({
  selector: 'app-all-transactions',
  templateUrl: './all-transactions.component.html',
  styleUrls: ['./all-transactions.component.css']
})
export class AllTransactionsComponent implements OnInit {
  viewAllButtonClicked : boolean = false;

  constructor(private securityService: SecurityService) { 
    this.securityService.adminCheck();
  }

  ngOnInit(): void {
  }

  onViewAllButtonClicked() : void {
    this.viewAllButtonClicked = !this.viewAllButtonClicked;
  }

}
