import card from "../data/handleData.js";

const getInput = (object) => {
    let listName;

    switch (object) {
    case "ingredients":
        listName = "Ingrédients";
        break;
    case "appliances":
        listName = "Appareils";
        break;
    default:
        listName = "Ustensiles";
        break;
    }

    return `
            <div class="wrapper">
                <div class="select-btn">
                    <span>${listName}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="content">
                    <div class="search">
                        <input type="text" name="search-${object}" id="search-${object}" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <ul class="select-tag"></ul>
                    <ul class="options options-${object}"></ul>
                </div>
            </div>
        `;
};

const setSortInputs = () => {
    const inputs = document.querySelector(".inputs");
    const count = document.querySelector(".count");
    const objects = ["ingredients", "appliances", "ustensils"];

    objects.forEach(object => inputs.insertAdjacentHTML("beforeend", getInput(object)));
    count.textContent = `${card.ids.length} recettes`;
};

export default setSortInputs;
