$(document).ready(() => {
    const btnMobile = $('#btn_mobile');
    const mobileMenu = $('#mobile_menu');
    const sections = $('section');
    const navItems = $('.nav_item');
    

    btnMobile.on('click', () => {      
        mobileMenu.toggleClass('active');
        btnMobile.find('i').toggleClass('fa-x');
    });

});

AOS.init();