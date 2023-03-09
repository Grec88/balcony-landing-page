/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/modules/changeModalState.ts":
/*!********************************************!*\
  !*** ./src/ts/modules/changeModalState.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeModalState": () => (/* binding */ changeModalState)
/* harmony export */ });
/* harmony import */ var _checkNumInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkNumInputs */ "./src/ts/modules/checkNumInputs.ts");

const changeModalState = (state) => {
    const windowForms = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowLength = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll("#view_type");
    const windowProfile = document.querySelectorAll('.radio');
    (0,_checkNumInputs__WEBPACK_IMPORTED_MODULE_0__.checkNumInputs)('#width');
    (0,_checkNumInputs__WEBPACK_IMPORTED_MODULE_0__.checkNumInputs)('#height');
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


/***/ }),

/***/ "./src/ts/modules/checkNumInputs.ts":
/*!******************************************!*\
  !*** ./src/ts/modules/checkNumInputs.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkNumInputs": () => (/* binding */ checkNumInputs)
/* harmony export */ });
const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(numInput => {
        numInput.addEventListener('input', () => {
            numInput.value = numInput.value.replace(/\D/, '');
        });
    });
};


/***/ }),

/***/ "./src/ts/modules/form.ts":
/*!********************************!*\
  !*** ./src/ts/modules/form.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _checkNumInputs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkNumInputs */ "./src/ts/modules/checkNumInputs.ts");

const form = (state) => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    (0,_checkNumInputs__WEBPACK_IMPORTED_MODULE_0__.checkNumInputs)('input[name="user_phone"]');
    const message = {
        loading: 'Загрузка',
        success: 'Спасибо! Мы скоро свяжимся с вами.',
        failure: 'Что-то пошло не так...'
    };
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        const res = await fetch(url, {
            method: "POST",
            body: data
        });
        return await res.text();
    };
    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = "";
        });
    };
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);
            const formData = new FormData(form);
            if (form.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            console.log(Array.from(formData));
            const url = 'https://randomuser.me/api';
            postData(url, formData)
                .then(res => {
                console.log({ res });
                statusMessage.textContent = message.success;
            })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                clearInputs();
                setTimeout(() => {
                    statusMessage.remove();
                }, 5000);
            });
        });
    });
};


/***/ }),

/***/ "./src/ts/modules/images.ts":
/*!**********************************!*\
  !*** ./src/ts/modules/images.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "images": () => (/* binding */ images)
/* harmony export */ });
const images = () => {
    const imgPopup = document.createElement('div');
    const workSection = document.querySelector('.works');
    const bigImage = document.createElement('img');
    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';
    imgPopup.appendChild(bigImage);
    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }
        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};


/***/ }),

/***/ "./src/ts/modules/index.ts":
/*!*********************************!*\
  !*** ./src/ts/modules/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeModalState": () => (/* reexport safe */ _changeModalState__WEBPACK_IMPORTED_MODULE_3__.changeModalState),
/* harmony export */   "form": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.form),
/* harmony export */   "images": () => (/* reexport safe */ _images__WEBPACK_IMPORTED_MODULE_5__.images),
/* harmony export */   "modals": () => (/* reexport safe */ _modals__WEBPACK_IMPORTED_MODULE_0__.modals),
/* harmony export */   "tabs": () => (/* reexport safe */ _tabs__WEBPACK_IMPORTED_MODULE_1__.tabs),
/* harmony export */   "timer": () => (/* reexport safe */ _timer__WEBPACK_IMPORTED_MODULE_4__.timer)
/* harmony export */ });
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals */ "./src/ts/modules/modals.ts");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ "./src/ts/modules/tabs.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/ts/modules/form.ts");
/* harmony import */ var _changeModalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changeModalState */ "./src/ts/modules/changeModalState.ts");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ "./src/ts/modules/timer.ts");
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images */ "./src/ts/modules/images.ts");








/***/ }),

/***/ "./src/ts/modules/modals.ts":
/*!**********************************!*\
  !*** ./src/ts/modules/modals.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modals": () => (/* binding */ modals)
/* harmony export */ });
const modals = () => {
    const calcScroll = () => {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        return div.offsetWidth - div.clientWidth;
    };
    const toggleModal = (selec, disp, overfl) => {
        selec.style.display = disp;
        document.body.style.overflow = overfl;
    };
    const bindModal = (modalWin) => {
        const triggers = document.querySelectorAll(modalWin.triggersSelector);
        const modal = document.querySelector(modalWin.modalSelector);
        const close = document.querySelector(modalWin.closeSelector);
        const windows = document.querySelectorAll("[data-modal]");
        const scroll = calcScroll();
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
        close.addEventListener('click', () => {
            windows.forEach(window => {
                window.style.display = "none";
            });
            toggleModal(modal, "none", "");
            document.body.style.marginRight = `0px`;
        });
        modal.addEventListener('click', (e) => {
            if (e.target === modal && modalWin.closeClickOverlay) {
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
    };
    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            toggleModal(document.querySelector(selector), "block", "hidden");
        }, time);
    };
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


/***/ }),

/***/ "./src/ts/modules/tabs.ts":
/*!********************************!*\
  !*** ./src/ts/modules/tabs.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": () => (/* binding */ tabs)
/* harmony export */ });
const tabs = (tabsObj) => {
    const header = document.querySelector(tabsObj.headerSelector);
    const tabs = document.querySelectorAll(tabsObj.tabSelector);
    const contents = document.querySelectorAll(tabsObj.contentSelector);
    const hideTabContent = () => {
        contents.forEach(content => {
            content.style.display = 'none';
        });
        tabs.forEach(tab => {
            tab.classList.remove(tabsObj.activeClass);
        });
    };
    const showTabContent = (i = 0) => {
        contents[i].style.display = tabsObj.display;
        tabs[i].classList.add(tabsObj.activeClass);
    };
    hideTabContent();
    showTabContent();
    const toggleTab = (target) => {
        if (target &&
            (target.classList.contains(tabsObj.tabSelector.replace(/\./, ""))
                || target.parentNode.classList.contains(tabsObj.tabSelector.replace(/\./, "")))) {
            tabs.forEach((tab, i) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(i);
                }
                ;
            });
        }
    };
    header.addEventListener('click', (e) => {
        const target = e.target;
        toggleTab(target);
    });
    header.addEventListener('keydown', (e) => {
        const target = e.target;
        if (e.code === "Enter") {
            toggleTab(target);
        }
    });
};


/***/ }),

/***/ "./src/ts/modules/timer.ts":
/*!*********************************!*\
  !*** ./src/ts/modules/timer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
const timer = (id, deadline) => {
    const addZero = (num) => num <= 9 ? `0${num}` : num;
    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse((new Date()).toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(((total / 1000) / 60) % 60);
        const hours = Math.floor(((total / 1000) / 3600) % 24);
        const days = Math.floor((total / 1000) / 86400);
        return { total, days, hours, minutes, seconds };
    };
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector);
        const days = timer.querySelector("#days");
        const hours = timer.querySelector("#hours");
        const minutes = timer.querySelector("#minutes");
        const seconds = timer.querySelector("#seconds");
        const updateClock = () => {
            const t = getTimeRemaining(endtime);
            days.textContent = addZero(t.days).toString();
            hours.textContent = addZero(t.hours).toString();
            minutes.textContent = addZero(t.minutes).toString();
            seconds.textContent = addZero(t.seconds).toString();
            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                clearInterval(timeInterval);
            }
            ;
        };
        const timeInterval = setInterval(updateClock, 1000);
        updateClock();
    };
    setClock(id, deadline);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/ts/modules/index.ts");
// import './slider';

window.addEventListener('DOMContentLoaded', () => {
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.modals)();
    const modalState = {};
    const deadline = '2023-05-05';
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.changeModalState)(modalState);
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.tabs)({
        headerSelector: '.glazing_slider',
        tabSelector: '.glazing_block',
        contentSelector: '.glazing_content',
        activeClass: 'active',
        display: "block"
    });
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.tabs)({
        headerSelector: '.decoration_slider',
        tabSelector: '.no_click',
        contentSelector: '.decoration_content > div > div',
        activeClass: 'after_click',
        display: "block"
    });
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.tabs)({
        headerSelector: '.balcon_icons',
        tabSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeClass: 'do_image_more',
        display: 'inline-block'
    });
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.form)(modalState);
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.timer)('.container1', deadline);
    (0,_modules__WEBPACK_IMPORTED_MODULE_0__.images)();
});

})();

/******/ })()
;
//# sourceMappingURL=script.js.map