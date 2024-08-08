//global variable declaration
const buttons = document.querySelectorAll("li > a");
const navbar = document.getElementById("navbar");
const Name = document.getElementById("name");
//home variable for fade animation
let inHome = true;






//FUNCTION CALLS

//intersection observers
listenHome();
listenList();

//zebra background assignment
backgroundAssignment();

//firework and dancing hover animation
welcomeAnimation();

//flip cards
flipCards();

//carousel
galleryCarousel();







//FUNCTION DEFINITIONS

function backgroundAssignment() {
    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
        section.style.color = (index % 2) ? '#121212' : '#E0E0E0';
        section.style.backgroundColor = (index % 2) ? '#E0E0E0' : '#121212';
    });
}

//entering main website
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if(!navbar.classList.contains('scroll')) {
            e.preventDefault();

            const href = button.href;
            navbarRise(href);
            navbar.classList.add('scroll');
        }
    });
});

//leaving main website
Name.addEventListener("click", () => {
    if(navbar.classList.contains('scroll')) {
        window.location.href = '#home';
        setTimeout(() => {
            navbarFade();
            navbar.classList.remove('scroll');
        }, (inHome == true) ? 0 : 600);
        
    }
});

//entering main website animation
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

    footer.style['display'] = 'flex';

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

//leaving main website animation
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

//home intersection observer function
function listenHome() {
    const home = document.getElementById("home");

    const home_observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
              inHome = true;
          }
          else {
              inHome = false;
          }
        });
      }, {
          root: null,
          rootMargin: "0px",
          threshold: [0.1, 1]
      });
      
      home_observer.observe(home);
}

//section intersection observer function
function listenList() {
    const lists = document.querySelectorAll("#anchors>li");

    lists.forEach((list) => {
        const id = list.firstChild.href.split('#')[1];

        const element = document.getElementById(id);

        const list_observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    list.style.setProperty('--after-width', '100%');
                }
                else {
                    list.style.setProperty('--after-width', '0');
                }
            })
        }, {
            root: null,
            rootMargin: '0px',
            threshold: [0.5, 1]
        });

        list_observer.observe(element);
    });
} 

function welcomeAnimation() {
    const welcome = document.getElementById("welcome");
    const dancer = document.getElementById("dancer");

    welcome.addEventListener("mouseover", () => {
        dancer.style['opacity'] = 1;
        welcome.style.setProperty('--firework-opacity', '1');
        welcome.style['text-shadow'] = '0 0 5px #E0E0E0';
    });

    welcome.addEventListener("mouseout", () => {
        dancer.style['opacity'] = 0;
        welcome.style.setProperty('--firework-opacity', '0');
        welcome.style['text-shadow'] = 'none';
    });
}

function flipCards() {
    const cards = document.querySelectorAll(".card");
    const filter = document.querySelectorAll(".card-filter");

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            if(card.classList.contains('flipped')) {
                card.style['transform'] = 'none';
                card.classList.remove('flipped');
                filter[index].style['display'] = 'flex';
            }
            else {
                card.style['transform'] = 'rotateY(180deg)';
                card.classList.add('flipped');
                filter[index].style['display'] = 'none';
            }
        });
    })
}

function galleryCarousel() {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
            const slides = document.querySelector(".gallery-slides");
            const active = slides.querySelector("[data-active]");
            let newIndex = [...slides.children].indexOf(active) + offset;
            if(newIndex < 0) newIndex = slides.children.length - 1;
            if(newIndex >= slides.children.length) newIndex = 0;

            slides.children[newIndex].dataset.active = "";
            delete active.dataset.active;
        })
    })
}