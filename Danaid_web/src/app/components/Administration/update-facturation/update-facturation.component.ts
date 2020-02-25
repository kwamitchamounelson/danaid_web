import { Component, OnInit } from '@angular/core';
import { Facturation } from 'src/app/entities/facturation/facturation.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-update-facturation',
  templateUrl: './update-facturation.component.html',
  styleUrls: ['./update-facturation.component.scss']
})
export class UpdateFacturationComponent implements OnInit {

  facturation: Facturation;

  facturationList: Facturation[] = [];

  etatValidOptions = [
    { value: true, label: 'Valide' },
    { value: false, label: 'Invalide' }
  ];


  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';
  noImageDoc = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/images-help.png?alt=media&token=059c1b9e-5a4c-4fd7-afa3-8c040de9f401'

  infosForm: FormGroup

  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.initData();
  }


  // affichage des infos
  initData() {
    this.route.paramMap.subscribe(params => {
      //a modifier
      this.adherentService.getAllFacturationsOfAdherent(params.get('id')).subscribe(data => {
        this.facturationList = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Facturation;
        });
        if (this.facturationList.length !== 0) {
          this.facturation = this.facturationList[0];
          this.updateUI();
        }
      });
    });
  }

  updateUI() {
    this.infosForm = new FormGroup({
      categoriePaiement: new FormControl(this.facturation.categoriePaiement),
      dateDebutCouvertureAdherent: new FormControl(this.facturation.dateDebutCouvertureAdherent),
      dateFinCouvertureAdherent: new FormControl(this.facturation.dateFinCouvertureAdherent),
      dateReglementDuPaiement: new FormControl(this.facturation.dateReglementDuPaiement),
      etatValider: new FormControl(this.facturation.etatValider),
      intitule: new FormControl(this.facturation.intitule),
      montant: new FormControl(this.facturation.montant),
      nbPersonneSupplement: new FormControl(this.facturation.nbPersonneSupplement),
      niveauCotisation: new FormControl(this.facturation.niveauCotisation),
      numeroRecu: new FormControl(this.facturation.numeroRecu),
      paiementEffactuerViaInscription: new FormControl(this.facturation.paiementEffactuerViaInscription),
      statut: new FormControl(this.facturation.statut),
    });
  }

  // modification d'un adherent
  formatDate(sec: number): string {
    const date = new Date(sec * 1000);
    const dateStr = '' + date.getUTCDay() + '-' + date.getUTCMonth() + '-' + date.getUTCFullYear()
    return dateStr;
  }

  formatEtatDevalidite(isValide: boolean): string {
    if (isValide) {
      return 'valide';
    } else {
      return 'invalide'
    }
  }

  saveModification() {
    const fact = new Facturation();
    fact.categoriePaiement = this.infosForm.value.categoriePaiement
    fact.etatValider = this.infosForm.value.etatValider
    fact.intitule = this.infosForm.value.intitule
    fact.montant = this.infosForm.value.montant
    fact.nbPersonneSupplement = this.infosForm.value.nbPersonneSupplement
    fact.niveauCotisation = this.infosForm.value.niveauCotisation
    fact.numeroRecu = this.infosForm.value.numeroRecu
    fact.paiementEffactuerViaInscription = this.infosForm.value.paiementEffactuerViaInscription
    fact.statut = this.infosForm.value.statut

    fact.dateDebutCouvertureAdherent = this.facturation.dateDebutCouvertureAdherent
    fact.dateFinCouvertureAdherent = this.facturation.dateFinCouvertureAdherent
    fact.dateReglementDuPaiement = this.facturation.dateReglementDuPaiement
    fact.idAdherent = this.facturation.idAdherent

    console.log(fact);
  }

}
