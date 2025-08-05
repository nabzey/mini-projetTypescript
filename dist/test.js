"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports nécessaires
const Maritime_1 = require("./model/Maritime");
const Aerienne_1 = require("./model/Aerienne");
const Routiere_1 = require("./model/Routiere");
const Alimentaire_1 = require("./model/Alimentaire");
const Chimique_1 = require("./model/Chimique");
const Fragile_1 = require("./model/Fragile");
const Incassable_1 = require("./model/Incassable");
console.log("SYSTÈME DE GESTION DE CARGAISONS\n");
// Création des cargaisons
const cargaisonMaritime = new Maritime_1.Maritime(100); // 100 km
const cargaisonAerienne = new Aerienne_1.Aerienne(500); // 500 km
const cargaisonRoutiere = new Routiere_1.Routiere(200); // 200 km
// Création des produits
const produitAlim1 = new Alimentaire_1.Alimentaire("Pommes", 10);
const produitAlim2 = new Alimentaire_1.Alimentaire("Riz", 25);
const produitChim1 = new Chimique_1.Chimique(5, "Acide sulfurique", 8);
const produitChim2 = new Chimique_1.Chimique(15, "Détergent", 3);
const produitFragile1 = new Fragile_1.Fragile("Verres", 8);
const produitFragile2 = new Fragile_1.Fragile("Miroirs", 12);
const produitIncassable1 = new Incassable_1.Incassable("Outils métalliques", 20);
const produitIncassable2 = new Incassable_1.Incassable("Pièces mécaniques", 30);
console.log("TEST CARGAISON MARITIME");
cargaisonMaritime.ajouterProduit(produitAlim1);
cargaisonMaritime.ajouterProduit(produitChim1);
cargaisonMaritime.ajouterProduit(produitIncassable1);
cargaisonMaritime.ajouterProduit(produitFragile1); // Doit être refusé
console.log(`Montant total cargaison maritime: ${cargaisonMaritime.sommeTotale()}F`);
console.log(`Nombre de produits: ${cargaisonMaritime.nbProduit()}\n`);
console.log("TEST CARGAISON AÉRIENNE");
cargaisonAerienne.ajouterProduit(produitAlim2);
cargaisonAerienne.ajouterProduit(produitChim2);
cargaisonAerienne.ajouterProduit(produitFragile2); // Accepté
console.log(`Montant total cargaison aérienne: ${cargaisonAerienne.sommeTotale()}F`);
console.log(`Nombre de produits: ${cargaisonAerienne.nbProduit()}\n`);
console.log("TEST CARGAISON ROUTIÈRE");
cargaisonRoutiere.ajouterProduit(produitIncassable2);
cargaisonRoutiere.ajouterProduit(new Alimentaire_1.Alimentaire("Pâtes", 5));
console.log(`Montant total cargaison routière: ${cargaisonRoutiere.sommeTotale()}F`);
console.log(`Nombre de produits: ${cargaisonRoutiere.nbProduit()}\n`);
console.log("INFORMATIONS DES PRODUITS");
produitAlim1.info();
console.log();
produitChim1.info();
console.log();
produitFragile1.info();
console.log();
produitIncassable1.info();
console.log();
console.log("TEST DES CONTRAINTES");
console.log("Test de cargaison pleine:");
const cargaisonTest = new Aerienne_1.Aerienne(50);
for (let i = 0; i < 12; i++) { // Essayer d'ajouter 12 produits (limite = 10)
    cargaisonTest.ajouterProduit(new Alimentaire_1.Alimentaire(`Produit ${i + 1}`, 1));
}
console.log("\nTest degré de toxicité invalide:");
try {
    new Chimique_1.Chimique(1, "Produit toxique", 15); // Degré > 10
}
catch (error) {
    console.log(error);
}
