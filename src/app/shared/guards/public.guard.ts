import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PublicGuard implements CanActivate {
  constructor(private router: Router, private loginService: LoginService) {
  }

  canActivate() {
    if (!this.loginService.isLoggedIn()) {
      return true;
    }

    this.router.navigate(['flights/find']).then();
    return false;
  }
}
