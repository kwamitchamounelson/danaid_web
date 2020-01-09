import { Component, OnInit, Input, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { User } from 'src/app/entities/user.model';
import { ModalService } from 'src/app/services/modal-service/modal.service';
import { ModalDirective } from 'angular-bootstrap-md';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {

  @Input() user: User;
  private element: any;
  @ViewChild('basicModal', { static: false }) basicModal: ElementRef;
  constructor(private modalService: ModalService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    let modal = this;
    // ensure id attribute exists
    if (!this.user) {
      console.error('modal must have an id');
      return;
    }
    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy() {
    this.modalService.remove('' + this.user.phoneList[0].number);
    this.element.remove();
  }

  // open modal
  open() {
    this.basicModal.nativeElement.show();
  }

  // close modal
  close() {
    this.basicModal.nativeElement.hide()
  }

}
