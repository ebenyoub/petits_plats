import { inputClick } from "../components/sortEvents.js";
import sortWithTag from "../components/tagEvent.js";
import setSortInputs from "../templates/sortItem.js";
import setCardItems from "../templates/cardItem.js";
import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import filterBySearchBar from "../filters/filterBySearchBar.js";
import filterByIngredients from "../filters/filterByIngredients.js";
import filterByAppliances from "../filters/filterByAppliances.js";
import filterByUstensils from "../filters/filterByUstensils.js";


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
}

const init = async () => {
    const searchBox = document.getElementById("search-main");

    // initialisation des données des recettes
    card.data = await fetchData();
    card.indexes = card.ids;

    // création des inputs de recherche avancé
    setSortInputs();
    inputClick();

    // initialisation des tags
    tag.update();  

    // génération des cartes
    setCardItems();
    sortWithTag();

    searchBox.addEventListener("input", tag.filter);
}

document.addEventListener("DOMContentLoaded", init);
