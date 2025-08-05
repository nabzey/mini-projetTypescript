"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produit = void 0;
class Produit {
    constructor(libelle, poids) {
        this.libelle = libelle;
        this.poids = poids;
    }
    getLibelle() {
        return this.libelle;
    }
    setLibelle(libelle) {
        this.libelle = libelle;
    }
    getPoids() {
        return this.poids;
    }
    setPoids(poids) {
        if (poids > 0) {
            this.poids = poids;
        }
        else {
            throw new Error('le poids est :');
        }
    }
}
exports.Produit = Produit;
