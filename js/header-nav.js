const menuIcon = document.getElementById("icon-menu");
const searchBox = document.getElementById("search-box");
const searchIcon = document.querySelector(".icon-search");
const search = document.getElementById("search");
const headerNav = document.getElementById("header-nav-wrapper");

search.onfocus = () => {
    menuIcon.innerHTML = "close";
    menuIcon.classList.add("active");
    headerNav.classList.add("active");
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle("active");
    searchBox.classList.toggle("active");
    headerNav.classList.toggle("active");
    if(menuIcon.innerHTML == "menu") {
        menuIcon.innerHTML = "close"
        search.focus();
    } else {
        menuIcon.innerHTML = "menu"
    }
};

searchIcon.onclick = () => {
    searchBox.classList.toggle("active");
    menuIcon.classList.toggle("active");
    headerNav.classList.toggle("active");
    if(menuIcon.innerHTML == "menu") {
        menuIcon.innerHTML = "close"
        search.focus();
    } else {
        menuIcon.innerHTML = "menu"
    }
}

window.onclick = (e) => {
    if (e.target == headerNav) {
        menuIcon.innerHTML = "menu";
        searchBox.classList.remove("active");
        menuIcon.classList.remove("active");
        headerNav.classList.remove("active");
    }
};
