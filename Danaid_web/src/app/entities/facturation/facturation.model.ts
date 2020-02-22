export class Facturation {
    categoriePaiement: string = "";
    dateDebutCouvertureAdherent: Date = null;
    dateFinCouvertureAdherent: Date = null;
    dateReglementDuPaiement: Date = null;
    etatValider: boolean = false;
    idAdherent: string = "";
    intitule: string = "";
    montant: number = 0
    nbPersonneSupplement: number = 0
    niveauCotisation: string = "";
    numeroRecu: string = "";
    paiementEffactuerViaInscription: boolean = false;
    statut: string = "";
}
