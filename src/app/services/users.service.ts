import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../models/users';
import { FormsModule } from '@angular/forms';
import { SubscriptionLog } from 'rxjs/internal/testing/SubscriptionLog';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //@Input()
 // userName : string = "";
  //@Input()
  //password : string = "";

  constructor(private http: HttpClient) { 


  }

  getUser( userName:String , password:String) : Observable<users> {
    
    return this.http.get<users>("http://localhost:9000/iceCreamShop/getLogging/"+ userName + "," + password);
      

  }
  
  getAllUsers()  : Observable<Array<users>>{
    return this.http.get<users[]>("http://localhost:9000/iceCreamShop/users/");
    
  }

  getUserById(id:Number)  : Observable<users>{
    return this.http.get<users>("http://localhost:9000/iceCreamShop/getUserById/" + id);
    
  }

  addUser(userN:String, pass: String, userR : String) : void {
    this.http.post<any>("http://localhost:9000/iceCreamShop/addUser/", 
    {userName:userN, password:pass, userRole:userR}).subscribe(data=>console.log(data));
 }

 deleteUser(id : Number) : Observable<number> {
  return  this.http.get<any>("http://localhost:9000/iceCreamShop/userDeletion/" + id);
 }

  

}








