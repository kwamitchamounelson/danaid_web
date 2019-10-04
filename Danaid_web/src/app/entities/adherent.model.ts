import { Telephone } from './telephone.model';

export class Adherent {
  adresse: string;
  commune: string;
  createdDate: Date;
  dateNaissance: Date;
  emailAdresse: string;
  fullName: string;
  imageUrl: string;
  isRecptionPaiementMobile: boolean;
  nombreEnfant: number;
  profession: string;
  profil: string;
  profilEnabled: boolean;
  protectionLevel: number;
  statuMatrimonialMarie: boolean;
  urlDocOficiel: string;
  phoneList: Telephone[];
}
