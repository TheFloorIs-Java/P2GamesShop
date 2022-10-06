import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AllProductsPageComponent } from './pages/all-products-page/all-products-page.component';
import { ModifyProductComponent } from './pages/modify-product/modify-product.component';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { RegisterComponent } from './pages/register/register.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UhomeComponent } from './pages/user/uhome/uhome.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTransactionsComponent,
    TransactionViewComponent,
    TransactionListComponent,
    LoginComponent,
    AccountManagementComponent,
    TopnavComponent,
    HomeComponent,
    RegisterComponent,
    ProductCardComponent,
    AllProductsPageComponent,
    ModifyProductComponent,
    UsernavComponent,
    UhomeComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient,
    HttpClientModule,
    HttpResponse
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
