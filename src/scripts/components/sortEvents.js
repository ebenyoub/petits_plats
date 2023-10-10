export const inputClick = () => {
    const wrappers = document.querySelector(".inputs").children;

    for (let input of wrappers) {
        const selectBtn = input.querySelector(".select-btn");
        const content = input.querySelector(".content");

        selectBtn.addEventListener("click", (e) => {
            input.classList.toggle("active");
            content.style.display = input.classList.contains("active") ? "block" : "none";
        });
    }

    document.addEventListener("click", (e) => {
        const inputs = document.querySelector(".inputs").children;

        for (let input of inputs) {
            if (!input.contains(e.target)) {
                input.classList.remove("active");
                input.querySelector(".content").style.display = "none";
            }
        }
    });
}


const selectTag = (tag) => {

}
