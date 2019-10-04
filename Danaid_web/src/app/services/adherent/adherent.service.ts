import { Injectable } from '@angular/core';
import { AdherentInterface } from './AdherentInterface';
import { AdherentDAO } from './AdherentDAO';
import { Adherent } from 'src/app/entities/adherent.model';

@Injectable({
  providedIn: 'root'
})
export class AdherentService implements AdherentInterface {

  getAllAdherent() {
    return this.adherentDao.getAdherentsDocuments();
  }

  creatAdherent(adherent: Adherent) {
    return this.adherentDao.addAdherentDocument(adherent);
  }

  updateAdherent(adherent: Adherent) {
    return this.adherentDao.updateAdherentDocument(adherent);
  }

  deleteAdherent(adherentPhoneNumber: string) {
    return this.adherentDao.deleteAdherentDocument(adherentPhoneNumber);
  }

  constructor(private adherentDao: AdherentDAO) { }
}
