import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  loggedUser : string="";
  loggedID : number=0;

  private verified : boolean;

  constructor(private router : Router) { 
    this.verified = false;
  }

  logIn() : void {
    this.verified = true;
  }

  logOut() : void {
    this.verified = false;
  }

  securityCheck() : boolean {
    return this.verified;
  }

  fullCheck() : void {
    if(!this.securityCheck()) {
      alert("You must be logged in to view this page.");
      this.router.navigateByUrl("login");
    }
  }
}
