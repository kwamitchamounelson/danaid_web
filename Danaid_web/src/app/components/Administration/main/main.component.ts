import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  titleMenu = 'Danaid';
  num = 3;
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
          this.loadData(this.num);
        } else {
          // echec de connexion
          this.router.navigate(['/authentification']);
        }
      }
    );
  }

  // fonction qui permet de chager les donner lorsquon selection un element du menu
  loadData(numero: number) {
    this.num = numero;
  }

  // fonction permettant de changer llelement actif de la dashboard
  setStyle(elementNumber: number): string {
    if (elementNumber === this.num) {
      return 'nav-item active ';
    } else {
      return 'nav-item ';
    }
  }

}
