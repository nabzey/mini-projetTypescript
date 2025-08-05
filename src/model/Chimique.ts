import {Produit} from './Produit.js';

export class Chimique extends Produit{

    private toxicite : number;
    constructor( toxicite : number, libelle: string,poids :number){
        super(libelle, poids)
        this.toxicite = toxicite;
    }

     getToxicite():number{
     return this.toxicite;
 }
     setToxicite (degre: number):void{
      if(degre >= 1 && degre <= 10){
        this.toxicite =degre
      }else{
        throw new Error('le degre est :')
      }
      }
     info(): void {
        console.log(`=== PRODUIT CHIMIQUE ===`);
        console.log(`Libellé: ${this.getLibelle()}`);
        console.log(`Poids: ${this.getPoids()} kg`);
        console.log(`Type: Chimique`);
        console.log(`Degré de toxicité: ${this.toxicite}/10`);
    }
}