import { Component, OnInit } from '@angular/core';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Adherent } from 'src/app/entities/adherent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adherent',
  templateUrl: './adherent.component.html',
  styleUrls: ['./adherent.component.scss']
})
export class AdherentComponent implements OnInit {

  adherentList: Adherent[] = [];
  constructor(private adherentService: AdherentService) { }
  validatingForm: FormGroup;
  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
    this.loadData();
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  // chargement des donnees
  loadData() {
    this.adherentList = [];
    this.adherentService.getAllAdherent().subscribe(data => {
      this.adherentList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Adherent;
      });
    });
  }

  // enable/desable adherent
  enableOrdisacleAdherent(adherent: Adherent, operation: number) {
    if (operation === 1) {
      adherent.profilEnabled = true;
    } else {
      adherent.profilEnabled = false;
    }
    this.updateAdherent(adherent);
  }

  // creation d'un adherent
  createNewAdherent(adherent: Adherent) {
    this.adherentService.creatAdherent(adherent);
  }

  // modification d'un adherent
  updateAdherent(adherent: Adherent) {
    this.adherentService.updateAdherent(adherent);
  }

  // suppression d'un adherent
  deleteAdherent(adherent: Adherent) {
    this.adherentService.deleteAdherent('' + adherent.phoneList[0].number);
  }

  // a supprimer
  testCreateAdherent() {
    const ran = Math.random() * 10000;
    const aderent = new Adherent();
    aderent.adresse = 'adress' + ran;
    aderent.commune = 'commune' + ran;
    aderent.createdDate = new Date(Date.now());
    aderent.dateNaissance = new Date(Date.now());
    aderent.emailAdresse = 'email' + ran;
    aderent.fullName = 'name' + ran;
    aderent.imageUrl = 'imageURL' + ran;
    aderent.isRecptionPaiementMobile = true;
    aderent.nombreEnfant = 0;
    aderent.profession = 'profession' + ran;
    aderent.profil = 'profile' + ran;
    aderent.profilEnabled = false;
    aderent.protectionLevel = 1;
    aderent.statuMatrimonialMarie = false;
    aderent.urlDocOficiel = 'urlDoc' + ran;

    // phone number
    aderent.phoneList = [{
      number: ran,
      operator: 'ORANGE',
      receptionPayement: true
    }];
    // [1, 2, 3, 4, 5, 6, 7, 8].forEach(element => {
    //  this.adherentList.push(aderent);
    // });
    this.createNewAdherent(aderent);
  }

}
