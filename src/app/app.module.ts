import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { TransactionViewComponent } from './components/transaction-view/transaction-view.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountManagementComponent } from './pages/admin/account-management/account-management.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { HomeComponent } from './pages/admin/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTransactionsComponent,
    TransactionViewComponent,
    TransactionListComponent,
    LoginComponent,
    AccountManagementComponent,
    TopnavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
