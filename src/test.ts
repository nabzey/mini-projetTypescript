// Imports nécessaires
import { Maritime } from './model/Maritime';
import { Aerienne } from './model/Aerienne';
import { Routiere } from './model/Routiere';
import { Alimentaire } from './model/Alimentaire';
import { Chimique } from './model/Chimique';
import { Fragile } from './model/Fragile';
import { Incassable } from './model/Incassable';

console.log("SYSTÈME DE GESTION DE CARGAISONS\n");

// Création des cargaisons
const cargaisonMaritime = new Maritime(100); // 100 km
const cargaisonAerienne = new Aerienne(500);  // 500 km
const cargaisonRoutiere = new Routiere(200);  // 200 km

// Création des produits
const produitAlim1 = new Alimentaire("Pommes", 10);
const produitAlim2 = new Alimentaire("Riz", 25);

const produitChim1 = new Chimique(5, "Acide sulfurique", 8);
const produitChim2 = new Chimique(15, "Détergent", 3);

const produitFragile1 = new Fragile("Verres", 8);
const produitFragile2 = new Fragile("Miroirs", 12);

const produitIncassable1 = new Incassable("Outils métalliques", 20);
const produitIncassable2 = new Incassable("Pièces mécaniques", 30);

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
cargaisonRoutiere.ajouterProduit(new Alimentaire("Pâtes", 5));
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
const cargaisonTest = new Aerienne(50);
for (let i = 0; i < 12; i++) { // Essayer d'ajouter 12 produits (limite = 10)
    cargaisonTest.ajouterProduit(new Alimentaire(`Produit ${i + 1}`, 1));
}

console.log("\nTest degré de toxicité invalide:");
try {
    new Chimique(1, "Produit toxique", 15); // Degré > 10
} catch (error) {
    console.log(error);
}
