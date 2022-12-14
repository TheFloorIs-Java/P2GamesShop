import { Component, OnInit , Input} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/models/User' ;
import { SecurityService } from 'src/app/services/security.service';
import { Router } from '@angular/router';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input()
  userName : string = "";
  @Input()
  password : string = "";
  //{ id:0,userName:"",password:"",userRole:""} ;
  userlog:any  = null ; 
  userRole:string= "";

  
  constructor( private userSer : UserService, private secService: SecurityService, private router: Router) { }
  userList : Array<User>=[];
  

  ngOnInit(): void {
    this.userSer.getAllUsers().subscribe(data=>this.userList=data);
    this.secService.logOut();
  }

  loginAttempt(): void {
    
   console.log(this.userList);
   console.log(this.userName);
   console.log(this.password);
   console.log(this.userList[0].password);


   let userFound = false;

   for(let i=0; i<this.userList.length; i++) {
    if(this.userName==this.userList[i].username && this.password==this.userList[i].password) {
      console.log("ping");
      this.secService.loggedUser = this.userList[i].username;
      this.secService.loggedID = this.userList[i].id;
      this.secService.loggedFlag = this.userList[i].userRole;
      this.secService.logIn();
      userFound = true;
      if(this.userList[i].userRole=="1") {
        this.router.navigateByUrl('admin/home');
      } else {
        this.router.navigateByUrl('user/home');
      }
    }
   }
   if(!userFound) {
    alert("This account does not exist, please check your credentials and try again.");
   }
  
  }
 
}
