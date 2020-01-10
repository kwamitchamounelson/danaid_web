import { Telephone } from './telephone.model';

export class User {
    createdDate: Date = null;
    emailAdress: string = "";
    fullName: string = "";
    imageUrl: string = "";
    profil: string = "";
    enabled: boolean = false;
    phoneList: Telephone[];
    matricule: string = "";
    regionDorigione: string = "";
    urlCNI: string = "";
}
