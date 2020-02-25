import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/entities/medecin/medecin.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-medecin-detail',
  templateUrl: './medecin-detail.component.html',
  styleUrls: ['./medecin-detail.component.scss']
})
export class MedecinDetailComponent implements OnInit {

  medecin: Medecin;

  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';
  noImageDoc = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/images-help.png?alt=media&token=059c1b9e-5a4c-4fd7-afa3-8c040de9f401'

  profileOption = 'profile';
  option = '';

  profileForm: FormGroup

  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.initData();
  }


  // affichage des infos
  initData() {
    this.route.paramMap.subscribe(params => {
      this.adherentService.getMedecinByPhoneNumber(params.get('medecin_id')).subscribe(data => {
        this.medecin = data.data() as Medecin
        this.route.paramMap.subscribe(params => {
          this.updateUI(params.get('option'));
        });
      });
    });
  }

  updateUI(option: string) {
    this.option = option;
    if (this.option === this.profileOption) {
      this.profileForm = new FormGroup({
        nom: new FormControl(this.medecin.nomDefamille),
        prenom: new FormControl(this.medecin.prenom),
        categorie: new FormControl(this.medecin.categorieEtablissement),
        email: new FormControl(this.medecin.email),
        commune: new FormControl(this.medecin.communeHospital),
        domaine: new FormControl(this.medecin.domaine),
        etablissement: new FormControl(this.medecin.nomEtablissement),
        personeContact: new FormControl(this.medecin.personneContactName),
        personeContactPhone: new FormControl(this.medecin.personneContactPhone),
        service: new FormControl(this.medecin.serviceMedcin),
        sexe: new FormControl(this.medecin.sexe),
        specialite: new FormControl(this.medecin.specialite),
        ville: new FormControl(this.medecin.ville),
        certificat: new FormControl(this.medecin.certificatDenregistrmDordre)
      });
    }
  }

  generateDescription(): string {
    return 'Description de ' + this.medecin.nomDefamille
  }

  // enable/desable medecin
  enableOrdisacleMedecin(medecin: Medecin, operation: number) {
    if (operation === 1) {
      medecin.profilEnanble = true;
    } else {
      medecin.profilEnanble = false;
    }
    this.updateMedecin(medecin);
  }

  // modification d'un medecin
  updateMedecin(medecin: Medecin) {
    this.adherentService.updateMedecin(medecin);
  }

  // modification d'un medecin
  formatDate(sec: number): string {
    const date = new Date(sec * 1000);
    const dateStr = '' + date.getUTCDay() + '-' + date.getUTCMonth() + '-' + date.getUTCFullYear()
    return dateStr;
  }

  // fonction permettant de changer llelement actif de la dashboard
  setStyle(option: string): string {
    if (option === this.option) {
      return 'nav-item active ';
    } else {
      return 'nav-item ';
    }
  }

}
