var menuIcon = document.getElementById("icon-menu");
var searchBox = document.getElementById("search-box");
var searchIcon = document.querySelector(".icon-search");
var search = document.getElementById("search");
var headerNav = document.getElementById("header-nav-wrapper");

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
