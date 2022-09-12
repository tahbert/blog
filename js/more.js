var btnMore = document.querySelectorAll(".btn-more");
btnMore.forEach((i) => {
    i.onclick = () => {
        if(i.innerHTML == "see more") {
            i.innerHTML = "see less"
        } else {
            i.innerHTML = "see more"
        }
        var moreText =  i.previousElementSibling;
        if(moreText.style.display == "inline") {
            moreText.style.display = "none";
        } else {
            moreText.style.display = "inline";
        }
        var dot =  moreText.previousElementSibling;
        if(dot.style.display == "none") {
            dot.style.display = "inline";
        } else {
            dot.style.display = "none";
        }
    }
});