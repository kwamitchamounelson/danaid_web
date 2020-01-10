import { Constant } from '../Constant';
import { Adherent } from 'src/app/entities/adherent.model';
import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore-util/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class AdherentDAO {
  constructor(
    private firestoreService: FirestoreService
    // private adherentRef: AngularFirestoreCollection<Adherent>
  ) {
    // this.adherentRef = this.firestore.collection<Adherent>(Constant.ADHERENTS);
  }

  getAdherentDocumentByPhoneNumber(phoneNumber: string) {
    return this.firestoreService.getEntityDocument(Constant.ADHERENTS, phoneNumber);
  }

  getAdherentsDocuments() {
    return this.firestoreService.getEntitiesDocuments(Constant.ADHERENTS);
  }

  addAdherentDocument(adherent: Adherent) {
    return this.firestoreService.addEntityDocument(Constant.ADHERENTS, adherent);
    // return this.adherentRef.add(adherent);
    // return this.firestore.collection(Constant.ADHERENTS).doc('' + adherent.phoneList[0].number).set(adherent);
  }

  updateAdherentDocument(adherent: Adherent) {
    const phoneNumber = adherent.phoneList[0].number;
    console.log('telephone : ' + phoneNumber);
    // delete adherent.phoneList[0].number;
    return this.firestoreService.updateEntityDocument(Constant.ADHERENTS, adherent, '' + phoneNumber);
  }

  deleteAdherentDocument(adherentPhoneNumber: string) {
    return this.firestoreService.deleteEntityDocument(Constant.ADHERENTS, adherentPhoneNumber);
  }
}
