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
    for (let ingredient in ingredients) {
        if (ingredient.toLocaleLowerCase().includes(value.toLowerCase())) {
            console.log(ingredients[ingredient])
            return true;
        }
    }
    return false;
}

const isEnableCard = (card, value) => {
    let valid = false;
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
    const allData = await data.allData;
    e.preventDefault();
    if (e.target.value.length >= 3) {
        allData.forEach(card => {
            isEnableCard(card, e.target.value) && newIds.push(card.id);
        })
    }
    data.selectedIds = newIds;
    updateCardSection();
}

export default searchBoxSort;
