let mobileNav = document.querySelector('.mobile__navigation');
let mobileNavFull = document.querySelector('.mobile__navigation--full');
//let hamBurg = document.getElementById('hamburger-icon');
let hamBurg = document.querySelector('.hamburger-container');

hamBurg.addEventListener('click', () => {

    //mobileNav.classList.toggle('show');
    mobileNavFull.classList.toggle('show');
    hamBurg.classList.toggle('hamburger-container-new')
})
