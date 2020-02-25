import { Telephone } from '../telephone.model';

export class Prestataire {
    phoneList: Telephone[] = [];
    nomEtablissement: string = "";
    categorieEtablissement: string = "";
    villeEtab: string = "";
    profil: string = "";
    nomCompletPContact: string = "";
    emailPContact: string = "";
    fonctionPcontact: string = "";
    imageUrl: string = "";
    sector: string = "";
    createdDate: Date;
    urlScaneCNI: string = "";
    urlScaneCertificatEnregDordr: string = "";
    urlDautreJustificatif: string = "";
    cniName: string = "";
    certificatDenregistrmDordre: string = "";
    isProfilEnanble: boolean = false;
}
