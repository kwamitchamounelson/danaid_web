import { Component, OnInit } from '@angular/core';
import { Facturation } from 'src/app/entities/facturation/facturation.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { FacturationNotId } from 'src/app/entities/facturationNotId/facturation-not-id.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-facturation',
  templateUrl: './update-facturation.component.html',
  styleUrls: ['./update-facturation.component.scss']
})
export class UpdateFacturationComponent implements OnInit {

  facturation: Facturation = new Facturation();
  id: string = "";

  etatValidOptions = [
    { value: true, label: 'Valide' },
    { value: false, label: 'Invalide' }
  ];


  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';
  noImageDoc = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/images-help.png?alt=media&token=059c1b9e-5a4c-4fd7-afa3-8c040de9f401'

  infosForm: FormGroup

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private adherentService: AdherentService
  ) { }

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
        this.updateUI(fact);
      });
    });
  }

  updateUI(fact: Facturation) {
    this.facturation = fact;
    this.initForm();
  }

  getDateValid(data: any): any {
    if (data !== null) {
      return new Date((data.seconds) * 1000);
    }
    return '';
  }

  initForm() {
    try {
      this.infosForm = new FormGroup({
        categoriePaiement: new FormControl(this.facturation.categoriePaiement),
        dateDebutCouvertureAdherent: new FormControl(this.getDateValid(this.facturation.dateDebutCouvertureAdherent)),
        dateFinCouvertureAdherent: new FormControl(this.getDateValid(this.facturation.dateFinCouvertureAdherent)),
        dateReglementDuPaiement: new FormControl(this.getDateValid(this.facturation.dateReglementDuPaiement)),
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


  get statut() {
    return this.infosForm.get('statut');
  }
  get paiementEffactuerViaInscription() {
    return this.infosForm.get('paiementEffactuerViaInscription');
  }
  get numeroRecu() {
    return this.infosForm.get('numeroRecu');
  }
  get niveauCotisation() {
    return this.infosForm.get('niveauCotisation');
  }
  get nbPersonneSupplement() {
    return this.infosForm.get('nbPersonneSupplement');
  }
  get montant() {
    return this.infosForm.get('montant');
  }
  get intitule() {
    return this.infosForm.get('intitule');
  }
  get etatValider() {
    return this.infosForm.get('etatValider');
  }
  get dateReglementDuPaiement() {
    return this.infosForm.get('dateReglementDuPaiement');
  }
  get dateFinCouvertureAdherent() {
    return this.infosForm.get('dateFinCouvertureAdherent');
  }
  get dateDebutCouvertureAdherent() {
    return this.infosForm.get('dateDebutCouvertureAdherent');
  }
  get categoriePaiement() {
    return this.infosForm.get('categoriePaiement');
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

  getBoolean(data: any): boolean {
    if (('' + data) === 'true') {
      return true
    }
    return false
  }

  convertDate(dateDate: any): Date {
    if (dateDate._d !== undefined) {
      return dateDate._d
    }
    return dateDate
  }

  saveModification() {
    const fact = this.facturation;

    //date properties
    fact.dateDebutCouvertureAdherent = this.convertDate(this.infosForm.get('dateDebutCouvertureAdherent').value)
    fact.dateFinCouvertureAdherent = this.convertDate(this.infosForm.get('dateFinCouvertureAdherent').value)
    fact.dateReglementDuPaiement = this.convertDate(this.infosForm.get('dateReglementDuPaiement').value)

    //boolean properties
    fact.etatValider = this.getBoolean(this.infosForm.get('etatValider').value)
    fact.paiementEffactuerViaInscription = this.getBoolean(this.infosForm.get('paiementEffactuerViaInscription').value)


    fact.intitule = this.infosForm.get('intitule').value;
    fact.montant = this.infosForm.get('montant').value;
    fact.nbPersonneSupplement = this.infosForm.get('nbPersonneSupplement').value;
    fact.niveauCotisation = this.infosForm.get('niveauCotisation').value;
    fact.numeroRecu = this.infosForm.get('numeroRecu').value;
    fact.statut = this.infosForm.get('statut').value;
    fact.categoriePaiement = this.infosForm.get('categoriePaiement').value;

    this.updateFacturation(fact)
  }

  updateFacturation(fact: Facturation) {
    this.adherentService.updateFacturation(fact)
      .then(success => {
        this.toastr.success('Modification effectuée avec succes', 'Success', {
          timeOut: 2000
        });
      }).catch(error => {
        this.toastr.error('Erreur de modification', 'Error', {
          timeOut: 2000
        });
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
