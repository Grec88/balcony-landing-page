import { checkNumInputs } from './checkNumInputs';

export const changeModalState = (state:any) => {
    const windowForms:NodeListOf<HTMLInputElement> = document.querySelectorAll('.balcon_icons_img');
    const windowWidth:NodeListOf<HTMLInputElement> = document.querySelectorAll('#width');
    const windowLength:NodeListOf<HTMLInputElement> = document.querySelectorAll('#height');
    const windowType:NodeListOf<HTMLInputElement> = document.querySelectorAll("#view_type");
    const windowProfile:NodeListOf<HTMLInputElement> = document.querySelectorAll('.radio');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = (event:string, elems:NodeListOf<HTMLInputElement>, prop:string) => {
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