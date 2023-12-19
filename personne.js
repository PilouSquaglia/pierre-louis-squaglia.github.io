document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const index = params.get("index");

    // Récupérer la personne correspondante à l'index
    const personne = personnes[index];

    // Afficher les informations de la personne
    const personInfo = document.getElementById("personInfo");
    personInfo.innerHTML = `
        <h2>${personne.nom}</h2>
        <img src="${personne.image}" alt="${personne.nom}">
        <p>${personne.description}</p>
    `;
});
