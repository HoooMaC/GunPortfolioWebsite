const mobileNav = () => {
 const menuBar = document.querySelector('.menu-bar');
 const mobileNavbarObj = document.querySelector('.mobile-nav');
 const mobileNavbarLinks = document.querySelectorAll('.mobile-nav__link');
 var bodyOverflow = document.body.style.overflow;

 menuBar.addEventListener('click', () =>{
    mobileNavbarObj.classList.toggle('active');
    if(mobileNavbarObj.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    }
    else
    {
        document.body.style.overflow = 'auto';
    }
 });
 
 mobileNavbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileNavbarObj.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
 });
};

export default mobileNav;