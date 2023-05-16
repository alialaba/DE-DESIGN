import products from "./productsData.js"
const productElement = document.getElementById("product");
const productHeroSectionElement = document.createElement("section");
const productListSectionElement = document.createElement("section")
const productWrapHeroElement = document.createElement("div");
const productWrapProductListElement = document.createElement("div")
const productTitleElement = document.createElement("h1");
const productNameElement = document.createElement("span");

const productCoverImgElement = document.createElement("img");
// const productWorkLine = document.createElement("div");
const productWorkLineListElement = document.createElement("ul");


const productArticleElement = document.createElement("article");
const productArticleOneElement = document.createElement("article");
const productArticleOneImgElement = document.createElement("img");
const productArticleOneOverviewElement = document.createElement("p");

const productArticleImgListElement = document.createElement("article");








// Get the query parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");


// Find the product with the matching ID
const product = products.find((item) => item.id === Number(productId));
console.log(productElement);

if(product){

//Add Content
productTitleElement.textContent = product.title;
productNameElement.textContent= product.name;
productCoverImgElement.src = product.imgCover;
productArticleOneImgElement.src = product.productImg2["img"]
productArticleOneOverviewElement.textContent =  product.productImg2["overview"]


//Add ClassNames
productWrapHeroElement.classList.add("container" , "center");
productWrapProductListElement.classList.add("container" , "testing")
productArticleElement.className = "article"
productWorkLineListElement.className ="workline__list"

productArticleImgListElement.className ="product__img-list"

for (const key in product.jobDetail) {
    const productWorkLineItemElement = document.createElement("li");
    const paragraphTitle = document.createElement("p");
    const paragraphText = document.createElement("p");



    //ClassName
    productWorkLineItemElement.className = "workline__item";
    paragraphTitle.className = "workline__title";
    paragraphText.className = "workline__text";

    //Display Content
    paragraphTitle.textContent = key;
    paragraphText.textContent = product.jobDetail[key];

    //Append Element
    productWorkLineItemElement.appendChild(paragraphTitle);
    productWorkLineItemElement.appendChild(paragraphText);

    productWorkLineListElement.appendChild(productWorkLineItemElement)
    

}
// })

// let example = product.jobDetail;

// for(let i = 0; i < example.length; i++){
//     // console.log(example[i])
//     const  paragraphTitle = document.createElement("p");
//     const paragraphText = document.createElement("p");

//     paragraphTitle.textContent = `Client ${example[i].client}`
//     paragraphText.textContent = example[i].focus

//     productWorkLineItemElement.appendChild(paragraphTitle)
//     productWorkLineListElement.appendChild(productWorkLineItemElement);
    
// }


product.productImgDetails.map((imgUrl)=>{
    // console.log(imgUrl[index])

    const productArticleImgItemElement = document.createElement("div");
    const productArticleImgElement = document.createElement("img");

    //ClassNames
    productArticleImgItemElement.className ="product__img-item";
    productArticleImgElement.className = "product__img";
    productArticleImgElement.src = imgUrl;  

    //Append Element
    productArticleImgItemElement.appendChild(productArticleImgElement)
    productArticleImgListElement.appendChild(productArticleImgItemElement)
})


//AppendChild to parent Elements
productElement.firstElementChild.insertAdjacentElement("beforebegin" , productHeroSectionElement);
productElement.children[1].insertAdjacentElement("beforebegin", productListSectionElement)

productHeroSectionElement.appendChild(productWrapHeroElement);
productWrapHeroElement.appendChild(productTitleElement)
productWrapHeroElement.appendChild(productNameElement)



productListSectionElement.appendChild(productWrapProductListElement);
productWrapProductListElement.appendChild(productArticleElement);
productArticleElement.appendChild(productCoverImgElement)
productArticleElement.appendChild(productWorkLineListElement);
productArticleElement.appendChild(productWorkLineListElement)

productWrapProductListElement.appendChild(productArticleOneElement);
productArticleOneElement.appendChild(productArticleOneImgElement)
productArticleOneElement.appendChild(productArticleOneOverviewElement)
productWrapProductListElement.appendChild(productArticleImgListElement)
// productArticleImgListElement.appendChild(productArticleImgItemElement)

}