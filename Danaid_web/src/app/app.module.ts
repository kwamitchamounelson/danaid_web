import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

// Angular Material
import { MatCheckboxModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardComponent } from './components/Administration/dashboard/dashboard.component';
import { UsersProfilesComponent } from './components/Administration/user/users-profiles/users-profiles.component';
import { FooterComponent } from './static-elements/footer/footer.component';
import { NavBarComponent } from './static-elements/nav-bar/nav-bar.component';
import { AdherentComponent } from './components/Administration/adherent/adherent.component';
import { FacturationComponent } from './components/Administration/detail/facturation/facturation.component';
import { ChangeBackgroundComponent } from './static-elements/change-background/change-background.component';
import { MainComponent } from './components/Administration/main/main.component';

// add angular module
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SignInUserComponent } from './components/Authentification/sign-in-user/sign-in-user.component';
import { AuthGuardComponent } from './components/Authentification/auth-guard/auth-guard.component';
import { UserDetailComponent } from './components/Administration/user/user-detail/user-detail.component';
import { ModalComponent } from './components/Administration/user/modal/modal.component';
import { AdherentProfileComponent } from './components/Administration/profiles/adherent-profile/adherent-profile.component';
import { SponsorProfileComponent } from './components/Administration/profiles/sponsor-profile/sponsor-profile.component';
import { MdfProfileComponent } from './components/Administration/profiles/mdf-profile/mdf-profile.component';
import { SponsorComponent } from './components/Administration/sponsor/sponsor.component';
import { BeneficiaireComponent } from './components/Administration/detail/beneficiaire/beneficiaire.component';
import { DetailAdherentComponent } from './components/Administration/detail-adherent/detail-adherent.component';
import { AllFacturationComponent } from './components/Administration/all-facturation/all-facturation.component';
import { DataEntityComponent } from './components/Administration/detail/data-entity/data-entity.component';

// 2. Add your credentials from step 1
const config = {
  apiKey: 'AIzaSyCDuAOSaTTSA7qbfn1MqpVHr9GoFsci1Ts',
  authDomain: 'danaidapp.firebaseapp.com',
  databaseURL: 'https://danaidapp.firebaseio.com',
  projectId: 'danaidapp',
  storageBucket: 'danaidapp.appspot.com',
  messagingSenderId: '907608334806',
  appId: '1:907608334806:web:562737e087aab291458477'
};


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersProfilesComponent,
    FooterComponent,
    NavBarComponent,
    AdherentComponent,
    FacturationComponent,
    ChangeBackgroundComponent,
    MainComponent,
    SignInUserComponent,
    AuthGuardComponent,
    UserDetailComponent,
    ModalComponent,
    AdherentProfileComponent,
    SponsorProfileComponent,
    MdfProfileComponent,
    SponsorComponent,
    BeneficiaireComponent,
    DetailAdherentComponent,
    AllFacturationComponent,
    DataEntityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),

    // Initialize firebase
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    // AngularFirestoreCollection, // firestoreCollection
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage


    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
