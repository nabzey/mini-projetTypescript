import { Alimentaire } from "./Alimentaire";
import{ Cargaison } from "./Cargaison";
import { Chimique } from "./Chimique";
import { Materiel } from "./Materiel";
import { Produit } from "./Produit";

  export class Routiere extends Cargaison{

      constructor(distance: number) {
        super(distance);
    }

    ajouterProduit(produit: Produit): void {
        if (this.estPleine()) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return;
        }

        this.ajouterProduitBase(produit);
    }

    calculerFrais(produit: Produit): number {
        let tarifParKgKm = 0;
        let fraisChargement = 0;

        if (produit instanceof Chimique) {
            tarifParKgKm = 300;
            fraisChargement = 5000;
        } else if (produit instanceof Alimentaire) {
            tarifParKgKm = 200;
            fraisChargement = 0;
        } else if (produit instanceof Materiel) {
            tarifParKgKm = 150;
            fraisChargement = 0;
        }

        return (tarifParKgKm * produit.getPoids() * this.getDistance()) + fraisChargement;
    }

 }