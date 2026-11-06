
const menuToggle = document.getElementById("menuToggle");
const mainNavigation = document.getElementById("mainNavigation");

// Open and close the mobile navigation menu
if (menuToggle && mainNavigation) {
    menuToggle.addEventListener("click", function () {
        mainNavigation.classList.toggle("open");

        const isOpen = mainNavigation.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    // Close the menu after clicking a navigation link
    mainNavigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            mainNavigation.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// Automatically display the current year in the footer
const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Demonstration contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        formMessage.textContent =
            "Thank you! This is a demonstration form and is not connected yet.";

        contactForm.reset();
    });
}