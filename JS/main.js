
// Show active nav link 

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link)=>{
    if(link.href === window.location.href){
        link.setAttribute('aria-current' , 'page');
    }
})









