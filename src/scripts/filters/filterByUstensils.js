import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { isListInList } from "../utils/functions.js";

function mapUstensils(list) {
    let ustensils = [];
    for (let i = 0; i < list.length; i++) {
        ustensils = [...ustensils, list[i]];
    }
    return ustensils;
}

function filterByUstensils() {
    const tags = tag.cachedUstensils;
    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        for (let i = 0; i < card.indexes.length; i++) {
            const recepe = card.data[card.indexes[i]];
            const ustensils = mapUstensils(recepe.ustensils);
            // Si la recette contient un ustensile de la liste en cache
            if (isListInList(tags, ustensils)) {
                newIndexes.push(card.indexes[i]);
            }
        }
        console.log("filteredByUstensils", newIndexes);
        // retourner newIndexes
        card.indexes = newIndexes;
    }
}

export default filterByUstensils;