import tag from "../data/handleTag.js";
import { createList } from "../templates/tagItem.js";
import { isValueInItem } from "../utils/functions.js";

const sortWithTag = () => {
    const options = Array.from(document.querySelector(".inputs").children);
    options.forEach(option => {
        const input = option.querySelector("input[id^=\"search-\"");
        const ul = option.querySelector(".options");
        const nameList = input.getAttribute("name").split("-")[1];
        input.addEventListener("input", e => {
            const newList = tag[nameList].filter(item => isValueInItem(item, e.target.value));
            ul.innerHTML = null;
            createList(nameList, ul, newList);
        });
    });
};

export default sortWithTag;