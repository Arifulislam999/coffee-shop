{
    let form = document.querySelector(".form");
    let form_f = document.querySelector(".fa-search");
    form.style.display = "none";
    form_f.addEventListener("click", () => {
        if (form.style.display === "none") {
            form.style.display = "inline";
        } else {
            form.style.display = "none";
        }
    });
}