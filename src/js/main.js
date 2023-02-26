import './slider';
import { modals, tabs, form } from "./modules";


window.addEventListener('DOMContentLoaded' , () => {
    modals();
    tabs({
        headerSelector:'.glazing_slider',
        tabSelector:'.glazing_block',
        contentSelector: '.glazing_content',
        activeClass:'active'
    });
    tabs({
        headerSelector:'.decoration_slider',
        tabSelector:'.no_click',
        contentSelector:'.decoration_content > div > div',
        activeClass:'after_click'
    });
    form();
})
