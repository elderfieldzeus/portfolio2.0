const buttons = document.querySelectorAll("li > a");
const nav = document.querySelector("nav");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        e.preventDefault();

        const href = button.href;
        // alert(href);
        navbarRise();
    });
});

function navbarRise() {
    const navbar = document.getElementById("navbar");
    const name = document.getElementById("name");
    const softeng = document.getElementById("softeng");
    const leftLight = document.getElementById("leftLight");
    const rightLight = document.getElementById("rightLight");

    navbar.style['top'] = 0;
    navbar.style['left'] = 0;
    navbar.style['transform'] = 'translate(0,0)';
    navbar.style['opacity'] = '0';
    name.style['font-size'] = '2.25rem';
    name.style['line-height'] = '2.5rem';
    leftLight.style['left'] = rightLight.style['right']  = '-80rem';
    leftLight.style['top'] = rightLight.style['top']  = '-60rem';
    leftLight.style['rotate'] = '25deg';
    rightLight.style['rotate']  = '-25deg';

    setTimeout(()=> {
        navbar.style['flex-direction'] = 'row';
        navbar.style['justify-content'] = 'space-between';
        navbar.style['z-index'] = 20;
        softeng.style['display'] = 'none';  
        navbar.style['opacity'] = '1'; 
    }, 400);

    setTimeout(()=> {
        leftLight.style['display'] = rightLight.style['display']  = 'none';     
    }, 800);
}