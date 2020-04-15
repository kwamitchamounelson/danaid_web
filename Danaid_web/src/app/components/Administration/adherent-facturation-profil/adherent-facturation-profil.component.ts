import { Component, OnInit, Input } from '@angular/core';
import { Adherent } from 'src/app/entities/adherent.model';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-adherent-facturation-profil',
  templateUrl: './adherent-facturation-profil.component.html',
  styleUrls: ['./adherent-facturation-profil.component.scss']
})
export class AdherentFacturationProfilComponent implements OnInit {

  @Input("phone") phone: string = "";
  adherent: Adherent = new Adherent();
  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';


  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.adherentService.getAdherentByPhoneNumber(this.phone).subscribe(data => {
      this.adherent = data.data() as Adherent
    });
  }

}
