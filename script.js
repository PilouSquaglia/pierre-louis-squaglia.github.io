// Sélectionner le conteneur des personnes
const personContainer = document.getElementById("personContainer");

// Charger les personnes à partir du fichier JSON
fetch('personnes.json')
    .then(response => response.json())
    .then(personnes => {
        // Ajouter chaque personne au conteneur
        personnes.forEach((personne, index) => {
            const personDiv = document.createElement("div");
            personDiv.classList.add("person");

            const personImage = document.createElement("img");
            personImage.src = personne.image;
            personImage.alt = personne.nom;

            // Ajouter un gestionnaire d'événements de clic
            personImage.addEventListener("click", () => {
                window.location.href = `personne.html?index=${index}`;
            });

            // Ajouter les éléments au conteneur
            personDiv.appendChild(personImage);

            personContainer.appendChild(personDiv);
        });
    })
    .catch(error => console.error('Erreur lors du chargement du fichier JSON :', error));
