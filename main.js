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

// owl carousel part code
{
    $(".carousel").owlCarousel({
        margin: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });
}
// owl carousel part end