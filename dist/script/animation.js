const buttons = document.querySelectorAll("li > a");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const href = button.href;
        // alert(href);
        lightsAnimation();
    });
});

function lightsAnimation() {
    const nav = document.querySelector("nav");
    const divs = document.querySelectorAll("nav > div");

    const rectangles = document.querySelectorAll(".lights");
    const [left, right] = rectangles;
    
    nav.classList.remove("landing_nav");
    nav.classList.add("focus_nav");

    divs[0].classList.remove("text-5xl");
    divs[0].classList.add("text-4xl");

    divs[1].classList.add("hidden");
}