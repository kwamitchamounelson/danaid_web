import { Constant } from '../Constant';
import { Adherent } from 'src/app/entities/adherent.model';
import { Injectable } from '@angular/core';
import { FirestoreService } from '../firestore-util/firestore.service';
import { Medecin } from 'src/app/entities/medecin/medecin.model';
import { Facturation } from 'src/app/entities/facturation/facturation.model';
import { FacturationNotId } from 'src/app/entities/facturationNotId/facturation-not-id.model';

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

  getSponsorsDocuments() {
    return this.firestoreService.getEntitiesDocuments(Constant.SPONSORS);
  }

  getFacturationsDocuments() {
    return this.firestoreService.getEntitiesDocuments(Constant.FACTURATIONS_ADHERENT);
  }

  addAdherentDocument(adherent: Adherent) {
    return this.firestoreService.addEntityDocument(Constant.ADHERENTS, adherent, adherent.id);
    // return this.adherentRef.add(adherent);
    // return this.firestore.collection(Constant.ADHERENTS).doc('' + adherent.phoneList[0].number).set(adherent);
  }

  updateAdherentDocument(adherent: Adherent) {
    const phoneNumber = adherent.id;
    return this.firestoreService.updateEntityDocument(Constant.ADHERENTS, adherent, '' + phoneNumber);
  }

  updateMedecinDocument(medecin: Medecin) {
    const phoneNumber = medecin.id;
    return this.firestoreService.updateEntityDocument(Constant.MEDECINS, medecin, '' + phoneNumber);
  }

  updateFacturationDocument(facturation: Facturation) {
    return this.firestoreService.updateEntityDocumentMethodeSet(Constant.FACTURATIONS_ADHERENT, facturation, '' + facturation.id);
  }

  deleteMedecinDocument(medecinPhoneNumber: string) {
    return this.firestoreService.deleteEntityDocument(Constant.MEDECINS, medecinPhoneNumber);
  }

  deleteAdherentDocument(adherentPhoneNumber: string) {
    return this.firestoreService.deleteEntityDocument(Constant.ADHERENTS, adherentPhoneNumber);
  }

  getBeneficiaresDocumentForAdherent(AdherentId: string) {
    return this.firestoreService.getEntitiesDocumentsByFilter(Constant.BENEFICIAIRES, 'adherentId', AdherentId);
  }

  getFacturationsDocumentForAdherent(AdherentId: string) {
    return this.firestoreService.getEntitiesDocumentsByFilter(Constant.FACTURATIONS_ADHERENT, 'idAdherent', AdherentId);
  }

  getMedecinDocumentByPhoneNumber(phoneNumber: string) {
    return this.firestoreService.getEntityDocument(Constant.MEDECINS, phoneNumber);
  }

  getFacturationById(facturationId: string) {
    return this.firestoreService.getEntityDocument(Constant.FACTURATIONS_ADHERENT, facturationId);
  }

  getMedecinsDocuments() {
    return this.firestoreService.getEntitiesDocuments(Constant.MEDECINS);
  }

  getPrestatairesDocuments() {
    return this.firestoreService.getEntitiesDocuments(Constant.PRESTATAIRES);
  }
}
