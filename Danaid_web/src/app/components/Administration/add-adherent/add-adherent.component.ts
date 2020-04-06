import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/entities/adherent.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { ToastrService } from 'ngx-toastr';
import { Telephone } from 'src/app/entities/telephone.model';

@Component({
  selector: 'app-add-adherent',
  templateUrl: './add-adherent.component.html',
  styleUrls: ['./add-adherent.component.scss']
})
export class AddAdherentComponent implements OnInit {

  profileForm: FormGroup
  toasTime = 3000
  constructor(
    private route: ActivatedRoute,
    private adherentService: AdherentService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.updateUI();
  }

  updateUI() {
    this.profileForm = new FormGroup({
      matricule: new FormControl(''),
      telephone: new FormControl(''),
      nomFamille: new FormControl(''),
      prenom: new FormControl(''),
      adresse: new FormControl(''),
      emailAdress: new FormControl(''),
      regionDorigione: new FormControl(''),
      profession: new FormControl(''),
      ville: new FormControl(''),
      genre: new FormControl('M'),
      nombreEnfant: new FormControl(0),
      profil: new FormControl('ADHERENT'),
      statuMatrimonialMarie: new FormControl(false),
      protectionLevel: new FormControl(1),
      createdDate: new FormControl(new Date(Date.now())),
      dateNaissance: new FormControl(new Date(Date.now())),
      datFinvalidite: new FormControl(new Date(Date.now()))
    });
  }

  convertDate(dateDate: any): Date {
    if (dateDate._d !== undefined) {
      return dateDate._d
    }
    return dateDate
  }

  construcPhoneListe(data: string): Telephone[] {
    return [{
      number: data,
      operator: this.getOperatorOfPhone(data),
      receptionPayement: true
    }];
  }

  getOperatorOfPhone(phone: string): string {
    //TODO
    return 'ORANGE'
  }

  generateMatricule(data: string): string {
    if (data.length === 0) {
      //TODO
      return '' + (Math.random() * 50000)
    }
    return data
  }

  generateGenre(data: string): string {
    if (data.toLocaleLowerCase() !== 'M'.toLocaleLowerCase()) {
      return 'F'
    }
    return data
  }

  getBoolean(data: any): boolean {
    if (('' + data).toLocaleLowerCase() === 'true'.toLocaleLowerCase()) {
      return true
    }
    return false
  }

  validPhone(phone: string): boolean {
    if ((phone.length !== 0) && (phone.length >= 10) && (phone.lastIndexOf('+') === 0) && ('' + (Number.parseInt(phone.substr(1))) === phone.substr(1))) {
      return true
    }
    return false
  }

  saveAdherent() {
    const phone = this.profileForm.get('telephone').value

    if (this.validPhone(phone)) {
      const aderent = new Adherent()

      //date properties
      aderent.datFinvalidite = this.convertDate(this.profileForm.get('datFinvalidite').value)
      aderent.dateNaissance = this.convertDate(this.profileForm.get('dateNaissance').value)
      aderent.createdDate = this.convertDate(this.profileForm.get('createdDate').value)

      //boolean properties
      aderent.statuMatrimonialMarie = this.getBoolean(this.profileForm.get('statuMatrimonialMarie').value)

      aderent.protectionLevel = this.profileForm.get('protectionLevel').value
      aderent.profil = this.profileForm.get('profil').value
      aderent.nombreEnfant = this.profileForm.get('nombreEnfant').value
      aderent.genre = this.generateGenre(this.profileForm.get('genre').value)
      aderent.ville = this.profileForm.get('ville').value
      aderent.profession = this.profileForm.get('profession').value
      aderent.regionDorigione = this.profileForm.get('regionDorigione').value
      aderent.emailAdress = this.profileForm.get('emailAdress').value
      aderent.adresse = this.profileForm.get('adresse').value
      aderent.prenom = this.profileForm.get('prenom').value
      aderent.nomFamille = this.profileForm.get('nomFamille').value
      aderent.matricule = this.generateMatricule(this.profileForm.get('matricule').value)
      aderent.phoneList = this.construcPhoneListe(phone)
      aderent.id = phone

      aderent.isRecptionPaiementMobile = true

      this.addNewAdherent(aderent)
    } else {
      this.toastr.error('Numero de telephone incorrect', 'Error', {
        timeOut: this.toasTime
      });
    }

  }

  addNewAdherent(adherent: Adherent) {
    this.adherentService.creatAdherent(adherent);
    this.toastr.success('Adherent crée', 'Success', {
      timeOut: this.toasTime
    });
    this.router.navigate(['/dashboad', 3]);
  }

  get datFinvalidite() {
    return this.profileForm.get('datFinvalidite');
  }
  get dateNaissance() {
    return this.profileForm.get('dateNaissance');
  }
  get createdDate() {
    return this.profileForm.get('createdDate');
  }
  get protectionLevel() {
    return this.profileForm.get('protectionLevel');
  }
  get statuMatrimonialMarie() {
    return this.profileForm.get('statuMatrimonialMarie');
  }
  get profil() {
    return this.profileForm.get('profil');
  }
  get nombreEnfant() {
    return this.profileForm.get('nombreEnfant');
  }
  get genre() {
    return this.profileForm.get('genre');
  }
  get ville() {
    return this.profileForm.get('ville');
  }
  get profession() {
    return this.profileForm.get('profession');
  }
  get regionDorigione() {
    return this.profileForm.get('regionDorigione');
  }
  get emailAdress() {
    return this.profileForm.get('emailAdress');
  }
  get adresse() {
    return this.profileForm.get('adresse');
  }
  get prenom() {
    return this.profileForm.get('prenom');
  }
  get nomFamille() {
    return this.profileForm.get('nomFamille');
  }
  get telephone() {
    return this.profileForm.get('telephone');
  }
  get matricule() {
    return this.profileForm.get('matricule');
  }

}
