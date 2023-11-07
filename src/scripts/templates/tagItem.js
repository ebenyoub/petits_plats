import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { capitalizeFirstLetter, isValueInList } from "../utils/functions.js";

function removeTag(li, tagItem, nameList) {
    const tagKey = `cached${capitalizeFirstLetter(nameList)}`;
    const cachedList = tag[tagKey];
    console.log("cacheList", cachedList);
    let newList = [];
    for (let i = 0; i < cachedList.length; i++) {
        if (cachedList[i] !== tagItem) {
            newList.push(cachedList[i]);
        }
    }
    console.log(newList)
    tag[tagKey] = newList;
    
    li.remove();
}

function buildTag(nameList, tagItem, node) {
    const src = "/src/assets/images/icons/close_tag.svg";
    const li = document.createElement("li");
    const liContent = document.createElement("span");
    liContent.textContent = tagItem;
    const buttonClose = new Image(17, 17);
    buttonClose.src = src;
    buttonClose.setAttribute("class", "close-tag");
    buttonClose.setAttribute("alt", "remove tag");
    buttonClose.addEventListener("click", e => {
        e.stopPropagation();
        removeTag(li, tagItem, nameList);
    })
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
        console.log(nameList, newList)
        tag[tagKey] = newList; // update des indexes
        buildTag(nameList, selectedTag, tagSection);
    }
}

export function createList(nameList, ul, list) {
    const cacheTagKey = `cached${capitalizeFirstLetter(nameList)}`;
    // Pour chaque tag de la liste
    for (let i = 0; i < list.length; i++) {
        // l'ajouter dans le dom
        if (!isValueInList(tag[cacheTagKey], list[i])) {
            const li = document.createElement("li");
            li.setAttribute("class", "tag-list")
            li.textContent = list[i];
            li.addEventListener("click", e => {
                e.stopPropagation();
                saveTag(nameList, list[i]);
                li.remove()
            })
            ul.appendChild(li);
        }
    }
}

function updateAllTags() {
    const options = document.querySelectorAll(".options");
    options.forEach(option => {
        const nameList = option.classList[1].split('-')[1];
        option.innerHTML = null;
        createList(nameList, option, tag[nameList]);
    })
}

function updateTagList() {
    let newIngredients = [];
    let newUstensils = [];
    let newAppliances = [];

    for (let i = 0; i < card.indexes.length; i++) {
        const currentCard = card.data[card.indexes[i]];
        for (let j = 0; j < currentCard.ingredients.length; j++) {
            if (!isValueInList(newIngredients, currentCard.ingredients[j].ingredient)) {
                newIngredients.push(currentCard.ingredients[j].ingredient.toLowerCase());
            }
        }
        for (let j = 0; j < currentCard.ustensils.length; j++) {
            if (!isValueInList(newUstensils, currentCard.ustensils[j])) {
                newUstensils.push(currentCard.ustensils[j].toLowerCase());
            }
        }
        for (let j = 0; j < currentCard.appliance.length; j++) {
            if (!isValueInList(newAppliances, currentCard.appliance)) {
                newAppliances.push(currentCard.appliance.toLowerCase());
            }
        }
    }

    tag.ingredients = newIngredients;
    tag.ustensils = newUstensils;
    tag.appliances = newAppliances;

    updateAllTags();
}

export default updateTagList;