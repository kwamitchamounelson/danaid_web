import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/entities/adherent.model';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-detail-adherent',
  templateUrl: './detail-adherent.component.html',
  styleUrls: ['./detail-adherent.component.scss']
})
export class DetailAdherentComponent implements OnInit {

  adherent: Adherent;
  //facturationList: Facturation[] = [];
  //beneficiaireList: Beneficiaire[] = [];

  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';
  noImageDoc = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/images-help.png?alt=media&token=059c1b9e-5a4c-4fd7-afa3-8c040de9f401'

  profileOption = 'profile';
  beneficiaireOption = 'beneficiaire'
  facturationOption = 'facturation'
  option = ''

  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.initData();
  }


  // affichage des infos
  initData() {
    this.route.paramMap.subscribe(params => {
      this.adherentService.getAdherentByPhoneNumber(params.get('adherent_id')).subscribe(data => {
        this.adherent = data.data() as Adherent
        this.route.paramMap.subscribe(params => {
          this.updateUI(params.get('option'));
        });
      });
    });
  }

  updateUI(option: string) {
    this.option = option;
  }

  generateDescription(): string {
    return 'Description de ' + this.adherent.nomFamille
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

  // modification d'un adherent
  updateAdherent(adherent: Adherent) {
    this.adherentService.updateAdherent(adherent);
  }

  // modification d'un adherent
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
