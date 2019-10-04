import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/Administration/main/main.component';
import { SignInUserComponent } from './components/Authentification/sign-in-user/sign-in-user.component';
import { AuthGuardComponent } from './components/Authentification/auth-guard/auth-guard.component';


const routes: Routes = [
  { path: 'auth-guard', component: AuthGuardComponent },
  { path: 'authentification', component: SignInUserComponent },
  { path: 'dashboad', component: MainComponent },
  { path: '', redirectTo: '/auth-guard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
