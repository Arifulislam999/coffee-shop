{
    let form = document.querySelector("#fr");
    let form_f = document.querySelector(".fae");
    console.log(form_f);
    // form.style.display = "none";
    form.style.transform = "translateY(-60px)";
    form_f.addEventListener("click", () => {
        if (form.style.transform === "translateY(-60px)") {
            form.style.transform = "translateY(0px)";
        } else {
            form.style.transform = "translateY(-60px)";
        }
    });
}

{
    let dco = document.querySelector("#card-part");
    let docc = document.querySelector(".fa-shopping-cart");
    dco.style.transform = "translateX(-2500px)";

    docc.addEventListener("click", () => {
        if (dco.style.transform === "translateX(-2500px)") {
            dco.style.transform = "translateX(0px)";
        } else {
            dco.style.transform = "translateX(-2500px)";
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