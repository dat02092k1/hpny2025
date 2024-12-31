const myWistToYou = `Heh, xin chào, lời đầu tiên, xin phép được: "Chúc mừng năm mới", nếu bạn đọc được tin nhắn và thiệp chúc mừng này, có thể bạn là một người đóng vai trò rất quan trọng trong cuộc sống của tôi một năm qua, bạn thân, bạn cũ, bạn nhậu, đồng nghiệp,... cũng có thể là một ai đó tôi follow trên mxh, hoặc thậm chí là người có xích mích với tôi. Chúng ta có thể đã cùng cười, cùng khóc, đi cafe, đi nhậu, gây gổ, chửi nhau và xích mích hay bất đồng quan điểm. Nhưng qua tất cả những điều đó, khi nhìn lại, tôi thấy mình học được nhiều điều từ những chuyện xảy ra, dù là lớn hay nhỏ. Tôi cảm ơn và trân trọng tất cả những điều đó, và tôi hy vọng bạn cũng vậy. Năm mới đã đến, dù đang cảm thấy buồn bực hay khó chịu gì, mong chúng ta hay bỏ qua và tha thứ cho nhau, bỏ qua những tính xấu, những bất đồng và cãi vã trong năm cũ và nhìn nhau bằng con người mới.\nI know it's life, people gotta move on, even though we parted way, i hope you're safe. Năm mới vui vẻ, bạn của tôi !!!`;
function sendMyLove() {
    alert(myWistToYou);
}

document.addEventListener("DOMContentLoaded", sendMyLove);

window.onload = function () {
    var elements = {
        cd: document.getElementById("cd"),
        cd_title: document.getElementById("cd-title"),
        cd_days: document.getElementById("cd-days"),
        cd_hours: document.getElementById("cd-hours"),
        cd_mins: document.getElementById("cd-mins"),
        cd_secs: document.getElementById("cd-secs"),
        cd_timetil: document.getElementById("cd-timetil"),
    };

    elements.cd_title.innerHTML += " " + (new Date().getFullYear() + 1);
    var endDate = new Date(new Date().getFullYear() + 1 + "/1/1"),
        sec = 1000,
        min = sec * 60,
        hour = min * 60,
        day = hour * 24;

    elements.cd_timetil.innerHTML = "Time until " + endDate.toDateString();

    var cdInterval = setInterval(function () {
        var nowDate = new Date(),
            dif = endDate.getTime() - nowDate.getTime();

        if (dif <= 0) {
            elements.cd_title.classList.add("cd__title--newyear");
            elements.cd_title.innerHTML = " Happy New Year 2025! ";
            elements.cd.insertAdjacentHTML(
                "beforeend",
                '<div class="celebrate"> Enjoy the celebration! </div>'
            );

            setInterval(() => createFloatingEmojis(), 200);
            return clearInterval(cdInterval);
        }
        var days = Math.floor(dif / day),
            hours = Math.floor((dif % day) / hour),
            mins = Math.floor((dif % hour) / min),
            secs = Math.floor((dif % min) / sec);
        elements.cd_days.innerHTML = ("000" + days).slice(-3);
        elements.cd_days.nextElementSibling.innerHTML = "Day" + (days == 1 ? "" : "s");
        elements.cd_hours.innerHTML = ("00" + hours).slice(-2);
        elements.cd_hours.nextElementSibling.innerHTML = "Hour" + (hours == 1 ? "" : "s");
        elements.cd_mins.innerHTML = ("00" + mins).slice(-2);
        elements.cd_mins.nextElementSibling.innerHTML = "Minute" + (mins == 1 ? "" : "s");
        elements.cd_secs.innerHTML = ("00" + secs).slice(-2);
        elements.cd_secs.nextElementSibling.innerHTML = "Second" + (secs == 1 ? "" : "s");
    }, 1000);

    function createFloatingEmojis() {
        const emojiList = ["", "", "", "", ""];
        for (let i = 0; i < 10; i++) {
            const emoji = document.createElement("div");
            emoji.className = "floating-emoji";
            emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
            emoji.style.left = Math.random() * 100 + "vw";
            emoji.style.animationDuration = Math.random() * 2 + 4 + "s";
            emoji.style.fontSize = Math.random() * 1.5 + 1.5 + "em";
            document.body.appendChild(emoji);
            setTimeout(() => emoji.remove(), 3000);
        }
    }
};