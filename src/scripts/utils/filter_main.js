import card from "../data/handleData.js";
import filterFunctionnal from "../utils_advanced/filters.js";
import filterNative from "./filters.js";
import { calculTime, displayPerformanceTable } from "./functions.js";

function filter(e = null) {
    card.searchValue = e?.target?.value ?? card.searchValue;
    const native = calculTime(filterNative, e);
    const functionnal = calculTime(filterFunctionnal, e);

    card.indexes = native.newIndexes;
    card.performance && displayPerformanceTable(native.elapsedTime, functionnal.elapsedTime);
    card.render(card.searchValue && card.searchValue);
}

export default filter;