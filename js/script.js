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

// about section
var tabLinks = document.getElementsByClassName("tab-link");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabName, event) {
    // Prevent default behavior of the event, if necessary
    event.preventDefault();
    
    // Assuming tabLinks and tabContents are properly defined elsewhere
    let tabLinks = document.querySelectorAll('.tab-link');
    let tabContents = document.querySelectorAll('.tab-contents');

    // Remove 'active-link' class from all tab links
    tabLinks.forEach(tabLink => tabLink.classList.remove("active-link"));
    
    // Remove 'active-tab' class from all tab contents
    tabContents.forEach(tabContent => tabContent.classList.remove("active-tab"));
    
    // Add 'active-link' class to the clicked tab link
    event.currentTarget.classList.add('active-link');
    
    // Add 'active-tab' class to the corresponding tab content
    document.getElementById(tabName).classList.add('active-tab');
}
