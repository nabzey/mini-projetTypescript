"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alimentaire = void 0;
const Produit_1 = require("./Produit");
class Alimentaire extends Produit_1.Produit {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        console.log(`=== PRODUIT ALIMENTAIRE ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: alimentaire`);
    }
}
exports.Alimentaire = Alimentaire;
