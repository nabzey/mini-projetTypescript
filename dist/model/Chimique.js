"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chimique = void 0;
const Produit_1 = require("./Produit");
class Chimique extends Produit_1.Produit {
    constructor(toxicite, libelle, poids) {
        super(libelle, poids);
        this.toxicite = toxicite;
    }
    getToxicite() {
        return this.toxicite;
    }
    setToxicite(degre) {
        if (degre >= 1 && degre <= 10) {
            this.toxicite = degre;
        }
        else {
            throw new Error('le degre est :');
        }
    }
    info() {
        console.log(`=== PRODUIT CHIMIQUE ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: Chimique`);
        console.log(`Degré de toxicité: ${this.toxicite}/10`);
    }
}
exports.Chimique = Chimique;
