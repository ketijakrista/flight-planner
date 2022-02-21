import { Injectable } from '@angular/core';
import { LoginQuery } from '../models/login.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private toastr: ToastrService) {
  }

  async login(query: LoginQuery): Promise<void> {
    if(query.username === 'codelex-admin' && query.password === 'Password1234') {
      const adminDetails = query.username + ':' + query.password;
      localStorage.setItem('admin', adminDetails);
      await this.router.navigate(['flights/find']);
    } else {
      this.toastr.warning('Login unsuccessful. You are not an admin!')
    }
  }

  async logout(): Promise<void> {
    localStorage.removeItem('admin');
    await this.router.navigate(['flights/search']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('admin');
  }
}
