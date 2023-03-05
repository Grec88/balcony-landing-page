export const modals = () => {

    const calcScroll = () => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        return div.offsetWidth - div.clientWidth;

    }

    const toggleModal = (selec, disp, overfl) => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    };
    

    const bindModal = ({triggersSelector, modalSelector, closeSelector, closeClickOverlay = true}) => {
        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector); 
        const close = document.querySelector(closeSelector);
        const windows = document.querySelectorAll(['data-modal']);
        const scroll = calcScroll();

        triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }

                windows.forEach(window => {
                    window.style.display = "none";
                });

                toggleModal(modal, "block", "hidden");
                document.body.style.marginRight = `${scroll}px`;
            });
        });

        close.addEventListener('click', () => {
            windows.forEach(window => {
                window.style.display = "none";
            });
            
            toggleModal(modal, "none", "");
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(window => {
                    window.style.display = "none";
                });
                toggleModal(modal, "none", "");
                document.body.style.marginRight = `0px`;
            }
        });

        addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
                toggleModal(modal, "none", "");
                document.body.style.marginRight = `0px`;
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

    bindModal({
        triggersSelector:'.popup_calc_btn', 
        modalSelector:'.popup_calc', 
        closeSelector:'.popup_calc_close'
    });

    bindModal({
        triggersSelector:'.popup_calc_button', 
        modalSelector:'.popup_calc_profile', 
        closeSelector:'.popup_calc_profile_close',
        closeClickOverlay: false
    });

    
    bindModal({
        triggersSelector:'.popup_calc_profile_button', 
        modalSelector:'.popup_calc_end', 
        closeSelector:'.popup_calc_end_close',
        closeClickOverlay: false
    });

     showModalByTime('.popup', 60000);

};
