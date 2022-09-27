import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';

const routes: Routes = [
  {path:"transactions", component:AllTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
