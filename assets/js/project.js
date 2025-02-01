AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "ZAID",
    cardImage: "assets/images/project-page/zaid.jpeg",
    description: "Founder adn Manager",
    
  },
  {
    title: "Mohd Saad",
    cardImage: "assets/images/project-page/saad.jpg",
    description: "Developer",
    
  },
  {
    title: "Mujtaba hussain",
    cardImage: "assets/images/project-page/mujataba.jpeg",
    description: "Designer",
    
  },

  {
    title: "Syed Moosa",
    cardImage: "assets/images/project-page/moosa.jpeg",
    description: "Editor",
    
  },

  {
    title: "Siddhart Wali",
    cardImage: "assets/images/project-page/sid.jpeg",
    description: "Content Analyser",
   
  },
 
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, description, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");
  description = document.getElementsByClassName("description");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
