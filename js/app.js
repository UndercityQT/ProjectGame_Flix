/**
 * Acionamento de dropdown no menu 2
 */
var menuDoc = document.getElementsByClassName('link-nav-arrow')[0];
var listSecond = document.querySelector('.list-nav-second');

var teste = listSecond.classList;

// console.log(teste);

menuDoc.addEventListener('click', function(){

    listSecond.classList.toggle('hide');
    menuDoc.classList.toggle('arrow');
    
});

/**
 * MENU HAMBURGUER
 * Aciomanento menu 1
 */

 var iconMenu = document.querySelector(".icon-menu");
 var content = document.querySelector(".content");
 
 let body = document.querySelector("body");

 iconMenu.addEventListener("click", function(){

    body.classList.toggle("__move");
    
 });


/*
 RECOLHIMENTO DO MENU
 CLICANDO NO CONTENT
*/
