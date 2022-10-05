import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { FormsModule } from '@angular/forms';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  //@Input()
 // userName : string = "";
  //@Input()
  //password : string = "";

  constructor(private http: HttpClient) { 


  }

  getUser( userName:String) : Observable<User> {
    
    return this.http.get<User>("http://p2gamesstore.azurewebsites.net/user/"+ userName);
      

  }
  
  getAllUsers()  : Observable<Array<User>>{
    return this.http.get<Array<User>>("http://p2gamesstore.azurewebsites.net/users/");
    
  }

  getUserById(id:Number)  : Observable<User>{
    return this.http.get<User>("http://p2gamesstore.azurewebsites.net/users/id/" + id);
    
  }

  addUser(userN:String, pass: String, userR : String) : void {
    console.log(userN);
    this.http.post<any>("http://p2gamesstore.azurewebsites.net/users", 
    {username:userN, password:pass, userRole:userR}).subscribe(() => console.log("user added"));
 }

 deleteUser(id:Number)  {
  console.log(id);
  return this.http.delete("http://p2gamesstore.azurewebsites.net/users/delete/" + id);
 }

  

}