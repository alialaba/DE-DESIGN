
// Show active nav link 

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link)=>{
    if(link.href === window.location.href){
        link.setAttribute('aria-current' , 'page');
    }
})




const sections = document.querySelectorAll("section");

//Create an intersection Observer Api
const observerOptions ={
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
}

let observer = new IntersectionObserver((entries)=>{
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add("fade__view");
        observer.unobserve(entry.target);
    }
   })


}, observerOptions);

//create Fade Transitions
function fadeTransition(section){
    const fadeDelays = document.querySelectorAll(".fade__delay");
    for (let index = 0; index < fadeDelays.length; index++) {
        const fadeElement = fadeDelays[index];
        fadeElement.setAttribute('style', 'transition-delay: ' + index * 0.5 + 's' ) 
    }
    observer.observe(section)
}

sections.forEach((section) => window.addEventListener("DOMContentLoaded" , fadeTransition(section)))





