import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/services/admin/admin.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private adminService: AdminService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const url: string = state.url;
    return this.checkAdmin(url);
  }

  checkAdmin(url: string): true | UrlTree {
    if (this.adminService.isAdmin()) return true;

    // Store the attempted URL for redirecting
    this.adminService.redirectUrl = url;

    // Redirect to the accueil page
    return this.router.parseUrl('/accueil');
  }
  
}
