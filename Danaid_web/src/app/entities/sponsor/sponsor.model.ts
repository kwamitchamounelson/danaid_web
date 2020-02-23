import { Telephone } from '../telephone.model';

export class Sponsor {
    addresse: string = "";
    categorie: string = "";
    certificatDenregistrmDordre: string = "";
    cniName: string = "";
    nomDuGroupe: string = "";
    personneContactEmail: string = "";
    personneContactName: string = "";
    personneContactPhone: string = "";
    personneContactfunction: string = "";
    profil: string = "";
    profilEnanble: boolean = false;
    urlDautreJustificatif: string = "";
    urlScaneCNI: string = "";
    urlScaneCertificatEnregDordr: string = "";
    ville: string = "";
    phoneList: Telephone[] = [];
}
