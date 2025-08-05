import { Produit } from './Produit.js';
export class Alimentaire extends Produit {
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
