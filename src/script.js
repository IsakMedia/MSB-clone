"use strict";
// export * from './script'
const openEl = document.querySelector("#menuOpen");
const closeEl = document.querySelector("#menuClose");
const menuOutEl = document.querySelector("#menuOut");
const memeBtnEl = document.querySelector("#memeBtn");
const memeBoxEl = document.querySelector('#memeBox');
const dismissBtnEl = document.querySelector('#dismissBtn');
// OPEN NAVBAR
openEl.addEventListener('click', () => {
    var _a, _b;
    (_a = document.querySelector("#menuOpen")) === null || _a === void 0 ? void 0 : _a.classList.add("hide");
    (_b = document.querySelector("#menuClose")) === null || _b === void 0 ? void 0 : _b.classList.remove("hide");
    menuOutEl === null || menuOutEl === void 0 ? void 0 : menuOutEl.classList.remove("hide");
});
// CLOSE NAVBAR
closeEl.addEventListener('click', () => {
    var _a, _b;
    (_a = document.querySelector("#menuClose")) === null || _a === void 0 ? void 0 : _a.classList.add("hide");
    (_b = document.querySelector("#menuOpen")) === null || _b === void 0 ? void 0 : _b.classList.remove("hide");
    menuOutEl === null || menuOutEl === void 0 ? void 0 : menuOutEl.classList.add("hide");
});
memeBtnEl.addEventListener('click', () => {
    memeBoxEl.classList.remove('hide');
    memeBoxEl.classList.add('show');
});
dismissBtnEl.addEventListener('click', () => {
    memeBoxEl.classList.add('hide');
    memeBoxEl.classList.add('show');
});
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        memeBoxEl.classList.add('show');
    }, 1000);
});
