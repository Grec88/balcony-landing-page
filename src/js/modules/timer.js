export const timer = (id, deadline) => {

    const addZero = (num) => num <= 9 ? `0${num}` : num;

    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(((total / 1000) / 60) % 60);
        const hours = Math.floor(((total / 1000) / 3600) % 24);
        const days = Math.floor((total / 1000) / 86400);

        return { total, days, hours, minutes, seconds};
    };
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");

        const updateClock = () => {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {

                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";

                clearInterval(timeInterval);
            };
        };

        const timeInterval = setInterval(updateClock, 1000);

        updateClock();


    };

    setClock(id, deadline);

};
