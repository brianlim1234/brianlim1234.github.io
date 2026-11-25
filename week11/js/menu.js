const toggleButton = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;";
    } else {
        toggleButton.innerHTML = '<img src="images/menu-icon.png" alt="Menu">';
    }

});