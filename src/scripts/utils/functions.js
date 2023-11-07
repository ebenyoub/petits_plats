export function removeAccents(str) {
    return str.normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[ÀÁÂÃÄÅ]/g, "A")
        .replace(/[àáâãäå]/g, "a")
        .replace(/[Ç]/g, "C")
        .replace(/[ç]/g, "c")
        .replace(/[ÈÉÊË]/g, "E")
        .replace(/[èéêë]/g, "e")
        .replace(/[ÌÍÎÏ]/g, "I")
        .replace(/[ìíîï]/g, "i")
        .replace(/[Ñ]/g, "N")
        .replace(/[ñ]/g, "n")
        .replace(/[ÒÓÔÕÖØ]/g, "O")
        .replace(/[òóôõöø]/g, "o")
        .replace(/[ÙÚÛÜ]/g, "U")
        .replace(/[ùúûü]/g, "u")
        .replace(/[Ý]/g, "Y")
        .replace(/[ýÿ]/g, "y");
}

export const isValueInItem = (item, value) => {
    if (removeAccents(item).toLowerCase().includes(removeAccents(value).toLowerCase())
        || item.toLowerCase().includes(value.toLowerCase())) {
        return true;
    }
    return false;
}

export const isValueEqualItem = (item, value) => {
    if (removeAccents(item).toLowerCase() === removeAccents(value).toLowerCase()
        || item.toLowerCase() === value.toLowerCase()) {
        return true;
    }
    return false;
}

export const isValueInList = (list, value) => {
    for (let i = 0; i < list.length; i++) {
        if (isValueEqualItem(list[i], value)) {
            return true;
        }
    }
    return false;
}

export function isListInList(tags, ingredients) {
    for (let i = 0; i < tags.length; i++) {
        if (!isValueInList(ingredients, tags[i])) {
            return false;
        }
    }
    return true;
}

export const isEnableCard = (card, value) => {
    const words = value.split(' ')
        .map(word => word.trim())
        .filter(word => word);
    console.log(words)

    return words.every(word => {
        return (
            isValueInItem(card.name, word) ||
            isValueInItem(card.description, word) ||
            card.ingredients.some(ingredient => isValueInItem(ingredient.ingredient, word))
        )
    })
}

export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
