import { Alimentaire } from "./Alimentaire.js";
import { Cargaison } from "./Cargaison.js";
import { Chimique } from "./Chimique.js";
import { Materiel } from "./Materiel.js";
export class Aerienne extends Cargaison {
    constructor(distance) {
        super(distance);
    }
    ajouterProduit(produit) {
        if (this.estPleine()) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return;
        }
        if (produit instanceof Chimique) {
            console.log(" Produit chimique non autorisé en cargaison Aerienne!");
            return;
        }
        this.ajouterProduitBase(produit);
    }
    calculerFrais(produit) {
        let tarifParKgKm = 0;
        let fraisChargement = 0;
        if (produit instanceof Chimique) {
            tarifParKgKm = 90;
            fraisChargement = 5000;
        }
        else if (produit instanceof Alimentaire) {
            tarifParKgKm = 80;
            fraisChargement = 0;
        }
        else if (produit instanceof Materiel) {
            tarifParKgKm = 70;
            fraisChargement = 0;
        }
        return (tarifParKgKm * produit.getPoids() * this.getDistance()) + fraisChargement;
    }
}
