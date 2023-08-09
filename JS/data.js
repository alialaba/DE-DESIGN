//DUMMY DATA
const products =[
    {
    id: 1,
    name: "ProductA",
    done: true,
    imgCover: "https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=2048",
    title: "Black is beautiful",
    jobDetail:{
      client: "ProductA",
      role: "Creative Director",
      focus: "Brand identity"
    },
    productImg2: {
    img:"https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=2048",
        overview: "As a lead designer, I played a pivotal role in designing and implementing a robust e-commerce platform, resulting in a 30% increase in sales within the first quarter. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
    },
     productImgDetails:["https://framerusercontent.com/images/3wAtzo0qvmxyJhsWXvruyTZtRU.jpg?scale-down-to=2048","https://i.ibb.co/cgqPC3V/aire.png", "https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=2048", "https://i.ibb.co/YNRBXV1/correlated.png"]  
  },
  {
    id: 2,
    name: "ProductB",
    done: false,
    imgCover: "https://i.ibb.co/YNRBXV1/correlated.png",
    title: "Blue is awesome",
    jobDetail:{
      client: "ProductB",
      role: "Creative Director",
      focus: "Brand identity"
    },
      productImg2: {
         img:"https://example.com/productB.jpg",
         overview: "As a lead developer, I played a pivotal role in designing and implementing a robust e-commerce platform, resulting in a 30% increase in sales within the first quarter,  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
      },
      productImgDetails:["https://example.com/productB.jpg", "https://example.com/productB.jpg", "https://example.com/productB.jpg"]
    },
  {
    id: 3,
    name: "ProductC",
    done: true,
    imgCover: "https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024",
    title: "To deal with every day Job",
    jobDetail:{
      client: "ProductC",
      role: "Creative Director",
      focus: "Brand identity"
    },
    productImg2: {
    img:"https://framerusercontent.com/images/jpsrtmn5ap2vvXaeFrEIH8inMSU.jpg?scale-down-to=2048",
    overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
    },
    productImgDetails:
    ["https://example.com/productB.jpg","https://example.com/productB.jpg", "https://example.com/productB.jpg"]
    },
    {
      id: 4,
      name: "ProductD",
      done: true,
      imgCover: "https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg?scale-down-to=2048",
      title: "A better way to deal with every day",
      jobDetail:{
        client: "ProductD",
        role: "Creative Director",
        focus: "Brand identity"
      },
      productImg2: {
      img:"https://example.com/productB.jpg",
          overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
      }, 
      productImgDetails:
       ["https://example.com/productB.jpg","https://example.com/productB.jpg","https://example.com/productB.jpg",  ]
      }
    

]


const timeline =[
  {
    year: "2021 - 2022",
    items: [
      {
        title: "User Experience Certificate",
        description: "Interaction Design Foundation"
      },
      {
        title: "UX Portfolio Certificate",
        description: "Interaction Design Foundation"
      }
    ]},
  {
    year: "2023 - till date",
    items: [
      {
        title: "Lead Graphic UI Design",
        description: "Brainstack Academy"
      },
      {
        title: "UI/UX Designer",
        description: "Sparro"
      }
    ]},
  {

    year: "2021- 2022",
    items: [
      {
        title: "UI/UX Designer",
        description: "Taskmobile.ng"
      },
      {
        title: "Lead Product Designer",
        description: "Tracker"
      }
    ]}

]


export {products, timeline};