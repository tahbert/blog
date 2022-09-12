const notiIcon = document.querySelector(".icon-noti");
const notiBox = document.getElementById("box-noti");
const notiItem = document.querySelectorAll(".noti-item");
const notiBadge = document.querySelector(".noti-badge");
const notiCount = notiItem.length;
notiBadge.innerHTML = notiCount;

notiIcon.onclick = () => {
    notiBox.classList.toggle("active");
    notiIcon.classList.toggle("active");
};

notiItem.forEach ((i) => {
    i.onclick = () => {
        const isReaded = i.classList.contains("readed");
        if(isReaded) {
            notiBox.classList.remove("active");
            notiIcon.classList.remove("active");
        } else {
            i.classList.add("readed");
            notiBox.classList.remove("active");
            notiIcon.classList.remove("active");
            notiCount -= 1;
            notiBadge.innerHTML = notiCount;
        }
    };
});

window.addEventListener("click", function(e) {
    const isInsideBox = notiBox.contains(e.target);
    const isInsideIcon = notiIcon.contains(e.target);

    if (!isInsideBox && !isInsideIcon) {
        if (notiBox.classList.contains("active")) {
            notiBox.classList.remove("active");
            notiIcon.classList.remove("active");
        }
    }
});