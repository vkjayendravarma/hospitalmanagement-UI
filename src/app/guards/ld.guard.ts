import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LdGuard implements CanActivate {
  constructor( private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let token = window.localStorage.getItem('token') 
      let role = token.substring(token.length - 2); 
      if( role == 'AD' || role == 'LD' ) return true
      this.router.navigateByUrl('user/pagenotfound')
    return false;
  }
  
}
