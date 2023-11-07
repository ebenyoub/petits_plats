import setCardItems from "../templates/cardItem.js";
import tag from "./handleTag.js";

export class Card {
    constructor() {
        this._data = [];
        this._ids = [];
        this._searchValue = "";
        this._currentIndex = 0;
        this._observer;
    }

    set searchValue(value) {
        this._searchValue = value;
    }

    get searchValue() {
        return this._searchValue;
    }

    set data(datas) {
        this._data = datas;
    }

    get data() {
        return this._data;
    }

    set indexes(selected) {
        this._ids = selected;
    }

    get indexes() {
        return this._ids;
    }

    get ids() {
        let allIds = [];
        for (let i = 0; i < this.data.length; i++) {
            allIds.push(i);
        }
        return allIds;
    }

    set observer(intersection) {
        this._observer = intersection;
    }

    get observer() {
        return this._observer;
    }

    set currentIndex(value = 0) {
        this._currentIndex = value;
    }

    render(value = null) {
        const cardSection = document.querySelector(".card");
        const count = document.querySelector(".count");
        cardSection.innerHTML = null;
        card.currentIndex = 0;
        count.textContent = `${card.indexes.length} recettes`;
        if (card.indexes.length) {
            setCardItems();
        } else {
            cardSection.innerHTML = `
                <p class="error-message">Aucune recette ${value ? "ne contient " + value : "trouvé"}.</p>
            `;
        }
        tag.update();
    }

    filter() {
        card.searchValue = e.target.value;
        if (card.searchValue.length >= 3) {
            filterBySearchBar(e);
        } else {
            card.indexes = card.ids;
        }

        tag.cachedIngredients && filterByIngredients();
        tag.cachedAppliances && filterByAppliances();
        tag.cachedUstensils && filterByUstensils();

        this.render(card.searchValue && card.searchValue)
    }

    getNextCard() {
        if (this._currentIndex < this.ids.length) {
            const nextCard = this.data[this.indexes[this._currentIndex]];
            this._currentIndex += 1;
            return nextCard;
        }
    }
}

const card = new Card();

export default card;

