import filterByAppliances from "../filters/filterByAppliances.js";
import filterByIngredients from "../filters/filterByIngredients.js";
import filterByUstensils from "../filters/filterByUstensils.js";
import updateTagList from "../templates/tagItem.js";
import card from "./handleData.js";

class Tag {
    constructor() {
        this._ingredients = [];
        this._appliances = [];
        this._ustensils = [];
        this._cachedIngredients = [];
        this._cachedAppliances = [];
        this._cachedUstensils = [];
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
        filterByIngredients();
        card.render();
    }

    get cachedAppliances() {
        return this._cachedAppliances;
    }
    
    set cachedAppliances(newList) {
        this._cachedAppliances = newList;
        filterByAppliances();
        card.render();
    }

    get cachedUstensils() {
        return this._cachedUstensils;
    }

    set cachedUstensils(newList) {
        this._cachedUstensils = newList;
        filterByUstensils();
        card.render();
    }

    /* *********************************** */

    update() {
        updateTagList()
    }
}

const tag = new Tag();

export default tag;