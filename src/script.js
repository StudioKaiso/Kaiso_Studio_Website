import mediumZoom from 'medium-zoom'

// ------------------------------ menu BURGER ------------------------------ //

"use strict";
window.addEventListener("DOMContentLoaded", (event) => {
    /* menu */
    const menu = document.getElementById("Menu");
    const cmdMenu = document.getElementById("CmdMenu");
    const Logo = document.getElementById("Logo");
    const header = document.querySelector("header");

    /* menu BURGER ANIMATION */
    //const Anim = document.getElementById("X");

    const up = document.getElementById("menu-up");
    const middle = document.getElementById("menu-middle");
    const down = document.getElementById("menu-down");

    //Count when the menu is clicked
    var isChecked = 1;

    cmdMenu.addEventListener('click', function () {
        menu.style.display = (menu.style.display == 'none') ? 'inherit' : 'none';

        isChecked += 1;

        /* menu BURGER ANIMATION */
        if (isChecked % 2 == 0) {
            up.style.transform = 'translate(0%, 400%) rotate(45deg)';
            down.style.transform = 'translate(0%, 200%) rotate(-45deg)';
            middle.style.visibility = 'hidden';

            up.style.transition = "all 0.5s";
            down.style.transition = "all 0.5s";

            let children = document.querySelector("body").children;
            for (let i = 0; i < children.length; i++){
                children[i].style.filter = 'blur(10px)';
                header.style.filter = 'blur(0px)'
            }

        } else {
            up.style.transform = 'rotate(0deg) scale(1)';
            down.style.transform = 'rotate(0deg) scale(1)';
            middle.style.visibility = 'visible';

            let children = document.querySelector("body").children;
            for (let i = 0; i < children.length; i++){
                children[i].style.filter = 'blur(0px)';
                header.style.filter = 'blur(0px)'
            }
        }
    });

    //Loading page
    window.onload = function () {
        //Windows width
        var ww = window.innerWidth; //In pixels
        menu.style.display = (ww > 650) ? '' : 'none';
        cmdMenu.style.display = (ww > 650) ? 'none' : '';
    };
    //Changing width
    window.onresize = function () {
        //Windows width
        var ww = window.innerWidth; //In pixels
        menu.style.display = (ww > 650) ? '' : 'none';
        cmdMenu.style.display = (ww > 650) ? 'none' : '';
    };

});

mediumZoom('.zoom', {
    margin: 20,
    background: '#17222b',
    scrollOffset: 40,
});



"use strict";
window.addEventListener("DOMContentLoaded", (event) => {

    const container1 = document.getElementById("phase1");
    const logo1 = document.getElementById("phase-logo1");
    const text1 = document.getElementById("phase-text1");

    container1.addEventListener('touchstart', function () {
        logo1.style.display = (logo1.style.display == 'none') ? 'inherit' : 'none';
        text1.style.display = (text1.style.display == 'flex') ? 'inherit' : 'flex';
    });

    container1.addEventListener('touchend', function () {
        logo1.style.display = (logo1.style.display == 'block') ? 'inherit' : 'block';
        text1.style.display = (text1.style.display == 'none') ? 'inherit' : 'none';
    });

    container1.addEventListener('mouseenter', function () {
        logo1.style.display = (logo1.style.display == 'none') ? 'inherit' : 'none';
        text1.style.display = (text1.style.display == 'flex') ? 'inherit' : 'flex';
    });

    container1.addEventListener('mouseleave', function () {
        logo1.style.display = (logo1.style.display == 'block') ? 'inherit' : 'block';
        text1.style.display = (text1.style.display == 'none') ? 'inherit' : 'none';
    });
});

"use strict";
window.addEventListener("DOMContentLoaded", (event) => {

    const container2 = document.getElementById("phase2");
    const logo2 = document.getElementById("phase-logo2");
    const text2 = document.getElementById("phase-text2");

    container2.addEventListener('touchstart', function () {
        logo2.style.display = (logo2.style.display == 'none') ? 'inherit' : 'none';
        text2.style.display = (text2.style.display == 'flex') ? 'inherit' : 'flex';
    });

    container2.addEventListener('touchend', function () {
        logo2.style.display = (logo2.style.display == 'block') ? 'inherit' : 'block';
        text2.style.display = (text2.style.display == 'none') ? 'inherit' : 'none';
    });

    container2.addEventListener('mouseenter', function () {
        logo2.style.display = (logo2.style.display == 'none') ? 'inherit' : 'none';
        text2.style.display = (text2.style.display == 'flex') ? 'inherit' : 'flex';
    });

    container2.addEventListener('mouseleave', function () {
        logo2.style.display = (logo2.style.display == 'block') ? 'inherit' : 'block';
        text2.style.display = (text2.style.display == 'none') ? 'inherit' : 'none';
    });
});

"use strict";
window.addEventListener("DOMContentLoaded", (event) => {

    const container3 = document.getElementById("phase3");
    const logo3 = document.getElementById("phase-logo3");
    const text3 = document.getElementById("phase-text3");

    container3.addEventListener('touchstart', function () {
        logo3.style.display = (logo3.style.display == 'none') ? 'inherit' : 'none';
        text3.style.display = (text3.style.display == 'flex') ? 'inherit' : 'flex';
    });

    container3.addEventListener('touchend', function () {
        logo3.style.display = (logo3.style.display == 'block') ? 'inherit' : 'block';
        text3.style.display = (text3.style.display == 'none') ? 'inherit' : 'none';
    });

    container3.addEventListener('mouseenter', function () {
        logo3.style.display = (logo3.style.display == 'none') ? 'inherit' : 'none';
        text3.style.display = (text3.style.display == 'flex') ? 'inherit' : 'flex';
    });
    
    container3.addEventListener('mouseleave', function () {
        logo3.style.display = (logo3.style.display == 'block') ? 'inherit' : 'block';
        text3.style.display = (text3.style.display == 'none') ? 'inherit' : 'none';
    });
});