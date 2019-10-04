import { Adherent } from 'src/app/entities/adherent.model';

export interface AdherentInterface {
  getAllAdherent();
  creatAdherent(adherent: Adherent);
  updateAdherent(adherent: Adherent);
  deleteAdherent(adherentPhoneNumber: string)
}
