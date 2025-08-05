import {Produit} from './Produit';

export class Alimentaire extends Produit{

    constructor(libelle: string, poids: number){
        super(libelle,poids)
    }

     info(): void {
        console.log(`=== PRODUIT ALIMENTAIRE ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: alimentaire`);
    }
}