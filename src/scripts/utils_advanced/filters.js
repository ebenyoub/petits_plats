import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { isEnableCard, isListInList, isValueInList } from "./functions.js";

function filterBySearchBar() {
    let newIndexes = [];

    if (card.searchValue.length >= 3) {
        card.data.forEach((recepe, index) => {
            isEnableCard(recepe, card.searchValue) && newIndexes.push(index);
        });
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
        indexes.forEach(index => {
            const recepe = card.data[index];
            const ingredients = recepe.ingredients.map(ingredient => ingredient.ingredient);
            // Si la recette contient tous les ingredients de la liste en cache
            if (isListInList(tags, ingredients)) {
                newIndexes.push(index);
            }
        });
        // retourner newIndexes
        return newIndexes;
    }
}

function filterByAppliances(indexes) {
    
    const tags = tag.cachedAppliances;
    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        indexes.forEach(index => {
            const recepe = card.data[index];
            
            // Si la recette contient un appareil de la liste en cache
            if (isValueInList(tags, recepe.appliance)) {
                // Ajouter l'index de la recette dans newIndexes
                newIndexes.push(index);
            }
        });

        // retourner newIndexes
        return newIndexes;
    }
}

function filterByUstensils(indexes) {
    const tags = tag.cachedUstensils;

    if (tags.length) {
        let newIndexes = [];
        // J'itère les recettes indexées
        indexes.forEach(index => {
            const recepe = card.data[index];
            const ustensils = recepe.ustensils.map(ustensil => ustensil);

            // Si la recette contient un ustensile de la liste en cache
            if (isListInList(tags, ustensils)) {
                newIndexes.push(index);
            }
        });

        // retourner newIndexes
        card.indexesAdvanced = newIndexes;
    }
}

function filterFunctionnal() {
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

export default filterFunctionnal;