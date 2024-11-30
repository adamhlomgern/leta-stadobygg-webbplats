function ShowHide(element) {
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle menu visibility
    if (mobileMenu.style.display === "flex") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }

    // Toggle hamburger icon animation (change to X)
    element.classList.toggle("change");
}


function toggleItem(element) {
    const parent = element.parentElement;
    const isOpen = parent.classList.contains('open');

    // Stäng alla andra öppna sektioner
    document.querySelectorAll('.list-item').forEach(item => {
        item.classList.remove('open');
    });

    // Växla mellan öppen och stängd för den klickade
    if (!isOpen) {
        parent.classList.add('open');
    }
}
