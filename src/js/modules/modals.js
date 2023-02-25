const modals = () => {

    const toggleModal = (selec, disp, overfl) => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    };
    

    const bindModal = (triggersSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector); 
        const close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                toggleModal(modal, "block", "hidden");
            });
        });

        close.addEventListener('click', () => {
            toggleModal(modal, "none", "");
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                toggleModal(modal, "none", "");
            }
        });

        addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
                toggleModal(modal, "none", "");
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            toggleModal(document.querySelector(selector), "block", "hidden");
        }, time);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    // showModalByTime('.popup', 60000);

};

export default modals;