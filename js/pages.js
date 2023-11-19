const pages = [{
    id: 'page_1',
    year: 2023,
    month: 10,
    day: 16
}, {
    id: 'page_2',
    year: 2024,
    month: 10,
    day: 14
}, {
    id: 'page_3',
    year: 2025,
    month: 10,
    day: 13
}];


function M(number) {
    return Math.floor(number / 1000);
}

pages.forEach((element) => {
    document.querySelector(`#${element.id}`).innerHTML = `<h2 class="msg">${element.year + 1} 대학수학능력시험 <span class="dday"></span></h2><div class="countdown"><span class="numbox numd"></span>:<span class="numbox numh"></span>:<span class="numbox numm"></span>:<span class="numbox nums"></span>:<span class="numbox numc"></span></div>`;
    countdown(element.id, element.year, element.month, element.day);
});

function countdown(id, year, month, day) {
    const time_end = new Date(year, month, day).getTime();
    var time_now, dday, days, hours, minutes, seconds, centiseconds;

    time_now = new Date().getTime();
    dday = time_end - time_now;
    if (dday >= 0) {
        days = M(dday / 24 / 60 / 60);
        hours = M((dday - days * 24 * 60 * 60 * 1000) / 60 / 60);
        minutes = M((dday - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000) / 60);
        seconds = M(dday - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000);
        centiseconds = M((dday - days * 24 * 60 * 60 * 1000 - hours * 60 * 60 * 1000 - minutes * 60 * 1000 - seconds * 1000) * 100);
        var count_list = [
            [`#${id} .numd`, days],
            [`#${id} .numh`, hours],
            [`#${id} .numm`, minutes],
            [`#${id} .nums`, seconds],
            [`#${id} .numc`, centiseconds]
        ];
        for (i = 0; i < count_list.length; i++) {
            let num = document.querySelector(count_list[i][0]);
            if (count_list[0][1] < 100) count_list[0][1] = '0' + count_list[0][1]; // days 3자리
            if (count_list[i][1] < 10) count_list[i][1] = '0' + count_list[i][1];
            if (num.textContent != count_list[i][1]) {
                num.textContent = count_list[i][1];
                num.classList.remove('on');
            } else {
                num.classList.add('on');
            }
        }
        document.querySelector(`#${id} .dday`).innerText = `${year}.${month + 1}.${day}. / D-${days + 1}`;
        setTimeout(countdown, 10, id, year, month, day);
    } else {
        document.querySelector(`#${id} .countdown`).innerHTML = '<span class="numbox">000</span>:<span class="numbox">00</span>:<span class="numbox">00</span>:<span class="numbox">00</span>:<span class="numbox">00</span>';
        let days = -(M(dday / 24 / 60 / 60) + 1);
        if (days == 0) {
            document.querySelector(`#${id} .dday`).innerHTML = `${year}.${month + 1}.${day}. / D-Day`;
        } else {
            document.querySelector(`#${id} .dday`).innerHTML = `${year}.${month + 1}.${day}. / D+${days}`;
        }
        clearTimeout(countdown, 10, id, year, month, day);
    }
}


