/* jshint esversion: 6 */
// "use strict"

let openSettings = document.getElementsByClassName('profile__settings-open'),
    btnOpenSettings = document.getElementsByClassName('profile__settings'),
    checkboxToggle = document.getElementsByClassName('checkbox__toggle'),
    public = document.getElementById('public'),
    private = document.getElementById('private');

    btnOpenSettings[0].addEventListener('click', () => {
        openSettings[0].classList.toggle('profile__settings-open_open');
        
    });
    public.addEventListener('click', () => {
        checkboxToggle[0].checked = true;
    });
    private.addEventListener('click', () => {
        checkboxToggle[0].checked = false;
    })
  