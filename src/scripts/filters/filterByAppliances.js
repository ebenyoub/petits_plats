import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { isValueInList } from "../utils/functions.js";


function filterByAppliances() {
    const tags = tag.cachedAppliances;
    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        for (let i = 0; i < card.indexes.length; i++) {
            const recepe = card.data[card.indexes[i]];
            // Si la recette contient un appareil de la liste en cache
            if (isValueInList(tags, recepe.appliance)) {
                // Ajouter l'index de la recette dans newIndexes
                newIndexes = [...newIndexes, card.indexes[i]];
            }
        }
        console.log("filteredByAppliances", newIndexes);
        // retourner newIndexes
        card.indexes = newIndexes;
    }
}

export default filterByAppliances;