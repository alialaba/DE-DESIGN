//DUMMY DATA
const products =[
  
    {
    id: 1,
    name: "Xine",
    done: true,
    imgCover:  "https://i.ibb.co/56yHdRB/xine-6.png",
    title: "Project management tool ",
    jobDetail:{
      client: "Xine",
      role: "Product Desiger",
      focus: "Saas"
    },
    productImg2: {
    img:"https://i.ibb.co/VYxWHrJ/xine-7.png",
        overview: "An effective project management tool for tracking and managing assignments and projects collaboratively."
    },
    
     productImgDetails:["https://i.ibb.co/S68XfDD/xine-3.png","https://i.ibb.co/3Mqc1D9/xine-8.png", "https://i.ibb.co/rHr53dH/xine-6.png","https://i.ibb.co/NLCqDBd/xine-5.png" ]  
  },
  {
    id: 2,
    name: "Rutole",
    done: true,
    imgCover:  "https://i.ibb.co/ZT8WVn2/twitter-2.png",
    title: "Prioritize safety while driving",
    jobDetail:{
      client: "Rutole",
      role: "Product Desiner, Brant Designer, Ux writer, Interaction Design",
      focus: "Brand identity"
    },
      productImg2: {
         img:"https://i.ibb.co/Rhp4fdm/Mac-Book-Pro-14-14.png",
         overview: "Prioritizing road safety benefits you, fellow drivers, and your finances. Safe driving lowers accident risks, cuts expenses, and increases earnings through reduced repair and insurance costs. Make safety your driving focus for financial and road well-being."
      },
      productImgDetails:["https://i.ibb.co/sJRkDX7/Mac-Book-Pro-14-12.png", "https://i.ibb.co/TcTPDCJ/Rutole-website.png", "https://i.ibb.co/N3TD4dj/dribble-rutole-post.png", "https://i.ibb.co/StVcqg2/Mac-Book-Pro-16-6.png"]
    },
  {
    id: 3,
    name: "Cretly",
    done: true,
    imgCover:  "https://i.ibb.co/Rb2L36y/Mac-Book-Air-42-dark.png",
    title: "Ensuring timely and efficient disposal of refuse. ",
    jobDetail:{
      client: "Cretly",
      role: "Product Designer",
      focus: "Saas"
    },
    productImg2: {
    img:"https://i.ibb.co/L85BDdM/cretly-011.png",
    overview: "Recycling is crucial in today's eco-conscious world, yet awareness is lacking. We educate clients on recycling's importance and provide convenient recycling solutions."
    },
    productImgDetails:
    [ "https://i.ibb.co/5YX6TCS/Mac-Book-Air-49-dark.png","https://i.ibb.co/Rb2L36y/Mac-Book-Air-42-dark.png", "https://i.ibb.co/xFCdxqd/Mac-Book-Air-29.png", "https://i.ibb.co/VqJkgNb/Mac-Book-Air-33-2.png"]
    },
    {
      id: 4,
      name: "Mini portfolio",
      done: false,
      imgCover: "https://i.ibb.co/Jx4BwmT/Mac-Book-Pro-14-16.png",
      title: "A better way of creating portfoio",
      jobDetail:{
        client: "Ali",
        role: "UI Designer",
        focus: "Portfolios"
      },
      productImg2: {
      img:"https://example.com/productB.jpg",
          overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
      }, 
      productImgDetails:
       ["https://example.com/productB.jpg","https://example.com/productB.jpg","https://example.com/productB.jpg",  ]
      },
      {
        id: 5,
        name: "E-nifstate",
        done: true,
        imgCover: "https://i.ibb.co/WVP1C5R/nifstate-2.png",
        title: "Real estate blockchain technology",
        jobDetail:{
          client: "E-nifstate",
          role: "Graphical UI Designer, Interaction Design",
          focus: "Saas"
        },
        productImg2: {
        img:"https://i.ibb.co/0rR8hF7/nifstate-3.png",
            overview: "  E-nifstate is a web3 real estate company that employs blockchain technology, guaranteeing transparent and secure transactions visible to all."
        }, 
        productImgDetails:
         ["https://i.ibb.co/N7Pbpt6/nifstate-5.png", "https://i.ibb.co/cDXTmXm/nifstate-whi-3.png","https://i.ibb.co/5BFkn9y/nifstate-ex-6.png", "https://i.ibb.co/M53r20z/nifstate-whi-2.png"  ]
        },
        {
          id: 6,
          name: "Retey",
          done: false,
          imgCover: "https://i.ibb.co/3vKjdRW/retey-002.png",
          title: "A better way to deal with every day",
          jobDetail:{
            client: "Retey",
            role: "Creative Director",
            focus: "Brand identity"
          },
          productImg2: {
          img:"https://i.ibb.co/0rR8hF7/nifstate-3.png",
              overview: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis porro labore rerum repellat error. Maxime facere natus mollitia sequi suscipit?"
          }, 
          productImgDetails:
           ["https://i.ibb.co/N7Pbpt6/nifstate-5.png", "https://i.ibb.co/cDXTmXm/nifstate-whi-3.png","https://i.ibb.co/5BFkn9y/nifstate-ex-6.png", "https://i.ibb.co/M53r20z/nifstate-whi-2.png"  ]
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
 
]


export {products, timeline};