import {Materiel} from './Materiel';

export class Fragile extends Materiel{

    constructor(libelle:string, poids:number){
        super(libelle, poids)
    }
    info():void{
       console.log(`=== PRODUIT MATÉRIEL FRAGIL ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: Matériel fragil`);
        console.log(`Ne peut être transporté`);
    }
}