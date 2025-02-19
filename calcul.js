// Sélectionner le bouton "envoyer"
const btn_submit = document.querySelector("#btn_submit");
console.log(btn_submit);

btn_submit.addEventListener ("click", function(event) {
    event.preventDefault(); 
    console.log("click");
    // ici le traitement au click

    // récupération du contenu de l'input
    const input = document.querySelector("#input");
    console.group(input.value);

    // on vérifie que la valeur ne soit pas vide
    if(input.value !== "") {
        // on colle la valeur dans le tableau
    }
    });