import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent}  from  './pages/login/login.component'
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import {AccountManagementComponent} from './pages/admin/account-management/account-management.component'

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {path:"transactions", component:AllTransactionsComponent},
  { path: "account", component: AccountManagementComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
