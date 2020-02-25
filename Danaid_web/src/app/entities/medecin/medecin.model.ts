import { Telephone } from '../telephone.model';

export class Medecin {
    phoneList: Telephone[] = [];
    categorieEtablissement: string = "";
    id: String = "";
    certificatDenregistrmDordre: string = "";
    cniName: string = "";
    communeHospital: string = "";
    domaine: string = "";
    email: string = "";
    nomDefamille: string = "";
    nomEtablissement: string = "";
    personneContactName: string = "";
    personneContactPhone: string = "";
    prenom: string = "";
    profil: string = "";
    profilEnanble: boolean = false;
    serviceMedcin: string = "";
    sexe: string = "";
    specialite: string = "";
    urlImage: string = "";
    urlScaneCNI: string = "";
    urlScaneCertificatEnregDordr: string = "";
    ville: string = "";
}
