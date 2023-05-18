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
        overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
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
         overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
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
    year: "2010 - 2014",
    items: [
      {
        title: "Bachelor Degree of Design",
        description: "UDUS University"
      },
      {
        title: "UI/UX Design Certificate",
        description: "Sokoto State University"
      }
    ]},
  {
    year: "2015- 2002",
    items: [
      {
        title: "Design Internship",
        description: "Udemy"
      },
      {
        title: "XD, Designer",
        description: "Freelancer"
      }
    ]},
  {

    year: "2020- 2022",
    items: [
      {
        title: "Junior Designer",
        description: "iDesign"
      },
      {
        title: "Lead Graphic Design",
        description: "iHome Interorr"
      }
    ]}

]


export {products, timeline};