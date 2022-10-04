import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  loggedUser : string="";
  loggedID : number=0;

  private verified : boolean;

  constructor() { 
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
}
