const cardEvent = (card) => {
    const more = card.querySelector(".more");
    const description = card.querySelector(".description");
    const ingredients = card.querySelector(".ingredients");

    more.addEventListener("click", () => {
        if (!description.classList.contains("grow")) {
            ingredients.style.display = "none";
            description.classList.add("grow");
            more.textContent = "Retour";
        } else {
            ingredients.style.display = "block";
            description.classList.remove("grow");
            more.textContent = "Afficher tout";
        }
    });
};

export default cardEvent;
