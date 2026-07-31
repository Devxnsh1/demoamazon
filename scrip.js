//  Search Functionality
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");

function performSearch() {
    const query = searchInput.value.trim();

    if (query === "") {
        alert("Please enter something to search!");
        searchInput.focus();
        return;
    }

    alert(`Searching for "${query}"...`);
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        performSearch();
    }
});

//Back To Top 
const backToTop = document.querySelector(".foot-panel1");

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Logo Click
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//Product Cards
const cards = document.querySelectorAll(".box");

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const title = card.querySelector("h2").textContent;

        alert(`${title}\n\nProduct page coming soon!`);

    });

});

// Cart
const cart = document.querySelector(".nav-cart");

cart.addEventListener("click", () => {
    alert("🛒 Your cart is currently empty.");
});

// Navigation Links
const navLinks = document.querySelectorAll(".panel-ops a");

navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        alert(`${link.textContent}\n\nThis page is under development.`);

    });

});

//Footer Links
const footerLinks = document.querySelectorAll(".foot-panel2 a, .pages a");

footerLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        alert(`${link.textContent}\n\nThis page is under development.`);

    });

});

// Hero Link
const heroLink = document.querySelector(".hero-msg a");

heroLink.addEventListener("click", () => {

    console.log("Redirecting to Amazon India...");

});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});

//Welcome Message
window.addEventListener("load", () => {

    console.log("Amazon Clone Loaded Successfully!");

});