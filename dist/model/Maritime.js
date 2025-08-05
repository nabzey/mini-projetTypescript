"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maritime = void 0;
const Alimentaire_1 = require("./Alimentaire");
const Cargaison_1 = require("./Cargaison");
const Chimique_1 = require("./Chimique");
const Fragile_1 = require("./Fragile");
const Materiel_1 = require("./Materiel");
class Maritime extends Cargaison_1.Cargaison {
    constructor(distance) {
        super(distance);
    }
    ajouterProduit(produit) {
        if (this.estPleine()) {
            console.log("cargaison est :");
            return;
        }
        if (produit instanceof Fragile_1.Fragile) {
            console.log("produit fragile");
            return;
        }
        this.ajouterProduitBase(produit);
    }
    calculerFrais(produit) {
        let tarifPrkg = 0;
        let fraischargeemnt = 0;
        if (produit instanceof Chimique_1.Chimique) {
            tarifPrkg = 100;
            fraischargeemnt = 5000;
        }
        else if (produit instanceof Alimentaire_1.Alimentaire) {
            tarifPrkg = 50;
            fraischargeemnt = 0;
        }
        else if (produit instanceof Materiel_1.Materiel) {
            tarifPrkg = 60;
            fraischargeemnt = 0;
        }
        return (tarifPrkg * produit.getPoids() * this.getDistance() + fraischargeemnt);
    }
}
exports.Maritime = Maritime;
