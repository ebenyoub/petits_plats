import card from "../data/handleData.js";
import tag from "../data/handleTag.js";
import { isEnableCard } from "../utils/functions.js";

function filterBySearchBar() {
    let newIndexes = [];
    console.log(card.searchValue)
    if (card.searchValue.length >= 3) {
        for (let i = 0; i < card.data.length; i++) {
            if (isEnableCard(card.data[i], card.searchValue)) {
                newIndexes.push(i);
            }
        }
        card.indexes = newIndexes;
    } else {
        card.indexes = card.ids;
    }
}

export default filterBySearchBar;