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
                // Vérifier si l'élément cliqué possède la classe .close-tag
                const isCloseTag = e.target.classList.contains("close-tag");
                const isTagList = e.target.classList.contains("tag-list");

                // Ne fermer que si l'élément cliqué n'est pas .close-tag
                if (!isCloseTag || !isTagList) {
                    input.classList.remove("active");
                    input.querySelector(".content").style.display = "none";
                }
            }
        }
    });
}
