const modals = () => {

    const openCloseModal = (selec, disp, overfl) => {
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
                openCloseModal(modal, "block", "hidden");
            });
        });

        close.addEventListener('click', () => {
            openCloseModal(modal, "none", "");
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                openCloseModal(modal, "none", "");
            }
        });

        addEventListener("keydown", (e) => {
            if (e.keyCode === 27) {
                openCloseModal(modal, "none", "");
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            openCloseModal(document.querySelector(selector), "block", "hidden");
        }, time);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 3000);

};

export default modals;