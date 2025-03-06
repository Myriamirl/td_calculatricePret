// Sélectionner le bouton "envoyer"
const btn_submit = document.querySelector("#btn_submit");
console.log(btn_submit);

btn_submit.addEventListener ("click", function(event) {
    event.preventDefault(); 
    console.log("click");
    // ici le traitement au click

    // récupération du contenu de l'input
    const inputMontant = document.querySelector("#montant");
    const inputTaux = document.querySelector("#taux");
    const inputDuree = document.querySelector("#duree");
    });
    