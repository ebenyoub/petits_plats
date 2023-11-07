import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { isListInList, isValueInList } from "../utils/functions.js";

function mapIngredients(list) {
    let ingredients = [];
    for (let i = 0; i < list.length; i++) {
        ingredients = [...ingredients, list[i].ingredient];
    }
    return ingredients;
}

function filterByIngredients() {
    const tags = tag.cachedIngredients;
    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        for(let i = 0; i < card.indexes.length; i++) {
            const recepe = card.data[card.indexes[i]];
            const ingredients = mapIngredients(recepe.ingredients);
            // Si la recette contient tous les ingredients de la liste en cache
            if (isListInList(tags, ingredients)) {
                newIndexes.push(card.indexes[i])
            }
        }
        // retourner newIndexes
        card.indexes = newIndexes;
        console.log("after ingredients", newIndexes)
    }
}

export default filterByIngredients;