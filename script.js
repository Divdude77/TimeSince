const colors = [
    '#FF7D91',
    '#edba97',
    '#92daba',
    '#6FC2EC',
    '#A2AAFF',
    '#C2BCE0',
    '#252525'
]

window.onload = () => {
    if (Math.floor(Math.random() * 10) == 7) {
        document.querySelector("html").style.background = "url('cooper.jpg')";
        document.querySelector("html").style.backgroundSize = "250px";
    }
    else {
        document.querySelector("html").style.backgroundColor = colors[Math.floor(Math.random() * 7)];
    }
    facts = updateTime(true);
    document.querySelector("#fact").innerHTML = facts[Math.floor(Math.random() * 6)];
}

// 9:07 20 dec
// = Jan 1 2023 + 10days + 53mins + 14hours

function updateTime(facts) {
    const dt = new Date();
    y = dt.getFullYear() - 2023;
    mt = dt.getMonth();
    d = dt.getDate() + 10;
    h = dt.getHours() + 14;
    m = dt.getMinutes() + 53;
    s = dt.getSeconds();

    if (m >= 60) {
        m -= 60;
        h += 1;
    }
    if (h >= 24) {
        h -= 24;
        d += 1;
    }
    if (d > 30) {
        d -= 30;
        m += 1;
    }
    if (mt >= 12) {
        mt -= 12;
        y += 1;
    }

    if (s < 10) {
        document.querySelector("#secondsVal").innerHTML = "<span>0</span>" + s.toString();
    }
    else {
        document.querySelector("#secondsVal").innerHTML = s.toString();
    }

    if (m < 10) {
        document.querySelector("#minutesVal").innerHTML = "<span>0</span>" + m.toString();
    }
    else {
        document.querySelector("#minutesVal").innerHTML = m.toString();
    }

    if (h < 10) {
        document.querySelector("#hoursVal").innerHTML = "<span>0</span>" + h.toString();
    }
    else {
        document.querySelector("#hoursVal").innerHTML = h.toString();
    }

    if (d < 10) {
        document.querySelector("#daysVal").innerHTML = "<span>0</span>" + d.toString();
    }
    else {
        document.querySelector("#daysVal").innerHTML = d.toString();
    }

    if (mt < 10) {
        document.querySelector("#monthsVal").innerHTML = "<span>0</span>" + mt.toString();
    }
    else {
        document.querySelector("#monthsVal").innerHTML = mt.toString();
    }

    if (y > 0) {
        document.querySelector("#years").classList.remove("not-yet");
        document.querySelector("#yearsColon").classList.remove("not-yet");
        document.querySelector("#yearsVal").innerHTML = y;
    }
    else {
        document.querySelector("#years").classList.add("not-yet");
        document.querySelector("#yearsColon").classList.add("not-yet");
    }

    if (facts) {
        return [
            "I hope this counter eventually runs out of space.",
            "That's " + (365 * y + 30 * mt + d).toString() + " days! 😲",
            "🍝",
            '"coke common"',
            "Be Like Ahana Verma",
            "❤️❤️❤️"
        ]
    }
}

setInterval(updateTime, 1000);
