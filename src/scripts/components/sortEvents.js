import tag from "../data/handleTag.js";
import { removeTag, saveTag } from "../templates/tagItem.js";
import { capitalizeFirstLetter } from "../utils/functions.js";

function inputClick() {
    const wrappers = document.querySelectorAll(".wrapper");

    const toggleContent = e => {
        const selectBtn = e.target.closest(".select-btn");
        const search = selectBtn.nextElementSibling.querySelector("input");

        selectBtn.classList.toggle("active");
        selectBtn.classList.contains("active") && search.focus();
    };

    const handleClick = e => {
        toggleContent(e);
    };

    // gestion des touches clavier
    const handleKey = e => {
        switch (e.key) {
        case " ":
            if (e.target.classList.contains("select-btn")) {
                e.preventDefault();
                toggleContent(e);
            }
            break;

        case "Escape":
            e.preventDefault();
            if (e.target.closest(".wrapper")) {
                // refermer les menu deroulant au click extérieur
                const selectBtn = e.target.closest(".wrapper").querySelector(".select-btn");
                selectBtn.classList.remove("active");
                selectBtn.focus();
            }
            break;

        case "ArrowDown":
            e.preventDefault();
            if (e.target.tagName.toLowerCase() === "input" &&
                    e.target.name.toLowerCase().startsWith("search-tag-")) {
                // si on est sur l'input de recherche
                const nameList = e.target.closest(".content").classList[1].split("-")[1];
                const tagKey = `cached${capitalizeFirstLetter(nameList)}`;

                if (tag[tagKey].length) {
                    // aller au premier tag sauvegardé s'il existe
                    e.target.closest(".content").querySelector(".select-tag li").focus();
                } else {
                    // aller au premier li de la liste
                    e.target.closest(".content").querySelector(".options li").focus();
                }
            } else if (e.target.classList.contains("tag-element")) {
                // si on est sur les tags sauvegardés
                if (e.target.nextElementSibling) {
                    // aller au tag suivant
                    e.target.nextElementSibling.focus();
                } else {
                    // aller au premier li de la liste
                    e.target.closest(".content").querySelector(".options li").focus();
                }
            } else if (e.target.classList.contains("tag-list")) {
                // si on est sur la liste
                if (e.target.nextElementSibling) {
                    // aller l'item suivant s'il existe
                    e.target.nextElementSibling.focus();
                }
            }
            break;

        case "ArrowUp":
            e.preventDefault();
            if (e.target.classList.contains("tag-list")) {
                // si on est sur tag-list
                const nameList = e.target.closest(".content").classList[1].split("-")[1];
                const tagKey = `cached${capitalizeFirstLetter(nameList)}`;
                if (e.target.previousElementSibling) {
                    // aller au tag precedent s'il existe
                    e.target.previousElementSibling.focus();
                } else if (tag[tagKey].length) {
                    // aller aux tag sauvegardés s'il y en a
                    e.target.closest(".content").querySelector(".select-tag li:last-child").focus();
                } else {
                    // aller à l'input
                    e.target.closest(".content").querySelector(".search input").focus();
                }
            } else if (e.target.classList.contains("tag-element")) {
                // si on est sur tag-element
                if (e.target.previousElementSibling) {
                    // aller au tag precedent s'il existe
                    e.target.previousElementSibling.focus();
                } else {
                    // aller à l'input
                    e.target.closest(".content").querySelector(".search input").focus();
                }
            }
            break;

        case "Enter":
            e.preventDefault();
            if (e.target.classList.contains("tag-list")) {
                // sauvegarder le tag
                const ul = e.target.closest(".options");
                const nameList = ul.classList[1].split("-")[1];
                const tagItem = e.target.textContent;
                e.target.closest(".content").querySelector(".search input").focus();
                saveTag(nameList, tagItem);
                e.target.remove();
            }
            break;

        case "Backspace":
            if (e.target.classList.contains("tag-element")) {
                // supprimer le tag
                e.preventDefault();
                const nameList = e.target.closest(".content").classList[1].split("-")[1];
                const tagItem = e.target.textContent;
                e.target.closest(".content").querySelector(".search input").focus();
                removeTag(e.target, tagItem, nameList);
            }
            break;

        default:
            break;
        }
    };

    for (const wrapper of wrappers) {
        const selectBtn = wrapper.querySelector(".select-btn");

        selectBtn.addEventListener("click", handleClick);

        document.addEventListener("click", e => {
            if (!wrapper.contains(e.target)) {
                selectBtn.classList.remove("active");
            }
        });

        document.addEventListener("keydown", handleKey);
    }
}

export default inputClick;