import { Telephone } from './telephone.model';

export class User {
    createdDate: Date;
    emailAdresse: string;
    fullName: string;
    imageUrl: string;
    profil: string;
    enabled: boolean;
    phoneList: Telephone[];
    matricule: string;
    regionDorigione: string;
    urlCNI: string;
}
