import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore-util/firestore.service';
import { Constant } from '../Constant';
import { User } from 'src/app/entities/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDAO {
  constructor(
    private firestoreService: FirestoreService
  ) {
  }
  getUsersDocuments() {
    return this.firestoreService.getEntitiesDocuments(Constant.USERS);
  }

  addUserDocument(user: User) {
    return this.firestoreService.addEntityDocument(Constant.USERS, user);
  }

  updateUserDocument(user: User) {
    /* const phoneNumber = user.phoneList[0].number;
    console.log('telephone : ' + phoneNumber);
    return this.firestoreService.updateEntityDocument(Constant.USERS, user, '' + phoneNumber); */
  }

  deleteUserDocument(userPhoneNumber: string) {
    return this.firestoreService.deleteEntityDocument(Constant.USERS, userPhoneNumber);
  }
}
