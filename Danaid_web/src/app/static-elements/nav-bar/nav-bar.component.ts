import { Component, OnInit } from '@angular/core';
import { Constant } from '../../services/Constant';
import { Router } from '@angular/router';
import { AuthentificationServiceService } from 'src/app/services/auth/authentification-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthentificationServiceService
  ) { }

  ngOnInit() {
  }

  // deconnexion du user
  signOutUser() {
    this.authService.signOutUser().then(
      () => {
        this.router.navigate(['/auth-guard']);
      }
    );
  }

}
