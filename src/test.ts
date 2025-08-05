import { Maritime } from './model/Maritime.js';
import { Aerienne } from './model/Aerienne.js';
import { Routiere } from './model/Routiere.js';
import { Alimentaire } from './model/Alimentaire.js';
import { Chimique } from './model/Chimique.js';
import { Fragile } from './model/Fragile.js';
import { Incassable } from './model/Incassable.js';
import { Cargaison } from './model/Cargaison.js';
import { Produit } from './model/Produit.js';

let cargaison: Cargaison | null = null;

const btnCargaison = document.getElementById('create-cargaison') as HTMLButtonElement;
const typeCargaison = document.getElementById('type-cargaison') as HTMLSelectElement;
const distanceInput = document.getElementById('distance') as HTMLInputElement;
const produitSection = document.getElementById('produit-section') as HTMLElement;

const typeProduit = document.getElementById('type-produit') as HTMLSelectElement;
const nomProduit = document.getElementById('nom-produit') as HTMLInputElement;
const poidsProduit = document.getElementById('poids-produit') as HTMLInputElement;
const toxiciteInput = document.getElementById('toxicite') as HTMLInputElement;
const ajouterProduitBtn = document.getElementById('ajouter-produit') as HTMLButtonElement;

const listeProduits = document.getElementById('liste-produits') as HTMLUListElement;
const totalSpan = document.getElementById('total') as HTMLSpanElement;
const nbProduitsSpan = document.getElementById('nb-produits') as HTMLSpanElement;

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

    
  if (!cargaison) return;
  const nom = nomProduit.value.trim();
  const poids = parseFloat(poidsProduit.value);
  const type = typeProduit.value;

  if (!nom || isNaN(poids)) {
    alert("Veuillez remplir correctement les champs du produit.");
    return;
  }

  let produit: Produit;

  try {
    // Créer le produit selon le type
    if (type === 'alimentaire') {
      produit = new Alimentaire(nom, poids);
    } else if (type === 'chimique') {
      const toxicite = parseInt(toxiciteInput.value);
      if (isNaN(toxicite) || toxicite < 1 || toxicite > 5) {
        alert("Le degré de toxicité doit être entre 1 et 5.");
        return;
      }
      produit = new Chimique(poids, nom, toxicite);
    } else if (type === 'fragile') {
      produit = new Fragile(nom, poids);
    } else {
      produit = new Incassable(nom, poids);
    }

    cargaison.ajouterProduit(produit);
    updateAffichage();
    resetFormulaire();

  } catch (e) {
    if (e instanceof Error) {
      alert(e.message);
    } else {
      console.error("Erreur inconnue : ", e);
    }
  }
});

function updateAffichage() {
  if (!cargaison) return;

  listeProduits.innerHTML = "";

  cargaison.getProduit().forEach((p: Produit) => {
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
