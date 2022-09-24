{
    const infs = [
        // Tahbert Zeitgeist
        [
            {name:'Nguyen Van Kham', job:'Chatholic Bishop', rank:'fa-heart'},
            {name:'Joseph Ratzinger', job:'Chatholic Pope', rank:'fa-circle-check'},
            {name:'Karol Wojtyła', job:'Chatholic Pope', rank:'fa-star'},
            {name:'Therese of Lisieux', job:'Chatholic Saint', rank:'fa-circle-check'},
            {name:'Minh Niem', job:'Buddhism Monk', rank:'fa-star'},
            {name:'Augustine', job:'Chatholic Saint', rank:'fa-star'},
            {name:'Francis of Assisi', job:'Chatholic Saint', rank:'fa-star'},
            {name:'Zhuge Liang', job:'Mastermind', rank:'fa-star'},
            {name:'Louis Martin', job:'Chatholic Saint', rank:'fa-star'},
            {name:'Nguyen Trai', job:'Mastermind', rank:'fa-star'}
        ],

        // Tahbert Music
        [
            {name:'Hans Zimmer', job:'Film Music Composer', rank:'fa-heart'},
            {name:'Steven Price', job:'Film Music Composer', rank:'fa-circle-check'},
            {name:'Newton Howard', job:'Film Music Composer', rank:'fa-circle-check'},
            {name:'Joe Hisaishi', job:'Film Music Composer', rank:'fa-circle-check'},

            {name:'Nicholas Britell', job:'Film Music Composer', rank:'fa-star'},
            {name:'Patrick Doyle', job:'Film Music Composer', rank:'fa-star'},
            {name:'Rachel Portman', job:'Film Music Composer', rank:'fa-star'},
            {name:'Rachmaninoff', job:'Music Composer', rank:'fa-star'},
            {name:'Craig Armstrong', job:'Film Music Composer', rank:'fa-star'},
            {name:'Dario Marianelli', job:'Film Music Composer', rank:'fa-star'},
            {name:'Enya', job:'Film Music Composer', rank:'fa-star'},
            {name:'Jacob Shea', job:'Film Music Composer', rank:'fa-star'},
            {name:'James Horner', job:'Film Music Composer', rank:'fa-star'},
            {name:'Jiang Ying', job:'Film Music Composer', rank:'fa-star'},
            {name:'Ryuichi Sakamoto', job:'Film Music Composer', rank:'fa-star'},
            {name:'Tan Dun', job:'Film Music Composer', rank:'fa-star'},
            {name:'Ludovico Einaudi', job:'Music Composer', rank:'fa-star'},
            {name:'Mark Crawford', job:'Film Music Composer', rank:'fa-star'},
            {name:'Max Richter', job:'Music Composer', rank:'fa-star'},
            {name:'Yann Tiersen', job:'Film Music Composer', rank:'fa-star'}
        ],

        // Tahbert Sports
        [
            {name:'Schweinsteiger', job:'Soccer Player', rank:'fa-heart'},
            {name:'Yuna Kim', job:'Figure Skater', rank:'fa-circle-check'},
            {name:'Sadio Mané', job:'Soccer Player', rank:'fa-circle-check'},
            {name:'Shi Tingmao', job:'Soccer Player', rank:'fa-circle-check'},
            {name:'Niki Lauda', job:'Formula One Driver', rank:'fa-star'},
            {name:'Frenkie de Jong', job:'Soccer Player', rank:'fa-circle-check'},
            {name:'Roger Federer', job:'Tennis Player', rank:'fa-circle-check'},
            {name:'Luka Modrić', job:'Soccer Player', rank:'fa-star'},
            {name:"N'Golo Kanté", job:'Soccer Player', rank:'fa-star'},
            {name:'Edinson Cavani', job:'Soccer Player', rank:'fa-star'},
            {name:'David Beckham', job:'Soccer Player', rank:'fa-star'},
            {name:'Steven Gerrard', job:'Soccer Player', rank:'fa-star'},
            {name:'Ivan Rakitić', job:'Soccer Player', rank:'fa-star'}
        ],

        // Tahbert Teach
        [
            {name:'Huong Nguyen', job:'Frontend Engineer', rank:'fa-heart'},
            {name:'Kyle Cook', job:'Frontend Engineer', rank:'fa-circle-check'},
            {name:'Quincy Larson', job:'Freecodecamp Founder', rank:'fa-star'}
        ],

        // Tahbert Discovery
        [
            {name:'Matthew Walker', job:'Sleep Scientist', rank:'fa-heart'},
            {name:'Albert Einstein', job:'Scientist', rank:'fa-circle-check'},
            {name:'Blaise Pascal', job:'Scientist', rank:'fa-circle-check'},
            {name:'Thomas Edison', job:'Scientist', rank:'fa-circle-check'}
        ],

        // Tahbert Entertainment
        [
            {name:'Jeff Dunham', job:'Ventriloquist', rank:'fa-heart'},
            {name:'Rowan Atkinson', job:'English Actor', rank:'fa-circle-check'},
            {name:'Tran Anh Hung', job:'Film Director', rank:'fa-circle-check'},
            {name:'Christopher Nolan', job:'Film Director', rank:'fa-circle-check'}
        ],
    ];

    const infWrapper = document.querySelectorAll('[data-inf]');
    let infsIndex = 0;

    infWrapper.forEach((i) => {
        const single = i.querySelector(".swiper_inf");
        let len = infs[infsIndex].length;

        for (let e=1; e<len; e++) {
            const clone = single.cloneNode(true);
            i.appendChild(clone);
            i.appendChild(clone);
        }

        const infSlice = i.querySelectorAll(".swiper_inf");
        let infIndex = 0;
        infSlice.forEach((i) => {
            const infImg = i.querySelector(".swiper_avatar_img");
            const infName = i.querySelector(".swiper_text_name");
            const infJob = i.querySelector(".swiper_text_job");
            const infIcon = i.querySelector(".icon");

            infImg.src = `images/${infs[infsIndex][infIndex].name}.jpg`;
            infName.innerText = infs[infsIndex][infIndex].name;
            infJob.innerText = infs[infsIndex][infIndex].job;
            infIcon.classList.add(infs[infsIndex][infIndex].rank);
            
            i.addEventListener('click', () => {
                const coverImg = document.querySelector('.main_cover_img');
                const infoImg = document.querySelector('.main_info_img');
                const infoName = document.querySelector('.main_info_name');
                const infoDetail = document.querySelector('.main_info_detail');
                const infoJob = infoDetail.querySelector('.main_info_job');
                const infoIcon = infoDetail.querySelector('.icon-rank');
                const infoRank = infoDetail.querySelector('.main_info_rank');

                window.scrollTo(0, 0);
                coverImg.src = infImg.src.replace('.jpg', ' cover.jpg');
                infoImg.src = infImg.src;
                infoName.innerText = infName.innerText;
                infoJob.innerText = infJob.innerText;
                infoIcon.classList = infIcon.classList;
                if (infoIcon.classList.contains('fa-heart')) {
                    infoRank.innerText = 'top 1 in my heart';
                } else if (infoIcon.classList.contains('fa-circle-check')) {
                    infoRank.innerText = 'beautify my life so much';
                } else {
                    infoRank.innerText = 'beautify my life';
                }
            });
            infIndex++;
        });
        infsIndex++;
    });
}
