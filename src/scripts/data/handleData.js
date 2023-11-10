import setCardItems from "../templates/cardItem.js";
import tag from "./handleTag.js";

export class Card {
    constructor() {
        this._data = [];
        this._indexes = [];
        this._indexesAdvanced = [];
        this._searchValue = "";
        this._currentIndex = 0;
        this._observer;
        this._performance = false;
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
        const count = document.querySelector(".count");

        this._indexes = selected;
        count.textContent = `${card.indexes.length} recettes`;
    }

    get indexes() {
        return this._indexes;
    }
    
    set indexesAdvanced(selected) {
        this._indexesAdvanced = selected;
    }

    get indexesAdvanced() {
        return this._indexesAdvanced;
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

    get performance() {
        return this._performance;
    }

    set performance(state) {
        this._performance = state;
    }

    render(value = null) {
        const cardSection = document.querySelector(".card");

        cardSection.innerHTML = null;
        card.currentIndex = 0;
        if (card.indexes.length) {
            setCardItems();
        } else {
            cardSection.innerHTML = `
                <p class="error-message">Aucune recette ${value ? `ne contient "${value}"` : "trouvé"}.</p>
            `;
        }

        tag.update();
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

