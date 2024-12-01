// Visa/göm mobilmenyn
function ShowHide(element) {
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        document.body.classList.remove("no-scroll"); // Tillåt scroll igen
    } else {
        mobileMenu.style.display = "flex";
        document.body.classList.add("no-scroll"); // Inaktivera scroll
    }

    element.classList.toggle("change");
}
function closeMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    mobileMenu.style.display = "none";
    menuOverlay.style.display = "none";
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("change");
}
function ShowHide(element) {
    const mobileMenu = document.getElementById("mobileMenu");
    const menuOverlay = document.getElementById("menuOverlay");

    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
        menuOverlay.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
        menuOverlay.style.display = "flex";
    }

    element.classList.toggle("change");
}
// Hantera dropdown i desktop-versionen
function toggleDropdown(event) {
    event.preventDefault(); // Förhindra länkens standardbeteende
    const dropdown = event.target.closest('.dropdown');

    // Stäng andra öppna dropdowns
    document.querySelectorAll('.dropdown').forEach(item => {
        if (item !== dropdown) {
            item.classList.remove('show');
        }
    });

    // Växla "show"-klassen för den aktuella dropdownen
    dropdown.classList.toggle('show');
}

// Hantera interaktivitet för scrolla-upp-knappen
document.addEventListener("DOMContentLoaded", function () {
    const toTopBtn = document.getElementById("toTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) { // Syns efter 200px scroll
            toTopBtn.style.display = "block";
        } else {
            toTopBtn.style.display = "none";
        }
    });

    toTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smidig scroll till toppen
        });
    });
});

// Observer för att lägga till animationer
document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    serviceCards.forEach(card => observer.observe(card));
});

// Hantera toggle för FAQ-listor (eller andra listor)
function toggleItem(element) {
    const parent = element.parentElement;
    const isOpen = parent.classList.contains('open');

    // Stäng alla andra öppna list-item
    document.querySelectorAll('.list-item').forEach(item => {
        item.classList.remove('open');
    });

    if (!isOpen) {
        parent.classList.add('open');
    }
}
