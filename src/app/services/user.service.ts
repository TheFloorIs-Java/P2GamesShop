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
    
    return this.http.get<User>("http://p2gamesstore.azurewebsites.net:8080/user/"+ userName);
      

  }
  
  getAllUsers()  : Observable<Array<User>>{
    return this.http.get<User[]>("http://p2gamesstore.azurewebsites.net:8080/users/");
    
  }

  getUserById(id:Number)  : Observable<User>{
    return this.http.get<User>("http://localhost:9000/iceCreamShop/getUserById/" + id);
    
  }

  addUser(userN:String, pass: String, userR : String) : void {
    this.http.post<any>("http://localhost:9000/iceCreamShop/addUser/", 
    {userName:userN, password:pass, userRole:userR}).subscribe(data=>console.log(data));
 }

 deleteUser(id : Number) : Observable<number> {
  return  this.http.get<any>("http://localhost:9000/iceCreamShop/userDeletion/" + id);
 }

  

}