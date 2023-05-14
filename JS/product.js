import products from "./productsData.js"
const productElement = document.getElementById("product");


// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


// Find the product with the matching ID
const product = products.find((item) => item.id === Number(productId));
console.log(product)

// console.log(productId)
// const product = products.find((item) => {
//     return item.id === Number(productId)
// });

// console.log(product)
// const productNameElement = document.createElement("div");
// productNameElement.textContent = product.name
// pro.appendChild(productNameElement)