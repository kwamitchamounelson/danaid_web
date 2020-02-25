import { Injectable } from '@angular/core';
import { AdherentInterface } from './AdherentInterface';
import { AdherentDAO } from './AdherentDAO';
import { Adherent } from 'src/app/entities/adherent.model';
import { Medecin } from 'src/app/entities/medecin/medecin.model';
import { Facturation } from 'src/app/entities/facturation/facturation.model';
import { FacturationNotId } from 'src/app/entities/facturationNotId/facturation-not-id.model';

@Injectable({
  providedIn: 'root'
})
export class AdherentService implements AdherentInterface {

  getPrestataires() {
    return this.adherentDao.getPrestatairesDocuments();
  }

  getAllMedecins() {
    return this.adherentDao.getMedecinsDocuments();
  }

  getMedecinByPhoneNumber(medecinPhoneNumber: string) {
    return this.adherentDao.getMedecinDocumentByPhoneNumber(medecinPhoneNumber);
  }

  getFacturationById(facturationId: string) {
    return this.adherentDao.getFacturationById(facturationId);
  }

  getAllSponsors() {
    return this.adherentDao.getSponsorsDocuments();
  }

  getAllFacturations() {
    return this.adherentDao.getFacturationsDocuments();
  }

  getAllFacturationsOfAdherent(adherentId: string) {
    return this.adherentDao.getFacturationsDocumentForAdherent(adherentId);
  }
  getAllBeneficiaresOfAdherent(adherentId: string) {
    return this.adherentDao.getBeneficiaresDocumentForAdherent(adherentId);
  }

  getAdherentByPhoneNumber(adherentPhoneNumber: string) {
    return this.adherentDao.getAdherentDocumentByPhoneNumber(adherentPhoneNumber);
  }

  getAllAdherent() {
    return this.adherentDao.getAdherentsDocuments();
  }

  creatAdherent(adherent: Adherent) {
    return this.adherentDao.addAdherentDocument(adherent);
  }

  updateAdherent(adherent: Adherent) {
    return this.adherentDao.updateAdherentDocument(adherent);
  }

  updateMedecin(medecin: Medecin) {
    return this.adherentDao.updateMedecinDocument(medecin);
  }

  updateFacturation(facturation: FacturationNotId, id: string) {
    return this.adherentDao.updateFacturationDocument(facturation, id);
  }

  deleteAdherent(adherentPhoneNumber: string) {
    return this.adherentDao.deleteAdherentDocument(adherentPhoneNumber);
  }

  deleteMedecin(medecinPhoneNumber: string) {
    return this.adherentDao.deleteMedecinDocument(medecinPhoneNumber);
  }

  constructor(private adherentDao: AdherentDAO) { }
}
