import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
  }

  isLoggedIn(bool: boolean) {
    localStorage.setItem('auth', String(bool));
    return bool;
  }

  checkLogin() {
    const auth = localStorage.getItem('auth');
    return JSON.parse(auth);
  }

  isAdmin(role) {
    if (role === 'admin') {
      localStorage.setItem('admin', 'true');
    }
  }

  checkAdmin() {
    const  admin = localStorage.getItem('admin');
    return JSON.parse(admin);
  }
}
