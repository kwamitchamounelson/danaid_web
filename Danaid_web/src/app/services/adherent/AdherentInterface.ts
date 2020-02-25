import { Adherent } from 'src/app/entities/adherent.model';
import { Medecin } from 'src/app/entities/medecin/medecin.model';
import { Facturation } from 'src/app/entities/facturation/facturation.model';
import { FacturationNotId } from 'src/app/entities/facturationNotId/facturation-not-id.model';

export interface AdherentInterface {
  getAllAdherent();
  creatAdherent(adherent: Adherent);
  updateAdherent(adherent: Adherent);
  deleteAdherent(adherentPhoneNumber: string);
  deleteMedecin(medecinPhoneNumber: string);
  getAdherentByPhoneNumber(adherentPhoneNumber: string);
  getAllBeneficiaresOfAdherent(adherentId: string);
  getAllFacturationsOfAdherent(adherentId: string);
  getAllFacturations();
  getAllSponsors();
  getPrestataires();
  getAllMedecins();
  getMedecinByPhoneNumber(medecinPhoneNumber: string);
  updateMedecin(medecin: Medecin);
  updateFacturation(facturation: FacturationNotId, id: string);
  getFacturationById(facturationId: string);
}
