import { Injectable } from '@angular/core';
import { AuthentificationDAO } from './AuthentificationDAO';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationServiceService implements AuthentificationInterface {
  getUserConnected() {
    return this.authDAO.canActivate();
  }
  createNewUser(email: string, password: string) {
    return this.authDAO.createUser(email, password);
  }
  signInUser(email: string, password: string) {
    return this.authDAO.signIn(email, password);
  }
  signOutUser() {
    return this.authDAO.signOut();
  }

  constructor(private authDAO: AuthentificationDAO) { }
}
