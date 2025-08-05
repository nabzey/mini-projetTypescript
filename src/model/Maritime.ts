import { Alimentaire } from "./Alimentaire";
import{ Cargaison } from "./Cargaison";
import { Chimique } from "./Chimique";
import { Fragile } from "./Fragile";
import { Materiel } from "./Materiel";
import { Produit } from "./Produit";
  export class Maritime extends Cargaison{
 
    constructor(distance:number){
      super(distance)
    }
   
    ajouterProduit(produit: Produit): void {
     if(this.estPleine()){
      console.log("cargaison est :");
      return
     }

     if (produit instanceof  Fragile){
      console.log("produit fragile")
      return
     }
     this.ajouterProduitBase(produit)
    }
    calculerFrais(produit: Produit): number {
      let tarifPrkg =0;
      let fraischargeemnt= 0;

      if (produit instanceof Chimique){
        tarifPrkg = 100;
        fraischargeemnt =5000;
      }else if(produit instanceof Alimentaire){
       tarifPrkg=50;
       fraischargeemnt = 0
      }else if (produit instanceof Materiel){
        tarifPrkg = 60;
        fraischargeemnt= 0;

      }
      return (tarifPrkg * produit.getPoids()* this.getDistance()+ fraischargeemnt)
    }

 }