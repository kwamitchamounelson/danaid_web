import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  titleMenu = 'Danaid';
  num: number;
  constructor(
    private firebase: FirebaseApp,
    private router: Router,
    private route: ActivatedRoute
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
          this.route.paramMap.subscribe(params => {
            this.num = Number.parseInt(params.get('page_id'))
          });
        } else {
          // echec de connexion
          this.router.navigate(['/authentification']);
        }
      }
    );
  }

  // fonction qui permet de chager les donner lorsquon selection un element du menu
  loadData(numero: number) {
    this.router.navigate(['/dashboad', numero]);
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
