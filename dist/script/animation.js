const buttons = document.querySelectorAll("li > a");
const navbar = document.getElementById("navbar");
const Name = document.getElementById("name");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(!navbar.classList.contains('home')) {
            e.preventDefault();

            const href = button.href;
            navbarRise(href);
            navbar.classList.add('home');
        }
    });
});

Name.addEventListener("click", () => {
    if(navbar.classList.contains('home')) {
        window.location.href = '#home';
        setTimeout(() => {
            navbarFade();
            navbar.classList.remove('home');
        }, 800);
        
    }
});

function navbarRise(href) {
    const softeng = document.getElementById("softeng");
    const leftLight = document.getElementById("leftLight");
    const rightLight = document.getElementById("rightLight");

    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    navbar.style['top'] = 0;
    navbar.style['left'] = 0;
    navbar.style['transform'] = 'translate(0,0)';
    navbar.style['opacity'] = '0';
    Name.style['font-size'] = '2.25rem';
    Name.style['line-height'] = '2.5rem';
    leftLight.style['left'] = rightLight.style['right']  = '-80rem';
    leftLight.style['top'] = rightLight.style['top']  = '-60rem';
    leftLight.style['rotate'] = '25deg';
    rightLight.style['rotate']  = '-25deg';

    sections.forEach((section) => {
        section.style['display'] = 'flex';
    });

    footer.style['display'] = 'block';

    setTimeout(()=> {
        navbar.style['flex-direction'] = 'row';
        navbar.style['justify-content'] = 'space-between';
        navbar.style['z-index'] = 20;
        softeng.style['display'] = 'none';  
        navbar.style['opacity'] = '1';

        sections.forEach((section) => {
            section.style['opacity'] = '1';
        });

        footer.style['opacity'] = '1';
    }, 400);

    setTimeout(()=> {
        leftLight.style['display'] = rightLight.style['display']  = 'none';
        window.location.href = href;
    }, 1000);
}

function navbarFade() {
    const navbar = document.getElementById("navbar");
    const softeng = document.getElementById("softeng");
    const leftLight = document.getElementById("leftLight");
    const rightLight = document.getElementById("rightLight");

    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");

    leftLight.style['display'] = rightLight.style['display']  = 'block';

    navbar.style['z-index'] = 0;
    navbar.style['opacity'] = '0';
    Name.style['font-size'] = '3rem';
    Name.style['line-height'] = '1';

    sections.forEach((section) => {
        section.style['opacity'] = '0';
    });

    footer.style['opacity'] = '0';

    setTimeout(() => {
        navbar.style['top'] = '50%';
        navbar.style['left'] = '50%';
        navbar.style['transform'] = 'translate(-50%,-50%)';
    }, 400);

    setTimeout(() => {
        leftLight.style['left'] = rightLight.style['right']  = '-18rem';
        leftLight.style['top'] = rightLight.style['top']  = '-9rem';
        leftLight.style['rotate'] = '12deg';
        rightLight.style['rotate']  = '-12deg';

        sections.forEach((section) => {
            section.style['display'] = 'none';
        });
    }, 500);

    setTimeout(()=> {
        navbar.style['flex-direction'] = 'column';
        navbar.style['justify-content'] = 'center';
        softeng.style['display'] = 'block';  
        navbar.style['opacity'] = '1';

        footer.style['display'] = 'none';
    }, 800);
}