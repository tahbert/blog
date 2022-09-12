{
    const moment = document.getElementById("moment_popup");
    const closeIcon = moment.querySelector(".icon_close");
    const momentImg = moment.querySelector(".moment_img");
    let momentAva = moment.querySelector(".music_avatar").firstElementChild.firstElementChild;
    let track = moment.querySelector(".music_track");
    let composer = moment.querySelector(".music_composer");

    const swiperContent = document.querySelectorAll(".swiper_moment_content");

    const backImgs = [
        "Rush - Lost But Won",
        "Gravity - Shenzou",
        "Our Planet - This Is Our Planet",
        "Fury - Norman",
        "The Dark Knight - Why Do We Fall",
        'A Beautiful Mind - Hard To See The Solution',
        'Interstellar - They Are Not Mountains',
    ];
    const tracks = [
        'Rush - Lost But Won',
        'Gravity - Shenzou',
        'Our Planet - This Is Our Planet',
        'Fury - Norman',
        'The Dark Knight - Why Do We Fall',
        'A Beautiful Mind - Hard To See The Solution',
        'Interstellar - They Are Not Mountains',
    ];
    const composers = [
        'Hans Zimmer', 
        'Steven Price',
        'Steven Price',
        'Steven Price',
        'Hans Zimmer',
        'James Horner',
        'Hans Zimmer',
    ];

    let backImgIndex = 0
    let trackIndex = 0;
    let composerIndex = 0;

    swiperContent.forEach((i) => {
        let currentTrack = tracks[trackIndex];
        let currentComposer = composers[composerIndex];

        const swiperImg = i.querySelector(".swiper_moment_img");
        swiperImg.src = `images/${backImgs[backImgIndex]}.jpg`;

        const swiperAud = i.querySelector(".swiper_moment_audio");
        swiperAud.src = `media/${currentTrack}.mp3`;

        const swiperAva = i.querySelector(".swiper_moment_avatar").firstElementChild.firstElementChild;
        swiperAva.src = `images/${currentComposer}.jpg`;

        i.addEventListener("click", () => {
            moment.classList.toggle("active");
            momentImg.src = swiperImg.src;
            momentAva.src = swiperAva.src;
            track.innerHTML = currentTrack;
            composer.innerHTML = currentComposer;

            swiperAud.currentTime = 0; // play from the beginning
            swiperAud.play();

            closeIcon.onclick = () => {
                moment.classList.toggle("active");
                swiperAud.pause();
            };
            
            document.addEventListener("click", function(e) {
                if(e.target === moment) {
                    moment.classList.remove("active");
                    swiperAud.pause();
                }
            });
        });

        backImgIndex++;
        trackIndex++;
        composerIndex++;
    });
}