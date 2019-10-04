import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Constant } from '../Constant';
import { Adherent } from 'src/app/entities/adherent.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdherentDAO {
  constructor(
    private firestore: AngularFirestore,
    // private adherentRef: AngularFirestoreCollection<Adherent>
  ) {
    // this.adherentRef = this.firestore.collection<Adherent>(Constant.ADHERENTS);
  }
  getAdherentsDocuments() {
    return this.firestore.collection(Constant.ADHERENTS).snapshotChanges();
  }

  addAdherentDocument(adherent: Adherent) {
    return this.firestore.collection(Constant.ADHERENTS).add(adherent);
    // return this.adherentRef.add(adherent);
    // return this.firestore.collection(Constant.ADHERENTS).doc('' + adherent.phoneList[0].number).set(adherent);
  }

  updateAdherentDocument(adherent: Adherent) {
    const phoneNumber = adherent.phoneList[0].number;
    console.log('telephone : ' + phoneNumber);
    // delete adherent.phoneList[0].number;
    return this.firestore.doc(Constant.ADHERENTS + '/' + phoneNumber).update(adherent);
  }

  deleteAdherentDocument(adherentPhoneNumber: string) {
    return this.firestore.doc(Constant.ADHERENTS + '/' + adherentPhoneNumber).delete();
  }
}
