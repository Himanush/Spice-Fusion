// JavaScript's strict mode enforces stricter parsing and error handling on the code at runtime.
// It also helps you write cleaner code and catch errors and bugs that might otherwise go unnoticed.
'use strict';

// PRELOAD
// Loading will end after the document is loaded .

const preloader = document.querySelector("[data-preaload]");
window.addEventListener("load",function(){
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

