"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragile = void 0;
const Materiel_1 = require("./Materiel");
class Fragile extends Materiel_1.Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        console.log(`=== PRODUIT MATÉRIEL FRAGIL ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: Matériel fragil`);
        console.log(`Ne peut être transporté`);
    }
}
exports.Fragile = Fragile;
