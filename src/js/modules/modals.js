const modals = () => {

    const closeModal = (selec, disp, overfl) => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    }

    const bindModal = (triggersSelector, modalSelector, closeSelector) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector); 
        const close = document.querySelector(closeSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                closeModal(modal, "block", "hidden");
            });
        });

        close.addEventListener('click', () => {
            closeModal(modal, "none", "");
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal, "none", "");
            }
        });

        addEventListener("keydown", (e) => {
            if (e.keyCode === 27) {
                closeModal(modal, "none", "");
            }
        });
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            closeModal(document.querySelector(selector), "block", "hidden");
        }, time);
    }


    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 3000);

};

export default modals;