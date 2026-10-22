const disponibles = document.getElementById("disponibles");
const recette = document.getElementById("recette");
const places = document.querySelectorAll(".Place");
const inputNom = document.getElementById("nomPassager");
const selectSiege = document.getElementById("siegeReserver");
const btnConfirmer = document.getElementById("btnConfirmer");

const prixPlace = 80;

selectSiege.innerHTML = "<option value=''>Choisir un siège</option>";

for (let i = 0; i < places.length; i++) {
    const numero = places[i].querySelector(".numero").textContent;
    const etat = places[i].querySelector(".statut").textContent;

    if (etat === "Libre") {
        selectSiege.innerHTML += "<option value='" + numero + "'>Siège " + numero + "</option>";
    }
}

btnConfirmer.addEventListener("click", function () {
    const nom = inputNom.value.trim();
    const numeroChoisi = selectSiege.value;

    if (nom === "") {
        alert("Entrez le nom du passager");
        return;
    }

    if (numeroChoisi === "") {
        alert("Choisissez un siège");
        return;
    }
    for (let i = 0; i < places.length; i++) {
        const numero = places[i].querySelector(".numero").textContent;
        const statut = places[i].querySelector(".statut");

        if (numero === numeroChoisi) {
            places[i].classList.remove("bg-white", "border-gray-400");
            places[i].classList.add("bg-red-300", "border-red-500");
            statut.textContent = nom;
            statut.classList.remove("text-gray-500");
            statut.classList.add("truncate");
        }
    }
    
    disponibles.textContent = Number(disponibles.textContent) - 1;
    recette.textContent = Number(recette.textContent) + prixPlace;

    selectSiege.querySelector("option[value='" + numeroChoisi + "']").remove();

    inputNom.value = "";
    selectSiege.value = "";
});
