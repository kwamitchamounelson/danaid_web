import { Component, OnInit, Input } from '@angular/core';
import { DataEntity } from 'src/app/entities/dataEntity/data-entity.model';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Adherent } from 'src/app/entities/adherent.model';

@Component({
  selector: 'app-data-entity',
  templateUrl: './data-entity.component.html',
  styleUrls: ['./data-entity.component.scss']
})
export class DataEntityComponent implements OnInit {

  @Input("id") id: string = "";

  @Input("option") option: number = 0;

  defaulImage = 'https://firebasestorage.googleapis.com/v0/b/danaidapp.appspot.com/o/user-profil.png?alt=media&token=10fc4c1d-7f22-48b8-897d-e5a973721628';

  dataEntity: DataEntity

  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    switch (this.option) {
      case 1:
        this.getAdherentData();
        break;
      default:
        const entity = new DataEntity()
        entity.imageUrl = "";
        entity.infos = []
        this.dataEntity = entity
        break;
    }
  }


  getAdherentData() {
    this.adherentService.getAdherentByPhoneNumber(this.id).subscribe(data => {
      const adherent = data.data() as Adherent;
      const entity = new DataEntity()
      try {
        entity.imageUrl = adherent.imageUrl
        entity.infos = [adherent.nomFamille + ' ' + adherent.prenom, this.id]
      } catch (error) {
        entity.imageUrl = ""
        entity.infos = []
      }
      this.dataEntity = entity
    });
  }

}
