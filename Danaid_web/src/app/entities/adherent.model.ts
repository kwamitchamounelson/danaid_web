import { Telephone } from './telephone.model';

export class Adherent {
  acteMariageName: string;
  autrePieceName: string;
  cniName: string;
  datFinvalidite: Date;
  emailAdress:string;
  genre: string;
  id: string;
  regionDorigione:string;
  urlActeMariage:string;
  urlAutrePiecesJustificatif:string;
  ville:string;
  prenom:string;
  nomFamille: string;
  matricule: string;
  adresse: string;
  createdDate: Date;
  dateNaissance: Date;
  emailAdresse: string;
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
