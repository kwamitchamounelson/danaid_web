import { Injectable } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationDAO {
  constructor(private firebase: FirebaseApp) { }

  // create new user
  createUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.firebase.auth().createUserWithEmailAndPassword(email, password).then(
          (succes) => {
            resolve(succes);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // sign in user
  signIn(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        this.firebase.auth().signInWithEmailAndPassword(email, password).then(
          (succes) => {
            resolve(succes);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // sign out user
  signOut() {
    return this.firebase.auth().signOut();
  }

  // getUserConnected
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise(
      (resolve, reject) => {
        this.firebase.auth().onAuthStateChanged(
          (user) => {
            if (user) {
              resolve(true);
            } else {
              resolve(false);
            }
          }
        );
      }
    );
  }

}
