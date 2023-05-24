
import {timeline} from "./data.js"
//DOM Variable Elements
const experienceTimeline = document.querySelector(".timeline");
//DOM Variable element
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
   



   