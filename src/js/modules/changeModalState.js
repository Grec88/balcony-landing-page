import {checkNumInputs} from './checkNumInputs';

export const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowLength = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    const bindActionToElems = (event, elems, prop) => {
        elems.forEach((elem, i) => {
            elem.addEventListener(event, () => {
                switch(elem.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        console.log('span');
                        break;
                    case 'INPUT' :
                        if(elem.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'cold' : state[prop] = 'warm';
                            elems.forEach((box, j) => {
                                box.checked = false;
                                if(i == j){
                                    box.checked = true;
                                }
                            });
                        }    
                        else{
                            state[prop] = elem.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = elem.value;
                        break;   
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