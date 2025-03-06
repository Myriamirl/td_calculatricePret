// CONST GENERALES qui prennent uniquement les elements html dans le dom 
// Sélectionner le bouton "envoyer" et pdf et resultat ...
const btn_submit = document.querySelector("#btn_submit");
const btn_pdf = document.querySelector("#btn_pdf");
const resultatDiv = document.querySelector("#resultat");
const tableauBody = document.querySelector("#table_amortissement tbody");
// récupération du contenu de l'input
const inputMontant = document.querySelector("#montant");
const inputTaux = document.querySelector("#taux");
const inputDuree = document.querySelector("#duree");

// fonction pour valider si la valeur est un nombre ET .
function estNombreValide(valeur) {
    return /^\d+(\.\d+)?$/.test(valeur.trim());
};    

//empeche la saisie de lettres dans les inputs
[inputMontant, inputTaux, inputDuree].forEach(input => {
    input.addEventListener("input", function() {
        this.value = this.value.replace(/[^0-9.]/g, "");
    });

//gestion de la soumission du formulaire
btn_submit.addEventListener ("click", function(event) {
    event.preventDefault(); 
    // ici le traitement au click

// NE RECUPERE PAS LES ELEMENTS DU DOM MAIS LES VALEURS ENTRER PAR L'UTILISATEUR
const montant = parseFloat(inputMontant.value);
const taux = parseFloat(inputTaux.value);
const duree = parseFloat(inputDuree.value);

//tb d'erreur afin d'y regrouper les erreurs et les renvoyer à l'utilisateur en une seule fois 
let erreurs = [];

//reset le tableau
tableauBody.innerHTML = "";

if (!estNombreValide(inputMontant.value) || !estNombreValide(inputTaux.value) || montant <= 0) {
    erreurs.push("Montant emprunté");
}
if (!estNombreValide(inputTaux.value) || taux <= 0) {
    erreurs.push("Taux nominal");
}
if (!estNombreValide(inputDuree.value) || duree <= 0) {
    erreurs.push("Durée de remboursement");
}

if (erreurs.length > 0) {
    alert("Veuillez corriger les erreurs suivantes : " + erreurs.join(", ") + " avec des valeurs valides !");
} else {
    genererTableau(montant, taux, duree);
}    
});

//creation du tableau d'amortissement 
function genererTableau(montant, taux, duree) {
    const tauxMensuel = (taux /12) / 100;
    const dureeMois = duree * 12;
    const mensualite = montant * ((tauxMensuel * Math.pow(1 + tauxMensuel, dureeMois)) / (Math.pow(1 + tauxMensuel, dureeMois) - 1));

let capitalRestant = montant;    

for (let i = 1; i <= dureeMois; i++) {
    let interet = capitalRestant * tauxMensuel;
    let amortissement = mensualite - interet;
    capitalRestant -= amortissement;
}; 

