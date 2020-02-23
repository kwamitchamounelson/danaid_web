import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Facturation } from 'src/app/entities/facturation/facturation.model';

@Component({
  selector: 'app-facturation',
  templateUrl: './facturation.component.html',
  styleUrls: ['./facturation.component.scss']
})
export class FacturationComponent implements OnInit {

  facturationList: Facturation[] = []
  constructor(private route: ActivatedRoute, private adherentService: AdherentService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.route.paramMap.subscribe(params => {
      this.adherentService.getAllFacturationsOfAdherent(params.get('adherent_id')).subscribe(data => {
        this.facturationList = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data()
          } as Facturation;
        });
      });
    });
  }
}
