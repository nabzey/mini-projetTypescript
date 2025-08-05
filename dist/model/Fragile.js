import { Materiel } from './Materiel.js';
export class Fragile extends Materiel {
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
