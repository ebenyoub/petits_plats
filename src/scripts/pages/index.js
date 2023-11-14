import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import sortWithTag from "../components/tagEvent.js";
import inputClick from "../components/sortEvents.js";
import setCardItems from "../templates/cardItem.js";
import performance from "../components/performance.js";
import filter from "../utils/filter_main.js";

const fetchData = async () => {
    try {
        const response = await fetch("/src/scripts/data/data.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des données : ", error);
        throw error;
    }
};

const init = async () => {
    const searchBox = document.getElementById("search-main");

    // initialisation des données des recettes
    card.data = await fetchData();
    card.indexes = card.ids;

    // création des inputs de recherche avancé
    // setSortInputs();
    
    // initialisation des tags
    tag.update();
    
    // génération des cartes
    document.querySelector(".card").innerHTML = null;
    setCardItems();
    sortWithTag();
    performance();
    inputClick();

    searchBox.addEventListener("input", filter);
};

document.addEventListener("DOMContentLoaded", init);
