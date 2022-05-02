import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class GuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): any {
    return true;
    return this.authService.isAuthenticated().then((user) => {
      if (user) {
        return true;
      } else {
        const entrypoint = route.url.join('/');
        this.authService.setLastEntryPoint(entrypoint);
        return this.router.navigate(['login']);
      }
    });
  }
}
