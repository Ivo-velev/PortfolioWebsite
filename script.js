const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const button1 = document.querySelector('.btn-group .btn1');
const button2 = document.querySelector('.btn-group .btn2');
const button3 = document.querySelector('.btn-group .btn3');
const button4 = document.querySelector('.header .btn4');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

button1.onclick = () => window.location.href = "https://github.com/Ivo-velev/Livechat";
button2.onclick = () => window.location.href = "https://github.com/Ivo-velev/Email";
button3.onclick = () => window.location.href = "https://github.com/Ivo-velev/Wiki";
button4.onclick = () => window.location.href = "https://github.com/Ivo-velev";
