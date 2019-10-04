import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationServiceService } from 'src/app/services/auth/authentification-service.service';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.scss']
})
export class SignInUserComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string;
  authStatu = 1;
  invalideAuthentification = false;
  labelConnexion = 'Se connecter';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificationServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.personalizeUI(1);
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;

    if (this.authStatu === 1) {
      // cas de la connection
      this.authService.signInUser(email, password).then(
        (succes) => {
          this.router.navigate(['/auth-guard']);
        },
        (error) => {
          this.showFailedAuthentification(true);
        }
      );
    } else {
      // cas de la creation de compte
      this.authService.createNewUser(email, password).then(
        (succes) => {
          this.router.navigate(['/auth-guard']);
        },
        (error) => {
          this.showFailedAuthentification(true);
        }
      );
    }
  }

  // message d'erreur en cas dechec d'authentification
  showFailedAuthentification(isValidate: boolean) {
    this.invalideAuthentification = isValidate;
  }

  personalizeUI(statu: number) {
    this.authStatu = statu;
    if (this.authStatu === 1) {
      // mode connexion
      this.labelConnexion = 'Se connecter';
    } else {
      // mode authentification
      this.labelConnexion = 'Créer un compte';
    }
    this.showFailedAuthentification(false);
  }

  inverseLabel(): string {
    if (this.authStatu === 2) {
      // mode connexion
      return 'Se connecter';
    } else {
      // mode authentification
      return 'Créer un compte';
    }
  }

  setActiveStatu(statu: number): string {
    if (this.authStatu === statu) {
      return 'active';
    } else {
      return 'unactive';
    }
  }

  inversedUI() {
    if (this.authStatu === 1) {
      this.personalizeUI(2);
    } else {
      this.personalizeUI(1);
    }
  }

}
