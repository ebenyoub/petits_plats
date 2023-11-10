export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const isValueInItem = (item, value) => {
    const normalizedItem = removeAccents(item).toLowerCase();
    const normalizedValue = removeAccents(value).toLowerCase();
    return normalizedItem.includes(normalizedValue);
};

export const isValueEqualItem = (item, value) => {
    const normalizedItem = removeAccents(item).toLowerCase();
    const normalizedValue = removeAccents(value).toLowerCase();
    return normalizedItem === normalizedValue;
};

export const isValueInList = (list, value) => {
    return list.some(item => isValueEqualItem(item, value));
};

export const isListInList = (tags, ingredients) => {
    return tags.every(tag => isValueInList(ingredients, tag));
};

export const isEnableCard = (card, value) => {
    const words = value.split(" ").map(word => word.trim()).filter(word => word);
    return words.every(word => (
        isValueInItem(card.name, word) ||
        isValueInItem(card.description, word) ||
        card.ingredients.some(ingredient => isValueInItem(ingredient.ingredient, word))
    ));
};

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
