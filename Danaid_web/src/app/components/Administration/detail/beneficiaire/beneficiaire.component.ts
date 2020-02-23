import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Beneficiaire } from 'src/app/entities/beneficiaire/beneficiaire.model';

@Component({
  selector: 'app-beneficiaire',
  templateUrl: './beneficiaire.component.html',
  styleUrls: ['./beneficiaire.component.scss']
})
export class BeneficiaireComponent implements OnInit {

  beneficiaireList: Beneficiaire[] = []
  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';

  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.route.paramMap.subscribe(params => {
      this.adherentService.getAllBeneficiaresOfAdherent(params.get('adherent_id')).subscribe(data => {
        this.beneficiaireList = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Beneficiaire;
        });
      });
    });
  }

}
