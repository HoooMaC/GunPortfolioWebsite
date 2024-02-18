// Toggle menu icon 
const navbarNav = document.querySelector('.navbar-item');

const menuIcon = document.querySelector('#menu-icon');
menuIcon.onclick = () => {
    navbarNav.classList.toggle('active');
};

document.addEventListener('click', function(e){
    if(!menuIcon.contains(e.target) && !navbarNav.contains(e.target))
    {
        navbarNav.classList.remove('active');
    }
});
