import { Component, OnInit } from '@angular/core';
import { Facturation } from 'src/app/entities/facturation/facturation.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { FacturationNotId } from 'src/app/entities/facturationNotId/facturation-not-id.model';

@Component({
  selector: 'app-update-facturation',
  templateUrl: './update-facturation.component.html',
  styleUrls: ['./update-facturation.component.scss']
})
export class UpdateFacturationComponent implements OnInit {

  facturation: Facturation;
  id: string = "";

  etatValidOptions = [
    { value: true, label: 'Valide' },
    { value: false, label: 'Invalide' }
  ];


  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';
  noImageDoc = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/images-help.png?alt=media&token=059c1b9e-5a4c-4fd7-afa3-8c040de9f401'

  infosForm: FormGroup

  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    //this.initForm();
    this.initData();
  }


  // affichage des infos
  initData() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.adherentService.getFacturationById(this.id).subscribe(data => {
        const fact = data.data() as Facturation;
        fact.id = this.id;
        console.log(fact);
        this.updateUI(fact);
      });
    });
  }

  updateUI(fact: Facturation) {
    this.facturation = fact;
    this.initForm();
  }

  initForm() {
    try {
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
    } catch (error) {

    }
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
    fact.etatValider = this.formatBoolean('' + this.infosForm.value.etatValider);
    fact.intitule = this.infosForm.value.intitule;
    fact.montant = this.infosForm.value.montant;
    fact.nbPersonneSupplement = this.infosForm.value.nbPersonneSupplement;
    fact.niveauCotisation = this.infosForm.value.niveauCotisation;
    fact.numeroRecu = this.infosForm.value.numeroRecu;
    fact.paiementEffactuerViaInscription = this.formatBoolean('' + this.infosForm.value.paiementEffactuerViaInscription);
    fact.statut = this.infosForm.value.statut;

    fact.categoriePaiement = this.facturation.categoriePaiement;
    fact.dateDebutCouvertureAdherent = this.facturation.dateDebutCouvertureAdherent;
    fact.dateFinCouvertureAdherent = this.facturation.dateFinCouvertureAdherent;
    fact.dateReglementDuPaiement = this.facturation.dateReglementDuPaiement;
    fact.idAdherent = this.facturation.idAdherent;
    fact.id = this.id;
    this.updateFacturation(fact)
  }

  updateFacturation(factcustom: Facturation) {
    const fact = new FacturationNotId();
    fact.etatValider = factcustom.etatValider;
    fact.intitule = factcustom.intitule;
    fact.montant = factcustom.montant;
    fact.nbPersonneSupplement = factcustom.nbPersonneSupplement;
    fact.niveauCotisation = factcustom.niveauCotisation;
    fact.numeroRecu = factcustom.numeroRecu;
    fact.paiementEffactuerViaInscription = factcustom.paiementEffactuerViaInscription;
    fact.statut = factcustom.statut;
    fact.categoriePaiement = factcustom.categoriePaiement;
    fact.dateDebutCouvertureAdherent = factcustom.dateDebutCouvertureAdherent;
    fact.dateFinCouvertureAdherent = factcustom.dateFinCouvertureAdherent;
    fact.dateReglementDuPaiement = factcustom.dateReglementDuPaiement;
    fact.idAdherent = factcustom.idAdherent;

    this.adherentService.updateFacturation(fact, this.id).then(success => {
      this.facturation = factcustom;
      console.log(fact);
    });
  }

  formatBoolean(value: string): boolean {
    if (value === 'true') {
      return true;
    } else {
      return false;
    }
  }

}
