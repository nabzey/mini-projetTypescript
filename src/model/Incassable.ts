import {Materiel} from './Materiel';

export class Incassable extends Materiel{
constructor (libelle:string, poids:number){
    super(libelle, poids)
}

 info(): void {
        console.log(`=== PRODUIT MATÉRIEL INCASSABLE ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: Matériel Incassable`);
        console.log(`Peut être transporté par voie maritime (1-9 jours)`);
    }
}