// aside-nav
var asideNav = document.querySelector(".aside-nav");
var navItem = asideNav.querySelectorAll('.nav-item');
for (var i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener("click", function() {
        var active = asideNav.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
}

// main-nav 
var mainNav = document.querySelectorAll(".main-nav");
mainNav.forEach((i) => {
    var mainNavItem = i.querySelectorAll(".main-nav-item");
    var active = i.getElementsByClassName("main-nav-item active");
    mainNavItem.forEach((i) => {
        i.onclick = () => {
            active[0].className = active[0].className.replace(" active", "");
            i.className += " active";
        }
    });
});