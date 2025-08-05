import { Maritime } from './model/Maritime.js';
import { Aerienne } from './model/Aerienne.js';
import { Routiere } from './model/Routiere.js';
import { Alimentaire } from './model/Alimentaire.js';
import { Chimique } from './model/Chimique.js';
import { Fragile } from './model/Fragile.js';
import { Incassable } from './model/Incassable.js';
let cargaison = null;
const btnCargaison = document.getElementById('create-cargaison');
const typeCargaison = document.getElementById('type-cargaison');
const distanceInput = document.getElementById('distance');
const produitSection = document.getElementById('produit-section');
const typeProduit = document.getElementById('type-produit');
const nomProduit = document.getElementById('nom-produit');
const poidsProduit = document.getElementById('poids-produit');
const toxiciteInput = document.getElementById('toxicite');
const ajouterProduitBtn = document.getElementById('ajouter-produit');
const listeProduits = document.getElementById('liste-produits');
const totalSpan = document.getElementById('total');
const nbProduitsSpan = document.getElementById('nb-produits');
// Créer une cargaison
btnCargaison.addEventListener('click', () => {
    const type = typeCargaison.value;
    const distance = parseFloat(distanceInput.value);
    if (isNaN(distance)) {
        alert("Veuillez entrer une distance valide.");
        return;
    }
    cargaison =
        type === 'maritime'
            ? new Maritime(distance)
            : type === 'aerienne'
                ? new Aerienne(distance)
                : new Routiere(distance);
    produitSection.style.display = 'block';
    updateAffichage();
});
// Gérer l’affichage du champ toxicité
typeProduit.addEventListener('change', () => {
    const type = typeProduit.value;
    toxiciteInput.style.display = type === 'chimique' ? 'inline-block' : 'none';
});
// Ajouter un produit
ajouterProduitBtn.addEventListener('click', () => {
    if (!cargaison)
        return;
    const nom = nomProduit.value.trim();
    const poids = parseFloat(poidsProduit.value);
    const type = typeProduit.value;
    if (!nom || isNaN(poids)) {
        alert("Veuillez remplir correctement les champs du produit.");
        return;
    }
    let produit;
    try {
        // Créer le produit selon le type
        if (type === 'alimentaire') {
            produit = new Alimentaire(nom, poids);
        }
        else if (type === 'chimique') {
            const toxicite = parseInt(toxiciteInput.value);
            if (isNaN(toxicite) || toxicite < 1 || toxicite > 5) {
                alert("Le degré de toxicité doit être entre 1 et 5.");
                return;
            }
            produit = new Chimique(poids, nom, toxicite);
        }
        else if (type === 'fragile') {
            produit = new Fragile(nom, poids);
        }
        else {
            produit = new Incassable(nom, poids);
        }
        cargaison.ajouterProduit(produit);
        updateAffichage();
        resetFormulaire();
    }
    catch (e) {
        if (e instanceof Error) {
            alert(e.message);
        }
        else {
            console.error("Erreur inconnue : ", e);
        }
    }
});
function updateAffichage() {
    if (!cargaison)
        return;
    listeProduits.innerHTML = "";
    cargaison.getProduit().forEach((p) => {
        const li = document.createElement('li');
        li.textContent = `${p.getLibelle()} (${p.constructor.name}) - ${p.getPoids()}kg`;
        listeProduits.appendChild(li);
    });
    totalSpan.textContent = cargaison.sommeTotale().toString();
    nbProduitsSpan.textContent = cargaison.nbProduit().toString();
}
// Réinitialiser les champs du formulaire produit
function resetFormulaire() {
    nomProduit.value = "";
    poidsProduit.value = "";
    toxiciteInput.value = "";
    typeProduit.selectedIndex = 0;
    toxiciteInput.style.display = 'none';
}
