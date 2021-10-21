const menu_btn=document.querySelector('.hamburger');
const mobile_menu=document.querySelector('.mobile__nav');
const logo_color=document.querySelector('#logo');


console.log(mobile_menu);

menu_btn.addEventListener('click' ,function(){
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});
