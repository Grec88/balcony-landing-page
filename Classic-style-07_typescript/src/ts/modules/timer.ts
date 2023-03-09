export const timer = (id: string, deadline: string) => {

    const addZero = (num: number) => num <= 9 ? `0${num}` : num;

    const getTimeRemaining = (endtime: string) => {
        const total = Date.parse(endtime) - Date.parse((new Date()).toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(((total / 1000) / 60) % 60);
        const hours = Math.floor(((total / 1000) / 3600) % 24);
        const days = Math.floor((total / 1000) / 86400);

        return { total, days, hours, minutes, seconds };
    };
    const setClock = (selector: string, endtime: string) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days") as HTMLElement;
        const hours = timer.querySelector("#hours") as HTMLElement;
        const minutes = timer.querySelector("#minutes") as HTMLElement;
        const seconds = timer.querySelector("#seconds") as HTMLElement;

        const updateClock = () => {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days).toString();
            hours.textContent = addZero(t.hours).toString();
            minutes.textContent = addZero(t.minutes).toString();
            seconds.textContent = addZero(t.seconds).toString();

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
