import { Component, OnInit } from '@angular/core';
import { Sponsor } from 'src/app/entities/sponsor/sponsor.model';
import { AdherentService } from 'src/app/services/adherent/adherent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent implements OnInit {

  sponsorLis: Sponsor[] = []
  constructor(private adherentService: AdherentService, private router: Router) { }

  ngOnInit() {
    this.adherentService.getAllSponsors().subscribe(data => {
      this.sponsorLis = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Sponsor)
        }
      });
    });
  }

}
