import { Alimentaire } from "./Alimentaire.js";
import { Cargaison } from "./Cargaison.js";
import { Chimique } from "./Chimique.js";
import { Fragile } from "./Fragile.js";
import { Materiel } from "./Materiel.js";
export class Maritime extends Cargaison {
    constructor(distance) {
        super(distance);
    }
    ajouterProduit(produit) {
        if (this.estPleine()) {
            console.log("cargaison est :");
            return;
        }
        if (produit instanceof Fragile) {
            console.log("produit fragile");
            return;
        }
        this.ajouterProduitBase(produit);
    }
    calculerFrais(produit) {
        let tarifPrkg = 0;
        let fraischargeemnt = 0;
        if (produit instanceof Chimique) {
            tarifPrkg = 100;
            fraischargeemnt = 5000;
        }
        else if (produit instanceof Alimentaire) {
            tarifPrkg = 50;
            fraischargeemnt = 0;
        }
        else if (produit instanceof Materiel) {
            tarifPrkg = 60;
            fraischargeemnt = 0;
        }
        return (tarifPrkg * produit.getPoids() * this.getDistance() + fraischargeemnt);
    }
}
