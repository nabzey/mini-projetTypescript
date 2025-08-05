import { Produit } from './Produit';

export abstract class Cargaison {
    private produits: Produit[] = [];
    private distance: number;
    private fraisTransport: number = 0;
    private static readonly MAX_PRODUIT = 10;

    constructor(distance: number) {
        this.distance = distance;
    }

    getDistance(): number {
        return this.distance;
    }

    setDistance(distance: number): void {
        if (distance > 0) {
            this.distance = distance;
        } else {
            throw new Error("La distance doit être positive");
        }
    }

    getProduit(): Produit[] {
        return [...this.produits]; 
    }

    getFraisTransport(): number {
        return this.fraisTransport;
    }

    setFraisTransport(frais: number): void {
        this.fraisTransport = frais;
    }

    abstract ajouterProduit(produit: Produit): void;
    abstract calculerFrais(produit: Produit): number;

    sommeTotale(): number {
        return this.produits.reduce((total, produit) =>
            total + this.calculerFrais(produit), 0);
    }

    nbProduit(): number {
        return this.produits.length;
    }

   
    protected estPleine(): boolean {
        return this.produits.length >= Cargaison.MAX_PRODUIT;
    }

    protected ajouterProduitBase(produit: Produit): void {
        if (this.produits.length >= Cargaison.MAX_PRODUIT) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return;
        }
        
        this.produits.push(produit);
        console.log(`Produit "${produit.getLibelle()}" ajouté. Montant total de la cargaison: ${this.sommeTotale()}F`);
    }


    protected static getMaxProduit(): number {
        return Cargaison.MAX_PRODUIT;
    }
    protected peutAjouterProduit(produit: Produit): boolean {
        if (this.estPleine()) {
            console.log("Cargaison pleine, impossible d'ajouter le produit");
            return false;
        }
        return true;
    }
}