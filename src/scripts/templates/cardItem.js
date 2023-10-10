import cardEvent from "../components/cardEvents.js";
import data from "../data/handleData.js";

const cardItem = (card) => {
    const imageName = card.image.replace("jpg", "webp");
    const imageSrc = `/src/assets/images/recepes/${imageName}`;
    const ingredientList = card.ingredients.map(item => `
        <div class="ingredient">
            <p>${item.ingredient}</p>
            <span>${item.quantity ? item.quantity : ''} ${item.unit ? item.unit : ''}</span>
        </div>
    `).join('');

    return `
        <article class="card__wrapper card${card.id}" data-id="${card.id}">
            <img src="${imageSrc}" alt="${card.name}" />
            <span class="timer">${card.time}min</span>
            <div class="card__content">
                <h2>${card.name}</h2>
                <div class="description">
                    <h3>Recette</h3>
                    <p>${card.description}</p>
                    <span class="more">Afficher tout</span>
                </div>
                <div class="ingredients">
                    <h3>Ingrédients</h3>
                    <div class="ingredients__list">
                        ${ingredientList}
                    </div>
                </div>
            </div>
        </article>
    `
}

const setCardItems = () => {
    const cardSection = document.querySelector(".card");

    for (let id of data.selectedIds) {
        const card = data.allData.find(item => item.id === id);
        cardSection.insertAdjacentHTML("beforeend", cardItem(card));
        cardEvent(document.querySelector(`.card${id}`));
    }
}

export default setCardItems;