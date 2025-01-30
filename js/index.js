
// Typing animation using Typed.js
var typed = new Typed(".typing", {
    strings: ["", "Web Designer", "web Developer", "Graphic Designer", "Youtuber"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    startDelay: 500,
    showCursor: false,
    loop: true
});

/** Aside and Navigation */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavlist = navList.length,
      allSelection = document.querySelectorAll(".section"),
      totalSelection = allSelection.length;

// Global variable to reference all sections
const allSections = document.querySelectorAll(".section");

// Function to handle the navigation click event
for (let i = 0; i < totalNavlist; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(event) {
        event.preventDefault();  // Prevent default link behavior

        // Remove 'active' class from all sections
        removeBackSection();

        // Remove 'active' class from all nav links
        for (let j = 0; j < totalNavlist; j++) {
           if (navList[j].querySelector("a").classList.remove("active")){
            addBackSection(j);
           }
        }

        // Add 'active' class to the clicked nav link
        this.classList.add("active");

        // Show the corresponding section
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}
function removeBackSection(){
    for (let i = 0; i < totalSelection; i++) {
        allSections[i].classList.remove("active");
    }
}
function addBackSection(num){
    allSelection[num].classList.add("back-section")
}
// Show the section corresponding to the clicked nav link
function showSection(element) {
    const target = element.getAttribute("href").split("#")[1];
    // Hide all sections
    allSections.forEach(section => section.classList.remove("active"));
    // Show the target section
    document.querySelector("#" + target).classList.add("active");
}

// Update navigation state when a section is clicked directly (e.g., for the "Hire Me" button)
document.querySelector(".hire-me").addEventListener("click", function() {
    const sectionIndex=this.getAttribute("data-section-index");

    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

// Update the navigation to reflect the active section
function updateNav(element) {
    for (let i = 0; i < totalNavlist; i++) {
        navList[i].querySelector("a").classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
   /* const activeLink = nav.querySelector(`a[href="#${target}"]`);
    if (activeLink) activeLink.classList.add("active");*/
    if(target===navList[i].querySelector("a").getAttribute("href").split("#")[i]){
        navList[i].querySelector("a").classList.add("active");
    }
}

// Toggle the sidebar visibility when the nav toggle button is clicked
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

// Toggle the 'open' class on the aside and nav toggler button
function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSelection; i++) {
        allSelection[i].classList.toggle("open");
    }
}
