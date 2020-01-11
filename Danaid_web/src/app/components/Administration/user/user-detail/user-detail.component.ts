import { Component, OnInit, Input, OnChanges, AfterViewInit } from '@angular/core';
import { User } from 'src/app/entities/user.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  @Input("user") user: User;
  ADHERENT = "ADHERENT"
  SPONSOR = "SPONSOR"
  validatingForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.initData();
  }

  // update user information
  updateUser(field: string) {
    switch (field) {
      case 'name':
        console.log('bonjour');
        break;
      default:
        break;
    }
  }

  get fullNameFormControl() {
    return this.validatingForm.get('fullNameFormControl');
  }

  initData() {
    console.log(this.user)
    this.validatingForm = new FormGroup({
      fullNameFormControl: new FormControl(this.user.fullName, Validators.required),
    });
  }
}
