import cardEvent from "../components/cardEvents.js";
import card from "../data/handleData.js";
import page from "../data/handlePage.js";

const cardSection = document.querySelector(".card");
const watcher = document.querySelector(".watcher");

const cardItem = (card) => {
    const imageName = card.image.replace("jpg", "webp");
    const imageSrc = `/src/assets/images/recepes/${imageName}`;
    const ingredientList = card.ingredients.map(item => `
        <div class="ingredient">
            <p>${item.ingredient}</p>
            <span>${item.quantity ? item.quantity : ""} ${item.unit ? item.unit : ""}</span>
        </div>
    `).join("");

    return `
        <article class="card__wrapper card${card.id}" tabindex="0">
            <img src="${imageSrc}" width="380" height="253" alt="${card.name}" />
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
    `;
};

const insertCard = (card) => {
    cardSection.insertAdjacentHTML("beforeend", cardItem(card));
    cardEvent(document.querySelector(`.card${card.id}`));
};

export const loadCards = () => {
    const cardToLoad = 10;

    for (let i = 0; i < cardToLoad; i++) {
        const nextCard = card.getNextCard();
        nextCard && insertCard(nextCard);
    }
};

const handleIntersect = entries => {
    if (entries[0].isIntersecting) {
        loadCards();
    }
};

const lazyLoad = () => {
    if (page.observer) {
        page.observer.disconnect();
    }
    page.observer = new IntersectionObserver(handleIntersect);
    page.observer.observe(watcher);
};

const setCardItems = () => {
    lazyLoad();

    // tab sur derniere card = chargement des 10 prochaines
    document.addEventListener("keydown", e => {
        if (e.key === "Tab") {
            const lastCard = document.querySelector(".card article:last-child");

            if (document.activeElement === lastCard) {
                loadCards();
            }
        }
    });
};

export default setCardItems;    