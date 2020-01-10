import { Telephone } from './telephone.model';

export class Adherent {
  acteMariageName: string = "";
  autrePieceName: string = "";
  cniName: string = "";
  datFinvalidite: Date = null;
  emailAdress: string = "";
  genre: string = "";
  id: string = "";
  regionDorigione: string = "";
  urlActeMariage: string = "";
  urlAutrePiecesJustificatif: string = "";
  ville: string = "";
  prenom: string = "";
  nomFamille: string = "";
  matricule: string = "";
  adresse: string = "";
  createdDate: Date = null;
  dateNaissance: Date = null;
  emailAdresse: string = "";
  imageUrl: string = "";
  isRecptionPaiementMobile: boolean = false;
  nombreEnfant: number = 0;
  profession: string = "";
  profil: string = "";
  profilEnabled: boolean = false;
  protectionLevel: number = 0;
  statuMatrimonialMarie: boolean = false;
  urlDocOficiel: string = "";
  phoneList: Telephone[] = [];
}
