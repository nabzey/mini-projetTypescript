export class Cargaison {
    constructor(distance) {
        this.produits = [];
        this.fraisTransport = 0;
        this.distance = distance;
    }
    getDistance() {
        return this.distance;
    }
    setDistance(distance) {
        if (distance > 0) {
            this.distance = distance;
        }
        else {
            throw new Error("La distance doit être positive");
        }
    }
    getProduit() {
        return [...this.produits];
    }
    getFraisTransport() {
        return this.fraisTransport;
    }
    setFraisTransport(frais) {
        this.fraisTransport = frais;
    }
    sommeTotale() {
        return this.produits.reduce((total, produit) => total + this.calculerFrais(produit), 0);
    }
    nbProduit() {
        return this.produits.length;
    }
    estPleine() {
        return this.produits.length >= Cargaison.MAX_PRODUIT;
    }
    ajouterProduitBase(produit) {
        if (this.produits.length >= Cargaison.MAX_PRODUIT) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return;
        }
        this.produits.push(produit);
        console.log(`Produit "${produit.getLibelle()}" ajouté. Montant total de la cargaison: ${this.sommeTotale()}F`);
    }
    static getMaxProduit() {
        return Cargaison.MAX_PRODUIT;
    }
    peutAjouterProduit(produit) {
        if (this.estPleine()) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return false;
        }
        return true;
    }
}
Cargaison.MAX_PRODUIT = 10;
