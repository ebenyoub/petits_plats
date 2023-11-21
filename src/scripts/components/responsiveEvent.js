import page from "../data/handlePage.js";
import tag from "../data/handleTag.js";

const handleResponsive = () => {
    const searchMain = document.getElementById("search-main");
    const inputs = document.querySelector(".inputs");
    const filterBtn = document.querySelector(".filterBtn");
    const overlay = document.querySelector(".overlay");
    const applyBtn = document.querySelector(".inputs .filter");
    const reset = document.querySelector(".inputs .reset");
    const body = document.body;

    const handleSearchResponsive = () => {
        if (page.width < 485) {
            searchMain.placeholder = "Recherche...";
        } else {
            searchMain.placeholder = "Rechercher une recette, un ingrédient...";
        }

        if (page.filter && page.width >= 768) {
            inputs.classList.remove("responsive");
            overlay.style.display = "none";
            applyBtn.style.display = "none";
            page.filter = false;
        } else {
            body.classList.remove("no-scroll");
        }
    };

    handleSearchResponsive();

    window.addEventListener("resize", () => {
        handleSearchResponsive();
    });

    filterBtn.addEventListener("click", () => {
        page.filter = true;
        const cards = document.querySelectorAll(".card__wrapper");

        inputs.classList.add("responsive");
        overlay.style.display = "block";
        applyBtn.style.display = "inline-block";
        body.classList.add("no-scroll");
        cards.forEach(card => card.setAttribute("tabindex", "-1"));
    });
    
    applyBtn.addEventListener("click", () => {
        body.classList.remove("no-scroll");
        inputs.classList.remove("responsive");
        overlay.style.display = "none";
    });

    document.addEventListener("keydown", e => {
        if (body.classList.contains("no-scroll") && e.key === "Escape") {
            body.classList.remove("no-scroll");
            inputs.classList.remove("responsive");
            overlay.style.display = "none";
        }
    });

    reset.addEventListener("click", () => {
        tag.cachedAppliances = [];
        tag.cachedIngredients = [];
        tag.cachedUstensils = [];
        document.querySelectorAll(".select-tag")
            .forEach(div => div.innerHTML = null);
    });
};

export default handleResponsive;