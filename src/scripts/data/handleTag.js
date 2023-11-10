import updateTagList from "../templates/tagItem.js";
import filter from "../utils/filter_main.js";

class Tag {
    constructor() {
        this._ingredients = [];
        this._appliances = [];
        this._ustensils = [];
        this._cachedIngredients = [];
        this._cachedAppliances = [];
        this._cachedUstensils = [];
        this._valueIngredients = [];
        this._valueAppliances = [];
        this._valueUstensils = [];
    }

    /* *********************************** */

    get ingredients() {
        return this._ingredients;
    }

    set ingredients(newList) {
        this._ingredients = newList;
    }

    get appliances() {
        return this._appliances;
    }

    set appliances(newList) {
        this._appliances = newList;
    }

    get ustensils() {
        return this._ustensils;
    }

    set ustensils(newList) {
        this._ustensils = newList;
    }

    /* *********************************** */

    get cachedIngredients() {
        return this._cachedIngredients;
    }

    set cachedIngredients(newList) {
        this._cachedIngredients = newList;
        filter();
    }

    get cachedAppliances() {
        return this._cachedAppliances;
    }

    set cachedAppliances(newList) {
        this._cachedAppliances = newList;
        filter();
    }

    get cachedUstensils() {
        return this._cachedUstensils;
    }

    set cachedUstensils(newList) {
        this._cachedUstensils = newList;
        filter();
    }

    /* *********************************** */

    update() {
        updateTagList();
    }
}

const tag = new Tag();

export default tag;