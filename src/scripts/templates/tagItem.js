import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { capitalizeFirstLetter, isValueInList } from "../utils/functions.js";

function removeTag(li, tagItem, nameList) {
    const tagKey = `cached${capitalizeFirstLetter(nameList)}`;
    tag[tagKey] = tag[tagKey].filter(item => item !== tagItem);
    li.remove();
}

function buildTag(nameList, tagItem, node) {
    const src = "/src/assets/images/icons/close_tag.svg";
    const li = document.createElement("li");
    const liContent = document.createElement("span");
    const buttonClose = new Image(17, 17);

    liContent.textContent = tagItem;
    buttonClose.src = src;
    buttonClose.setAttribute("class", "close-tag");
    buttonClose.setAttribute("alt", "remove tag");
    buttonClose.addEventListener("click", e => {
        e.stopPropagation();
        removeTag(li, tagItem, nameList);
    });
    li.setAttribute("class", "tag-element");
    li.setAttribute("title", tagItem);
    li.appendChild(liContent);
    li.appendChild(buttonClose);
    node.appendChild(li);
}

function saveTag(nameList, selectedTag) {
    const tagKey = `cached${capitalizeFirstLetter(nameList)}`;
    let newList = tag[tagKey];
    const tagSection = document.querySelector(`.options-${nameList}`).previousElementSibling;
    if (!newList.includes(selectedTag)) {
        newList.push(selectedTag);
        tag[tagKey] = newList; // update des indexes
        buildTag(nameList, selectedTag, tagSection);
    }
}

export function createList(nameList, ul, list) {
    const cacheTagKey = `cached${capitalizeFirstLetter(nameList)}`;
    
    list.forEach(tagItem => {
        if (!isValueInList(tag[cacheTagKey], tagItem)) {
            const li = document.createElement("li");
            li.setAttribute("class", "tag-list");
            li.textContent = tagItem;
            li.addEventListener("click", e => {
                e.stopPropagation();
                saveTag(nameList, tagItem);
                li.remove();
            });
            ul.appendChild(li);
        }
    });
}


function updateAllTags() {
    const options = document.querySelectorAll(".options");
    options.forEach(option => {
        const nameList = option.classList[1].split("-")[1];
        option.innerHTML = null;
        createList(nameList, option, tag[nameList]);
    });
}

function updateTagList() {
    const newIngredients = new Set();
    const newUstensils = new Set();
    const newAppliances = new Set();

    for (const index of card.indexes) {
        const currentCard = card.data[index];

        currentCard.ingredients.forEach(ingredient => newIngredients.add(ingredient.ingredient.toLowerCase()));
        currentCard.ustensils.forEach(ustensil => newUstensils.add(ustensil.toLowerCase()));

        // Ajouter l'appliance à l'ensemble
        newAppliances.add(currentCard.appliance.toLowerCase());
    }

    // Convertir les ensembles en tableaux
    tag.ingredients = Array.from(newIngredients);
    tag.ustensils = Array.from(newUstensils);
    tag.appliances = Array.from(newAppliances);

    updateAllTags();
}



export default updateTagList;