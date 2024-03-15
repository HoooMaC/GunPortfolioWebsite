import '../styles/modern-normalize.css'

import '../styles/style.css'
import '../styles/components/navbar.css'
import '../styles/components/mobile-nav.css'
import '../styles/components/home.css'
import '../styles/components/about.css'
import '../styles/components/skills.css'

import '../styles/utils.css'



const sections = document.querySelectorAll('section[id]');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

window.onscroll = () => {
    sections.forEach(current => {
        let top = window.scrollY;
        let offset = current.offsetTop;
        let height = current.offsetHeight;
        let id = current.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navbarLinks.forEach(link => {
                link.classList.remove('active-link');
                document.querySelector('.navbar__menu a[href*=' + id +']').classList.add('active-link');
            });
        }
    })
}
import mobileNav from './components/mobile-nav'
mobileNav();