import { checkNumInputs } from './checkNumInputs';

export const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowLength = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll('.radio');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = (event, elems, prop) => {
        elems.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                if (elem.nodeName === 'SPAN') {
                    state[prop] = i;
                }
                else {
                    state[prop] = elem.value;
                }
                console.log(state);
            });
        });
    };

    bindActionToElems('click', windowForms, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowLength, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};