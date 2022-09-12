var header = document.getElementById("header");
window.onscroll = (e) => {
    if(window.pageYOffset >= header.offsetHeight) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
