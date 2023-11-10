import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { isEnableCard, isListInList, isValueInList, mapIngredients, mapUstensils } from "./functions.js";

function filterBySearchBar() {
    let newIndexes = [];
    if (card.searchValue.length >= 3) {
        for (let i = 0; i < card.data.length; i++) {
            if (isEnableCard(card.data[i], card.searchValue)) {
                newIndexes.push(i);
            }
        }
        return newIndexes;
    } else {
        return card.ids;
    }
}

function filterByIngredients(indexes) {
    const tags = tag.cachedIngredients;

    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        for (let i = 0; i < indexes.length; i++) {
            const recepe = card.data[indexes[i]];
            const ingredients = mapIngredients(recepe.ingredients);
            // Si la recette contient tous les ingredients de la liste en cache
            if (isListInList(tags, ingredients)) {
                newIndexes.push(indexes[i]);
            }
        }
        // retourner newIndexes
        return newIndexes;
    }
}

function filterByAppliances(indexes) {
    const tags = tag.cachedAppliances;

    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        for (let i = 0; i < indexes.length; i++) {
            const recepe = card.data[indexes[i]];
            // Si la recette contient un appareil de la liste en cache
            if (isValueInList(tags, recepe.appliance)) {
                // Ajouter l'index de la recette dans newIndexes
                newIndexes = [...newIndexes, indexes[i]];
            }
        }
        // retourner newIndexes
        return newIndexes;
    }
}

function filterByUstensils(indexes) {
    const tags = tag.cachedUstensils;

    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        for (let i = 0; i < indexes.length; i++) {
            const recepe = card.data[indexes[i]];
            const ustensils = mapUstensils(recepe.ustensils);

            // Si la recette contient un ustensile de la liste en cache
            if (isListInList(tags, ustensils)) {
                newIndexes.push(indexes[i]);
            }
        }
        // retourner newIndexes
        return newIndexes;
    }
}

function filterNative() {
    let newIndexes = [];
    
    if (card.searchValue.length >= 3) {
        newIndexes = filterBySearchBar();
    } else {
        newIndexes = card.ids;
    }

    tag.cachedIngredients.length && (newIndexes = filterByIngredients(newIndexes));
    tag.cachedAppliances.length && (newIndexes = filterByAppliances(newIndexes));
    tag.cachedUstensils.length && (newIndexes = filterByUstensils(newIndexes));

    return newIndexes;
}


export default filterNative;