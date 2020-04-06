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
        let fact: Facturation;
        this.facturationList = data.map(e => {
          fact = ({
            id: e.payload.doc.id,
            ...(e.payload.doc.data() as Facturation)
          });
          fact.id = e.payload.doc.id;
          return fact;
        });
      });
    });
  }

  // modification d'un adherent
  formatDate(sec: number): string {
    const date = new Date(sec * 1000);
    const dateStr = '' + date.getUTCDay() + '-' + date.getUTCMonth() + '-' + date.getUTCFullYear()
    return dateStr;
  }
}
