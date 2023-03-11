export const modals = (): void => {

    const calcScroll = (): number => {
        const div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        return div.offsetWidth - div.clientWidth;

    }

    const toggleModal = (selec: HTMLElement, disp: string, overfl: string): void => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    };

    interface IBindModal {
        triggersSelector: string,
        modalSelector: string,
        closeSelector: string,
        closeClickOverlay?: boolean
      }


    const bindModal = (modalWin: IBindModal): void => {
        const triggers: NodeListOf<HTMLElement> = document.querySelectorAll(modalWin.triggersSelector);
        const modal: HTMLElement = document.querySelector(modalWin.modalSelector);
        const close: HTMLElement = document.querySelector(modalWin.closeSelector);
        const windows = <NodeListOf<HTMLElement>>document.querySelectorAll("[data-modal]");
        const scroll: number = calcScroll();

        modalWin.closeClickOverlay = true;

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

        close.addEventListener('click', (): void => {
            windows.forEach(window => {
                window.style.display = "none";
            });

            toggleModal(modal, "none", "");
            document.body.style.marginRight = `0px`;
        });

        modal.addEventListener('click', (e): void => {
            if (e.target === modal && modalWin.closeClickOverlay) {
                windows.forEach(window => {
                    window.style.display = "none";
                });
                toggleModal(modal, "none", "");
                document.body.style.marginRight = `0px`;
            }
        });

        addEventListener("keydown", (e): void => {
            if (e.code === "Escape") {
                toggleModal(modal, "none", "");
                document.body.style.marginRight = `0px`;
            }
        });
    }

    const showModalByTime = (selector: string, time: number): void => {
        setTimeout(() => {
            toggleModal(document.querySelector(selector), "block", "hidden");
        }, time);
    }


    bindModal({
        triggersSelector: '.popup_engineer_btn',
        modalSelector: '.popup_engineer',
        closeSelector: '.popup_engineer .popup_close'
    });

    bindModal({
        triggersSelector: '.phone_link',
        modalSelector: '.popup',
        closeSelector: '.popup .popup_close'
    });

    bindModal({
        triggersSelector: '.popup_calc_btn',
        modalSelector: '.popup_calc',
        closeSelector: '.popup_calc_close'
    });

    bindModal({
        triggersSelector: '.popup_calc_button',
        modalSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close',
        closeClickOverlay: false
    });


    bindModal({
        triggersSelector: '.popup_calc_profile_button',
        modalSelector: '.popup_calc_end',
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false
    });

    showModalByTime('.popup', 60000);

};
