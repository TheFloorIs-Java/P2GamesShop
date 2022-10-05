import { Component, OnInit , Input} from '@angular/core';
import {UserService} from 'src/app/services/user.service';
import {User} from 'src/app/models/User' ;
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

  
  constructor( private userSer : UserService , private _router: Router) { }

  ngOnInit(): void {
    
  }

  getUser(): void {
   
    alert("bbbbb" + this.userName);
    this.userSer.getUser(this.userName,this.password).subscribe(data => { this.userRole = data.userRole;console.log(data)} )
    
    //alert("jhgfhkj " + name );
    //this.userName = this.userlog['userRole'];
    
     
    //this._router.navigate(['/account']);
    

    
  }

 
}
