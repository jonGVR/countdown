const daysEl = document.getElementById("days"),
      hoursEl = document.getElementById("hours"),
      minutesEl = document.getElementById("minutes"),
      secondsEl = document.getElementById("seconds"),
      containerEl = document.querySelector(".container");

let countdown = setInterval(() => {
    const limitDate = new Date("31 December 2023 23:59:59").getTime(),
          now = new Date().getTime(),
          totalSeconds = (limitDate - now) / 1000;

    const days = Math.floor(totalSeconds / (60 * 60 * 24)),
          hours = Math.floor(totalSeconds / (60 * 60) % 24),
          minutes = Math.floor(totalSeconds / (60) % 60),
          seconds = Math.floor(totalSeconds % 60);
          
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

    if (totalSeconds < 0) {
        clearInterval(countdown);
        containerEl.innerHTML = "Its fun time!";
    };
}, 1000);

function formatTime (time) {
    return time < 10 ? (`0${time}`) : time;    
};