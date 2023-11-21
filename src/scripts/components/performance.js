import page from "../data/handlePage.js";

function performance() {
    const switchPerf = document.getElementById("switch-performance");

    switchPerf.addEventListener("change", () => {
        page.performance = switchPerf.checked;
        console.log(switchPerf.checked ? "performance enable" : "performance disabled");
        document.querySelector(".banner-performance").classList.toggle("active");
    });
}

export default performance;
