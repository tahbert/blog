const moreWrapper = document.querySelectorAll(".box-more-wrapper");
moreWrapper.forEach ((i) => {
    const moreIcon = i.querySelector(".icon-more");
    const moreBox = i.querySelector(".box.more");
    const moreItem = i.querySelectorAll(".more-item");

    moreIcon.onclick = () => {
        moreBox.classList.toggle("active");
        moreIcon.classList.add("active");
        setTimeout(function () {
            moreIcon.classList.remove("active");
        }, 200);
    };

    moreItem.forEach ((i) => {
        i.onclick = () => {
            moreBox.classList.toggle("active");
        };
    });

    window.addEventListener("click", function(e) {
        const isInsideBox = moreBox.contains(e.target);
        const isInsideIcon = moreIcon.contains(e.target);
    
        if (!isInsideBox && !isInsideIcon) {
            if (moreBox.classList.contains("active")) {
                moreBox.classList.remove("active");
                moreIcon.classList.remove("active");
            }
        }
    });
});

