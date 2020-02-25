import { Component, OnInit } from '@angular/core';
import { Medecin } from 'src/app/entities/medecin/medecin.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.scss']
})
export class MedecinComponent implements OnInit {

  medecinList: Medecin[] = [];

  profileOption = 'profile';

  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';
  constructor(private adherentService: AdherentService, private router: Router) { }
  ngOnInit() {
    this.loadData();
  }

  // chargement des donnees
  loadData() {
    this.medecinList = [];
    this.adherentService.getAllMedecins().subscribe(data => {
      this.medecinList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Medecin;
      });
    });
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

  // suppression d'un medecin
  deleteMedecin(medecin: Medecin) {
    this.adherentService.deleteMedecin('' + medecin.id);
  }

}
