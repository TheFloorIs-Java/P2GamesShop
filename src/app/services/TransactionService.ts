import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction';


@Injectable({
    providedIn: 'root'
})
export class TransactionService {
    constructor(private http: HttpClient) {
    }

    // Mainly for testing 
    getAllTransactions() : Observable<Array<Transaction>> {
        return this.http.get<Array<Transaction>>("https://633335f7433198e79dc183b0.mockapi.io/transactions");
    }

    // Get all transactions from specified user
    getAllTransactionsFromUser(user_id:number) : Observable<Array<Transaction>> {
        // https://p2gamesstore.azurewebsites.net/{username/user_id}/transactions
        return this.http.get<Array<Transaction>>("https://p2gamesstore.azurewebsites.net/" + user_id +"/transactions");
    }

    // Get all transaction on specified date
    getAllTransactionsByDate(date:Date) : Observable<Array<Transaction>> {
        return this.http.get<Array<Transaction>>("https://p2gamesstore.azurewebsites.net/transactions/" + date);
    }
}