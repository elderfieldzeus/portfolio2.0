const buttons = document.querySelectorAll("li > a");
const nav = document.querySelector("nav");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const href = button.href;
        // alert(href);
        nameRise();
    });
});

// function navAnimation() {
//     const nav = document.querySelector("nav");
//     const divs = document.querySelectorAll("nav > div");

//     const rectangles = document.querySelectorAll(".lights");
//     const [left, right] = rectangles;

//     divs[0].classList.remove("text-5xl");
//     divs[0].classList.add("text-4xl");

//     nav.classList.add("animate-navRise");

    

//     divs[1].classList.add("hidden");
// }

function nameRise() {
    const name = document.getElementById("name");
}