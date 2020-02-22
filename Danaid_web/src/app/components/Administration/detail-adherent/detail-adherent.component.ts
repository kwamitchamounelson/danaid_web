import { Component, OnInit } from '@angular/core';
import { Adherent } from 'src/app/entities/adherent.model';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';

@Component({
  selector: 'app-detail-adherent',
  templateUrl: './detail-adherent.component.html',
  styleUrls: ['./detail-adherent.component.scss']
})
export class DetailAdherentComponent implements OnInit {

  adherent: Adherent;
  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.adherentService.getAdherentByPhoneNumber(params.get('adherent_id')).subscribe(data => {
        this.adherent = data.data() as Adherent
        console.log(this.adherent)
      });
    });
  }

}
