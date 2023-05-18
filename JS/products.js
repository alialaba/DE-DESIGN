//PRODUCt
import {products, timeline }from "./data.js"


//DOM Variable Elements
const productsList = document.getElementById("product__list");
const experienceTimeline = document.querySelector(".timeline");


function showProductList(product){
    //Elements Variables
const productElement = document.createElement("article");
const productImgElement = document.createElement("img");
const productNameElement = document.createElement("p");
const productLinkIconElement = document.createElement("a");
const productLinkElement = document.createElement("a")
const iconElement = document.createElement('i');
const productOverlayElement = document.createElement("div");
const productContentElement = document.createElement("div");
const productColTextElement = document.createElement("div");
const productColIconElement = document.createElement("div")
const productComingSoon = document.createElement("p");


// const productElem = document.createElement("div");

//Assign data content
productNameElement.textContent = product.name;
productImgElement.src = product.imgCover;
productImgElement.alt = product.name;

//Assign classNames
productElement.className ="product__item"
productImgElement.className ="product__img"
productNameElement.className ="product__name"
productOverlayElement.className ="product__overlay"
productContentElement.className = "product__content"

//Conditional Link Icon display
if(product.done){
    // display link icon
    iconElement.classList.add("fa-solid", "fa-arrow-up");
    productLinkIconElement.classList.add("product__link", "product__link--light");
    productLinkElement.className ="product__link-overlay"

    // Create a click event listener for the product link element
    productLinkElement.addEventListener("click", function(){window.location.href = `product.html?id=${product.id}`});
    productLinkIconElement.addEventListener("click", function(){window.location.href = `product.html?id=${product.id}`})

}else{
    //display lock icon
    iconElement.classList.add("fa-solid", "fa-lock");
    productLinkIconElement.classList.add("product__link", "product__link--dark");

    productComingSoon.className = "product__coming-soon"
    productComingSoon.textContent ="Coming soon";
    productColTextElement.appendChild(productComingSoon);
}


//AppendChild to parent Elements
productsList.appendChild(productElement);
// productElement.appendChild(productOverlayElement);
productElement.append(productLinkElement);
productLinkElement.appendChild(productOverlayElement)

productElement.appendChild(productImgElement);
productElement.appendChild(productContentElement);
// productContentElement.appendChild(productNameElement);
// productContentElement.appendChild(productLinkIconElement);
productContentElement.appendChild(productColTextElement);
productContentElement.appendChild(productColIconElement);
productColTextElement.appendChild(productNameElement);
productColIconElement.appendChild(productLinkIconElement);
productLinkIconElement.appendChild(iconElement)


}





//DOM Variable element
console.log(experienceTimeline)



function showExperienceTimeline(item){

 //DOM create Element
 const timelineColumnElement = document.createElement("article");
 const timelineYearElement = document.createElement("p");
 const timelineListElement = document.createElement("ul");



 for (const key in item.items) {
    console.log(item.items[key])
    const timelineItemElement = document.createElement("li");
    const timelineTitleElement = document.createElement("h4");
    const timelineDescElement = document.createElement("p");

    timelineTitleElement.textContent = item.items[key].title;
    timelineDescElement.textContent = item.items[key].description

    //Style Name
    timelineItemElement.className = "timeline__item";
    timelineTitleElement.className ="timeline__title";
    timelineDescElement.className ="timeline__description";
   
    //Append Element
    timelineListElement.appendChild(timelineItemElement);
    timelineItemElement.appendChild(timelineTitleElement);
    timelineItemElement.appendChild(timelineDescElement);
    
 }

//Show Content
timelineYearElement.textContent =item.year

 //Style Name
 timelineColumnElement.className ="timeline__col";
 timelineYearElement.className="timeline__year";
 timelineListElement.className="timeline__list"


//Append Elements
 experienceTimeline.appendChild(timelineColumnElement);
 timelineColumnElement.appendChild(timelineYearElement);
 timelineColumnElement.appendChild(timelineListElement)

}
timeline.forEach((item)=> showExperienceTimeline(item))
products.forEach((product)=> showProductList(product))