import { inputClick } from "../components/sortEvents.js";
import searchBoxSort from "../components/searchEvent.js";
import setSortInputs from "../templates/sortItem.js";
import setCardItems from "../templates/cardItem.js";
import data from "../data/handleData.js";

const fetchData = async () => {
    const datas = await fetch("/src/scripts/data/data.json")
        .then(response => response.json());
    return datas;
}

const init = async () => {
    const searchBox = document.getElementById("search");
    data.cacheData = await fetchData();
    data.selectedIds = data.allIds;
    setSortInputs();
    inputClick();
    setCardItems(data.allIds);
    searchBox.addEventListener("input", searchBoxSort);
}

document.addEventListener("DOMContentLoaded", init);
