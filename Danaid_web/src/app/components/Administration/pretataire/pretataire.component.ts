import { Component, OnInit } from '@angular/core';
import { Prestataire } from 'src/app/entities/prestataire/prestataire.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pretataire',
  templateUrl: './pretataire.component.html',
  styleUrls: ['./pretataire.component.scss']
})
export class PretataireComponent implements OnInit {

  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';

  prestataireList: Prestataire[] = []
  constructor(private adherentService: AdherentService, private router: Router) { }

  ngOnInit() {
    this.adherentService.getPrestataires().subscribe(data => {
      this.prestataireList = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Prestataire;
      });
    });
  }

}
