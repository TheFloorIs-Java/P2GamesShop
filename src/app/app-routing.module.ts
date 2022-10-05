import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent}  from  './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllTransactionsComponent } from './pages/all-transactions/all-transactions.component';
import { AccountManagementComponent } from './pages/admin/account-management/account-management.component';
import { HomeComponent } from './pages/admin/home/home.component';
import { ModifyProductComponent } from './pages/modify-product/modify-product.component';
import { AllProductsPageComponent } from './pages/all-products-page/all-products-page.component';
import { UHomeComponent } from './pages/user/home/home.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "admin/home", component: HomeComponent },
  { path: "products", component: ModifyProductComponent },
  { path: "transactions", component: AllTransactionsComponent },
  { path: "account", component: AccountManagementComponent },
  { path: "user/home", component: UHomeComponent},
  { path: "allproducts", component: AllProductsPageComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
