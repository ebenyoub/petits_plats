import data from "../data/handleData.js";
import setCardItems from "../templates/cardItem.js";

const isValueInTitle = (title, value) => {
    if (title.toLowerCase().includes(value.toLowerCase())) {
        return true;
    }
    return false;
}

const isValueInDescription = (description, value) => {
    if (description.toLowerCase().includes(value.toLowerCase())) {
        return true;
    }
    return false;
}

const isValueInIngredients = (ingredients, value) => {
    for (let i = 0; i < ingredients.length; i++) {
        console.log(ingredients[i].ingredient)
        if (ingredients[i].ingredient.toLowerCase().includes(value.toLowerCase())) {
            return true;
        }
    }
    return false;
}

const isEnableCard = (card, value) => {
    let valid = false;
    console.log("name", card.name)
    isValueInTitle(card.name, value) && (valid = true);
    isValueInDescription(card.description, value) && (valid = true);
    isValueInIngredients(card.ingredients, value) && (valid = true);
    return valid;
}

const updateCardSection = () => {
    const cardSection = document.querySelector(".card");
    const count = document.querySelector(".count");
    cardSection.innerHTML = null;
    count.textContent = `${data.selectedIds.length} recettes`;
    setCardItems();
}

const searchBoxSort = async e => {
    let newIds = [];
    e.preventDefault();
    if (e.target.value.length >= 3) {
        data.allData.forEach(card => {
            if (isEnableCard(card, e.target.value)) {
                newIds.push(card.id);
                console.log(card.name)
            }
        })
    }
    data.selectedIds = newIds;
    console.log(data.selectedIds)
    updateCardSection();
}

export default searchBoxSort;
