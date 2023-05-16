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
const productLinkElement = document.createElement("a");
const iconElement = document.createElement('i');
const productOverlayElement = document.createElement("div");
const productContentElement = document.createElement("div");


// const productElem = document.createElement("div");



//Assign data content
productNameElement.textContent = product.name;
// productLinkElement.textContent = "he"
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
    // diplay link icon
    iconElement.classList.add("fa-solid", "fa-arrow-up");
    productLinkElement.classList.add("product__link", "product__link--light");

    // Create a click event listener for the product link element
    productLinkElement.addEventListener("click", function(){
    console.log("clicked")

    window.location.href = `product.html?id=${product.id}`;  
})
}else{
    //display lock icon
    iconElement.classList.add("fa-solid", "fa-lock");
    productLinkElement.classList.add("product__link", "product__link--dark");
}


// pro.appendChild(productElem);



//AppendChild to parent Elements
productsList.appendChild(productElement);
productElement.appendChild(productOverlayElement);
productElement.appendChild(productImgElement);
productElement.appendChild(productContentElement);
productContentElement.appendChild(productNameElement);
productContentElement.appendChild(productLinkElement);
productLinkElement.appendChild(iconElement)


})



