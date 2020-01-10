import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/entities/user.model';
import { Adherent } from 'src/app/entities/adherent.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-adherent-profile',
  templateUrl: './adherent-profile.component.html',
  styleUrls: ['./adherent-profile.component.scss']
})
export class AdherentProfileComponent implements OnInit {

  @Input("user") user: User = new User()
  adherent: Adherent = new Adherent()
  constructor(private aherentService: AdherentService) { }

  ngOnInit() {
    this.aherentService.getAdherentByPhoneNumber('' + this.user.phoneList[0].number)
      .subscribe(data => {
        this.adherent = data.data() as Adherent
      })
  }

  getStatus(): string {
    const status = this.adherent.profilEnabled
    if (status) {
      return "Actif"
    }
    return "Inactif"
  }

}
