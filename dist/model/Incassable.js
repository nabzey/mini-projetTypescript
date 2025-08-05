"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Incassable = void 0;
const Materiel_1 = require("./Materiel");
class Incassable extends Materiel_1.Materiel {
    constructor(libelle, poids) {
        super(libelle, poids);
    }
    info() {
        console.log(`=== PRODUIT MATÉRIEL INCASSABLE ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: Matériel Incassable`);
        console.log(`Peut être transporté par voie maritime (1-9 jours)`);
    }
}
exports.Incassable = Incassable;
