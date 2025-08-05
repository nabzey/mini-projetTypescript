"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aerienne = void 0;
const Alimentaire_1 = require("./Alimentaire");
const Cargaison_1 = require("./Cargaison");
const Chimique_1 = require("./Chimique");
const Materiel_1 = require("./Materiel");
class Aerienne extends Cargaison_1.Cargaison {
    constructor(distance) {
        super(distance);
    }
    ajouterProduit(produit) {
        if (this.estPleine()) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return;
        }
        this.ajouterProduitBase(produit);
    }
    calculerFrais(produit) {
        let tarifParKgKm = 0;
        let fraisChargement = 0;
        if (produit instanceof Chimique_1.Chimique) {
            tarifParKgKm = 90;
            fraisChargement = 5000;
        }
        else if (produit instanceof Alimentaire_1.Alimentaire) {
            tarifParKgKm = 80;
            fraisChargement = 0;
        }
        else if (produit instanceof Materiel_1.Materiel) {
            tarifParKgKm = 70;
            fraisChargement = 0;
        }
        return (tarifParKgKm * produit.getPoids() * this.getDistance()) + fraisChargement;
    }
}
exports.Aerienne = Aerienne;
