import data from "../data/handleData.js";

const getInput = (object) => {
    return `
            <div class="wrapper">
                <div class="select-btn">
                    <span>${object}</span>
                    <i class="fa-solid fa-chevron-down"></i>
                </div>
                <div class="content">
                    <div class="search">
                        <input type="text" name="search-${object}" id="search-${object}" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="select-tag"></div>
                    <ul class="options">
                        <li>Australia</li>
                        <li>Belgium</li>
                        <li>Britain</li>
                        <li>America</li>
                        <li>China</li>
                        <li>India</li>
                    </ul>
                </div>
            </div>
        `
}

const setSortInputs = () => {
    const inputs = document.querySelector(".inputs");
    const count = document.querySelector(".count");

    inputs.insertAdjacentHTML("beforeend", getInput("Ingrédients"));
    inputs.insertAdjacentHTML("beforeend", getInput("Appareils"));
    inputs.insertAdjacentHTML("beforeend", getInput("Ustensiles"));
    count.textContent = `${data.allIds.length} recettes`;
}


export default setSortInputs;