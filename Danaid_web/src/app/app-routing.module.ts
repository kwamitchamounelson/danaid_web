import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/Administration/main/main.component';
import { SignInUserComponent } from './components/Authentification/sign-in-user/sign-in-user.component';
import { AuthGuardComponent } from './components/Authentification/auth-guard/auth-guard.component';
import { BeneficiaireComponent } from './components/Administration/detail/beneficiaire/beneficiaire.component';
import { FacturationComponent } from './components/Administration/detail/facturation/facturation.component';
import { DetailAdherentComponent } from './components/Administration/detail-adherent/detail-adherent.component';


const routes: Routes = [
  { path: 'auth-guard', component: AuthGuardComponent },
  { path: 'authentification', component: SignInUserComponent },
  { path: 'dashboad', component: MainComponent },
  { path: 'beneficiaire/:adherent_id', component: BeneficiaireComponent },
  { path: 'facturation_adherent/:adherent_id', component: FacturationComponent },
  { path: 'detail_adherent/:adherent_id/:option', component: DetailAdherentComponent },
  { path: '', redirectTo: '/auth-guard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
