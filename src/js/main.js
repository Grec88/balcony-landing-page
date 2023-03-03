import './slider';
import { modals, tabs, form, changeModalState, timer, images} from "./modules";


window.addEventListener('DOMContentLoaded' , () => {
    modals();

    const modalState = {};
    const deadline = '2023-05-05';
  
    changeModalState(modalState);
    tabs({
        headerSelector:'.glazing_slider',
        tabSelector:'.glazing_block',
        contentSelector: '.glazing_content',
        activeClass:'active',
    });

    tabs({
        headerSelector:'.decoration_slider',
        tabSelector:'.no_click',
        contentSelector:'.decoration_content > div > div',
        activeClass:'after_click'
    });

    tabs({
        headerSelector:'.balcon_icons',
        tabSelector:'.balcon_icons_img',
        contentSelector:'.big_img > img',
        activeClass:'do_image_more',
        display: 'inline-block'
    });
    form(modalState);

    timer('.container1', deadline);

    images();
    
})
