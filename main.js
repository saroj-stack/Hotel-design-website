let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-main');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');




window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});



searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});
