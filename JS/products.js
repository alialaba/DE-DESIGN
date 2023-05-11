//PRODUCt
import products from "./productsData.js"

console.log(products)

//DOM Variable Elements
const productsList = document.getElementById("product__list");

console.log(productsList)

products.forEach((product)=>{

//Elements Variables
const productElement = document.createElement("div");
const productImgElement = document.createElement("img");
const productNameElement = document.createElement("p");
// const productLinkIcon = document.createElement("");



//Assign data content
productNameElement.textContent = product.name;
productImgElement.src = product.imgCover;
productImgElement.alt = product.name;

//Assign classNames
productElement.className ="product__item"
productImgElement.className ="product__img"
productNameElement.className ="product__name"




//AppendChild to parent Elements
productsList.appendChild(productElement)
productElement.appendChild(productNameElement)
productElement.appendChild(productImgElement)


})