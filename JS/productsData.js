//DUMMY DATA
const products =[
    {
    id: 1,
    name: "ProductA",
    done: true,
    imgCover: "https://i.ibb.co/cgqPC3V/aire.png",
    details: {
      title: "Black",
      label: "0.5 kg",
      productImg: "10 x 5 x 2 inches",
      productImg2: {
        img:"https://example.com/productB.jpg",
        overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
     },
     productImg3: "https://example.com/productB.jpg",
     productImg4: "https://example.com/productB.jpg",
     productImg5: "https://example.com/productB.jpg",  
    },
  },
  {
    id: 2,
    name: "ProductB",
    done: false,
    imgCover: "https://i.ibb.co/YNRBXV1/correlated.png",
    details: {
      title: "Silver",
      label: "1.2 kg",
      productImg: {
        img:"https://example.com/productB.jpg",
        client: "Product B",
        role:"Lead designer",
        focus:"Deign"
      },
      productImg2: {
         img:"https://example.com/productB.jpg",
         overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
      },
      productImg3: "https://example.com/productB.jpg",
      productImg4: "https://example.com/productB.jpg",
      productImg5: "https://example.com/productB.jpg",
    }
  }
]


export default products;