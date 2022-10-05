import { Component, OnInit, Input } from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/models/User' ;
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  userName : string = "";
  @Input()
  password : string = "";
  userRole : string = "";

  constructor(private userSer : UserService, private router: Router) {}
  userList : Array<User>=[];

  ngOnInit(): void {
    this.userSer.getAllUsers().subscribe(data=>this.userList=data);
  }

  registerAttempt(): void {
    let userExists : boolean = false;
    for(let i=0; i<this.userList.length; i++) {
      if(this.userName==this.userList[i].username) {
        userExists = true;
        alert("Sorry, this username is already taken, try something else.");
      }
      }
      if(!userExists) {
        this.userSer.addUser(this.userName, this.password, "0");
        alert("New account created! Try logging in now.");
        this.router.navigateByUrl('login');
        

  }

}
}