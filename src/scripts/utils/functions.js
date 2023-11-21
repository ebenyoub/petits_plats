import tag from "../data/handleTag.js";

export function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export const isValueInItem = (item, value) => {
    const normalizedItem = removeAccents(item).toLowerCase();
    const normalizedValue = removeAccents(value).toLowerCase();

    for (let i = 0; i < normalizedItem.length; i++) {
        let match = true;

        for (let j = 0; j < normalizedValue.length; j++) {
            if (normalizedItem[i + j] !== normalizedValue[j]) {
                match = false;
                break;
            }
        }

        if (match) {
            return true;
        }
    }

    return false;
};

export const isValueEqualItem = (item, value) => {
    if (removeAccents(item).toLowerCase() === removeAccents(value).toLowerCase()
        || item.toLowerCase() === value.toLowerCase()) {
        return true;
    }
    return false;
};

export const isValueInList = (list, value) => {
    for (let i = 0; i < list.length; i++) {
        if (isValueEqualItem(list[i], value)) {
            return true;
        }
    }
    return false;
};

export function isListInList(tags, ingredients) {
    for (let i = 0; i < tags.length; i++) {
        if (!isValueInList(ingredients, tags[i])) {
            return false;
        }
    }
    return true;
}

export const isEnableCard = (card, value) => {
    const words = value.split(" ")
        .map(word => word.trim())
        .filter(word => word);

    return words.every(word => {
        return (
            isValueInItem(card.name, word) ||
            isValueInItem(card.description, word) ||
            card.ingredients.some(ingredient => isValueInItem(ingredient.ingredient, word))
        );
    });
};



export function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function tagCount() {
    return tag.cachedAppliances.length
        + tag.cachedIngredients.length
        + tag.cachedUstensils.length;
}

export function mapUstensils(list) {
    let ustensils = [];
    for (let i = 0; i < list.length; i++) {
        ustensils = [...ustensils, list[i]];
    }
    return ustensils;
}

export function mapIngredients(list) {
    let ingredients = [];
    for (let i = 0; i < list.length; i++) {
        ingredients = [...ingredients, list[i].ingredient];
    }
    return ingredients;
}

export function calculTime(filter) {
    const startTime = performance.now();
    const newIndexes = filter();
    const endTime = performance.now();
    const elapsedTime = (endTime - startTime).toFixed(1);
    return { elapsedTime, newIndexes };
}

export function displayPerformanceTable(nativeTime, functionalTime) {
    const colorGreen = "\x1b[32m%s\x1b[0m";
    const colorRed = "\x1b[31m%s\x1b[0m";

    const table = [
        { label: "Native Filter\t\t", time: nativeTime },
        { label: "Functional Filter\t", time: functionalTime }
    ];

    // Sort the table by time in ascending order
    table.sort((a, b) => a.time - b.time);

    console.log("\nPerformance Comparison:");
    console.log("------------------------");

    table.forEach(entry => {
        const color = entry === table[0] ? colorGreen : colorRed;
        console.log(color, `${entry.label}: ${entry.time} ms`);
    });

    console.log("------------------------\n");
}