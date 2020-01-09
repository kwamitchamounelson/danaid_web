import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/entities/user.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() user: User = null;
  constructor(
  ) { }

  ngOnInit() {
  }

}
