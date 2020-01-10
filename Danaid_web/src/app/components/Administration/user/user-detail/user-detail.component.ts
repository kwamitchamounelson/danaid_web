import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from 'src/app/entities/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  @Input("user") user: User;
  ADHERENT = "ADHERENT"
  SPONSOR = "SPONSOR"
  constructor() { }

  ngOnInit() {
    console.log(this.user)
  }

  // update user information
  updateUser(field:string){
    
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy() {
  }
}
