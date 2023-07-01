const navSlide = () => {
    const menuButton = document.querySelector('.menu-button');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // toggling the nav menu
    menuButton.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');

        // animating the menu items
        navLinks.forEach((link, index) => {
            // adding a fade between each item with "index"
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
        //mobile button animation into an x
        menuButton.classList.toggle('toggle');
    });
}

//for multiple small functions to call
//const mobile = () => {
    //navSlide();
    //navSlide();
    //navSlide();
    //navSlide();
//}

//for single functions to call
navSlide();