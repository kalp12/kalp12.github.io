// Smooth scroll to section on link click
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    navbar.style.top = "0";
  } else if (currentScroll > lastScrollTop) {
    navbar.style.top = "-60px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollTop = currentScroll;
});

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Experience ========================

const descriptions = {
  ltimindtree: `
  <div class="header">
            Software Engineer
            <span class="organization">@ LTIMindtree</span>
          </div>
          <div class="date">September 2022 - Present</div>
<div class="description">
  <ul>
    <li>
      Bu   ilt a Data Entity Extraction chatbot with Mistral LLM, reducing
      manual effort by 70% and cutting costs.
    </li>
    <li>
    Designed an intuitive frontend with Vue.js for operations engineers 
    to analyze ITSM tickets using insightful charts and AI/ML recommendations. 
    Enhanced operational efficiency with utilization notifications and backend 
    integration via Spring Boot and REST APIs.
    </li>
    <li>
    Developed a scalable and reliable notification system for a multi-tenant environment, 
    leveraging Spring Boot, Kubernetes, and Docker. 
    Designed a cohesive UI with Vue.js for manual notifications.
    </li>
    <li>
    Developed a chatbot with document summarization, allowing users to upload images, 
    PDFs, and DOCs for summarization and chat interactions.
    </li>
    <li>
    Built a document comparator app to detect and highlight differences between 
    two documents using GenAI and Spring Boot.
    </li>
  </ul>
</div>
  `,
  lti: `
  <div class="header">
  Graduate Engineer Trainee
  <span class="organization">@ LTI</span>
</div>
<div class="date">July 2022 - September 2022</div>
<div class="description">
  <ul>
    <li>
    Underwent 3 months of extensive training on Informatica to gain hands-on experience in data integration, transformation, and ETL processes.
    </li>
    <li>
    Developed strong proficiency in data management and migration strategies, optimizing data flow across various systems.
    </li>
    <li>
    Received training and completed assignments in multiple programming languages, including SQL, Python, and Java.
    </li>
  </ul>
</div>
  `,
};

function showDescription(id) {
  // Hide all description sections
  document.querySelectorAll('.description-item').forEach(item => {
      item.style.display = 'none';
  });

  // Show the selected description
  document.getElementById(id).style.display = 'block';

  // Remove active class from all companies
  document.querySelectorAll('.company-item').forEach(item => {
      item.classList.remove('active');
  });

  // Add active class to selected company
  event.target.classList.add('active');
}


// function showDescription(company) {
//   document.getElementById("work-description").innerHTML = descriptions[company];
//   document.querySelectorAll(".company-item").forEach((item) => {
//     item.classList.remove("active");
//   });
//   document
//     .querySelector(`.company-item[onclick="showDescription('${company}')"]`)
//     .classList.add("active");
// }


function handleViewClick(){
  console.log("view clicked...")

  const nav = document.getElementById("nav");
  const view = document.getElementById("view")
  const cancel = document.getElementById("cancel")

  nav.style.display = "contents";
  view.style.display = "none";
  cancel.style.display = "block";

}

function handleCancelClick(){
  console.log("cancel clicked...")

  const nav = document.getElementById("nav");
  const view = document.getElementById("view")
  const cancel = document.getElementById("cancel")

  nav.style.display = "none";
  view.style.display = "block";
  cancel.style.display = "none";
}

function closeNavbar(){
  let width = screen.width;
  console.log("width ->>", width);
  if (width < 768){
    console.log("got it ");
    handleCancelClick()
  }
}

function redirect(url){
  window.open(url, "_blank")
  // window.location.href = url;
}

