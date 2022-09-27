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

    getAllTransactions() : Observable<Array<Transaction>> {
        return this.http.get<Array<Transaction>>("https://633335f7433198e79dc183b0.mockapi.io/transactions");
    }
}