import { Component, Input, OnInit } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';
import {User} from 'src/app/models/User' ;
import {  VERSION, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-account-management',
  templateUrl: './account-management.component.html',
  styleUrls: ['./account-management.component.scss']
})
export class AccountManagementComponent implements OnInit {
  idNum : number = 0;
  @Input()
  userName:string = "";
  password:string = "";
  userRole:string = "";
  idNumber : number = 0;
  isValid : boolean = false  ;
  userArray : Array<User> = [];
   //usersCom : any = document.getElementById('users');
   //nameInput : any = document.getElementById('userName');
   id : any = [];
   selectedValue:any;
   
   
  constructor(private userSer : UsersService) { }

  ngOnInit(): void {
    this.isValid= true;
    this.getAllUsers();
   // this.userSer.getAllUsers().subscribe(data => {this.userArray = data; console.log(this.userArray[0].userName);});
    //alert( this.userArray[0].userName)

    
  }

  getUserById() : void {
    
    //this.id = 1;
   //id : this.usersCom.options[this.usersCom.selectedIndex].value;
    this.userSer.getUserById(this.selectedValue).subscribe(data=> {this.idNumber = data.id, this.userName = data.userName, this.password = data.password , this.userRole = data.userRole; console.log()});
   alert(this.userName);
  }


  addUser()  : void {
    this.isValid= false;
    this.userSer.addUser(this.userName, this.password,this.userRole);

    this.clearUserInputs();
    this.getAllUsers();
  }

  deleteUser() : void {
    alert("jhklgjflk  " + this.selectedValue );
   this.userSer.deleteUser(this.selectedValue).subscribe(data => {this.idNum = data}) ;
    this.clearUserInputs();
  }

  clearUserInputs() : void {
    this.idNumber  =  0;
    this.userName = "";
    this.password  = "";
    this.userRole = "";
 }

 getAllUsers() : void {
  this.isValid= false;
  this.userSer.getAllUsers().subscribe(data => {this.userArray = data; console.log(this.userArray[0].userName);});
  this.isValid= true;
 }

  

}