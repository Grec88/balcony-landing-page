const modals = () => {

    const toggleModal = (selec, disp, overfl) => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    };
    

    const bindModal = (objectModal) => {
        const triggers = document.querySelectorAll(objectModal.triggersSelector);
        const modal = document.querySelector(objectModal.modalSelector); 
        const close = document.querySelector(objectModal.closeSelector);

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


    bindModal({
        triggersSelector:'.popup_engineer_btn',
        modalSelector:'.popup_engineer', 
        closeSelector:'.popup_engineer .popup_close'
    });
    bindModal({
        triggersSelector:'.phone_link', 
        modalSelector:'.popup', 
        closeSelector:'.popup .popup_close'
    });
    // showModalByTime('.popup', 60000);

};

export {modals};