import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/entities/user.model';

@Component({
  selector: 'app-sponsor-profile',
  templateUrl: './sponsor-profile.component.html',
  styleUrls: ['./sponsor-profile.component.scss']
})
export class SponsorProfileComponent implements OnInit {

  @Input("user") user:User= new User()
  constructor() { }

  ngOnInit() {
  }

}
