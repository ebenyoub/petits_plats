const getInput = (object, index) => {
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
                <div class="select-btn" tabindex="${index + 2}">
                    <span>${listName}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="content content-${object}">
                    <div class="search">
                        <input type="text" name="search-tag-${object}" id="search-tag-${object}" />
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
    const objects = ["ingredients", "appliances", "ustensils"];

    objects.forEach((object, index) => inputs.insertAdjacentHTML("beforeend", getInput(object, index)));
};

export default setSortInputs;
