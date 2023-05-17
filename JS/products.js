//PRODUCt
import products from "./productsData.js"

// console.log(products)

//DOM Variable Elements
const productsList = document.getElementById("product__list");

// console.log(productsList)

products.forEach((product)=>{

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


})



