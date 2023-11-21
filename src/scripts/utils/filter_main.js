import card from "../data/handleData.js";
import page from "../data/handlePage.js";
import filterFunctionnal from "../utils_advanced/filters.js";
import filterNative from "./filters.js";
import { calculTime, displayPerformanceTable } from "./functions.js";

function setPerformanceBanner(native, functionnal) {
    const paraNative = document.querySelector(".result-native");
    const paraFunctionnal = document.querySelector(".result-functionnal");

    page.native = parseFloat(native);
    page.functionnal = parseFloat(functionnal);

    const sumNative = page.native.reduce((acc, curr) => acc + curr, 0) / page.native.length;
    const sumFunctionnal = page.functionnal.reduce((acc, curr) => acc + curr, 0) / page.functionnal.length;

    paraNative.style.color = sumNative < sumFunctionnal ? "green" : "red";
    paraNative.innerHTML = `Native = ${sumNative.toFixed(1)} ms`;

    paraFunctionnal.style.color = sumNative < sumFunctionnal ? "red" : "green";
    paraFunctionnal.innerHTML = `Functionnal = ${sumFunctionnal.toFixed(1)} ms`;
}

function filter(e = null) {
    card.searchValue = e?.target?.value ?? card.searchValue;
    const native = calculTime(filterNative, e);
    const functionnal = calculTime(filterFunctionnal, e);

    setPerformanceBanner(native.elapsedTime, functionnal.elapsedTime);
    card.indexes = native.newIndexes;
    page.performance && displayPerformanceTable(native.elapsedTime, functionnal.elapsedTime);
    card.render(card.searchValue && card.searchValue);
}

export default filter;