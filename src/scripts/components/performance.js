import card from "../data/handleData.js";

function performance() {
    const switchPerf = document.getElementById("switch-performance");

    switchPerf.addEventListener("change", () => {
        card.performance = switchPerf.checked;
        console.log(switchPerf.checked ? "performance enable" : "performance disabled");
    });
}

export default performance;
