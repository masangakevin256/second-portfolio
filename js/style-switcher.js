document.addEventListener("DOMContentLoaded",function (){
    const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
    const styleSwitcher = document.querySelector(".style-switcher");
    
    // Toggle the style switcher visibility
    styleSwitcherToggler.addEventListener("click", () => {
        styleSwitcher.classList.toggle("open");
    });

    // Close the style switcher when scrolling outside it
    window.addEventListener("scroll", function() {
        if (styleSwitcher.classList.contains("open")) {
            styleSwitcher.classList.remove("open");
        }
    });

    // Get all alternate-style links
    const alternateStyles = document.querySelectorAll(".alternate-style");

    // Function to activate the selected color theme
    function setActiveStyle(color) {
        alternateStyles.forEach((style) => {
            // Enable the selected style and disable the rest
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });

        // Store the selected theme in localStorage
        localStorage.setItem("themeColor", color);
    }

    // Set the active color theme on page load based on localStorage
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
        setActiveStyle(savedColor);
    }

    // Attach the setActiveStyle function to the color spans
    document.querySelectorAll('.style-switcher .colors span').forEach(span => {
        span.addEventListener('click', function() {
            const color = span.classList[0];  // Use the class name of the span (e.g., 'color1', 'color2')
            setActiveStyle(color);
        });
    });

    /*----- Dark and Light Mode -------*/
    const dayNight = document.querySelector(".day-night");
    dayNight.addEventListener("click", () => {
        dayNight.querySelector("i").classList.toggle("fa-sun");
        dayNight.querySelector("i").classList.toggle("fa-moon");
        document.body.classList.toggle("dark");

        // Store dark mode preference in localStorage
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });

    // Load the dark/light mode based on localStorage
    window.addEventListener("load", () => {
        if (document.body.classList.contains("dark") || localStorage.getItem("darkMode") === "enabled") {
            dayNight.querySelector("i").classList.add("fa-sun");
            document.body.classList.add("dark");
        } else {
            dayNight.querySelector("i").classList.add("fa-moon");
        }
    });
});
