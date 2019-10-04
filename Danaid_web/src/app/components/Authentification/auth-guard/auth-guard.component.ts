import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.scss']
})
export class AuthGuardComponent implements OnInit {

  constructor(
    private firebase: FirebaseApp,
    private router: Router
  ) { }

  ngOnInit() {
    this.verifyUserCresidencial();
  }

  verifyUserCresidencial() {
    this.firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          // connexion du user
          console.log(user);
          this.router.navigate(['/dashboad']);
        } else {
          // echec de connexion
          this.router.navigate(['/authentification']);
        }
      }
    );
  }

}
