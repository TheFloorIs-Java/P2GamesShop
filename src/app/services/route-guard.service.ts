import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor( private router: Router, private secservice: SecurityService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    throw new Error('Method not implemented.');

    if(!this.secservice.securityCheck()) {
      alert("Please login to continue.");
      this.router.navigateByUrl('');
      return false;
    }
    return true;
  }
}
